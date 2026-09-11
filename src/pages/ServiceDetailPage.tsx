import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { initialServices, initialProjects } from '../data/initialData';
import { ProjectLightbox } from '../components/ui/ProjectLightbox';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  HelpCircle, 
  Layers, 
  Wrench, 
  Hammer, 
  Cpu, 
  Maximize2 
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onNavigate }) => {
  const { t, isRTL } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const service = initialServices.find(s => s.slug === slug) || initialServices[0];
  const relatedProjects = initialProjects.filter(p => 
    p.services.some(s => s.toLowerCase().includes(service.title.toLowerCase()) || service.title.toLowerCase().includes(s.toLowerCase()))
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Lightbox component */}
      {lightboxOpen && (
        <ProjectLightbox
          images={service.gallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % service.gallery.length)}
          onPrev={() => setLightboxIndex((prev) => (prev - 1 + service.gallery.length) % service.gallery.length)}
        />
      )}

      {/* Hero Header */}
      <section className="relative py-24 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover filter contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <button
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#888] hover:text-white uppercase tracking-wider transition-colors mb-2"
          >
            {isRTL ? <ArrowRight className="w-3.5 h-3.5 text-[#E60000]" /> : <ArrowLeft className="w-3.5 h-3.5 text-[#E60000]" />}
            <span>{t('ALL SERVICES', 'جميع الخدمات')}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#E60000] font-bold">SERVICE {service.number}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            {t(service.title, service.titleAr)}
          </h1>

          <p className="text-base sm:text-lg text-[#AAA] max-w-3xl leading-relaxed">
            {t(service.description, service.descriptionAr)}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('/quote')}
              className="px-8 py-3.5 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs uppercase tracking-widest font-bold rounded-sm shadow-xl shadow-red-950/50 transition-colors"
            >
              {t('REQUEST SPECIFICATION QUOTE', 'طلب عرض سعر للمواصفات')}
            </button>
            <button
              onClick={() => openLightbox(0)}
              className="px-6 py-3.5 bg-[#181818] hover:bg-[#252525] border border-[#333] text-white text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors flex items-center gap-2"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#888]" />
              <span>{t('VIEW GALLERY', 'معرض الصور')}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Overview & Engineering Details */}
      <section className="py-20 px-4 sm:px-8 border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Deep overview */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold uppercase text-white mb-4">
                {t('TECHNICAL OVERVIEW', 'نظرة هندسية تفصيلية')}
              </h2>
              <p className="text-sm text-[#999] leading-relaxed">
                {t(service.longDescription, service.longDescriptionAr)}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase text-white">
                {t('CAPABILITIES & ADVANTAGES', 'المواصفات الفنية والمزايا')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="p-4 bg-[#121212] border border-[#202020] rounded-sm flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#E60000] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#CCC] leading-relaxed">
                      {isRTL && service.featuresAr ? service.featuresAr[idx] : feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Manufacturing & Installation methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-[#121212] border border-[#222] rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E60000]">
                  <Hammer className="w-4 h-4" />
                  <span>{t('MANUFACTURING PROTOCOL', 'بروتوكول التصنيع')}</span>
                </div>
                <p className="text-xs text-[#888] leading-relaxed">
                  {t(
                    'Precision robotic laser cutting, computerized 3D channel return forming, and electrostatic oven-cured finishing carried out exclusively at our Riyadh production plant.',
                    'قص روبوتي دقيق بالليزر، تشكيل محوسب للأجناب والقنوات، وطلاء حراري معالج بالأفران يتم بالكامل داخل مجمعنا الصناعي بالرياض.'
                  )}
                </p>
              </div>

              <div className="p-6 bg-[#121212] border border-[#222] rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E60000]">
                  <Wrench className="w-4 h-4" />
                  <span>{t('INSTALLATION & RIGGING', 'التركيب الميداني والهندسي')}</span>
                </div>
                <p className="text-xs text-[#888] leading-relaxed">
                  {t(
                    'Hydraulic boom crane delivery, anchor torque testing, concealed structural brackets, and certified electrical wiring complying with Saudi Civil Defense and SASO.',
                    'تركيب برافعات هيدروليكية مجهزة، واختبارات عزم التثبيت، وتوصيلات كهربائية آمنة معتمدة مطابقة لاشتراطات الدفاع المدني وهيئة SASO.'
                  )}
                </p>
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {service.gallery.length > 0 && (
              <div className="space-y-4 pt-6">
                <h3 className="text-lg font-bold uppercase text-white">
                  {t('PHOTO GALLERY', 'معرض الصور الميدانية')}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {service.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => openLightbox(idx)}
                      className="relative h-44 rounded-sm overflow-hidden border border-[#222] group cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`${service.title} ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter contrast-[1.05]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Technical Spec Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Substrates and Materials */}
            <div className="p-6 bg-[#121212] border border-[#222] rounded-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-[#222] pb-3">
                {t('APPROVED SUBSTRATES & MATERIALS', 'الخامات والمواد المعتمدة')}
              </h4>
              <ul className="space-y-2">
                {service.materials.map((mat, idx) => (
                  <li key={idx} className="text-xs text-[#AAA] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E60000]"></span>
                    <span>{isRTL && service.materialsAr ? service.materialsAr[idx] : mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architectural Applications */}
            <div className="p-6 bg-[#121212] border border-[#222] rounded-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-[#222] pb-3">
                {t('ARCHITECTURAL APPLICATIONS', 'مجالات الاستخدام والتطبيق')}
              </h4>
              <ul className="space-y-2">
                {service.applications.map((app, idx) => (
                  <li key={idx} className="text-xs text-[#AAA] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#555]"></span>
                    <span>{isRTL && service.applicationsAr ? service.applicationsAr[idx] : app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote Action Box */}
            <div className="p-6 bg-[#161616] border border-[#2e2e2e] rounded-sm space-y-4 text-center">
              <h4 className="text-sm font-bold uppercase text-white">{t('REQUEST A QUOTE FOR THIS SERVICE', 'اطلب تسعيرة لهذه الخدمة')}</h4>
              <p className="text-xs text-[#888]">
                {t('Provide dimensions and site city to receive a structural calculation and quote proposal.', 'زوّدنا بالأبعاد والمدينة لاستلام عرض سعر فني ودراسة إتقان متكاملة.')}
              </p>
              <button
                onClick={() => onNavigate('/quote')}
                className="w-full py-3 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors"
              >
                {t('GET SPECIFICATION QUOTE', 'طلب عرض سعر فني')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c]">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <div className="text-xs font-bold uppercase tracking-widest text-[#E60000]">
                {t('FREQUENTLY ASKED QUESTIONS', 'الأسئلة الشائعة')}
              </div>
              <h3 className="text-2xl font-bold uppercase text-white">
                {t('ENGINEERING & SPECIFICATION FAQS', 'استفسارات المواصفات والتنفيذ')}
              </h3>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 bg-[#121212] border border-[#202020] rounded-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-white">
                    <HelpCircle className="w-4 h-4 text-[#E60000] shrink-0" />
                    <span>{t(faq.question, faq.questionAr)}</span>
                  </div>
                  <p className="text-xs text-[#888] leading-relaxed pl-6 rtl:pr-6 rtl:pl-0">
                    {t(faq.answer, faq.answerAr)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 px-4 sm:px-8 bg-[#080808]">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#E60000]">
                  {t('CASE STUDIES', 'تطبيقات عملية')}
                </div>
                <h3 className="text-2xl font-bold uppercase text-white">
                  {t('PROJECTS UTILIZING THIS SERVICE', 'مشاريع نفذت بهذه التقنية')}
                </h3>
              </div>
              <button
                onClick={() => onNavigate('/projects')}
                className="text-xs font-bold text-[#E60000] uppercase tracking-wider hover:text-white transition-colors"
              >
                {t('VIEW ALL PROJECTS', 'جميع المشاريع')}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onNavigate(`/projects/${p.slug}`)}
                  className="bg-[#121212] border border-[#222] hover:border-[#E60000] rounded-sm overflow-hidden group cursor-pointer transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={p.featuredImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter contrast-[1.05]" referrerPolicy="no-referrer" />
                    <span className="absolute bottom-2 left-2 text-[10px] bg-black/80 text-white px-2 py-0.5 border border-white/10 font-mono">
                      {p.year}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="text-sm font-bold text-white group-hover:text-[#E60000] transition-colors mb-1">
                      {t(p.title, p.titleAr)}
                    </h4>
                    <p className="text-xs text-[#888] line-clamp-2">
                      {t(p.description, p.descriptionAr)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
