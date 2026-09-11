import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { initialServices } from '../data/initialData';
import { ArrowRight, ArrowLeft, Layers, Check } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E60000] font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>{t('OUR CAPABILITIES', 'قدراتنا وخدماتنا')}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            {t('ARCHITECTURAL & SIGNAGE SERVICES', 'خدمات اللوحات والواجهات المعمارية')}
          </h1>
          <p className="text-sm sm:text-base text-[#999] max-w-3xl leading-relaxed">
            {t(
              'Sign One provides turnkey design, engineering, precision fabrication and certified field installation across all major signage and cladding disciplines in Saudi Arabia.',
              'تقدم ساين ون حلولاً متكاملة تشمل التصميم، الهندسة، التصنيع عالي الدقة، والتركيب الميداني المعتمد لكافة أنواع اللوحات والكلادينج في المملكة.'
            )}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onNavigate(`/services/${service.slug}`)}
              className="bg-[#121212] border border-[#202020] hover:border-[#E60000] rounded-sm overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 font-mono text-xs font-bold bg-black/80 px-2.5 py-1 text-[#E60000] border border-[#333]">
                    {service.number}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#E60000] transition-colors mb-2">
                    {t(service.title, service.titleAr)}
                  </h3>
                  <p className="text-xs text-[#888] leading-relaxed line-clamp-3 mb-5">
                    {t(service.description, service.descriptionAr)}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#1c1c1c]">
                    <div className="text-[11px] font-semibold text-[#666] uppercase tracking-wider">
                      {t('Key Materials:', 'أبرز المواد المستخدمة:')}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.materials.map((mat, idx) => (
                        <span key={idx} className="text-[10px] bg-[#1a1a1a] text-[#bbb] px-2 py-0.5 rounded-xs border border-[#2a2a2a]">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3">
                <div className="pt-3 border-t border-[#222] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#999] group-hover:text-white">
                  <span>{t('VIEW FULL SPECIFICATIONS', 'المواصفات الهندسية')}</span>
                  {isRTL ? <ArrowLeft className="w-4 h-4 text-[#E60000]" /> : <ArrowRight className="w-4 h-4 text-[#E60000]" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-16 px-4 sm:px-8 border-t border-[#1c1c1c] bg-[#0c0c0c]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white uppercase">{t('Need custom architectural engineering?', 'هل تحتاج لمواصفات هندسية خاصة؟')}</h3>
            <p className="text-xs text-[#888] mt-1">{t('Our structural consultants are ready to review your architectural drawings.', 'مستشارونا جاهزون لمراجعة مخططاتك المعمارية وتقديم عينات مطابقة.')}</p>
          </div>
          <button
            onClick={() => onNavigate('/quote')}
            className="px-8 py-3.5 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs uppercase tracking-widest font-bold rounded-sm shrink-0 transition-colors"
          >
            {t('REQUEST QUOTATION', 'طلب عرض أسعار')}
          </button>
        </div>
      </section>
    </div>
  );
};
