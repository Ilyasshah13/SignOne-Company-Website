import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileCheck } from 'lucide-react';

export const TermsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#080808] text-white min-h-screen py-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-8 bg-[#111] p-8 sm:p-12 border border-[#222] rounded-sm">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-[#E60000]/10 border border-[#E60000]/30 text-[#E60000] rounded-xs">
            <FileCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              {t('TERMS & COMMERCIAL CONDITIONS', 'الشروط والأحكام والضمانات')}
            </h1>
            <p className="text-xs text-[#777] font-mono mt-1">
              {t('Sign One Manufacturing & Installation Warranty Framework', 'أطر الضمان والتصنيع والتركيب المعتمدة في شركة ساين ون')}
            </p>
          </div>
        </div>

        <div className="space-y-6 text-xs text-[#AAA] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-sm font-bold text-white uppercase">{t('1. Engineering Quotations & Validity', '١. عروض الأسعار والدراسات الهندسية')}</h2>
            <p>
              {t(
                'Preliminary cost calculations provided via this portal are subject to final site survey, wind-load simulation, and substrate structural confirmation by Sign One field directors.',
                'تعتبر التقديرات المبدئية خاضعة للمعاينة الميدانية النهائية للموقع وفحص أحمال الرياح وتأكيد طبيعة السطح الحامل من قبل مهندسينا.'
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-white uppercase">{t('2. Warranty Coverage & Standards', '٢. الضمان والصيانة')}</h2>
            <p>
              {t(
                'All architectural cladding and fabricated signage carry warranties ranging from 3 to 10 years, covering electrical components, LED drivers, structural weld integrity, and powder coat UV-retention in Saudi climate conditions.',
                'تشمل كافة منتجاتنا وواجهات الكلادينج ضمانات تمتد من 3 إلى 10 سنوات تغطي كفاءة المحولات الإلكترونية وجودة اللحام الإنشائي ومقاومة الدهانات للأشعة فوق البنفسجية في مناخ المملكة.'
              )}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
