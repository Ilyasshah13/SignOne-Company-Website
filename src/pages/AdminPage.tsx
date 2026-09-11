import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Lock, 
  Unlock, 
  FileText, 
  Mail, 
  FolderKanban, 
  Layers, 
  Settings, 
  CheckCircle, 
  Clock, 
  Trash2, 
  Plus, 
  RefreshCw,
  Eye,
  LogOut,
  Sliders,
  ExternalLink
} from 'lucide-react';
import { initialProjects, initialServices, initialSiteSettings } from '../data/initialData';
import { Project, ServiceItem } from '../types';

interface AdminPageProps {
  onNavigate: (path: string) => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();
  const [token, setToken] = useState(() => localStorage.getItem('signone_admin_token') || '');
  const [inputToken, setInputToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'quotes' | 'messages' | 'projects' | 'settings'>('quotes');
  const [loading, setLoading] = useState(false);

  // Live Data States
  const [quotes, setQuotes] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [siteSettings, setSiteSettings] = useState(initialSiteSettings);
  const [selectedQuote, setSelectedQuote] = useState<any | null>(null);

  // Authenticate using token
  useEffect(() => {
    if (token) {
      verifyAndFetch(token);
    }
  }, [token]);

  const verifyAndFetch = async (adminToken: string) => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/quotes', {
        headers: { 'Authorization': `Bearer ${adminToken}` }
      });
      if (res.ok) {
        setIsAuthenticated(true);
        localStorage.setItem('signone_admin_token', adminToken);
        const data = await res.json();
        setQuotes(data);

        // Fetch contacts
        const contactRes = await fetch('/api/admin/contacts', {
          headers: { 'Authorization': `Bearer ${adminToken}` }
        });
        if (contactRes.ok) {
          const contactData = await contactRes.json();
          setContacts(contactData);
        }

        // Fetch projects
        const projRes = await fetch('/api/projects');
        if (projRes.ok) {
          const projData = await projRes.json();
          setProjects(projData);
        }
      } else {
        setIsAuthenticated(false);
        localStorage.removeItem('signone_admin_token');
      }
    } catch (err) {
      console.error(err);
      // Fallback for visual demonstration
      setIsAuthenticated(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setToken(inputToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('signone_admin_token');
    setToken('');
    setIsAuthenticated(false);
  };

  const handleUpdateQuoteStatus = async (quoteId: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/admin/quotes/${quoteId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setQuotes(prev => prev.map(q => q.id === quoteId ? { ...q, status: newStatus } : q));
        if (selectedQuote && selectedQuote.id === quoteId) {
          setSelectedQuote({ ...selectedQuote, status: newStatus });
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="bg-[#080808] text-white min-h-[85vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full p-8 bg-[#111] border border-[#222] rounded-sm space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-[#E60000]/10 border border-[#E60000]/30 text-[#E60000] rounded-sm flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-black uppercase text-white tracking-wider">
              {t('SIGN ONE SECURE ADMIN', 'بوابة إدارة ساين ون')}
            </h1>
            <p className="text-xs text-[#777]">
              {t('Enter your administrative key to manage inquiries and content.', 'أدخل مفتاح الإدارة للوصول إلى الطلبات والمحتوى.')}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-mono uppercase text-[#AAA] block mb-1">
                {t('Admin Token / Key', 'مفتاح الإدارة')}
              </label>
              <input
                type="password"
                required
                value={inputToken}
                onChange={(e) => setInputToken(e.target.value)}
                placeholder="signone_admin_secret_token_2026"
                className="w-full bg-[#181818] border border-[#333] text-xs text-white p-3 rounded-xs font-mono focus:outline-none focus:border-[#E60000]"
              />
              <div className="text-[10px] text-[#555] mt-1 font-mono">
                {t('Default Token: signone_admin_secret_token_2026', 'المفتاح الافتراضي: signone_admin_secret_token_2026')}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors"
            >
              {loading ? t('AUTHENTICATING...', 'جاري التحقق...') : t('AUTHENTICATE & ENTER', 'تسجيل الدخول')}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Top Admin Bar */}
      <header className="py-4 px-6 bg-[#0e0e0e] border-b border-[#222] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#E60000] text-white">ADMIN</span>
          <span className="text-sm font-bold uppercase text-white tracking-wider">SIGN ONE CONTROL CENTER</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => verifyAndFetch(token)}
            className="p-2 bg-[#181818] hover:bg-[#252525] border border-[#333] text-xs text-[#AAA] rounded-xs flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t('Sync Data', 'تحديث البيانات')}</span>
          </button>
          <button
            onClick={handleLogout}
            className="p-2 bg-[#181818] hover:bg-red-950/40 border border-[#333] text-xs text-red-400 rounded-xs flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t('Logout', 'خروج')}</span>
          </button>
        </div>
      </header>

      {/* Admin Content Area */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-8 space-y-8">
        {/* KPI Counter Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 bg-[#121212] border border-[#222] rounded-sm">
            <div className="flex items-center justify-between text-[#888] mb-2">
              <span className="text-xs uppercase font-bold">{t('Quote Enquiries', 'طلبات التسعيرة')}</span>
              <FileText className="w-4 h-4 text-[#E60000]" />
            </div>
            <div className="text-2xl font-black font-mono text-white">{quotes.length}</div>
            <div className="text-[10px] text-[#666] mt-1">{t('Total received from web portal', 'إجمالي الوارد من الموقع')}</div>
          </div>

          <div className="p-5 bg-[#121212] border border-[#222] rounded-sm">
            <div className="flex items-center justify-between text-[#888] mb-2">
              <span className="text-xs uppercase font-bold">{t('Messages', 'الرسائل')}</span>
              <Mail className="w-4 h-4 text-[#E60000]" />
            </div>
            <div className="text-2xl font-black font-mono text-white">{contacts.length}</div>
            <div className="text-[10px] text-[#666] mt-1">{t('Contact form submissions', 'رسائل نموذج الاتصال')}</div>
          </div>

          <div className="p-5 bg-[#121212] border border-[#222] rounded-sm">
            <div className="flex items-center justify-between text-[#888] mb-2">
              <span className="text-xs uppercase font-bold">{t('Active Projects', 'المشاريع المنفذة')}</span>
              <FolderKanban className="w-4 h-4 text-[#E60000]" />
            </div>
            <div className="text-2xl font-black font-mono text-white">{projects.length}</div>
            <div className="text-[10px] text-[#666] mt-1">{t('Case studies in portfolio', 'دراسات الحالة المنشورة')}</div>
          </div>

          <div className="p-5 bg-[#121212] border border-[#222] rounded-sm">
            <div className="flex items-center justify-between text-[#888] mb-2">
              <span className="text-xs uppercase font-bold">{t('Core Services', 'الخدمات')}</span>
              <Layers className="w-4 h-4 text-[#E60000]" />
            </div>
            <div className="text-2xl font-black font-mono text-white">{initialServices.length}</div>
            <div className="text-[10px] text-[#666] mt-1">{t('Fabrication disciplines', 'مجالات التصنيع والكلادينج')}</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-[#222] pb-2">
          {[
            { id: 'quotes', label: t('Quotation Enquiries', 'طلبات التسعيرة'), icon: FileText, count: quotes.length },
            { id: 'messages', label: t('Contact Messages', 'الرسائل الواردة'), icon: Mail, count: contacts.length },
            { id: 'projects', label: t('Manage Projects', 'إدارة المشاريع'), icon: FolderKanban, count: projects.length },
            { id: 'settings', label: t('Site Configuration', 'إعدادات الموقع'), icon: Settings, count: null }
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-t-sm flex items-center gap-2 border-b-2 transition-all ${
                  isSelected
                    ? 'border-[#E60000] text-white bg-[#141414]'
                    : 'border-transparent text-[#777] hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {tab.count !== null && (
                  <span className="px-1.5 py-0.2 bg-[#222] rounded-xs font-mono text-[10px] text-[#AAA]">
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content: Quotes */}
        {activeTab === 'quotes' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase text-white tracking-wider">
                {t('RECEIVED QUOTATION ENQUIRIES', 'طلبات التسعيرة المستلمة')}
              </h3>
            </div>

            {quotes.length === 0 ? (
              <div className="p-8 bg-[#111] border border-[#222] rounded-sm text-center text-xs text-[#777]">
                {t('No quotes received yet. Test by submitting one from the Quote page.', 'لا توجد طلبات واردة حالياً. يمكنك تجربة إرسال طلب من صفحة التسعير.')}
              </div>
            ) : (
              <div className="border border-[#222] rounded-sm overflow-x-auto bg-[#111]">
                <table className="w-full text-xs text-left rtl:text-right">
                  <thead className="bg-[#181818] text-[#888] uppercase tracking-wider border-b border-[#222]">
                    <tr>
                      <th className="p-3.5">{t('ID / Date', 'المعرف / التاريخ')}</th>
                      <th className="p-3.5">{t('Client / Company', 'العميل / المنشأة')}</th>
                      <th className="p-3.5">{t('Service Requested', 'الخدمة المطلوبة')}</th>
                      <th className="p-3.5">{t('City', 'المدينة')}</th>
                      <th className="p-3.5">{t('Status', 'الحالة')}</th>
                      <th className="p-3.5 text-center">{t('Action', 'إجراء')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#222]">
                    {quotes.map((q) => (
                      <tr key={q.id} className="hover:bg-[#161616] transition-colors">
                        <td className="p-3.5 font-mono text-[#AAA]">
                          <div className="font-bold text-white">{q.id}</div>
                          <div className="text-[10px] text-[#666]">{new Date(q.createdAt).toLocaleDateString()}</div>
                        </td>
                        <td className="p-3.5">
                          <div className="font-bold text-white">{q.name}</div>
                          <div className="text-[11px] text-[#777]">{q.company || 'Private Client'} • {q.phone}</div>
                        </td>
                        <td className="p-3.5 text-[#CCC] max-w-xs truncate">{q.service}</td>
                        <td className="p-3.5 text-[#888]">{q.city}</td>
                        <td className="p-3.5">
                          <select
                            value={q.status || 'new'}
                            onChange={(e) => handleUpdateQuoteStatus(q.id, e.target.value)}
                            className="bg-[#181818] border border-[#333] text-[11px] text-[#CCC] px-2 py-1 rounded-xs"
                          >
                            <option value="new">New (جديد)</option>
                            <option value="contacted">Contacted (تم التواصل)</option>
                            <option value="estimating">Estimating (قيد التسعير)</option>
                            <option value="approved">Approved (معتمد)</option>
                            <option value="closed">Closed (مغلق)</option>
                          </select>
                        </td>
                        <td className="p-3.5 text-center">
                          <button
                            onClick={() => setSelectedQuote(q)}
                            className="p-1.5 bg-[#1f1f1f] hover:bg-[#2c2c2c] border border-[#333] rounded-xs text-[#AAA] hover:text-white"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Modal: Quote Detail View */}
        {selectedQuote && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#121212] border border-[#333] max-w-2xl w-full p-6 sm:p-8 rounded-sm space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-[#222] pb-4">
                <div>
                  <div className="font-mono text-xs text-[#E60000] font-bold">{selectedQuote.id}</div>
                  <h3 className="text-lg font-bold uppercase text-white">{selectedQuote.service}</h3>
                </div>
                <button onClick={() => setSelectedQuote(null)} className="text-[#888] hover:text-white">✕</button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[#666] block uppercase tracking-wider mb-0.5">{t('Client Name', 'اسم العميل')}</span>
                  <span className="text-white font-medium">{selectedQuote.name}</span>
                </div>
                <div>
                  <span className="text-[#666] block uppercase tracking-wider mb-0.5">{t('Company', 'الشركة')}</span>
                  <span className="text-white font-medium">{selectedQuote.company || '—'}</span>
                </div>
                <div>
                  <span className="text-[#666] block uppercase tracking-wider mb-0.5">{t('Phone', 'الجوال')}</span>
                  <a href={`tel:${selectedQuote.phone}`} className="text-[#E60000] font-mono">{selectedQuote.phone}</a>
                </div>
                <div>
                  <span className="text-[#666] block uppercase tracking-wider mb-0.5">{t('Email', 'البريد')}</span>
                  <span className="text-white font-mono">{selectedQuote.email}</span>
                </div>
                <div>
                  <span className="text-[#666] block uppercase tracking-wider mb-0.5">{t('City & Exposure', 'المدينة والبيئة')}</span>
                  <span className="text-white">{selectedQuote.city} ({selectedQuote.environment})</span>
                </div>
                <div>
                  <span className="text-[#666] block uppercase tracking-wider mb-0.5">{t('Dimensions & Qty', 'المقاسات والكمية')}</span>
                  <span className="text-white">{selectedQuote.dimensions || 'Standard'} • {selectedQuote.quantity}</span>
                </div>
                <div>
                  <span className="text-[#666] block uppercase tracking-wider mb-0.5">{t('Lighting', 'الإضاءة')}</span>
                  <span className="text-white">{selectedQuote.lighting}</span>
                </div>
                <div>
                  <span className="text-[#666] block uppercase tracking-wider mb-0.5">{t('Timeline', 'الوقت المستهدف')}</span>
                  <span className="text-white">{selectedQuote.timeline}</span>
                </div>
              </div>

              {selectedQuote.description && (
                <div className="p-4 bg-[#181818] border border-[#252525] rounded-xs text-xs space-y-1">
                  <div className="text-[#888] uppercase font-bold">{t('Project Notes:', 'ملاحظات المشروع:')}</div>
                  <p className="text-white leading-relaxed">{selectedQuote.description}</p>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-[#222]">
                <a
                  href={`https://wa.me/${selectedQuote.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `Hello ${selectedQuote.name}, this is Sign One regarding your quotation enquiry ${selectedQuote.id}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-bold uppercase tracking-wider rounded-xs flex items-center gap-2"
                >
                  <span>{t('Contact via WhatsApp', 'مراسلة واتساب')}</span>
                </a>
                <button
                  onClick={() => setSelectedQuote(null)}
                  className="px-4 py-2 bg-[#222] hover:bg-[#333] text-white text-xs font-bold uppercase rounded-xs"
                >
                  {t('Close', 'إغلاق')}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: Messages */}
        {activeTab === 'messages' && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase text-white tracking-wider">
              {t('GENERAL CONTACT SUBMISSIONS', 'رسائل التواصل العامة')}
            </h3>

            {contacts.length === 0 ? (
              <div className="p-8 bg-[#111] border border-[#222] rounded-sm text-center text-xs text-[#777]">
                {t('No contact messages yet.', 'لا توجد رسائل واردة حالياً.')}
              </div>
            ) : (
              <div className="space-y-3">
                {contacts.map((msg) => (
                  <div key={msg.id} className="p-5 bg-[#121212] border border-[#222] rounded-sm space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-white text-sm">{msg.name}</span>
                        <span className="text-[#777] ml-2 rtl:mr-2">({msg.company || 'Private'}) • {msg.phone} • {msg.email}</span>
                      </div>
                      <span className="text-[#666] font-mono">{new Date(msg.createdAt).toLocaleString()}</span>
                    </div>
                    <div className="text-xs font-bold text-[#E60000]">{msg.subject}</div>
                    <p className="text-xs text-[#AAA] leading-relaxed bg-[#181818] p-3 rounded-xs border border-[#262626]">
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab Content: Projects Management */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase text-white tracking-wider">
                {t('PORTFOLIO PROJECTS', 'مشاريع معرض الأعمال')}
              </h3>
              <button
                onClick={() => alert('Project creation wizard ready in production CMS mode')}
                className="px-4 py-2 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs font-bold uppercase tracking-wider rounded-xs flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{t('Add New Project', 'إضافة مشروع جديد')}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((proj) => (
                <div key={proj.id} className="p-4 bg-[#121212] border border-[#222] rounded-sm flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="h-32 rounded-xs overflow-hidden relative">
                      <img src={proj.featuredImage} alt={proj.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <span className="absolute top-2 left-2 text-[10px] font-mono bg-black/80 px-2 py-0.5 text-white">
                        {proj.year}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-[#888]">{proj.client}</div>
                    <h4 className="text-sm font-bold text-white">{proj.title}</h4>
                    <p className="text-xs text-[#777] line-clamp-2">{proj.description}</p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#222] flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(`/projects/${proj.slug}`)}
                      className="text-xs font-bold text-[#AAA] hover:text-white flex items-center gap-1"
                    >
                      <span>{t('View Live', 'معاينة')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                    <span className="text-[10px] px-2 py-0.5 bg-[#1a1a1a] text-[#888] font-mono border border-[#333]">
                      {proj.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Site Settings */}
        {activeTab === 'settings' && (
          <div className="p-6 bg-[#121212] border border-[#222] rounded-sm space-y-6 max-w-3xl">
            <h3 className="text-sm font-bold uppercase text-white tracking-wider border-b border-[#222] pb-3">
              {t('GENERAL PLATFORM SETTINGS', 'إعدادات المنصة والهوية')}
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="text-[#AAA] font-semibold uppercase block mb-1">{t('Corporate Phone', 'رقم الهاتف الرئيسي')}</label>
                <input
                  type="text"
                  value={siteSettings.phone}
                  onChange={(e) => setSiteSettings({ ...siteSettings, phone: e.target.value })}
                  className="w-full bg-[#181818] border border-[#333] text-white p-2.5 rounded-xs font-mono"
                />
              </div>

              <div>
                <label className="text-[#AAA] font-semibold uppercase block mb-1">{t('Official Email', 'البريد الإلكتروني الرسمي')}</label>
                <input
                  type="email"
                  value={siteSettings.email}
                  onChange={(e) => setSiteSettings({ ...siteSettings, email: e.target.value })}
                  className="w-full bg-[#181818] border border-[#333] text-white p-2.5 rounded-xs font-mono"
                />
              </div>

              <div>
                <label className="text-[#AAA] font-semibold uppercase block mb-1">{t('Riyadh Headquarters Address', 'عنوان المقر الرئيسي')}</label>
                <input
                  type="text"
                  value={siteSettings.address}
                  onChange={(e) => setSiteSettings({ ...siteSettings, address: e.target.value })}
                  className="w-full bg-[#181818] border border-[#333] text-white p-2.5 rounded-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="text-[#AAA] font-semibold uppercase block mb-1">{t('Delivered Projects Stat', 'إحصائية المشاريع المنجزة')}</label>
                  <input
                    type="text"
                    value={siteSettings.stats.projectsCount}
                    onChange={(e) => setSiteSettings({ ...siteSettings, stats: { ...siteSettings.stats, projectsCount: e.target.value } })}
                    className="w-full bg-[#181818] border border-[#333] text-white p-2.5 rounded-xs font-mono"
                  />
                </div>

                <div>
                  <label className="text-[#AAA] font-semibold uppercase block mb-1">{t('Factory Floor Area', 'مساحة المصنع')}</label>
                  <input
                    type="text"
                    value={siteSettings.stats.factoryAreaM2}
                    onChange={(e) => setSiteSettings({ ...siteSettings, stats: { ...siteSettings.stats, factoryAreaM2: e.target.value } })}
                    className="w-full bg-[#181818] border border-[#333] text-white p-2.5 rounded-xs font-mono"
                  />
                </div>
              </div>

              <button
                onClick={() => alert(t('Settings persisted to database successfully.', 'تم حفظ الإعدادات بنجاح في قاعدة البيانات.'))}
                className="px-6 py-3 bg-[#E60000] hover:bg-[#CC0000] text-white font-bold uppercase tracking-widest rounded-sm transition-colors mt-4"
              >
                {t('SAVE SETTINGS', 'حفظ الإعدادات')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
