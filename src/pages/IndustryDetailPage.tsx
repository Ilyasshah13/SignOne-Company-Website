import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { initialIndustries, initialServices, initialProjects } from '../data/initialData';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Layers, Building2 } from 'lucide-react';

interface IndustryDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({ slug, onNavigate }) => {
  const { t, isRTL } = useLanguage();

  const industry = initialIndustries.find(i => i.slug === slug) || initialIndustries[0];
  const relatedServices = initialServices.filter(s => industry.relatedServices.includes(s.slug));
  const relatedProjects = initialProjects.filter(p => p.category.toLowerCase().includes(industry.slug.toLowerCase()));

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={industry.heroImage}
            alt={industry.title}
            className="w-full h-full object-cover filter contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-4">
          <button
            onClick={() => onNavigate('/industries')}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#888] hover:text-white uppercase tracking-wider transition-colors mb-2"
          >
            {isRTL ? <ArrowRight className="w-3.5 h-3.5 text-[#E60000]" /> : <ArrowLeft className="w-3.5 h-3.5 text-[#E60000]" />}
            <span>{t('ALL INDUSTRIES', 'جميع القطاعات')}</span>
          </button>

          <div className="text-xs font-bold uppercase tracking-widest text-[#E60000]">
            {t('SECTOR ARCHITECTURAL SOLUTIONS', 'حلول القطاعات المتخصصة')}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            {t(industry.title, industry.titleAr)}
          </h1>

          <p className="text-base sm:text-lg text-[#AAA] max-w-3xl leading-relaxed">
            {t(industry.description, industry.descriptionAr)}
          </p>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('/quote')}
              className="px-8 py-3.5 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs uppercase tracking-widest font-bold rounded-sm shadow-xl shadow-red-950/50 transition-colors"
            >
              {t('CONSULT ON A SECTOR PROJECT', 'استشارة فنية لمشروعك')}
            </button>
          </div>
        </div>
      </section>

      {/* Challenges & Sign One Solutions */}
      <section className="py-20 px-4 sm:px-8 border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="p-8 bg-[#121212] border border-[#262626] rounded-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E60000]">
                <AlertTriangle className="w-4 h-4" />
                <span>{t('INDUSTRY SPECIFIC CHALLENGES', 'التحديات الخاصة بهذا القطاع')}</span>
              </div>
              <ul className="space-y-3">
                {industry.challenges.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-[#AAA] leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-[#E60000] shrink-0 mt-1.5"></span>
                    <span>{isRTL && industry.challengesAr ? industry.challengesAr[idx] : c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="p-8 bg-[#121212] border border-[#262626] rounded-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00C853]">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t('SIGN ONE TAILORED SOLUTIONS', 'حلول ساين ون المتخصصة')}</span>
              </div>
              <ul className="space-y-3">
                {industry.solutions.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-[#AAA] leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-[#00C853] shrink-0 mt-1.5"></span>
                    <span>{isRTL && industry.solutionsAr ? industry.solutionsAr[idx] : s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="space-y-6 pt-6">
              <h3 className="text-xl font-bold uppercase text-white">
                {t('RECOMMENDED SIGNAGE & CLADDING SERVICES', 'الخدمات الموصى بها لهذا القطاع')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => onNavigate(`/services/${srv.slug}`)}
                    className="p-6 bg-[#121212] border border-[#222] hover:border-[#E60000] rounded-sm cursor-pointer group transition-colors"
                  >
                    <div className="text-xs font-mono text-[#E60000] mb-2">{srv.number}</div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#E60000] transition-colors mb-2">
                      {t(srv.title, srv.titleAr)}
                    </h4>
                    <p className="text-xs text-[#888] line-clamp-2">{t(srv.description, srv.descriptionAr)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
