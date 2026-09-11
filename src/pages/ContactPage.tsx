import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { initialSiteSettings } from '../data/initialData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  Factory, 
  ShieldCheck 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'General Architectural Enquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      setErrorMessage(t('Please provide your name, phone, and message.', 'يرجى إدخال الاسم ورقم الجوال والرسالة.'));
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Submission failed');
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c]">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E60000] font-bold">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t('HEADQUARTERS & MANUFACTURING', 'المقر الرئيسي والمصنع')}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            {t('CONTACT SIGN ONE', 'تواصل مع ساين ون')}
          </h1>
          <p className="text-xs sm:text-sm text-[#888] max-w-xl mx-auto leading-relaxed">
            {t(
              'Reach out to our engineering consultants, schedule a factory inspection in Riyadh, or request preliminary architectural drawings.',
              'تواصل مع مستشارينا الهندسيين، أو رتب زيارة لمعاينة خطوط الإنتاج بالرياض، أو اطلب مراجعة مخططاتك المعمارية.'
            )}
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 px-4 sm:px-8 border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Offices */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold uppercase text-white">
                {t('KINGDOM-WIDE OPERATIONS', 'خدماتنا تغطي كافة أنحاء المملكة')}
              </h2>
              <p className="text-xs text-[#888] leading-relaxed">
                {t(
                  'Headquartered in Riyadh with mobile deployment teams and engineering branches serving Western, Eastern, and Northern provinces.',
                  'مقرنا الرئيسي في العاصمة الرياض مع فرق تركيب ميدانية ومكاتب هندسية تغطي المنطقة الغربية، الشرقية، والشمالية.'
                )}
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              <div className="p-5 bg-[#121212] border border-[#222] rounded-sm space-y-2">
                <div className="flex items-center gap-3 text-xs font-bold text-white uppercase">
                  <div className="p-2 bg-[#1c1c1c] text-[#E60000] rounded-xs border border-[#333]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span>{t('Riyadh Head Office & Showroom', 'المقر الرئيسي وصالة العرض بالرياض')}</span>
                </div>
                <p className="text-xs text-[#999] pl-11 rtl:pr-11 rtl:pl-0">
                  {initialSiteSettings.address}
                </p>
              </div>

              <div className="p-5 bg-[#121212] border border-[#222] rounded-sm space-y-2">
                <div className="flex items-center gap-3 text-xs font-bold text-white uppercase">
                  <div className="p-2 bg-[#1c1c1c] text-[#E60000] rounded-xs border border-[#333]">
                    <Factory className="w-4 h-4" />
                  </div>
                  <span>{t('Central Industrial Facility', 'المجمع الصناعي المركزي')}</span>
                </div>
                <p className="text-xs text-[#999] pl-11 rtl:pr-11 rtl:pl-0">
                  {t('2nd Industrial City, Exit 12, Riyadh, Saudi Arabia', 'المدينة الصناعية الثانية، مخرج 12، الرياض، المملكة العربية السعودية')}
                </p>
              </div>

              <div className="p-5 bg-[#121212] border border-[#222] rounded-sm space-y-2">
                <div className="flex items-center gap-3 text-xs font-bold text-white uppercase">
                  <div className="p-2 bg-[#1c1c1c] text-[#E60000] rounded-xs border border-[#333]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{t('Direct Contact & Support', 'الاتصال المباشر والدعم')}</span>
                </div>
                <div className="text-xs text-[#999] pl-11 rtl:pr-11 rtl:pl-0 space-y-1">
                  <div>{t('Phone:', 'الهاتف:')} <a href={`tel:${initialSiteSettings.phone}`} className="text-white hover:text-[#E60000]">{initialSiteSettings.phone}</a></div>
                  <div>{t('Email:', 'البريد:')} <a href={`mailto:${initialSiteSettings.email}`} className="text-white hover:text-[#E60000]">{initialSiteSettings.email}</a></div>
                  <div>{t('Working Hours:', 'أوقات العمل:')} {initialSiteSettings.workingHours}</div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp button */}
            <a
              href="https://wa.me/966500092520"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>{t('DIRECT WHATSAPP CHAT WITH ENGINEER', 'محادثة واتساب فورية مع المهندس')}</span>
            </a>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#121212] border border-[#242424] rounded-sm shadow-2xl">
              <h3 className="text-xl font-bold uppercase text-white mb-2">
                {t('SEND A DIRECT MESSAGE', 'إرسال رسالة مباشرة')}
              </h3>
              <p className="text-xs text-[#888] mb-6">
                {t('We respond to all verified inquiries within 24 business hours.', 'نرد على جميع الاستفسارات والطلبات خلال 24 ساعة عمل.')}
              </p>

              {submitted ? (
                <div className="p-8 bg-[#181818] border border-[#2a2a2a] text-center space-y-4 rounded-sm animate-in fade-in">
                  <div className="w-12 h-12 bg-[#00C853]/20 border border-[#00C853]/40 text-[#00C853] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white uppercase">{t('MESSAGE DELIVERED', 'تم إرسال رسالتك بنجاح')}</h4>
                  <p className="text-xs text-[#888]">
                    {t('Our corporate relationships team has received your message and will reach out shortly.', 'استلم فريق علاقات العملاء رسالتكم وسيتم التواصل معكم في أقرب وقت.')}
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', company: '', subject: 'General Architectural Enquiry', message: '' }); }}
                    className="text-xs text-[#E60000] font-bold uppercase hover:underline"
                  >
                    {t('SEND ANOTHER MESSAGE', 'إرسال رسالة أخرى')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-red-950/40 border border-red-800 text-red-300 text-xs rounded-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#BBB] block mb-1">
                        {t('Full Name *', 'الاسم الكامل *')}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#181818] border border-[#2a2a2a] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#BBB] block mb-1">
                        {t('Phone Number *', 'رقم الهاتف / الجوال *')}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+966 5X XXX XXXX"
                        className="w-full bg-[#181818] border border-[#2a2a2a] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#BBB] block mb-1">
                        {t('Corporate Email', 'البريد الإلكتروني')}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-[#181818] border border-[#2a2a2a] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#BBB] block mb-1">
                        {t('Company Name', 'اسم الشركة')}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#181818] border border-[#2a2a2a] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#BBB] block mb-1">
                      {t('Subject', 'موضوع الرسالة')}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#181818] border border-[#2a2a2a] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                    >
                      <option value="General Architectural Enquiry">{t('General Architectural Enquiry', 'استفسار معماري عام')}</option>
                      <option value="Project Tender / RFP Submission">{t('Project Tender / RFP Submission', 'مناقصة مشروع أو كراسة شروط')}</option>
                      <option value="Material Samples Request">{t('Material Samples Request', 'طلب عينات خامات ومواد')}</option>
                      <option value="Factory Inspection Visit">{t('Factory Inspection Visit', 'زيارة تفقدية للمصنع بالرياض')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#BBB] block mb-1">
                      {t('Message *', 'تفاصيل الرسالة أو المشروع *')}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#181818] border border-[#2a2a2a] text-xs text-white p-3 rounded-xs focus:outline-none focus:border-[#E60000]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? t('SENDING...', 'جاري الإرسال...') : t('DISPATCH MESSAGE', 'إرسال الرسالة')}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="h-80 w-full relative border-b border-[#1c1c1c] grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-500">
        <iframe
          title="Sign One Riyadh Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115984.80287794348!2d46.602257!3d24.713552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d48939b%3A0x6fb96f6b3fb7!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1680000000000!5m2!1sen!2ssa"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};
