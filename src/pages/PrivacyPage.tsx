import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#080808] text-white min-h-screen py-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-8 bg-[#111] p-8 sm:p-12 border border-[#222] rounded-sm">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-[#E60000]/10 border border-[#E60000]/30 text-[#E60000] rounded-xs">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              {t('PRIVACY POLICY & DATA PROTECTION', 'سياسة الخصوصية وحماية البيانات')}
            </h1>
            <p className="text-xs text-[#777] font-mono mt-1">
              {t('Compliant with Saudi Personal Data Protection Law (PDPL)', 'متوافق مع نظام حماية البيانات الشخصية بالمملكة العربية السعودية')}
            </p>
          </div>
        </div>

        <div className="space-y-6 text-xs text-[#AAA] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-sm font-bold text-white uppercase">{t('1. Overview', '١. نظرة عامة')}</h2>
            <p>
              {t(
                'Sign One respects the confidentiality and intellectual property of all clients, architects, and engineering contractors. This Privacy Policy details how project specifications, CAD files, contact details, and site imagery submitted through our web portal are processed and protected.',
                'تحرص شركة ساين ون على حماية سرية بيانات عملائها وحقوق الملكية الفكرية لكافة المخططات الهندسية وملفات التصميم المرفوعة عبر بوابتنا الرقمية.'
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-white uppercase">{t('2. CAD & Architectural Information', '٢. المخططات المعمارية')}</h2>
            <p>
              {t(
                'Drawings, 3D renderings, and specifications submitted for quotation purposes are treated as proprietary commercial secrets and are only accessed by certified Sign One structural engineers.',
                'تعتبر المخططات والرسومات ثلاثية الأبعاد المرفقة لأغراض التسعير أسراراً مهنية ومحمية بموجب اتفاقيات عدم الإفصاح، ولا يطلع عليها إلا الكادر الهندسي المختص.'
              )}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-white uppercase">{t('3. Contact & Direct Inquiries', '٣. الاستفسارات وحقوق المستخدم')}</h2>
            <p>
              {t(
                'For privacy requests or verification of corporate project records, contact our compliance officer at info@signone.sa or call +966 50 009 2520.',
                'لأية استفسارات تتعلق بسياسة الخصوصية وحفظ السجلات، يرجى التواصل مع مسؤول الامتثال عبر البريد info@signone.sa أو الهاتف +966500092520.'
              )}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
