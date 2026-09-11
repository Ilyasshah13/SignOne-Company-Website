import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { initialServices, initialProjects, initialIndustries, initialMaterials, initialSiteSettings } from './src/data/initialData';
import { QuoteRequest, ContactMessage } from './src/types';

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

// Database initialization
const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

interface DatabaseSchema {
  settings: typeof initialSiteSettings;
  services: typeof initialServices;
  projects: typeof initialProjects;
  industries: typeof initialIndustries;
  materials: typeof initialMaterials;
  quotes: QuoteRequest[];
  contacts: ContactMessage[];
}

function loadDB(): DatabaseSchema {
  try {
    if (fs.existsSync(DB_FILE)) {
      const data = fs.readFileSync(DB_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading db.json, re-initializing...', err);
  }

  // Initial seed
  const initialData: DatabaseSchema = {
    settings: initialSiteSettings,
    services: initialServices,
    projects: initialProjects,
    industries: initialIndustries,
    materials: initialMaterials,
    quotes: [
      {
        id: "q-demo-1",
        name: "Eng. Tariq Al-Ghamdi",
        company: "Riyadh Horizon Retail Corp",
        phone: "+966 55 123 4567",
        email: "tariq@horizonretail.sa",
        city: "Riyadh",
        service: "LED Channel Letters",
        projectType: "Flagship Retail Store",
        environment: "both",
        dimensions: "12m x 2.4m facade",
        quantity: "3 Sets",
        material: "Formed Aluminum + Acrylic",
        lighting: "Front-lit 4000K Neutral White",
        timeline: "4 Weeks",
        description: "Require 3D channel letters for 3 new branch openings in Riyadh plazas with installation.",
        status: "NEW",
        internalNotes: "Requested call back regarding site survey on Olaya St.",
        createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
        updatedAt: new Date(Date.now() - 3600000 * 18).toISOString()
      },
      {
        id: "q-demo-2",
        name: "Sarah Mansour",
        company: "Red Sea Hospitality Group",
        phone: "+966 50 987 6543",
        email: "sarah.m@redseahospitality.com",
        city: "Jeddah",
        service: "Pylon & Totem Signs",
        projectType: "Boutique Resort Entrance",
        environment: "outdoor",
        dimensions: "9 meters height",
        quantity: "1 Monumental Pylon",
        material: "Grade 316 Stainless Steel",
        lighting: "Indirect Halo Warm LED 2700K",
        timeline: "8 Weeks",
        description: "Monumental totem at resort entrance facing coastal highway, needs saline proofing.",
        status: "REVIEWING",
        internalNotes: "Passed to structural engineering team for marine wind load calculation.",
        createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        updatedAt: new Date(Date.now() - 86400000).toISOString()
      }
    ],
    contacts: [
      {
        id: "c-demo-1",
        name: "Abdullah Al-Shehri",
        company: "Modern Engineering Consultants",
        phone: "+966 54 321 0000",
        email: "a.shehri@mec-sa.com",
        subject: "Specification Request for King Salman Park Project",
        message: "We are preparing tender documents for an upcoming commercial center and wish to specify Sign One A2 aluminum cladding and wayfinding.",
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        read: false,
        status: "NEW"
      }
    ]
  };

  saveDB(initialData);
  return initialData;
}

function saveDB(data: DatabaseSchema) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing db.json', err);
  }
}

// In-memory token cache for simple, reliable admin auth
const ADMIN_TOKEN = "signone_admin_secret_token_2026";
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "SignOne2026!"
};

function requireAdmin(req: Request, res: Response, next: () => void) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader === `Bearer ${ADMIN_TOKEN}`) {
    return next();
  }
  return res.status(401).json({ error: "Unauthorized access" });
}

// ================= API ROUTES =================

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Settings
app.get('/api/settings', (req, res) => {
  const db = loadDB();
  res.json(db.settings);
});

app.put('/api/settings', requireAdmin, (req, res) => {
  const db = loadDB();
  db.settings = { ...db.settings, ...req.body };
  saveDB(db);
  res.json(db.settings);
});

// Services
app.get('/api/services', (req, res) => {
  const db = loadDB();
  res.json(db.services);
});

app.get('/api/services/:slug', (req, res) => {
  const db = loadDB();
  const service = db.services.find(s => s.slug === req.params.slug);
  if (!service) {
    return res.status(404).json({ error: "Service not found" });
  }
  res.json(service);
});

app.post('/api/services', requireAdmin, (req, res) => {
  const db = loadDB();
  const newService = {
    ...req.body,
    id: `srv-${Date.now()}`
  };
  db.services.push(newService);
  saveDB(db);
  res.status(201).json(newService);
});

app.put('/api/services/:id', requireAdmin, (req, res) => {
  const db = loadDB();
  const index = db.services.findIndex(s => s.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Service not found" });
  }
  db.services[index] = { ...db.services[index], ...req.body };
  saveDB(db);
  res.json(db.services[index]);
});

app.delete('/api/services/:id', requireAdmin, (req, res) => {
  const db = loadDB();
  db.services = db.services.filter(s => s.id !== req.params.id);
  saveDB(db);
  res.json({ success: true });
});

// Projects
app.get('/api/projects', (req, res) => {
  const db = loadDB();
  const { category, search } = req.query;
  let filtered = [...db.projects];
  if (category && category !== 'ALL') {
    filtered = filtered.filter(p => p.category.toLowerCase() === (category as string).toLowerCase());
  }
  if (search) {
    const q = (search as string).toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.titleAr.includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.client.toLowerCase().includes(q)
    );
  }
  res.json(filtered);
});

app.get('/api/projects/:slug', (req, res) => {
  const db = loadDB();
  const project = db.projects.find(p => p.slug === req.params.slug);
  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }
  res.json(project);
});

app.post('/api/projects', requireAdmin, (req, res) => {
  const db = loadDB();
  const newProject = {
    ...req.body,
    id: `proj-${Date.now()}`
  };
  db.projects.push(newProject);
  saveDB(db);
  res.status(201).json(newProject);
});

app.put('/api/projects/:id', requireAdmin, (req, res) => {
  const db = loadDB();
  const index = db.projects.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Project not found" });
  }
  db.projects[index] = { ...db.projects[index], ...req.body };
  saveDB(db);
  res.json(db.projects[index]);
});

app.delete('/api/projects/:id', requireAdmin, (req, res) => {
  const db = loadDB();
  db.projects = db.projects.filter(p => p.id !== req.params.id);
  saveDB(db);
  res.json({ success: true });
});

// Industries
app.get('/api/industries', (req, res) => {
  const db = loadDB();
  res.json(db.industries);
});

// Materials
app.get('/api/materials', (req, res) => {
  const db = loadDB();
  res.json(db.materials);
});

// Quote Requests
app.get('/api/quotes', requireAdmin, (req, res) => {
  const db = loadDB();
  res.json(db.quotes);
});

app.post('/api/quotes', (req, res) => {
  const { name, phone, email, service, city, description } = req.body;
  if (!name || !phone || !email) {
    return res.status(400).json({ error: "Name, phone, and email are required." });
  }

  const db = loadDB();
  const newQuote: QuoteRequest = {
    id: `q-${Date.now()}`,
    name,
    company: req.body.company || '',
    phone,
    email,
    city: city || 'Riyadh',
    service: service || 'Signage',
    projectType: req.body.projectType || 'Commercial',
    environment: req.body.environment || 'outdoor',
    dimensions: req.body.dimensions || '',
    quantity: req.body.quantity || '1',
    material: req.body.material || '',
    lighting: req.body.lighting || '',
    timeline: req.body.timeline || '',
    description: description || '',
    attachments: req.body.attachments || [],
    status: 'NEW',
    internalNotes: '',
    estimatedBudget: req.body.estimatedBudget || '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  db.quotes.unshift(newQuote);
  saveDB(db);
  res.status(201).json({ success: true, quoteId: newQuote.id });
});

app.patch('/api/quotes/:id', requireAdmin, (req, res) => {
  const db = loadDB();
  const quote = db.quotes.find(q => q.id === req.params.id);
  if (!quote) {
    return res.status(404).json({ error: "Quote not found" });
  }
  if (req.body.status) quote.status = req.body.status;
  if (req.body.internalNotes !== undefined) quote.internalNotes = req.body.internalNotes;
  quote.updatedAt = new Date().toISOString();
  saveDB(db);
  res.json(quote);
});

app.delete('/api/quotes/:id', requireAdmin, (req, res) => {
  const db = loadDB();
  db.quotes = db.quotes.filter(q => q.id !== req.params.id);
  saveDB(db);
  res.json({ success: true });
});

// Contact Messages
app.get('/api/contacts', requireAdmin, (req, res) => {
  const db = loadDB();
  res.json(db.contacts);
});

app.post('/api/contacts', (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const db = loadDB();
  const newContact: ContactMessage = {
    id: `c-${Date.now()}`,
    name,
    company: req.body.company || '',
    email,
    phone: phone || '',
    subject: subject || 'General Inquiry',
    message,
    createdAt: new Date().toISOString(),
    read: false,
    status: 'NEW'
  };

  db.contacts.unshift(newContact);
  saveDB(db);
  res.status(201).json({ success: true, contactId: newContact.id });
});

app.patch('/api/contacts/:id', requireAdmin, (req, res) => {
  const db = loadDB();
  const contact = db.contacts.find(c => c.id === req.params.id);
  if (!contact) {
    return res.status(404).json({ error: "Contact not found" });
  }
  if (req.body.read !== undefined) contact.read = req.body.read;
  if (req.body.status) contact.status = req.body.status;
  saveDB(db);
  res.json(contact);
});

app.delete('/api/contacts/:id', requireAdmin, (req, res) => {
  const db = loadDB();
  db.contacts = db.contacts.filter(c => c.id !== req.params.id);
  saveDB(db);
  res.json({ success: true });
});

// Admin Auth
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    return res.json({
      success: true,
      token: ADMIN_TOKEN,
      user: { username: "admin", role: "SUPER_ADMIN" }
    });
  }
  return res.status(401).json({ error: "Invalid credentials. Default is admin / SignOne2026!" });
});

app.get('/api/admin/verify', (req, res) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader === `Bearer ${ADMIN_TOKEN}`) {
    return res.json({ valid: true, role: "SUPER_ADMIN" });
  }
  return res.status(401).json({ valid: false });
});

// Admin Dashboard Overview Stats
app.get('/api/stats', requireAdmin, (req, res) => {
  const db = loadDB();
  const newQuotes = db.quotes.filter(q => q.status === 'NEW').length;
  const pendingQuotes = db.quotes.filter(q => q.status === 'REVIEWING').length;
  const totalProjects = db.projects.length;
  const totalServices = db.services.length;
  const unreadMessages = db.contacts.filter(c => !c.read).length;

  res.json({
    newQuotes,
    pendingQuotes,
    totalQuotes: db.quotes.length,
    totalProjects,
    totalServices,
    unreadMessages,
    totalContacts: db.contacts.length
  });
});

// ================= VITE MIDDLEWARE / STATIC SERVING =================
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`SIGN ONE corporate server running on http://localhost:${PORT}`);
  });
}

startServer();
