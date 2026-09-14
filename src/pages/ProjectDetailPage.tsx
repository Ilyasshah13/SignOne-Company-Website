import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { initialProjects } from '../data/initialData';
import { ProjectLightbox } from '../components/ui/ProjectLightbox';
import { StudioCutoutViewer } from '../components/ui/StudioCutoutViewer';
import { 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Building2, 
  Layers, 
  ShieldAlert, 
  CheckCircle2, 
  Maximize2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug, onNavigate }) => {
  const { t, isRTL } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const currentIndex = initialProjects.findIndex(p => p.slug === slug);
  const project = currentIndex !== -1 ? initialProjects[currentIndex] : initialProjects[0];
  const prevProject = initialProjects[(currentIndex - 1 + initialProjects.length) % initialProjects.length];
  const nextProject = initialProjects[(currentIndex + 1) % initialProjects.length];

  const galleryImages = [project.featuredImage, ...project.gallery];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Lightbox component */}
      {lightboxOpen && (
        <ProjectLightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % galleryImages.length)}
          onPrev={() => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
        />
      )}

      {/* FULL-SCREEN HERO */}
      <section className="relative min-h-[75vh] flex items-end justify-start p-6 sm:p-12 lg:p-20 border-b border-[#1c1c1c] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={project.featuredImage}
            alt={project.title}
            className="w-full h-full object-cover filter contrast-[1.1] brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl space-y-4">
          <button
            onClick={() => onNavigate('/projects')}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#AAA] hover:text-white uppercase tracking-wider transition-colors mb-2"
          >
            {isRTL ? <ArrowRight className="w-3.5 h-3.5 text-[#E60000]" /> : <ArrowLeft className="w-3.5 h-3.5 text-[#E60000]" />}
            <span>{t('BACK TO PROJECTS', 'العودة للمشاريع')}</span>
          </button>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#DDD]">
            <span className="px-2.5 py-1 bg-[#E60000] text-white font-bold">{project.year}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#E60000]" />
              <span>{t(project.location, project.locationAr)}</span>
            </span>
            <span>•</span>
            <span>{t(project.category, project.categoryAr)}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            {t(project.title, project.titleAr)}
          </h1>

          <div className="text-sm font-semibold text-[#CCC]">
            {t('Client:', 'العميل:')} <span className="text-white">{project.client}</span>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW & SPECS */}
      <section className="py-16 px-4 sm:px-8 border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Story */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#E60000]">
                {t('PROJECT OVERVIEW', 'نبذة عن المشروع')}
              </h2>
              <p className="text-base text-[#DDD] leading-relaxed">
                {t(project.description, project.descriptionAr)}
              </p>
            </div>

            {/* Studio Cutout & Lighting Simulator */}
            {(project.hasCutoutMode || project.cutoutImage) && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E60000] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E60000] animate-ping inline-block"></span>
                    {t('ISOLATED SIGNAGE & 3D ILLUMINATION INSPECTION', 'فحص اللوحة المعزولة ومحاكاة الإضاءة')}
                  </h3>
                  <span className="text-[11px] font-mono text-[#888]">
                    {t('Toggle Day / Night Mode to simulate LED glow', 'بدّل بين وضعي النهار والليل لمعاينة توهج الـ LED')}
                  </span>
                </div>
                <StudioCutoutViewer 
                  project={project}
                  onOpenLightbox={() => setLightboxIndex(0)}
                />
              </div>
            )}

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-[#121212] border border-[#262626] rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E60000]">
                  <ShieldAlert className="w-4 h-4" />
                  <span>{t('THE CHALLENGE', 'التحدي الهندسي')}</span>
                </div>
                <p className="text-xs text-[#999] leading-relaxed">
                  {t(project.challenge, project.challengeAr)}
                </p>
              </div>

              <div className="p-6 bg-[#121212] border border-[#262626] rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00C853]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t('THE SOLUTION', 'الحل والتنفيذ')}</span>
                </div>
                <p className="text-xs text-[#999] leading-relaxed">
                  {t(project.solution, project.solutionAr)}
                </p>
              </div>
            </div>

            {/* Engineering & Manufacturing Breakdown */}
            {(project.designDescription || project.manufacturingDescription || project.installationDescription) && (
              <div className="space-y-6 pt-4 border-t border-[#1c1c1c]">
                <h3 className="text-lg font-bold uppercase text-white tracking-wide">
                  {t('TECHNICAL EXECUTION BREAKDOWN', 'تفاصيل التنفيذ الفني')}
                </h3>
                <div className="space-y-4 text-xs text-[#AAA]">
                  {project.designDescription && (
                    <div className="p-5 bg-[#101010] border border-[#202020] rounded-sm">
                      <span className="font-bold text-white block mb-1 uppercase tracking-wider">{t('Design & 3D Modeling:', 'التصميم والنمذجة ثلاثية الأبعاد:')}</span>
                      <p>{t(project.designDescription, project.designDescriptionAr || '')}</p>
                    </div>
                  )}
                  {project.manufacturingDescription && (
                    <div className="p-5 bg-[#101010] border border-[#202020] rounded-sm">
                      <span className="font-bold text-white block mb-1 uppercase tracking-wider">{t('Manufacturing & CNC Precision:', 'التصنيع والقص الرقمي:')}</span>
                      <p>{t(project.manufacturingDescription, project.manufacturingDescriptionAr || '')}</p>
                    </div>
                  )}
                  {project.installationDescription && (
                    <div className="p-5 bg-[#101010] border border-[#202020] rounded-sm">
                      <span className="font-bold text-white block mb-1 uppercase tracking-wider">{t('On-Site Rigging & Safety Handover:', 'التركيب الميداني واختبارات الأمان:')}</span>
                      <p>{t(project.installationDescription, project.installationDescriptionAr || '')}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* GALLERY */}
            <div className="space-y-4 pt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold uppercase text-white">
                  {t('PROJECT PHOTO ARCHIVE', 'أرشيف صور المشروع')}
                </h3>
                <span className="text-xs text-[#666] font-mono">{galleryImages.length} {t('Photos', 'صور')}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="relative h-64 rounded-sm overflow-hidden border border-[#222] group cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`${project.title} detail ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-3 bg-black/70 rounded-full border border-white/20 text-white">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Meta Data */}
          <div className="lg:col-span-4 space-y-6">
            {/* Project Specifications Card */}
            <div className="p-6 bg-[#121212] border border-[#222] rounded-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-[#222] pb-3">
                {t('PROJECT SPECIFICATIONS', 'المواصفات الهندسية')}
              </h4>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[#666] block uppercase tracking-wider mb-0.5">{t('Client', 'العميل')}</span>
                  <span className="text-white font-medium">{project.client}</span>
                </div>
                <div>
                  <span className="text-[#666] block uppercase tracking-wider mb-0.5">{t('Location', 'الموقع')}</span>
                  <span className="text-white font-medium">{t(project.location, project.locationAr)}</span>
                </div>
                <div>
                  <span className="text-[#666] block uppercase tracking-wider mb-0.5">{t('Year Completed', 'سنة الإنجاز')}</span>
                  <span className="text-white font-mono">{project.year}</span>
                </div>
                <div>
                  <span className="text-[#666] block uppercase tracking-wider mb-0.5">{t('Sector', 'القطاع')}</span>
                  <span className="text-white font-medium">{t(project.category, project.categoryAr)}</span>
                </div>
              </div>
            </div>

            {/* Services Deployed */}
            <div className="p-6 bg-[#121212] border border-[#222] rounded-sm space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-[#222] pb-3">
                {t('SERVICES APPLIED', 'الخدمات المنفذة')}
              </h4>
              <ul className="space-y-2 text-xs text-[#CCC]">
                {project.services.map((srv, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E60000]"></span>
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials Applied */}
            <div className="p-6 bg-[#121212] border border-[#222] rounded-sm space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-[#222] pb-3">
                {t('MATERIALS & SUBSTRATES', 'المواد والخامات المستخدمة')}
              </h4>
              <ul className="space-y-2 text-xs text-[#CCC]">
                {project.materials.map((mat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#555]"></span>
                    <span>{isRTL && project.materialsAr ? project.materialsAr[idx] : mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote Prompt */}
            <div className="p-6 bg-[#151515] border border-[#2d2d2d] rounded-sm text-center space-y-3">
              <h4 className="text-sm font-bold uppercase text-white">{t('PLANNING A SIMILAR PROJECT?', 'تخطط لمشروع مماثل؟')}</h4>
              <p className="text-xs text-[#888]">
                {t('Sign One’s project directors can assist you with preliminary budgeting and architectural advice.', 'فريقنا الهندسي جاهز لمساعدتك في تقدير التكاليف وتقديم الاستشارات.')}
              </p>
              <button
                onClick={() => onNavigate('/quote')}
                className="w-full py-3 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors"
              >
                {t('GET A QUOTE', 'طلب عرض سعر')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIOUS / NEXT PROJECT NAVIGATION */}
      <section className="py-12 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => onNavigate(`/projects/${prevProject.slug}`)}
            className="flex items-center gap-3 text-left group"
          >
            <div className="p-3 bg-[#181818] border border-[#333] group-hover:border-[#E60000] rounded-sm">
              <ChevronLeft className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono text-[#666] block">{t('PREVIOUS PROJECT', 'المشروع السابق')}</span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#E60000] transition-colors">{t(prevProject.title, prevProject.titleAr)}</span>
            </div>
          </button>

          <button
            onClick={() => onNavigate(`/projects/${nextProject.slug}`)}
            className="flex items-center gap-3 text-right group"
          >
            <div>
              <span className="text-[10px] uppercase font-mono text-[#666] block">{t('NEXT PROJECT', 'المشروع التالي')}</span>
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#E60000] transition-colors">{t(nextProject.title, nextProject.titleAr)}</span>
            </div>
            <div className="p-3 bg-[#181818] border border-[#333] group-hover:border-[#E60000] rounded-sm">
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};
