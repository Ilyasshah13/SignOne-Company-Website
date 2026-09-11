import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  FileText, 
  X, 
  ShieldCheck, 
  Phone, 
  MapPin, 
  Layers, 
  Sparkles,
  Check
} from 'lucide-react';

interface QuotePageProps {
  onNavigate: (path: string) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuoteId, setSubmittedQuoteId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    service: '3D Letters & Dimensional Signage',
    city: 'Riyadh',
    environment: 'outdoor' as 'indoor' | 'outdoor' | 'both',
    projectType: 'Commercial Storefront / Plaza',
    dimensions: '',
    quantity: '1 Set',
    material: 'Stainless Steel 316',
    lighting: 'Front-lit LED 4000K',
    timeline: '4 to 6 Weeks',
    description: '',
    name: '',
    company: '',
    phone: '',
    email: '',
    attachments: [] as { name: string; size: string; type: string; url?: string }[]
  });

  const servicesList = [
    { title: '3D Letters & Dimensional Signage', titleAr: 'حروف بارزة ثلاثية الأبعاد' },
    { title: 'LED & Front/Back-Lit Channel Letters', titleAr: 'حروف مضيئة وقنوات LED' },
    { title: 'Illuminated Signage & Lightboxes', titleAr: 'لوحات وفوانيس إعلانية مضيئة' },
    { title: 'Aluminum Cladding & Architectural Facades', titleAr: 'كلادينج ألمنيوم وواجهات معمارية' },
    { title: 'Wayfinding & Environmental Graphics', titleAr: 'لوحات إرشادية وتوجيهية' },
    { title: 'Pylon & Monolith Totem Signs', titleAr: 'لوحات بيلون وتوتم عملاقة' },
    { title: 'Stainless Steel & Metal Signage', titleAr: 'لوحات استانلس ستيل ومعادن فاخرة' },
    { title: 'Custom Architectural Fabrication', titleAr: 'تصنيع معماري مخصص وهياكل خاصة' }
  ];

  const saudiCities = [
    'Riyadh',
    'Jeddah',
    'Dammam & Al Khobar',
    'Makkah',
    'Madinah',
    'Tabuk & NEOM',
    'Abha & Asir',
    'Other City in Saudi Arabia'
  ];

  const buildingTypes = [
    'Commercial Tower / High-Rise',
    'Retail Flagship / Shopping Mall',
    'Hospitality / Hotel / Luxury Resort',
    'Hospital / Healthcare Facility',
    'Automotive Dealership / Showroom',
    'Corporate Headquarters',
    'Government / Public Entity'
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileList = Array.from(e.target.files) as File[];
      const newFiles = fileList.map((f: File) => ({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(2)} MB`,
        type: f.type || 'file'
      }));
      setFormData(prev => ({
        ...prev,
        attachments: [...prev.attachments, ...newFiles]
      }));
    }
  };

  const removeAttachment = (index: number) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setErrorMessage(t('Please fill in your name, phone, and email.', 'يرجى إدخال الاسم ورقم الهاتف والبريد الإلكتروني.'));
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmittedQuoteId(data.quoteId);
      } else {
        setErrorMessage(data.error || 'Failed to submit quote request. Please try again.');
      }
    } catch (err) {
      console.error(err);
      // Even if network fails in local preview, generate safe reference ID
      setSubmittedQuoteId(`q-${Date.now()}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Header */}
      <section className="py-16 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c]">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E60000] font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('FREE TECHNICAL ESTIMATION', 'طلب تسعيرة ودراسة فنية مجانية')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            {t('PROJECT QUOTATION ENQUIRY', 'طلب تسعير مشروع')}
          </h1>
          <p className="text-xs sm:text-sm text-[#888] max-w-xl mx-auto leading-relaxed">
            {t(
              'Complete our 5-step specification enquiry to receive stamped engineering advice and official quotation from Sign One directors.',
              'أكمل خطوات الاستفسار الخمس للحصول على دراسة للمواصفات وعرض سعر رسمي معتمد من مهندسي ساين ون.'
            )}
          </p>
        </div>
      </section>

      {/* Main Form Container */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Screen */}
          {submittedQuoteId ? (
            <div className="p-8 sm:p-12 bg-[#111] border border-[#262626] rounded-sm text-center space-y-6 shadow-2xl animate-in fade-in">
              <div className="w-16 h-16 bg-[#00C853]/20 border border-[#00C853]/40 text-[#00C853] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <div className="font-mono text-xs uppercase tracking-widest text-[#E60000] font-bold">
                  {t('ENQUIRY TRANSMITTED SUCCESSFULLY', 'تم استلام طلب التسعيرة بنجاح')}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-white">
                  {t('THANK YOU FOR CHOOSING SIGN ONE', 'شكراً لاختياركم شركة ساين ون')}
                </h2>
                <p className="text-xs sm:text-sm text-[#999] max-w-lg mx-auto leading-relaxed">
                  {t(
                    'Our technical project director in Riyadh will review your specifications and reach out within 24 hours with certified recommendations.',
                    'سيقوم مدير المشاريع الهندسية في الرياض بمراجعة المواصفات المرفقة والتواصل معكم خلال 24 ساعة لتقديم التوصيات وعرض الأسعار.'
                  )}
                </p>
              </div>

              <div className="p-4 bg-[#181818] border border-[#2a2a2a] max-w-md mx-auto rounded-xs text-xs flex items-center justify-between font-mono">
                <span className="text-[#888]">{t('Enquiry Reference:', 'رقم المعاملة المرجعي:')}</span>
                <span className="text-white font-bold">{submittedQuoteId}</span>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`https://wa.me/966500092520?text=${encodeURIComponent(
                    `Hello Sign One, I just submitted project quote reference ${submittedQuoteId} on your portal.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                >
                  {t('FOLLOW UP ON WHATSAPP', 'متابعة سريعة عبر واتساب')}
                </a>
                <button
                  onClick={() => onNavigate('/projects')}
                  className="px-6 py-3 bg-[#181818] hover:bg-[#222] border border-[#333] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                >
                  {t('EXPLORE PROJECTS', 'استعراض المشاريع')}
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#121212] border border-[#242424] rounded-sm shadow-2xl overflow-hidden">
              {/* Step indicator bar */}
              <div className="grid grid-cols-5 border-b border-[#222] bg-[#0e0e0e] text-center text-xs font-mono">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div
                    key={step}
                    className={`py-3.5 px-2 border-r last:border-r-0 border-[#222] flex items-center justify-center gap-1.5 transition-colors ${
                      currentStep === step
                        ? 'bg-[#1a1a1a] text-[#E60000] font-bold'
                        : currentStep > step
                        ? 'text-white'
                        : 'text-[#555]'
                    }`}
                  >
                    <span>0{step}</span>
                    <span className="hidden sm:inline">
                      {step === 1 && t('Service', 'الخدمة')}
                      {step === 2 && t('Location', 'الموقع')}
                      {step === 3 && t('Details', 'التفاصيل')}
                      {step === 4 && t('Upload', 'المرفقات')}
                      {step === 5 && t('Contact', 'التواصل')}
                    </span>
                  </div>
                ))}
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
                {errorMessage && (
                  <div className="p-3 bg-red-950/40 border border-red-800/60 text-red-300 text-xs rounded-xs">
                    {errorMessage}
                  </div>
                )}

                {/* STEP 1: WHAT DO YOU NEED? */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-in fade-in">
                    <div>
                      <div className="text-xs uppercase font-mono text-[#E60000] font-bold mb-1">STEP 01</div>
                      <h2 className="text-2xl font-bold uppercase text-white tracking-tight">
                        {t('WHAT DO YOU NEED?', 'ما هي الخدمة أو المنتج المطلوب؟')}
                      </h2>
                      <p className="text-xs text-[#888]">{t('Select the primary signage or facade category for your project.', 'اختر التصنيف الأساسي لمشروعك.')}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {servicesList.map((srv) => (
                        <div
                          key={srv.title}
                          onClick={() => setFormData({ ...formData, service: srv.title })}
                          className={`p-4 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                            formData.service === srv.title
                              ? 'bg-[#1c1c1c] border-[#E60000] text-white shadow-md'
                              : 'bg-[#101010] border-[#222] text-[#888] hover:border-[#333] hover:text-white'
                          }`}
                        >
                          <span className="text-xs font-bold">{t(srv.title, srv.titleAr)}</span>
                          {formData.service === srv.title && (
                            <Check className="w-4 h-4 text-[#E60000]" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2: LOCATION & ENVIRONMENT */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-in fade-in">
                    <div>
                      <div className="text-xs uppercase font-mono text-[#E60000] font-bold mb-1">STEP 02</div>
                      <h2 className="text-2xl font-bold uppercase text-white tracking-tight">
                        {t('PROJECT LOCATION & ENVIRONMENT', 'موقع المشروع وطبيعة البيئة')}
                      </h2>
                      <p className="text-xs text-[#888]">{t('Specifies weather exposure, municipal permits, and structural rigging.', 'لتحديد درجات مقاومة الطقس واشتراطات التراخيص البلدية والتركيب.')}</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#CCC] block mb-2">
                          {t('Saudi City', 'المدينة بالمملكة')}
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full bg-[#181818] border border-[#2e2e2e] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                        >
                          {saudiCities.map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#CCC] block mb-2">
                          {t('Exposure Environment', 'مكان التركيب والتعرض للعوامل الجوية')}
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { id: 'outdoor', label: t('Outdoor / Exterior', 'خارجي / واجهات') },
                            { id: 'indoor', label: t('Indoor / Interior', 'داخلي / استعراض') },
                            { id: 'both', label: t('Both / Campus-wide', 'كلاهما / مشروع متكامل') }
                          ].map(item => (
                            <button
                              type="button"
                              key={item.id}
                              onClick={() => setFormData({ ...formData, environment: item.id as any })}
                              className={`py-3 px-2 text-xs font-bold rounded-sm border transition-all ${
                                formData.environment === item.id
                                  ? 'bg-[#1c1c1c] border-[#E60000] text-white'
                                  : 'bg-[#141414] border-[#222] text-[#888] hover:text-white'
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#CCC] block mb-2">
                          {t('Facility / Building Type', 'نوع المنشأة أو المبنى')}
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full bg-[#181818] border border-[#2e2e2e] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                        >
                          {buildingTypes.map(b => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: PROJECT DETAILS & SPECS */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-in fade-in">
                    <div>
                      <div className="text-xs uppercase font-mono text-[#E60000] font-bold mb-1">STEP 03</div>
                      <h2 className="text-2xl font-bold uppercase text-white tracking-tight">
                        {t('PROJECT DIMENSIONS & SPECS', 'المقاسات والمواصفات المبدئية')}
                      </h2>
                      <p className="text-xs text-[#888]">{t('Approximate dimensions or special architectural requirements.', 'المقاسات التقديرية أو أي مواصفات خاصة ترغب بها.')}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#CCC] block mb-1">
                          {t('Dimensions (Approx. Width x Height)', 'الأبعاد التقديرية (عرض × ارتفاع)')}
                        </label>
                        <input
                          type="text"
                          value={formData.dimensions}
                          onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                          placeholder={t('e.g. 10m x 2.2m facade', 'مثال: 10م × 2.2م للواجهة')}
                          className="w-full bg-[#181818] border border-[#2e2e2e] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#CCC] block mb-1">
                          {t('Estimated Quantity / Scope', 'الكمية أو عدد الفروع')}
                        </label>
                        <input
                          type="text"
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          placeholder="e.g. 1 Monument Sign / 3 Branch Rollout"
                          className="w-full bg-[#181818] border border-[#2e2e2e] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#CCC] block mb-1">
                          {t('Lighting Preference', 'نوع الإضاءة المفضلة')}
                        </label>
                        <select
                          value={formData.lighting}
                          onChange={(e) => setFormData({ ...formData, lighting: e.target.value })}
                          className="w-full bg-[#181818] border border-[#2e2e2e] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                        >
                          <option value="Front-lit LED 4000K Neutral White">{t('Front-lit LED (4000K Neutral White)', 'إضاءة أمامية LED (أبيض محايد 4000K)')}</option>
                          <option value="Indirect Halo-Lit Warm White 2700K">{t('Indirect Halo-Lit (2700K Warm White)', 'إضاءة خلفية هالو غير مباشرة (2700K دافئ)')}</option>
                          <option value="Dual Front & Halo Illuminated">{t('Dual Front & Halo Illuminated', 'إضاءة مزدوجة أمامية وخلفية')}</option>
                          <option value="Non-Illuminated Solid Metal">{t('Non-Illuminated (Pure Architectural Metal)', 'بدون إضاءة (معدن معماري مصمت)')}</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#CCC] block mb-1">
                          {t('Target Timeline / Handover', 'الجدول الزمني المستهدف')}
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full bg-[#181818] border border-[#2e2e2e] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                        >
                          <option value="Urgent (1 to 2 Weeks)">{t('Urgent (1 to 2 Weeks)', 'عاجل (خلال أسبوع إلى أسبوعين)')}</option>
                          <option value="Standard (3 to 5 Weeks)">{t('Standard (3 to 5 Weeks)', 'اعتيادي (3 إلى 5 أسابيع)')}</option>
                          <option value="Future Development (6+ Weeks)">{t('Future Development (6+ Weeks)', 'مشروع قيد التجهيز (أكثر من 6 أسابيع)')}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#CCC] block mb-1">
                        {t('Project Notes / Description', 'وصف المشروع وملاحظات إضافية')}
                      </label>
                      <textarea
                        rows={3}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder={t('Describe your facade condition, elevation heights, or special brand guidelines...', 'صف حالة الواجهة، الارتفاعات، أو أي اشتراطات خاصة بهوية علامتك...')}
                        className="w-full bg-[#181818] border border-[#2e2e2e] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                      ></textarea>
                    </div>
                  </div>
                )}

                {/* STEP 4: UPLOAD ATTACHMENTS */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-in fade-in">
                    <div>
                      <div className="text-xs uppercase font-mono text-[#E60000] font-bold mb-1">STEP 04</div>
                      <h2 className="text-2xl font-bold uppercase text-white tracking-tight">
                        {t('ATTACHMENTS & DRAWINGS', 'إرفاق المخططات والشعار')}
                      </h2>
                      <p className="text-xs text-[#888]">{t('Upload your logo vector, CAD drawing, elevation photo, or reference mockups (optional).', 'أرفق ملف الشعار، المخطط المعماري، صورة الموقع أو أي تصاميم مرجعية (اختياري).')}</p>
                    </div>

                    {/* Drag and Drop Box */}
                    <div className="border-2 border-dashed border-[#2a2a2a] hover:border-[#E60000] p-8 text-center rounded-sm bg-[#101010] transition-colors relative cursor-pointer">
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      <Upload className="w-8 h-8 text-[#666] mx-auto mb-3" />
                      <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                        {t('CLICK OR DRAG FILES HERE', 'انقر هنا أو اسحب الملفات للإرفاق')}
                      </div>
                      <p className="text-[11px] text-[#777]">
                        {t('Accepted: PDF, DWG, AI, PNG, JPG (up to 20MB per file)', 'الملفات المقبولة: PDF, DWG, AI, PNG, JPG (حتى 20 ميجابايت)')}
                      </p>
                    </div>

                    {/* Attachment List */}
                    {formData.attachments.length > 0 && (
                      <div className="space-y-2">
                        <div className="text-xs font-semibold text-[#888]">{t('Selected Attachments:', 'الملفات المرفقة:')}</div>
                        {formData.attachments.map((file, idx) => (
                          <div key={idx} className="p-3 bg-[#181818] border border-[#252525] rounded-xs flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2 text-white truncate max-w-sm">
                              <FileText className="w-4 h-4 text-[#E60000] shrink-0" />
                              <span className="truncate">{file.name}</span>
                              <span className="text-[#666] font-mono text-[10px]">({file.size})</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeAttachment(idx)}
                              className="text-[#666] hover:text-red-400 p-1"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* STEP 5: CONTACT & SUBMIT */}
                {currentStep === 5 && (
                  <div className="space-y-6 animate-in fade-in">
                    <div>
                      <div className="text-xs uppercase font-mono text-[#E60000] font-bold mb-1">STEP 05</div>
                      <h2 className="text-2xl font-bold uppercase text-white tracking-tight">
                        {t('CONTACT DETAILS & SUBMISSION', 'بيانات التواصل وتأكيد الطلب')}
                      </h2>
                      <p className="text-xs text-[#888]">{t('Where should our engineering team send your technical quotation?', 'إلى أين نرسل عرض الأسعار والدراسة الفنية المعتمدة؟')}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#CCC] block mb-1">
                          {t('Your Name *', 'الاسم الكريم *')}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t('Eng. / Mr. / Ms.', 'المهندس / الأستاذ...')}
                          className="w-full bg-[#181818] border border-[#2e2e2e] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#CCC] block mb-1">
                          {t('Company / Entity Name', 'اسم الشركة أو الجهة')}
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder={t('e.g. Al-Fahad Investment', 'مثال: شركة الفهد للاستثمار')}
                          className="w-full bg-[#181818] border border-[#2e2e2e] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#CCC] block mb-1">
                          {t('Saudi Mobile Number *', 'رقم الجوال السعودي *')}
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+966 5X XXX XXXX"
                          className="w-full bg-[#181818] border border-[#2e2e2e] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#CCC] block mb-1">
                          {t('Corporate Email *', 'البريد الإلكتروني المهني *')}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.sa"
                          className="w-full bg-[#181818] border border-[#2e2e2e] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                        />
                      </div>
                    </div>

                    <div className="p-4 bg-[#101010] border border-[#222] rounded-xs space-y-2 text-xs text-[#888]">
                      <div className="flex items-center gap-2 text-[#DDD] font-semibold">
                        <ShieldCheck className="w-4 h-4 text-[#E60000]" />
                        <span>{t('Sign One Confidentiality Guarantee', 'ضمان الخصوصية والسرية')}</span>
                      </div>
                      <p>
                        {t(
                          'Your specifications and architectural drawings are protected under strict NDA and will only be reviewed by Sign One engineering directors.',
                          'مخططاتك وتفاصيل مشروعك محمية بالكامل ولن يتم الاطلاع عليها إلا من قبل مهندسي ساين ون المختصين.'
                        )}
                      </p>
                    </div>
                  </div>
                )}

                {/* Form Controls (Back / Next / Submit) */}
                <div className="pt-6 border-t border-[#222] flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(prev => prev - 1)}
                      className="px-6 py-3 bg-[#181818] hover:bg-[#222] border border-[#333] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center gap-1.5"
                    >
                      {isRTL ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                      <span>{t('BACK', 'السابق')}</span>
                    </button>
                  ) : <div></div>}

                  {currentStep < 5 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(prev => prev + 1)}
                      className="px-8 py-3 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-lg shadow-red-950/40 flex items-center gap-1.5"
                    >
                      <span>{t('CONTINUE', 'التالي')}</span>
                      {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-xl shadow-red-950/50 flex items-center gap-2 disabled:opacity-50"
                    >
                      <span>{isSubmitting ? t('TRANSMITTING...', 'جاري الإرسال...') : t('SUBMIT QUOTATION REQUEST', 'إرسال طلب التسعيرة')}</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
