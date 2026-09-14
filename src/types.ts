export type Language = 'en' | 'ar';

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  longDescription: string;
  longDescriptionAr: string;
  heroImage: string;
  gallery: string[];
  materials: string[];
  materialsAr: string[];
  applications: string[];
  applicationsAr: string[];
  features: string[];
  featuresAr: string[];
  faqs?: { question: string; questionAr: string; answer: string; answerAr: string }[];
  published?: boolean;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  category: string;
  categoryAr: string;
  location: string;
  locationAr: string;
  year: string;
  client: string;
  services: string[];
  materials: string[];
  materialsAr?: string[];
  challenge: string;
  challengeAr: string;
  solution: string;
  solutionAr: string;
  designDescription?: string;
  designDescriptionAr?: string;
  manufacturingDescription?: string;
  manufacturingDescriptionAr?: string;
  installationDescription?: string;
  installationDescriptionAr?: string;
  featuredImage: string;
  cutoutImage?: string;
  signType?: string;
  signTypeAr?: string;
  illuminationColor?: string;
  letterDepth?: string;
  hasCutoutMode?: boolean;
  gallery: string[];
  featured: boolean;
  published: boolean;
  isDemo?: boolean;
}

export type Project = ProjectItem;

export interface IndustryItem {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  heroImage: string;
  challenges: string[];
  challengesAr: string[];
  solutions: string[];
  solutionsAr: string[];
  relatedServices: string[];
}

export interface MaterialItem {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  finish: string;
  finishAr: string;
  applications: string[];
  applicationsAr: string[];
  image: string;
}

export interface QuoteRequest {
  id: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  projectType: string;
  environment: 'indoor' | 'outdoor' | 'both';
  dimensions?: string;
  quantity?: string;
  material?: string;
  lighting?: string;
  timeline?: string;
  description: string;
  attachments?: { name: string; size: string; type: string; url?: string }[];
  status: 'NEW' | 'REVIEWING' | 'CONTACTED' | 'QUOTED' | 'COMPLETED' | 'ARCHIVED';
  internalNotes?: string;
  estimatedBudget?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  company?: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
  status: 'NEW' | 'REPLIED' | 'ARCHIVED';
}

export interface SiteSettings {
  companyName: string;
  companyNameAr: string;
  tagline: string;
  taglineAr: string;
  phone: string;
  whatsapp: string;
  emailPrimary: string;
  emailPR: string;
  email?: string;
  address: string;
  addressAr: string;
  workingHours: string;
  workingHoursAr: string;
  stats: {
    projectsCount: string;
    satisfactionRate: string;
    coverageCities: string;
    factoryAreaM2: string;
  };
  brochureUrl?: string;
  fenceSolutionsUrl?: string;
  isoCertUrl?: string;
  logoUrl?: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  nameAr?: string;
  logoUrl: string;
}
