import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { initialProjects } from '../../data/initialData';
import { StudioCutoutViewer } from './StudioCutoutViewer';
import { 
  Building2, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Eye, 
  Layers, 
  CheckCircle2,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface CutoutProjectsShowcaseProps {
  onNavigate: (path: string) => void;
  title?: string;
  titleAr?: string;
}

export const CutoutProjectsShowcase: React.FC<CutoutProjectsShowcaseProps> = ({
  onNavigate,
  title,
  titleAr
}) => {
  const { t, isRTL } = useLanguage();

  // Get projects that have cutout mode enabled
  const cutoutProjects = initialProjects.filter(p => p.hasCutoutMode || p.cutoutImage);
  const [selectedSlug, setSelectedSlug] = useState(
    cutoutProjects.length > 0 ? cutoutProjects[0].slug : initialProjects[0].slug
  );

  const activeProject = cutoutProjects.find(p => p.slug === selectedSlug) || cutoutProjects[0] || initialProjects[0];

  return (
    <section className="py-20 px-4 sm:px-8 bg-[#090909] border-b border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E60000]/10 border border-[#E60000]/30 rounded-xs text-[#E60000] text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('STUDIO CUTOUT & REALIZED WORKS', 'معرض اللوحات المعزولة والمشاريع المنفذة')}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              {title || t('ISOLATED SIGNAGE & ARCHITECTURAL WORKS', 'استعراض اللوحات المنفذة بدقة هندسية')}
            </h2>
            <p className="text-sm sm:text-base text-[#888] max-w-2xl leading-relaxed">
              {t(
                'Explore the real custom 3D signage, illuminated channel letters, and architectural emblems crafted by Sign One. View each sign cleanly isolated or in full architectural context with live LED illumination control.',
                'استكشف اللوحات البارزة والشعارات المعمارية والحروف المضيئة التي صنعتها ورش ساين ون لكبرى الجهات بالمملكة، بدون خلفيات مشتتة وبتحكم كامل في الإضاءة الليلية.'
              )}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('/projects')}
              className="px-5 py-2.5 bg-[#181818] hover:bg-[#222] border border-[#333] hover:border-[#E60000] text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center gap-2"
            >
              <span>{t('VIEW ALL 15+ PROJECTS', 'تصفح كافة المشاريع (15+)')}</span>
              {isRTL ? <ArrowLeft className="w-4 h-4 text-[#E60000]" /> : <ArrowRight className="w-4 h-4 text-[#E60000]" />}
            </button>
          </div>
        </div>

        {/* Interactive Main Stage & Selector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Center: Interactive Studio Cutout Stage */}
          <div className="lg:col-span-8">
            <StudioCutoutViewer
              project={activeProject}
              onNavigate={onNavigate}
            />
          </div>

          {/* Right: Interactive Project Selector List */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono text-[#777] uppercase tracking-wider px-1">
              {t('SELECT REALIZED PROJECT', 'اختر المشروع المنفذ:')}
            </div>

            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {cutoutProjects.map((proj) => {
                const isSelected = proj.slug === activeProject.slug;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedSlug(proj.slug)}
                    className={`w-full text-left p-3 rounded-xs border transition-all duration-200 flex items-center gap-3 ${
                      isSelected
                        ? 'bg-[#1a1a1a] border-[#E60000] shadow-lg text-white'
                        : 'bg-[#121212] border-[#222] text-[#888] hover:text-[#CCC] hover:border-[#333]'
                    }`}
                  >
                    {/* Thumbnail */}
                    <div className="w-14 h-12 rounded-xs overflow-hidden bg-black shrink-0 border border-white/10 relative">
                      <img
                        src={proj.cutoutImage || proj.featuredImage}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.dataset.fallbackApplied && proj.featuredImage && target.src !== proj.featuredImage) {
                            target.dataset.fallbackApplied = 'true';
                            target.src = proj.featuredImage;
                          }
                        }}
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-[#E60000]/20 border border-[#E60000]"></div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-mono text-[#E60000] font-bold uppercase truncate">
                        {proj.client}
                      </div>
                      <div className="text-xs font-bold text-white truncate">
                        {t(proj.title, proj.titleAr)}
                      </div>
                      <div className="text-[10px] text-[#777] flex items-center gap-1 mt-0.5">
                        <span>{t(proj.location, proj.locationAr)}</span>
                        <span>•</span>
                        <span>{proj.letterDepth || '3D Sign'}</span>
                      </div>
                    </div>

                    {isSelected ? (
                      <div className="w-2 h-2 rounded-full bg-[#E60000]"></div>
                    ) : (
                      isRTL ? <ChevronLeft className="w-3.5 h-3.5 text-[#555]" /> : <ChevronRight className="w-3.5 h-3.5 text-[#555]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
