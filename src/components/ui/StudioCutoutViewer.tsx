import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ProjectItem } from '../../types';
import { 
  Sun, 
  Moon, 
  Layers, 
  Maximize2, 
  Sparkles, 
  ShieldCheck, 
  Info, 
  Grid, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

interface StudioCutoutViewerProps {
  project: ProjectItem;
  onNavigate?: (path: string) => void;
  onOpenLightbox?: () => void;
  compact?: boolean;
}

export const StudioCutoutViewer: React.FC<StudioCutoutViewerProps> = ({
  project,
  onNavigate,
  onOpenLightbox,
  compact = false
}) => {
  const { t, isRTL } = useLanguage();
  const [isIlluminated, setIsIlluminated] = useState(true);
  const [backdrop, setBackdrop] = useState<'dark' | 'light' | 'grid'>('dark');
  const [viewMode, setViewMode] = useState<'cutout' | 'facade'>('cutout');

  const glowColor = project.illuminationColor || '#E60000';
  const displayImage = viewMode === 'cutout' && project.cutoutImage ? project.cutoutImage : project.featuredImage;

  return (
    <div className="bg-[#101010] border border-[#222] rounded-xs overflow-hidden shadow-2xl transition-all duration-300">
      {/* Studio Header Toolbar */}
      <div className="p-3 sm:p-4 bg-[#141414] border-b border-[#222] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E60000] animate-pulse"></div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
            {t('STUDIO CUTOUT VIEW', 'عرض استوديو اللوحة المعزولة')}
          </span>
          {project.letterDepth && (
            <span className="text-[10px] font-mono px-2 py-0.5 bg-[#202020] text-[#AAA] border border-[#333] rounded-xs hidden sm:inline-block">
              {t(`Depth: ${project.letterDepth}`, `العمق: ${project.letterDepth}`)}
            </span>
          )}
        </div>

        {/* Interactive Controls Toolbar */}
        <div className="flex items-center gap-2">
          {/* View Mode Toggle: Cutout vs Facade */}
          <div className="inline-flex p-0.5 bg-[#0a0a0a] border border-[#282828] rounded-xs text-[11px] font-mono">
            <button
              onClick={() => setViewMode('cutout')}
              className={`px-2.5 py-1 rounded-xs transition-colors font-medium flex items-center gap-1 ${
                viewMode === 'cutout' ? 'bg-[#E60000] text-white' : 'text-[#888] hover:text-white'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>{t('Cutout', 'معزول')}</span>
            </button>
            <button
              onClick={() => setViewMode('facade')}
              className={`px-2.5 py-1 rounded-xs transition-colors font-medium flex items-center gap-1 ${
                viewMode === 'facade' ? 'bg-[#E60000] text-white' : 'text-[#888] hover:text-white'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>{t('Facade', 'الواجهة')}</span>
            </button>
          </div>

          {/* Daylight / Night Illumination Toggle */}
          <button
            onClick={() => setIsIlluminated(!isIlluminated)}
            title={t('Toggle LED Illumination', 'تبديل إضاءة LED')}
            className={`px-2.5 py-1 text-[11px] font-mono rounded-xs border transition-all flex items-center gap-1.5 ${
              isIlluminated
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                : 'bg-[#1e1e1e] text-[#888] border-[#333] hover:text-white'
            }`}
          >
            {isIlluminated ? <Sun className="w-3 h-3 text-amber-400" /> : <Moon className="w-3 h-3" />}
            <span className="hidden sm:inline">
              {isIlluminated ? t('LED ON', 'إضاءة مشغلة') : t('LED OFF', 'إضاءة مطفأة')}
            </span>
          </button>

          {/* Backdrop Mode Toggle */}
          {viewMode === 'cutout' && (
            <div className="hidden md:flex items-center gap-1 bg-[#0a0a0a] border border-[#282828] p-0.5 rounded-xs">
              <button
                onClick={() => setBackdrop('dark')}
                title={t('Dark Studio', 'استوديو داكن')}
                className={`w-6 h-6 rounded-xs flex items-center justify-center text-xs ${
                  backdrop === 'dark' ? 'bg-[#333] text-white' : 'text-[#666] hover:text-white'
                }`}
              >
                ■
              </button>
              <button
                onClick={() => setBackdrop('light')}
                title={t('Clean Light Studio', 'استوديو فاتح')}
                className={`w-6 h-6 rounded-xs flex items-center justify-center text-xs ${
                  backdrop === 'light' ? 'bg-[#eee] text-black font-bold' : 'text-[#666] hover:text-white'
                }`}
              >
                □
              </button>
              <button
                onClick={() => setBackdrop('grid')}
                title={t('Alpha Grid (Transparent)', 'شبكة الشفافية')}
                className={`w-6 h-6 rounded-xs flex items-center justify-center text-xs ${
                  backdrop === 'grid' ? 'bg-[#333] text-white' : 'text-[#666] hover:text-white'
                }`}
              >
                <Grid className="w-3 h-3" />
              </button>
            </div>
          )}

          {onOpenLightbox && (
            <button
              onClick={onOpenLightbox}
              className="p-1.5 bg-[#1a1a1a] hover:bg-[#252525] border border-[#333] rounded-xs text-[#AAA] hover:text-white"
              title={t('Enlarge photo', 'تكبير الصورة')}
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Showcase Stage */}
      <div 
        className={`relative w-full ${compact ? 'h-64 sm:h-72' : 'h-80 sm:h-96 md:h-[440px]'} flex items-center justify-center overflow-hidden transition-colors duration-500 ${
          backdrop === 'dark'
            ? 'bg-[#0a0a0a]'
            : backdrop === 'light'
            ? 'bg-[#f4f4f7]'
            : 'bg-[#181818]'
        }`}
        style={
          backdrop === 'grid'
            ? {
                backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }
            : undefined
        }
      >
        {/* Dynamic Studio Illumination Glow Halo */}
        {isIlluminated && viewMode === 'cutout' && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-60 filter blur-3xl mix-blend-screen"
            style={{
              background: `radial-gradient(circle at center, ${glowColor}55 0%, ${glowColor}11 50%, transparent 80%)`
            }}
          />
        )}

        {/* Crisp Shadow beneath cut-out letter */}
        <div 
          className="absolute bottom-6 w-3/4 h-8 rounded-[100%] bg-black/60 filter blur-xl pointer-events-none"
        />

        {/* Project Image */}
        <img
          src={displayImage}
          alt={t(project.title, project.titleAr)}
          className={`relative z-10 max-h-full max-w-full object-contain p-4 transition-all duration-700 ${
            isIlluminated 
              ? 'filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] brightness-105' 
              : 'filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] brightness-90 contrast-95'
          }`}
          referrerPolicy="no-referrer"
        />

        {/* Cutout Watermark Stamp */}
        <div className="absolute bottom-3 right-3 z-20 pointer-events-none">
          <div className="bg-black/75 backdrop-blur-xs border border-white/10 px-2.5 py-1 rounded-xs flex items-center gap-1.5 text-[10px] font-mono text-[#DDD]">
            <ShieldCheck className="w-3 h-3 text-[#E60000]" />
            <span>SIGN ONE • {project.year}</span>
          </div>
        </div>

        {/* Sign Type Badge (Top Left) */}
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          <div className="bg-black/85 backdrop-blur-xs border border-white/15 px-3 py-1 rounded-xs text-[11px] font-mono font-bold text-white shadow-lg">
            {t(project.signType || project.category, project.signTypeAr || project.categoryAr)}
          </div>
        </div>
      </div>

      {/* Engineering Specs & Actions Footer */}
      <div className="p-4 sm:p-5 bg-[#121212] border-t border-[#202020] space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-[11px] font-mono text-[#E60000] font-bold uppercase tracking-wider">
              {project.client} • {t(project.location, project.locationAr)}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {t(project.title, project.titleAr)}
            </h3>
          </div>

          {onNavigate && (
            <button
              onClick={() => onNavigate(`/projects/${project.slug}`)}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-colors shrink-0"
            >
              <span>{t('PROJECT DETAILS', 'تفاصيل المشروع')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Material Specs Chips */}
        <div className="pt-2 border-t border-[#1c1c1c] flex flex-wrap items-center gap-1.5 text-[11px] text-[#888]">
          <span className="font-mono text-[#AAA]">{t('Specs:', 'المواصفات:')}</span>
          {project.materials.slice(0, 3).map((mat, i) => (
            <span key={i} className="px-2 py-0.5 bg-[#1a1a1a] border border-[#2a2a2a] text-[#BBB] rounded-xs">
              {project.materialsAr && project.materialsAr[i] ? t(mat, project.materialsAr[i]) : mat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
