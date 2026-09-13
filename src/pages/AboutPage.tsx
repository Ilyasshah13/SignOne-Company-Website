import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  Award, 
  MapPin, 
  Building2, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Users,
  Compass,
  Zap
} from 'lucide-react';
import { initialSiteSettings } from '../data/initialData';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Header Banner */}
      <section className="relative py-24 px-4 sm:px-8 border-b border-[#1c1c1c] overflow-hidden bg-[#0e0e0e]">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://signone.sa/wp-content/uploads/2026/06/about.jpg"
            alt="Architectural Details & Facility"
            className="w-full h-full object-cover filter contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181818] border border-[#2e2e2e] text-xs uppercase tracking-widest text-[#E60000] font-bold">
            <span>{t('ABOUT SIGN ONE', 'عن شركة ساين ون')}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            {t('FROM CONCEPT TO CREATION.', 'من الفكرة إلى الإتقان.')}
          </h1>
          <p className="text-base sm:text-lg text-[#999] max-w-2xl mx-auto leading-relaxed">
            {t(
              'Sign One is a premier Saudi Arabian signage, architectural branding, cladding and engineering company headquartered in Riyadh.',
              'ساين ون هي شركة سعودية رائدة متخصصة في صناعة اللوحات الإعلانية، الهويات المعمارية، تكسية الواجهات والهندسة الإنشائية، ومقرها الرئيسي في الرياض.'
            )}
          </p>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="py-20 px-4 sm:px-8 border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#E60000]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E60000]">
                {t('OUR HERITAGE & VISION', 'رؤيتنا ورسالتنا')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">
              {t(
                'Transforming Physical Spaces Across the Kingdom.',
                'إعادة تشكيل الفضاءات المعمارية في المملكة برؤية طموحة.'
              )}
            </h2>
            <p className="text-sm text-[#999] leading-relaxed">
              {t(
                'Founded on the principle of uncompromising quality and technical rigor, Sign One has established itself as the trusted partner for major corporations, government institutions, developers, and luxury retailers in Saudi Arabia.',
                'تأسست ساين ون على مبدأ الجودة الصارمة والدقة الهندسية، ورسخت مكانتها كشريك استراتيجي موثوق لأكبر الشركات والمؤسسات الحكومية والمطورين العقاريين ومتاجر التجزئة الفاخرة بالمملكة.'
              )}
            </p>
            <p className="text-sm text-[#999] leading-relaxed">
              {t(
                'Aligned with Saudi Vision 2030, we invest heavily in local manufacturing capability, advanced automated CNC and laser equipment, and specialized engineering talents capable of handling mega-scale architectural developments.',
                'وتماشياً مع مستهدفات رؤية المملكة 2030، نواصل الاستثمار المكثف في تطوير الصناعة المحلية، واستقطاب أحدث تقنيات الليزر والتفريز الرقمي، وتأهيل الكفاءات الهندسية القادرة على إدارة أضخم المشاريع الإنشائية.'
              )}
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#121212] border border-[#222]">
                <div className="text-2xl font-black text-white font-mono">{initialSiteSettings.stats.projectsCount}</div>
                <div className="text-xs text-[#777] uppercase tracking-wider mt-1">{t('Delivered Projects', 'مشروع منجز')}</div>
              </div>
              <div className="p-4 bg-[#121212] border border-[#222]">
                <div className="text-2xl font-black text-white font-mono">{initialSiteSettings.stats.factoryAreaM2}</div>
                <div className="text-xs text-[#777] uppercase tracking-wider mt-1">{t('Manufacturing Facility', 'مساحة المصنع')}</div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://signone.sa/wp-content/uploads/2026/06/Signone_Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#1a1a1a] hover:bg-[#252525] border border-[#333] hover:border-[#E60000] text-xs font-bold uppercase tracking-wider text-white transition-colors flex items-center gap-2"
              >
                <span>{t('DOWNLOAD COMPANY PROFILE (PDF)', 'تحميل بروفايل الشركة (PDF)')}</span>
              </a>
              <a
                href="https://signone.sa/wp-content/uploads/2026/06/AQC-IAS-Logo-ISO-9001-1.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#1a1a1a] hover:bg-[#252525] border border-[#333] hover:border-[#E60000] text-xs font-bold uppercase tracking-wider text-[#aaa] hover:text-white transition-colors flex items-center gap-2"
              >
                <span>{t('ISO 9001:2015 CERTIFICATE', 'شهادة الأيزو 9001:2015')}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="border border-[#262626] p-2 bg-[#121212] rounded-sm shadow-2xl">
              <img
                src="https://signone.sa/wp-content/uploads/2026/06/1.jpg"
                alt="Sign One Industrial Complex Riyadh"
                className="w-full h-[460px] object-cover rounded-xs filter contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-[#0a0a0a]/90 backdrop-blur-md p-5 border border-white/10 text-xs text-[#AAA]">
                <span className="font-bold text-white block mb-1">{t('Prince Fahd Bin Salman Road, Riyadh', 'طريق الأمير فهد بن سلمان، الرياض')}</span>
                <span>{t('Serving corporate clients across all 13 provinces with turnkey field execution.', 'نخدم عملاءنا عبر كافة مناطق المملكة الـ 13 بفرق تركيب ميدانية متخصصة.')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#E60000]">
              {t('OUR GUIDING PRINCIPLES', 'قيمنا ومعاييرنا الهندسية')}
            </div>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">
              {t('WHY CLIENTS TRUST SIGN ONE', 'ركائز التميز في ساين ون')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121212] border border-[#202020] p-8 rounded-sm space-y-4">
              <div className="w-10 h-10 bg-[#E60000]/10 border border-[#E60000]/30 rounded flex items-center justify-center text-[#E60000]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase">{t('Total Quality Commitment', 'التزام الجودة المطلق')}</h3>
              <p className="text-xs text-[#888] leading-relaxed">
                {t(
                  'We adhere to rigorous quality checkpoints. From spectroscopic material testing to civil defense compliance, every detail is verified before dispatch.',
                  'نلتزم بأدق معايير الجودة وفحص الخامات ومطابقتها للمواصفات السعودية واشتراطات الدفاع المدني قبل مغادرتها خط الإنتاج.'
                )}
              </p>
            </div>

            <div className="bg-[#121212] border border-[#202020] p-8 rounded-sm space-y-4">
              <div className="w-10 h-10 bg-[#E60000]/10 border border-[#E60000]/30 rounded flex items-center justify-center text-[#E60000]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase">{t('Architectural Integrity', 'التوافق المعماري التام')}</h3>
              <p className="text-xs text-[#888] leading-relaxed">
                {t(
                  'We design signage not as an afterthought, but as an organic architectural element harmonizing with building facades, curtain walls, and interior palettes.',
                  'نصمم اللوحات كعنصر معماري أصيل يتناغم بانسيابية مع خطوط الواجهات والزجاج وتفاصيل التصميم الداخلي للمنشأة.'
                )}
              </p>
            </div>

            <div className="bg-[#121212] border border-[#202020] p-8 rounded-sm space-y-4">
              <div className="w-10 h-10 bg-[#E60000]/10 border border-[#E60000]/30 rounded flex items-center justify-center text-[#E60000]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase">{t('Speed & Reliability', 'السرعة والموثوقية')}</h3>
              <p className="text-xs text-[#888] leading-relaxed">
                {t(
                  'With complete in-house manufacturing, we control production schedules tightly, ensuring on-time project handover for retail openings and corporate inaugurations.',
                  'بفضل التصنيع الداخلي المتكامل، نتحكم بدقة في الجداول الزمنية ونضمن تسليم المشاريع في مواعيد الافتتاح المحددة دون أي تأخير.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer on About */}
      <section className="py-20 px-4 sm:px-8 text-center bg-[#080808]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white">
            {t('HAVE AN UPCOMING PROJECT IN SAUDI ARABIA?', 'هل لديك مشروع قادم في المملكة؟')}
          </h2>
          <p className="text-sm text-[#888]">
            {t('Consult with our technical engineers today for customized material samples and cost analysis.', 'استشر مهندسينا اليوم للحصول على عينات من المواد ودراسة التكلفة لمشروعك.')}
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('/quote')}
              className="px-8 py-3.5 bg-[#E60000] hover:bg-[#CC0000] text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-colors"
            >
              {t('REQUEST A QUOTE', 'طلب عرض سعر')}
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-3.5 bg-[#141414] hover:bg-[#202020] border border-[#333] text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-colors"
            >
              {t('CONTACT OUR TEAM', 'تواصل مع فريقنا')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
