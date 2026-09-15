import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowRight, 
  ArrowLeft, 
  ChevronDown, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Hammer, 
  Wrench, 
  MapPin, 
  Building2, 
  Award, 
  Eye, 
  Sparkles,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { 
  initialServices, 
  initialProjects, 
  initialClients,
  initialIndustries, 
  initialMaterials, 
  processSteps, 
  saudiCoverageCities, 
  initialSiteSettings 
} from '../data/initialData';
import { CutoutProjectsShowcase } from '../components/ui/CutoutProjectsShowcase';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();
  const [activeProjectFilter, setActiveProjectFilter] = useState('ALL');
  const [activeProcessTab, setActiveProcessTab] = useState(0);
  const [activeHeroImage, setActiveHeroImage] = useState(0);

  const heroShowcaseImages = [
    {
      url: "https://signone.sa/wp-content/uploads/2026/06/about.jpg",
      title: t('Architectural Facades & Sky Signage', 'واجهات معمارية ولوحات الأبراج'),
      tag: t('Turnkey Project Execution', 'تنفيذ مشاريع متكامل')
    },
    {
      url: "https://signone.sa/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-29-at-13.13.34-1024x768.jpeg",
      title: t('3D Letters & LED Cleanroom Assembly', 'تصنيع الحروف البارزة وتجميع LED'),
      tag: t('In-House Saudi Factory', 'المصنع المركزي بالرياض')
    },
    {
      url: "https://signone.sa/wp-content/uploads/2026/06/cladding-work-in-saudi-arabia-1200x800-1-1024x683.webp",
      title: t('Fire-Rated Aluminum Cladding (ACP)', 'كلادينج ألمنيوم مقاوم للحريق A2'),
      tag: t('SASO & Civil Defense Certified', 'مطابق للمواصفات السعودية والدفاع المدني')
    }
  ];

  const categories = [
    'ALL',
    'Industrial & Manufacturing',
    'Commercial & Cladding',
    'Retail & Commercial',
    'Giga Projects & Construction',
    'Corporate & Towers'
  ];

  const filteredProjects = activeProjectFilter === 'ALL'
    ? initialProjects
    : initialProjects.filter(p => p.category.toLowerCase().includes(activeProjectFilter.toLowerCase()));

  const featuredProject = initialProjects[0];

  return (
    <div className="bg-[#080808] text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-[#1c1c1c] py-16 sm:py-24">
        {/* Background architectural image with dark moody gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://signone.sa/wp-content/uploads/2026/06/1.jpg"
            alt="Architectural Signage & Facade Manufacturing Factory"
            className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-[1.1] scale-105 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#E60000_1px,transparent_1px)] [background-size:32px_32px] opacity-10"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Headline, Description & CTAs (Free of company name) */}
            <div className="lg:col-span-7 flex flex-col items-start justify-center">
              {/* Small technical label */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#141414]/90 border border-[#2d2d2d] rounded-sm text-xs uppercase tracking-widest text-[#DDD] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#E60000] shadow-[0_0_8px_#E60000]"></span>
                <span>{t('SAUDI SIGNAGE & ARCHITECTURAL SOLUTIONS', 'حلول اللوحات والتصميم المعماري في المملكة')}</span>
              </div>

              {/* Dramatic H1 */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase max-w-4xl leading-[1.08] mb-6">
                {t('WE BUILD BRANDS', 'نبني علامات تجارية')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F0F0F0] to-[#888]">
                  {t('THAT STAND OUT.', 'تتميز وتلهم.')}
                </span>
              </h1>

              {/* Supporting text - Explicitly free of company name */}
              <p className="text-base sm:text-xl text-[#A5A5A5] max-w-2xl font-normal leading-relaxed mb-8">
                {t(
                  'From design and engineering to manufacturing and installation, delivering complete signage and architectural solutions across Saudi Arabia.',
                  'من التصميم والهندسة الإنشائية إلى التصنيع والتركيب، حلول معمارية وإعلانية متكاملة وشاملة في جميع أنحاء المملكة.'
                )}
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => onNavigate('/quote')}
                  className="w-full sm:w-auto px-8 py-4 bg-[#E60000] hover:bg-[#CC0000] text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-200 shadow-xl shadow-red-950/50 flex items-center justify-center gap-2 group"
                >
                  <span>{t('GET A FREE QUOTE', 'طلب عرض سعر مجاني')}</span>
                  {isRTL ? (
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
                <button
                  onClick={() => onNavigate('/projects')}
                  className="w-full sm:w-auto px-8 py-4 bg-[#141414] hover:bg-[#1f1f1f] text-white font-bold text-xs uppercase tracking-widest border border-[#333] hover:border-white rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>{t('VIEW PROJECTS', 'معرض المشاريع')}</span>
                </button>
              </div>

              {/* Stats quick bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 pt-8 border-t border-white/10 w-full">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">{initialSiteSettings.stats.projectsCount}</div>
                  <div className="text-[11px] uppercase tracking-wider text-[#888] mt-1">{t('Delivered Projects', 'مشروع منجز بالمملكة')}</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">{initialSiteSettings.stats.factoryAreaM2}</div>
                  <div className="text-[11px] uppercase tracking-wider text-[#888] mt-1">{t('Production Facility', 'مساحة المصنع المركزي')}</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">{initialSiteSettings.stats.coverageCities}</div>
                  <div className="text-[11px] uppercase tracking-wider text-[#888] mt-1">{t('Saudi Regions Covered', 'منطقة مغطاة بالمملكة')}</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">SASO / A2</div>
                  <div className="text-[11px] uppercase tracking-wider text-[#888] mt-1">{t('Civil Defense Safety', 'شهادات الجودة والسلامة')}</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Area Featured Showcase Image */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative border border-[#2d2d2d] bg-[#121212]/95 p-3 rounded-sm shadow-2xl backdrop-blur-sm group">
                {/* Image display */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-xs bg-[#1a1a1a]">
                  <img
                    src={heroShowcaseImages[activeHeroImage].url}
                    alt={heroShowcaseImages[activeHeroImage].title}
                    className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.08] transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                  {/* Top Status Tag */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-[#EEE] rounded-xs flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      {heroShowcaseImages[activeHeroImage].tag}
                    </span>
                    <span className="px-2.5 py-1 bg-[#E60000] text-white text-[10px] font-bold uppercase tracking-widest rounded-xs">
                      ISO 9001:2015
                    </span>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-wide leading-snug drop-shadow-md">
                      {heroShowcaseImages[activeHeroImage].title}
                    </h3>
                  </div>
                </div>

                {/* Switcher Thumbnails */}
                <div className="grid grid-cols-3 gap-2 mt-3">
                  {heroShowcaseImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveHeroImage(idx)}
                      className={`relative aspect-[16/10] overflow-hidden rounded-xs border transition-all duration-200 ${
                        activeHeroImage === idx
                          ? 'border-[#E60000] ring-1 ring-[#E60000] opacity-100 scale-[1.02]'
                          : 'border-[#333] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.url}
                        alt=""
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-[10px] uppercase tracking-widest text-[#666]">
          <span>{t('SCROLL TO EXPLORE', 'مرر للأسفل للاستكشاف')}</span>
          <ChevronDown className="w-4 h-4 animate-bounce mt-1 text-[#E60000]" />
        </div>
      </section>

      {/* 1.5 SIGNATURE CAPABILITIES CARDS (Inspired directly by signone.sa hero cards) */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 -mt-6 sm:-mt-10 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1: Signage */}
          <div
            onClick={() => onNavigate('/services/3d-letters')}
            className="group relative h-44 sm:h-48 overflow-hidden rounded-sm border border-[#2b2b2b] bg-[#141414] cursor-pointer transition-all duration-300 hover:border-[#E60000] shadow-xl"
          >
            <img
              src="https://signone.sa/wp-content/uploads/2026/06/2.jpg"
              alt="Signage & 3D Letters"
              className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1] transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <span className="text-[10px] font-mono text-[#E60000] uppercase tracking-widest mb-1">01 / DIVISION</span>
              <h3 className="text-lg sm:text-xl font-black uppercase text-white tracking-tight flex items-center justify-between">
                <span>{t('Signage & 3D Letters', 'اللوحات والحروف البارزة')}</span>
                <ArrowRight className="w-4 h-4 text-[#888] group-hover:text-[#E60000] group-hover:translate-x-1 transition-all" />
              </h3>
            </div>
          </div>

          {/* Card 2: Aluminum Cladding */}
          <div
            onClick={() => onNavigate('/services/aluminum-cladding')}
            className="group relative h-44 sm:h-48 overflow-hidden rounded-sm border border-[#2b2b2b] bg-[#141414] cursor-pointer transition-all duration-300 hover:border-[#E60000] shadow-xl"
          >
            <img
              src="https://signone.sa/wp-content/uploads/2026/06/4.jpg"
              alt="Aluminum Cladding"
              className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1] transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <span className="text-[10px] font-mono text-[#E60000] uppercase tracking-widest mb-1">02 / DIVISION</span>
              <h3 className="text-lg sm:text-xl font-black uppercase text-white tracking-tight flex items-center justify-between">
                <span>{t('Aluminum Cladding (ACP)', 'كلادينج الألمنيوم المركب')}</span>
                <ArrowRight className="w-4 h-4 text-[#888] group-hover:text-[#E60000] group-hover:translate-x-1 transition-all" />
              </h3>
            </div>
          </div>

          {/* Card 3: Fence Solutions */}
          <div
            onClick={() => onNavigate('/services/fence-solutions')}
            className="group relative h-44 sm:h-48 overflow-hidden rounded-sm border border-[#2b2b2b] bg-[#141414] cursor-pointer transition-all duration-300 hover:border-[#E60000] shadow-xl"
          >
            <img
              src="https://signone.sa/wp-content/uploads/2026/06/1-1.jpg"
              alt="Fence Solutions & Hoarding"
              className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1] transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <span className="text-[10px] font-mono text-[#E60000] uppercase tracking-widest mb-1">03 / DIVISION</span>
              <h3 className="text-lg sm:text-xl font-black uppercase text-white tracking-tight flex items-center justify-between">
                <span>{t('Fence Solutions & Hoarding', 'حلول الأسوار والأسوار الإنشائية')}</span>
                <ArrowRight className="w-4 h-4 text-[#888] group-hover:text-[#E60000] group-hover:translate-x-1 transition-all" />
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOMEPAGE INTRO (Editorial Section) */}
      <section className="py-24 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#E60000]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E60000]">
                  {t('MORE THAN SIGNAGE', 'أكثر من مجرد لوحات')}
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                {t(
                  'Physical Brand Experiences Engineered for Saudi Environments.',
                  'تجارب بصرية معمارية مهندسة لبيئات المملكة الاستثنائية.'
                )}
              </h2>
              <p className="text-base sm:text-lg text-[#999] leading-relaxed">
                {t(
                  'Sign One combines creative design, technical engineering and manufacturing capability to create physical brand experiences for commercial, corporate and architectural environments. We bridge the gap between architectural imagination and physical permanence.',
                  'تجمع ساين ون بين التصميم الابتكاري، والهندسة الإنشائية، والقدرات التصنيعية المتقدمة لصناعة حضور بصري متفرد للشركات والمباني التجارية والمعمارية. نحول الرؤى الطموحة إلى واقع ملموس يدوم لأجيال.'
                )}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-[#E60000] transition-colors"
                >
                  <span>{t('DISCOVER SIGN ONE', 'اكتشف قصة ساين ون')}</span>
                  {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Asymmetric Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-[#262626] p-2 bg-[#121212] rounded-sm shadow-2xl">
                <img
                  src="https://signone.sa/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-29-at-13.13.34-1.jpeg"
                  alt="Precision Architectural Fabrication"
                  className="w-full h-80 sm:h-96 object-cover rounded-xs filter contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-[#E60000] text-white p-5 max-w-xs shadow-xl hidden sm:block">
                  <div className="text-xs uppercase tracking-wider font-mono font-bold">{t('ENGINEERED IN SAUDI', 'هندسة سعودية')}</div>
                  <div className="text-sm font-semibold mt-1">
                    {t('5-Axis CNC & Robotic Laser Precision', 'دقة ليزرية رقمية خماسية المحاور')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES BLOCKS (01 DESIGN, 02 ENGINEERING, 03 MANUFACTURING, 04 INSTALLATION) */}
      <section className="py-24 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#E60000] mb-2">
                {t('CORE PILLARS', 'الركائز الأساسية')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                {t('FOUR PILLARS OF EXECUTION', 'أركان التنفيذ الأربعة')}
              </h2>
            </div>
            <p className="text-xs text-[#777] max-w-xs uppercase tracking-wider">
              {t('Turnkey execution from conceptual sketches to skyscraper installations.', 'تنفيذ متكامل من أول سكتش وحتى تركيب الأبراج.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: t('DESIGN', 'التصميم'),
                subtitle: t('Architectural Vision & Brand Translation', 'الرؤية المعمارية وتجسيد الهوية'),
                desc: t('Translating brand guidelines into 3D physical reality with daylight and nocturnal photorealistic simulations.', 'تحويل أدلة الهوية البصرية إلى واقع ثلاثي الأبعاد مع محاكاة بصرية للنهار والليل.'),
                icon: Layers
              },
              {
                num: "02",
                title: t('ENGINEERING', 'الهندسة'),
                subtitle: t('Structural & Wind Load Calculations', 'الحسابات الإنشائية وأحمال الرياح'),
                desc: t('Rigid finite element stress modeling, anchor load calculation, SASO compliance, and stamped drawings.', 'حسابات دقيقة لأحمال الرياح والزلازل، وتصميم القواعد الخرسانية المعتمدة هندسياً.'),
                icon: Cpu
              },
              {
                num: "03",
                title: t('MANUFACTURING', 'التصنيع'),
                subtitle: t('Precision In-House Facility', 'مصنع متطور ومتكامل'),
                desc: t('Robotic fiber laser cutters, automated channel benders, certified welding, and electrostatic powder coating.', 'قص ليزري مؤتمت، ثني آلي للقنوات، لحام عالي الكفاءة، وطلاء كهروسكوني مقاوم.'),
                icon: Hammer
              },
              {
                num: "04",
                title: t('INSTALLATION', 'التركيب'),
                subtitle: t('Certified Rigging & Abseiling', 'فنيو تسلق ورافعات معتمدة'),
                desc: t('Turnkey on-site execution with hydraulic cranes, laser alignment, and strict Civil Defense safety protocols.', 'تركيب ميداني محترف باستخدام الرافعات والموازين الليزرية والالتزام بمعايير السلامة.'),
                icon: Wrench
              }
            ].map((cap) => (
              <div 
                key={cap.num}
                className="bg-[#121212] border border-[#202020] hover:border-[#E60000]/60 p-8 rounded-sm transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E60000]/5 -translate-y-12 translate-x-12 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#E60000]">{cap.num}</span>
                    <cap.icon className="w-5 h-5 text-[#666] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2 group-hover:text-[#E60000] transition-colors">
                    {cap.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#888] uppercase tracking-wider mb-4">
                    {cap.subtitle}
                  </div>
                  <p className="text-xs text-[#777] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
                <div className="pt-8 mt-auto">
                  <div className="w-full h-[1px] bg-[#222] group-hover:bg-[#E60000] transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION (Built on Precision) */}
      <section className="py-24 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left large image */}
            <div className="lg:col-span-6">
              <div className="relative border border-[#262626] rounded-sm overflow-hidden group">
                <img
                  src="https://signone.sa/wp-content/uploads/2026/06/1.jpg"
                  alt="Sign One Manufacturing Workshop"
                  className="w-full h-[450px] object-cover filter contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white">
                  <div>
                    <span className="font-mono text-[#E60000] font-bold">RIYADH HQ FACILITY</span>
                    <p className="text-[#AAA]">{t('State-of-the-art metal, acrylic, and cladding lines', 'خطوط إنتاج المعادن والأكريليك والكلادينج')}</p>
                  </div>
                  <span className="font-mono bg-black/60 px-2.5 py-1 border border-white/20">3,500 m²</span>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#E60000]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E60000]">
                  {t('BUILT ON PRECISION', 'بنيت على الدقة')}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                {t(
                  'Engineering Distinction Into Every Saudi Skyline.',
                  'نصيغ الفخامة والدقة في كل معلم معاري بالمملكة.'
                )}
              </h2>
              <p className="text-sm sm:text-base text-[#999] leading-relaxed">
                {t(
                  'At Sign One, precision is our standard. Our Riyadh facility is equipped with industrial fiber lasers, multi-spindle CNCs, computerized channel benders, and electrostatic powder coating booths. We take full ownership from the first architectural consultation to post-installation structural certification.',
                  'في ساين ون، الدقة ليست مجرد هدف بل معيار عمل يومي. يضم مجمعنا الصناعي في الرياض أحدث أجهزة الليزر الليفي، ومكائن السي إن سي خماسية المحاور، وأفران الطلاء الحراري. نتحمل المسؤولية الكاملة من أول اجتماع استشاري وحتى تسليم شهادات الاعتماد الهندسية بعد التركيب.'
                )}
              </p>
              <div className="grid grid-cols-2 gap-4 py-2 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E60000] shrink-0 mt-0.5" />
                  <span className="text-[#CCC]">{t('100% In-House Factory Quality Control', 'رقابة جودة شاملة 100% داخل مصنعنا')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E60000] shrink-0 mt-0.5" />
                  <span className="text-[#CCC]">{t('SASO & Civil Defense Fire A2 Rated', 'مطابقة لمواصفات الدفاع المدني وهيئة SASO')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E60000] shrink-0 mt-0.5" />
                  <span className="text-[#CCC]">{t('Tier-1 Weather-Sealed Samsung/Osram LEDs', 'وحدات LED معزولة ومقاومة للحرارة والرطوبة')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E60000] shrink-0 mt-0.5" />
                  <span className="text-[#CCC]">{t('Kingdom-Wide Field Installation Teams', 'فرق تركيب ميدانية تغطي كافة مناطق المملكة')}</span>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/about')}
                  className="px-6 py-3 bg-[#181818] hover:bg-[#252525] border border-[#333] hover:border-white text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors inline-flex items-center gap-2"
                >
                  <span>{t('ABOUT SIGN ONE', 'المزيد عن ساين ون')}</span>
                  {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="py-24 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#E60000] mb-2">
                {t('SIGN ONE CAPABILITIES', 'خدمات ساين ون المتخصصة')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                {t('ENGINEERED SERVICES', 'خدماتنا المعمارية والإعلانية')}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/services')}
              className="text-xs font-bold uppercase tracking-widest text-[#E60000] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>{t('VIEW ALL SERVICES', 'عرض جميع الخدمات')}</span>
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initialServices.slice(0, 6).map((service) => (
              <div
                key={service.id}
                onClick={() => onNavigate(`/services/${service.slug}`)}
                className="bg-[#121212] border border-[#202020] hover:border-[#E60000] rounded-sm overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Hero Image */}
                  <div className="relative h-56 overflow-hidden">
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

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#E60000] transition-colors mb-2">
                      {t(service.title, service.titleAr)}
                    </h3>
                    <p className="text-xs text-[#888] leading-relaxed line-clamp-2 mb-4">
                      {t(service.description, service.descriptionAr)}
                    </p>

                    {/* Materials tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {service.materials.slice(0, 2).map((m, idx) => (
                        <span key={idx} className="text-[10px] bg-[#1a1a1a] text-[#aaa] px-2 py-0.5 rounded-xs border border-[#2a2a2a]">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="pt-4 border-t border-[#222] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#999] group-hover:text-white transition-colors">
                    <span>{t('VIEW SERVICE', 'تفاصيل الخدمة')}</span>
                    {isRTL ? (
                      <ArrowLeft className="w-4 h-4 text-[#E60000] group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-[#E60000] group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROJECT SPOTLIGHT */}
      <section className="py-24 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-[#E60000]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E60000]">
              {t('PROJECT SPOTLIGHT', 'مشروع مميز')}
            </span>
          </div>

          <div className="bg-[#121212] border border-[#252525] rounded-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
            <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[400px]">
              <img
                src={featuredProject.featuredImage}
                alt={featuredProject.title}
                className="w-full h-full object-cover filter contrast-[1.05]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallbackApplied) {
                    target.dataset.fallbackApplied = 'true';
                    target.src = '/projects/dar_global_sign_1789371745942.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#121212] hidden lg:block"></div>
              <div className="absolute top-4 left-4 font-mono text-xs bg-black/80 px-3 py-1 text-white border border-white/20">
                {t('COMPLETED PROJECT', 'مشروع منجز')} • {featuredProject.year}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="text-xs uppercase tracking-wider text-[#888] font-mono">
                  {t(featuredProject.category, featuredProject.categoryAr)} • {t(featuredProject.location, featuredProject.locationAr)}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                  {t(featuredProject.title, featuredProject.titleAr)}
                </h3>
                <p className="text-xs sm:text-sm text-[#999] leading-relaxed">
                  {t(featuredProject.description, featuredProject.descriptionAr)}
                </p>

                <div className="pt-3 space-y-2 text-xs border-t border-[#222]">
                  <div>
                    <span className="text-[#666] uppercase tracking-wider font-semibold">{t('Client:', 'العميل:')} </span>
                    <span className="text-[#DDD]">{featuredProject.client}</span>
                  </div>
                  <div>
                    <span className="text-[#666] uppercase tracking-wider font-semibold">{t('Challenge:', 'التحدي الإنشائي:')} </span>
                    <span className="text-[#AAA] line-clamp-2">{t(featuredProject.challenge, featuredProject.challengeAr)}</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate(`/projects/${featuredProject.slug}`)}
                  className="w-full py-3.5 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-red-950/40"
                >
                  <span>{t('EXPLORE CASE STUDY', 'استعراض دراسة المشروع')}</span>
                  {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 INTERACTIVE STUDIO CUTOUT & REALIZED SIGNAGE SHOWCASE */}
      <CutoutProjectsShowcase onNavigate={onNavigate} />

      {/* 7. INDUSTRIES GRID */}
      <section className="py-24 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#E60000] mb-2">
                {t('SECTOR SOLUTIONS', 'حلول القطاعات')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                {t('INDUSTRIES WE ELEVATE', 'قطاعات الأعمال التي نخدمها')}
              </h2>
            </div>
            <p className="text-xs text-[#777] max-w-xs uppercase tracking-wider">
              {t('Specialized architectural specs tailored to sector requirements.', 'مواصفات ومعايير معمارية مصممة خصيصاً لكل قطاع.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialIndustries.map((ind) => (
              <div
                key={ind.id}
                onClick={() => onNavigate(`/industries/${ind.slug}`)}
                className="bg-[#121212] border border-[#202020] hover:border-[#E60000]/60 p-6 rounded-sm cursor-pointer group transition-all duration-300"
              >
                <div className="h-44 rounded-sm overflow-hidden mb-5 relative">
                  <img
                    src={ind.heroImage}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-3 text-xs font-mono font-bold text-white">
                    {t(ind.title, ind.titleAr)}
                  </span>
                </div>
                <p className="text-xs text-[#888] leading-relaxed line-clamp-2 mb-4">
                  {t(ind.description, ind.descriptionAr)}
                </p>
                <div className="text-xs font-bold uppercase tracking-wider text-[#999] group-hover:text-white flex items-center justify-between pt-2 border-t border-[#222]">
                  <span>{t('EXPLORE INDUSTRY', 'استعراض القطاع')}</span>
                  {isRTL ? <ArrowLeft className="w-3.5 h-3.5 text-[#E60000]" /> : <ArrowRight className="w-3.5 h-3.5 text-[#E60000]" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MANUFACTURING PAGE PREVIEW */}
      <section className="py-24 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E60000]">
              <span>{t('IN-HOUSE FACTORY CAPABILITY', 'قدرات التصنيع الميدانية')}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              {t('DESIGNED HERE. MANUFACTURED HERE. INSTALLED BY US.', 'صممت هنا. صنعت هنا. وثبتت بأيدينا.')}
            </h2>
            <p className="text-xs sm:text-sm text-[#888]">
              {t('Complete mechanical, electrical, and surface finishing control under one Saudi roof.', 'تحكم ميكانيكي وكهربائي وتشغيلي متكامل تحت سقف صناعي واحد بالرياض.')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: t('5-Axis CNC Milling', 'تفريز CNC خماسي المحاور'), spec: "0.05mm Tolerance", img: "https://signone.sa/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-29-at-13.13.34-1024x768.jpeg" },
              { title: t('Fiber Laser Cutting', 'قص الليزر الليفي للمعادن'), spec: "Up to 20mm Steel", img: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80" },
              { title: t('Electrostatic Booth', 'أفران طلاء حراري'), spec: "RAL Certified Powder", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" },
              { title: t('LED Clean Assembly', 'تجميع إلكتروني معزول'), spec: "IP68 Dust & Water Seal", img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80" }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#141414] border border-[#222] p-4 rounded-sm space-y-3">
                <img src={item.img} alt={item.title} className="w-full h-32 object-cover rounded-xs filter contrast-[1.05]" referrerPolicy="no-referrer" />
                <div>
                  <div className="text-xs font-bold text-white">{item.title}</div>
                  <div className="text-[10px] font-mono text-[#E60000] mt-0.5">{item.spec}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('/manufacturing')}
              className="px-8 py-3.5 bg-[#181818] hover:bg-[#222] border border-[#333] hover:border-white text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors inline-flex items-center gap-2"
            >
              <span>{t('TOUR OUR MANUFACTURING CAPABILITIES', 'جولة في مصنع ساين ون')}</span>
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </section>

      {/* 9. MATERIALS SPECIFIER */}
      <section className="py-24 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#E60000] mb-2">
                {t('MATERIAL SPECIFICATIONS', 'المواد والخامات المعتمدة')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                {t('ARCHITECTURAL GRADE SUBSTRATES', 'خامات معمارية فائقة التحمل')}
              </h2>
            </div>
            <p className="text-xs text-[#777] max-w-xs uppercase tracking-wider">
              {t('Selected specifically to withstand desert UV, sandstorms, and coastal salinity.', 'مختارة خصيصاً لمقاومة شمس الصحراء والعواصف الرملية ورطوبة السواحل.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialMaterials.map((mat) => (
              <div key={mat.id} className="bg-[#121212] border border-[#202020] p-6 rounded-sm space-y-4">
                <div className="h-40 rounded-sm overflow-hidden relative">
                  <img src={mat.image} alt={mat.name} className="w-full h-full object-cover filter contrast-[1.05]" referrerPolicy="no-referrer" />
                  <span className="absolute bottom-2 left-2 text-[10px] bg-black/80 text-white px-2 py-0.5 border border-white/10 font-mono">
                    {t(mat.name, mat.nameAr)}
                  </span>
                </div>
                <p className="text-xs text-[#888] leading-relaxed">
                  {t(mat.description, mat.descriptionAr)}
                </p>
                <div className="pt-2 border-t border-[#222] text-[11px]">
                  <span className="text-[#666] uppercase tracking-wider block font-semibold">{t('Finishes:', 'التشطيبات:')}</span>
                  <span className="text-[#DDD]">{t(mat.finish, mat.finishAr)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. 7-STEP ARCHITECTURAL PROCESS */}
      <section className="py-24 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#E60000] mb-2">
                {t('SYSTEMATIC WORKFLOW', 'منهجية العمل المتقنة')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                {t('THE 7-STEP EXECUTION PROCESS', 'مراحل التنفيذ السبع')}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/process')}
              className="text-xs font-bold uppercase tracking-widest text-[#E60000] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>{t('DETAILED PROCESS BREAKDOWN', 'تفاصيل مراحل العمل')}</span>
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className={`p-5 rounded-sm border transition-all duration-200 flex flex-col justify-between ${
                  activeProcessTab === idx 
                    ? 'bg-[#181818] border-[#E60000]' 
                    : 'bg-[#121212] border-[#222] hover:border-[#333]'
                }`}
                onClick={() => setActiveProcessTab(idx)}
              >
                <div>
                  <div className="font-mono text-xs font-bold text-[#E60000] mb-3">{step.step}</div>
                  <div className="text-xs font-bold uppercase tracking-tight text-white mb-2">
                    {t(step.title, step.titleAr)}
                  </div>
                  <p className="text-[11px] text-[#777] leading-relaxed">
                    {t(step.description, step.descriptionAr)}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#222]">
                  <span className="text-[10px] text-[#555] uppercase tracking-widest font-mono">STEP {step.step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PROJECTS PORTFOLIO PREVIEW */}
      <section className="py-24 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#E60000] mb-2">
                {t('REAL PROJECT PORTFOLIO', 'معرض المشاريع المنفذة')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                {t('PROVEN ARCHITECTURAL RESULTS', 'مشاريع تفخر بها المملكة')}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/projects')}
              className="text-xs font-bold uppercase tracking-widest text-[#E60000] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>{t('VIEW ALL PROJECTS', 'جميع المشاريع')}</span>
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveProjectFilter(cat)}
                className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-xs transition-colors ${
                  activeProjectFilter === cat
                    ? 'bg-[#E60000] text-white'
                    : 'bg-[#141414] text-[#888] hover:text-white border border-[#222]'
                }`}
              >
                {cat === 'ALL' ? t('ALL PROJECTS', 'جميع المشاريع') : cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, 6).map((project) => (
              <div
                key={project.id}
                onClick={() => onNavigate(`/projects/${project.slug}`)}
                className="bg-[#121212] border border-[#202020] hover:border-[#E60000] rounded-sm overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.fallbackApplied) {
                        target.dataset.fallbackApplied = 'true';
                        target.src = '/projects/dar_global_sign_1789371745942.jpg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 font-mono text-[10px] bg-black/80 px-2 py-1 text-white border border-white/20">
                    {project.year} • {t(project.category, project.categoryAr)}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#AAA]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#E60000]" />
                      <span>{t(project.location, project.locationAr)}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-bold text-white group-hover:text-[#E60000] transition-colors mb-2">
                    {t(project.title, project.titleAr)}
                  </h3>
                  <p className="text-xs text-[#888] leading-relaxed line-clamp-2 mb-4">
                    {t(project.description, project.descriptionAr)}
                  </p>
                  <div className="pt-3 border-t border-[#222] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#999] group-hover:text-white">
                    <span>{t('VIEW PROJECT', 'استعراض المشروع')}</span>
                    {isRTL ? <ArrowLeft className="w-4 h-4 text-[#E60000]" /> : <ArrowRight className="w-4 h-4 text-[#E60000]" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. WHY SIGN ONE (6 Capability Cards) */}
      <section className="py-24 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#E60000]">
              {t('WHY PARTNER WITH US', 'لماذا يختارنا كبار المطورين')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              {t('THE SIGN ONE ADVANTAGE', 'مزايا التعامل مع ساين ون')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: t('IN-HOUSE MANUFACTURING', 'تصنيع مركزي في مصنعنا'),
                desc: t('No third-party brokers. We fabricate under our direct supervisory control in Riyadh with 3,500m² capacity.', 'لا وسطاء ولا تأخير. نقوم بالتصنيع المباشر تحت إشرافنا الهندسي في الرياض بمساحة 3,500 متر مربع.')
              },
              {
                title: t('ENGINEERING PRECISION', 'دقة هندسية صارمة'),
                desc: t('Full structural wind load certifications, stamped Civil Defense approvals, and electrical thermal audits.', 'اعتمادات إنشائية لأحمال الرياح، ومطابقة لاشتراطات الدفاع المدني، وفحص حراري للدوائر الكهربائية.')
              },
              {
                title: t('PREMIUM MATERIALS', 'خامات ومواد معتمدة عالمياً'),
                desc: t('Marine 316 stainless steel, A2 fire-retardant composite cladding, and Tier-1 Samsung/Osram optics.', 'ستانلس ستيل بحري 316، وكلادينج مقاوم للحريق تصنيف A2، ووحدات إضاءة سامسونج وأوسرام الأصلية.')
              },
              {
                title: t('PROFESSIONAL INSTALLATION', 'تركيب ميداني احترافي'),
                desc: t('Licensed rigging specialists, crane logistics, night shifts, and minimal disruption to facility operations.', 'فنيو تركيب وتسلق معتمدون، معدات رفع هيدروليكية، وورديات ليلية لعدم تعطيل حركة المنشآت.')
              },
              {
                title: t('COMPLETE PROJECT MANAGEMENT', 'إدارة مشاريع متكاملة'),
                desc: t('Dedicated single point of contact from municipal permit drawings to handover and warranties.', 'مدير مشروع متخصص كنقطة تواصل واحدة من استخراج الرخص وحتى التسليم النهائي وشهادات الضمان.')
              },
              {
                title: t('CONSISTENT BRAND EXECUTION', 'تطبيق دقيق لأدلة الهوية'),
                desc: t('Micro-accurate PMS color matching, precision kerning, and architectural elegance for multi-site rollouts.', 'مطابقة تامة لألوان الشعار والخطوط المعتمدة عبر شبكات الفروع المتعددة في شتى مدن المملكة.')
              }
            ].map((adv, idx) => (
              <div key={idx} className="bg-[#121212] border border-[#202020] p-8 rounded-sm space-y-3">
                <div className="w-3 h-3 bg-[#E60000] mb-4"></div>
                <h3 className="text-base font-bold uppercase tracking-tight text-white">
                  {adv.title}
                </h3>
                <p className="text-xs text-[#888] leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CLIENTS & SECTORS */}
      <section className="py-20 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#080808]">
        <div className="max-w-7xl mx-auto text-center space-y-10">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#E60000]">
              {t('TRUSTED ACROSS SECTOR LEADERS IN SAUDI ARABIA', 'شركاء النجاح وكبرى القطاعات في المملكة')}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t('OUR VALUED CLIENTS & PARTNERS', 'عملاؤنا وشركاء مسيرتنا')}
            </h3>
            <p className="text-xs text-[#777] max-w-xl mx-auto">
              {t(
                'Proudly collaborating with leading government entities, commercial giants, and giga-project contractors.',
                'نفخر بالتعاون مع كبرى الجهات الحكومية والشركات الرائدة والمقاولين في أضخم مشاريع المملكة.'
              )}
            </p>
          </div>

          {/* Authentic Client Logos Grid from signone.sa */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 sm:gap-4">
            {initialClients.slice(0, 28).map((client) => (
              <div 
                key={client.id} 
                className="bg-white p-3 sm:p-4 rounded-sm border border-[#222] hover:border-[#E60000] transition-all flex items-center justify-center group h-20 sm:h-24 shadow-sm"
              >
                <img 
                  src={client.logoUrl} 
                  alt={client.name} 
                  referrerPolicy="no-referrer"
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to client1.jpg if any specific logo fails
                    (e.target as HTMLImageElement).src = 'https://signone.sa/wp-content/uploads/2026/06/client1.jpg';
                  }}
                />
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="https://signone.sa/wp-content/uploads/2026/06/Signone_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#AAA] hover:text-[#E60000] transition-colors border-b border-[#333] hover:border-[#E60000] pb-1"
            >
              <span>{t('DOWNLOAD COMPLETE CLIENT LIST IN SIGN ONE BROCHURE (PDF)', 'تحميل قائمة العملاء الكاملة بملف الشركة (PDF)')}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 14. SAUDI COVERAGE */}
      <section className="py-24 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#E60000] mb-2">
                {t('KINGDOM-WIDE COVERAGE', 'التغطية الميدانية في المملكة')}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                {t('OPERATING ACROSS ALL SAUDI REGIONS', 'نصلك في جميع مدن ومناطق المملكة')}
              </h2>
            </div>
            <p className="text-xs text-[#777] max-w-xs uppercase tracking-wider">
              {t('Dedicated installation and maintenance logistical infrastructure.', 'بنية لوجستية متكاملة لفرق التركيب والصيانة الميدانية.')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {saudiCoverageCities.map((city, idx) => (
              <div key={idx} className="bg-[#121212] border border-[#202020] p-6 rounded-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#E60000] font-bold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{city.count}</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {t(city.name, city.nameAr)}
                </h3>
                <p className="text-xs text-[#777]">
                  {t(city.role, city.roleAr)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. FINAL CTA SECTION */}
      <section className="py-24 px-4 sm:px-8 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#E60000_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181818] border border-[#333] text-xs font-bold text-[#E60000] uppercase tracking-widest">
            <span>{t('READY TO MAKE YOUR BRAND VISIBLE?', 'هل أنت مستعد لإبراز علامتك التجارية؟')}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            {t('LET’S BUILD SOMETHING EXTRAORDINARY.', 'دعنا نشيد عملاً معمارياً استثنائياً.')}
          </h2>
          <p className="text-base sm:text-lg text-[#999] max-w-2xl mx-auto leading-relaxed">
            {t(
              'Tell us about your project and let Sign One turn your vision into a professionally manufactured and installed solution.',
              'أخبرنا عن تفاصيل مشروعك ودع فريق ساين ون يحول رؤيتك إلى واقع مصنع ومثبت بأعلى المعايير الاحترافية.'
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onNavigate('/quote')}
              className="px-8 py-4 bg-[#E60000] hover:bg-[#CC0000] text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all duration-200 shadow-xl shadow-red-950/60 flex items-center gap-2"
            >
              <span>{t('GET A FREE QUOTE', 'طلب عرض سعر مجاني')}</span>
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
            <a
              href="mailto:one@signone.sa"
              className="px-8 py-4 bg-[#141414] hover:bg-[#202020] hover:border-[#E60000] text-white font-bold text-xs uppercase tracking-widest border border-[#333] rounded-sm transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#E60000]"></span>
              {t('OFFICIAL INQUIRY (one@signone.sa)', 'مراسلة البريد الرسمي (one@signone.sa)')}
            </a>
          </div>

          <div className="pt-6 text-xs text-[#666] flex flex-wrap items-center justify-center gap-4">
            <span>{t('Direct Inquiries:', 'الاتصال المباشر:')} <a href="tel:+966560003156" className="text-white hover:text-[#E60000] font-mono" dir="ltr">+966 56 000 3156</a></span>
            <span>•</span>
            <span>{t('Head Office:', 'المكتب الرئيسي:')} {t('Macaroni St, Al-Azizia, Jeddah', 'شارع المكرونة، العزيزية، جدة')}</span>
            <span>•</span>
            <span>{t('Official Email:', 'البريد الرسمي:')} <a href="mailto:one@signone.sa" className="text-white hover:text-[#E60000] font-mono">one@signone.sa</a></span>
          </div>
        </div>
      </section>
    </div>
  );
};
