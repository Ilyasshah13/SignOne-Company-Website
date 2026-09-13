import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Factory, 
  Cpu, 
  Layers, 
  Wrench, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';
import { initialSiteSettings } from '../data/initialData';

interface ManufacturingPageProps {
  onNavigate: (path: string) => void;
}

export const ManufacturingPage: React.FC<ManufacturingPageProps> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();

  const workshopStations = [
    {
      num: "01",
      title: t('Robotic Fiber Laser Cutting', 'قص الليزر الليفي المؤتمت'),
      desc: t('High-precision fiber optics cutting carbon steel, stainless steel, and aerospace aluminum up to 20mm with 0.05mm edge tolerance.', 'تقنية ليزرية متطورة لقص الفولاذ والستانلس ستيل والألمنيوم بسماكات تصل إلى 20 مم وبدقة 0.05 مم.'),
      img: "https://signone.sa/wp-content/uploads/2026/06/1.jpg"
    },
    {
      num: "02",
      title: t('5-Axis Heavy CNC Routing', 'تفريز CNC خماسي المحاور'),
      desc: t('High-speed computer-guided routing for acrylics, composite panels (ACP), solid woods, and dense non-ferrous metals.', 'تفريز رقمي سريع لألواح الأكريليك والكلادينج المركب والمعادن غير الحديدية.'),
      img: "https://signone.sa/wp-content/uploads/2026/06/1-1.jpg"
    },
    {
      num: "03",
      title: t('Automated 3D Channel Bending', 'الثني الآلي ثلاثي الأبعاد'),
      desc: t('Computer-controlled return bender creating intricate typography loops, sharp corners, and fluid curved letterforms with zero crimping.', 'ثني آلي محوسب للأجناب المعدنية لتشكيل أدق تفاصيل الحروف والشعارات دون أي عيوب.'),
      img: "https://signone.sa/wp-content/uploads/2026/06/IMG_1752.JPG-e1782730306209.webp"
    },
    {
      num: "04",
      title: t('Certified TIG / MIG Welding', 'اللحام الإنشائي TIG و MIG'),
      desc: t('Structural aluminum and stainless steel welding executed by AWS-certified welders for internal structural sub-frames.', 'لحام احترافي معتمد لهياكل الألمنيوم والحديد الداخلي لضمان المتانة الإنشائية.'),
      img: "https://signone.sa/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-29-at-13.13.34.jpeg"
    },
    {
      num: "05",
      title: t('Electrostatic Powder Booth', 'أفران الطلاء الكتروستاتيكي الحراري'),
      desc: t('Oven-cured industrial powder coating providing 20-year UV and salt-spray resistance across the entire international RAL spectrum.', 'طلاء حراري معالج بالأفران مقاوم لأشعة الشمس والملوحة وفق المعايير الدولية RAL.'),
      img: "https://signone.sa/wp-content/uploads/2026/06/cladding-work-in-saudi-arabia-1200x800-1.webp"
    },
    {
      num: "06",
      title: t('Dust-Free Cleanroom LED Assembly', 'غرفة تجميع إلكترونيات LED معزولة'),
      desc: t('Hermetically sealed assembly stations with anti-static surfaces for optical lens positioning, IP68 waterproofing, and thermal bonding.', 'بيئة نظيفة ومعزولة لتثبيت رقائق LED المقاومة للماء IP68 وتوزيع العدسات المتجانس.'),
      img: "https://signone.sa/wp-content/uploads/2026/06/4.jpg"
    }
  ];

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Header Banner */}
      <section className="py-24 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181818] border border-[#2e2e2e] text-xs uppercase tracking-widest text-[#E60000] font-bold">
            <Factory className="w-3.5 h-3.5" />
            <span>{t('RIYADH INDUSTRIAL FACILITY', 'مجمع التصنيع المركزي بالرياض')}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            {t('DESIGNED HERE. MANUFACTURED HERE. INSTALLED BY US.', 'صممت هنا. صنعت هنا. وثبتت بأيدينا.')}
          </h1>
          <p className="text-base sm:text-lg text-[#999] max-w-2xl mx-auto leading-relaxed">
            {t(
              'Sign One operates a fully integrated 3,500m² manufacturing facility in Riyadh equipped with heavy-duty robotic laser cutters, 5-axis CNC routers, and cleanroom assembly lines.',
              'تدير ساين ون مجمعاً صناعياً متكاملاً بمساحة 3,500 متر مربع بالرياض، مجهزاً بأحدث مكائن الليزر الروبوتي والتفريز الرقمي خماسي المحاور وخطوط التجميع المعزولة.'
            )}
          </p>
        </div>
      </section>

      {/* Facility Specs & Workshop Stations */}
      <section className="py-20 px-4 sm:px-8 border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-[#121212] border border-[#222]">
              <div className="font-mono text-3xl font-black text-white">{initialSiteSettings.stats.factoryAreaM2}</div>
              <div className="text-xs uppercase tracking-wider text-[#777] mt-1">{t('Total Facility Area', 'المساحة الإجمالية للمصنع')}</div>
            </div>
            <div className="p-6 bg-[#121212] border border-[#222]">
              <div className="font-mono text-3xl font-black text-[#E60000]">0.05 mm</div>
              <div className="text-xs uppercase tracking-wider text-[#777] mt-1">{t('Laser Cutting Tolerance', 'دقة التفاوت الليزري')}</div>
            </div>
            <div className="p-6 bg-[#121212] border border-[#222]">
              <div className="font-mono text-3xl font-black text-white">IP68</div>
              <div className="text-xs uppercase tracking-wider text-[#777] mt-1">{t('Waterproof LED Standard', 'معيار عزل الإضاءة')}</div>
            </div>
            <div className="p-6 bg-[#121212] border border-[#222]">
              <div className="font-mono text-3xl font-black text-white">100%</div>
              <div className="text-xs uppercase tracking-wider text-[#777] mt-1">{t('In-House Control', 'تحكم وتصنيع محلي مباشر')}</div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
              {t('PRECISION WORKSHOP STATIONS', 'محطات وخطوط الإنتاج المتقدمة')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workshopStations.map((station) => (
                <div key={station.num} className="bg-[#121212] border border-[#202020] rounded-sm overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="h-52 overflow-hidden relative">
                      <img src={station.img} alt={station.title} className="w-full h-full object-cover filter contrast-[1.05]" referrerPolicy="no-referrer" />
                      <span className="absolute top-3 left-3 font-mono text-xs font-bold bg-black/80 px-2.5 py-1 text-[#E60000] border border-[#333]">
                        {station.num}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-base font-bold text-white mb-2">{station.title}</h3>
                      <p className="text-xs text-[#888] leading-relaxed">{station.desc}</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-2">
                    <div className="w-full h-[1px] bg-[#222]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Standards */}
      <section className="py-20 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#E60000]"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E60000]">
                {t('STRINGENT STANDARDS', 'إجراءات ضبط الجودة')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white leading-tight">
              {t('ZERO FAULTS BEFORE SITE SHIPMENT', 'صفر أخطاء قبل الشحن الميداني')}
            </h2>
            <p className="text-sm text-[#999] leading-relaxed">
              {t(
                'Every sign undergoes a 48-hour continuous thermal illumination burn-in test, lux meter uniformity scan, and structural anchor load simulation. We do not dispatch until our quality control directors stamp approval.',
                'تخضع كل لوحة لاختبار تشغيل حراري مستمر لمدة 48 ساعة، ومسح ضوئي باللوكس للتأكد من تجانس الإضاءة، واختبارات أحمال نقاط التثبيت، ولا يتم شحنها إلا بعد الاعتماد النهائي لإدارة الجودة.'
              )}
            </p>
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#00C853]" />
                <span className="text-[#CCC]">{t('48-hour continuous burn-in load testing for all LED drivers', 'اختبار تشغيل مستمر 48 ساعة لجميع المحولات والشرائح')}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#00C853]" />
                <span className="text-[#CCC]">{t('Thermal infrared camera imaging for heat dissipation audit', 'فحص بكاميرات حرارية بالأشعة تحت الحمراء لتصريف الحرارة')}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#00C853]" />
                <span className="text-[#CCC]">{t('Elcometer coating thickness verification for exterior powder', 'قياس سماكة طبقات الدهان بأجهزة إلكوميتر المعتمدة')}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-[#222] p-2 bg-[#121212] rounded-sm">
              <img
                src="https://signone.sa/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-29-at-13.13.34-1.jpeg"
                alt="Quality Control testing"
                className="w-full h-96 object-cover rounded-xs filter contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-8 text-center bg-[#080808]">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold uppercase text-white">{t('WANT TO SCHEDULE A FACTORY VISIT?', 'ترغب في ترتيب زيارة لمصنعنا بالرياض؟')}</h3>
          <p className="text-xs text-[#888]">{t('We welcome architects, procurement officers, and project directors.', 'نرحب بالمهندسين المعماريين، مسؤولي المشتريات، ومديري المشاريع.')}</p>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-8 py-3.5 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors mt-2"
          >
            {t('SCHEDULE A CONSULTATION', 'حجز موعد استشارة')}
          </button>
        </div>
      </section>
    </div>
  );
};
