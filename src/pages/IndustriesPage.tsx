import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { initialIndustries } from '../data/initialData';
import { Layers, ArrowRight, ArrowLeft } from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (path: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Header Banner */}
      <section className="py-20 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E60000] font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>{t('SECTORS & ENVIRONMENTS', 'القطاعات والبيئات المعمارية')}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            {t('TAILORED INDUSTRY SOLUTIONS', 'حلول متخصصة لكافة القطاعات')}
          </h1>
          <p className="text-sm sm:text-base text-[#999] max-w-3xl leading-relaxed">
            {t(
              'Every architectural environment imposes distinct regulatory, aesthetic, and operational demands. Sign One tailors materials and engineering specifications to meet the specific requirements of Saudi Arabia’s core economic sectors.',
              'تتطلب كل بيئة معمارية مواصفات فنية ومعايير ترخيص خاصة. تطوع ساين ون خاماتها وحساباتها الإنشائية لتلبية احتياجات مختلف القطاعات في المملكة.'
            )}
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialIndustries.map((ind) => (
            <div
              key={ind.id}
              onClick={() => onNavigate(`/industries/${ind.slug}`)}
              className="bg-[#121212] border border-[#202020] hover:border-[#E60000] rounded-sm overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={ind.heroImage}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-3 text-xs font-mono text-white font-bold bg-black/70 px-2 py-1">
                    {t(ind.title, ind.titleAr)}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#E60000] transition-colors">
                    {t(ind.title, ind.titleAr)}
                  </h3>
                  <p className="text-xs text-[#888] leading-relaxed line-clamp-2">
                    {t(ind.description, ind.descriptionAr)}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-[#1c1c1c]">
                    <div className="text-[10px] uppercase font-bold text-[#666]">{t('Key Sector Focus:', 'أهم المتطلبات الفنية:')}</div>
                    <div className="text-xs text-[#bbb] line-clamp-2">
                      {isRTL && ind.challengesAr ? ind.challengesAr[0] : ind.challenges[0]}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-[#222] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#999] group-hover:text-white">
                  <span>{t('EXPLORE SECTOR SPECIFICATIONS', 'المواصفات الفنية للقطاع')}</span>
                  {isRTL ? <ArrowLeft className="w-4 h-4 text-[#E60000]" /> : <ArrowRight className="w-4 h-4 text-[#E60000]" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
