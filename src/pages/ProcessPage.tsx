import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { processSteps } from '../data/initialData';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Layers, 
  Compass, 
  Eye, 
  Cpu, 
  Hammer, 
  Wrench, 
  ShieldCheck 
} from 'lucide-react';

interface ProcessPageProps {
  onNavigate: (path: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [Compass, Eye, Layers, Cpu, Hammer, Wrench, ShieldCheck];

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Header Banner */}
      <section className="py-24 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0c0c0c]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181818] border border-[#2e2e2e] text-xs uppercase tracking-widest text-[#E60000] font-bold">
            <span>{t('SEVEN STAGES OF PRECISION', 'مراحل الإتقان السبع')}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            {t('THE SIGN ONE EXECUTION METHOD', 'منهجية العمل المتكاملة في ساين ون')}
          </h1>
          <p className="text-base sm:text-lg text-[#999] max-w-2xl mx-auto leading-relaxed">
            {t(
              'A rigorous, transparent 7-step engineering journey from conceptual consultation to certified turnkey handover across the Kingdom of Saudi Arabia.',
              'مسار هندسي منظم وموثوق من ٧ مراحل يضمن تحويل الرؤية المعمارية إلى واقع مشيد ومعتمد في أي مدينة بالمملكة.'
            )}
          </p>
        </div>
      </section>

      {/* Interactive Process Section */}
      <section className="py-20 px-4 sm:px-8 border-b border-[#1c1c1c]">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Desktop Horizontal Timeline Selector */}
          <div className="hidden lg:grid grid-cols-7 gap-2">
            {processSteps.map((step, idx) => {
              const Icon = stepIcons[idx];
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-sm border text-left rtl:text-right transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#181818] border-[#E60000] shadow-lg shadow-red-950/20'
                      : 'bg-[#101010] border-[#222] hover:border-[#333]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#E60000]' : 'text-[#666]'}`}>
                      {step.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#E60000]' : 'text-[#555]'}`} />
                  </div>
                  <div className="text-xs font-bold uppercase text-white line-clamp-2">
                    {t(step.title, step.titleAr)}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep View */}
          <div className="p-8 sm:p-12 bg-[#121212] border border-[#242424] rounded-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xl font-black text-[#E60000] px-3 py-1 bg-[#1c1c1c] border border-[#333]">
                  {processSteps[activeStep].step}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#777]">
                  {t('STAGE DETAILS', 'تفاصيل المرحلة')}
                </span>
              </div>
              <h2 className="text-3xl font-black uppercase text-white tracking-tight">
                {t(processSteps[activeStep].title, processSteps[activeStep].titleAr)}
              </h2>
              <p className="text-base text-[#AAA] leading-relaxed">
                {t(processSteps[activeStep].description, processSteps[activeStep].descriptionAr)}
              </p>

              <div className="pt-4 border-t border-[#222] flex items-center justify-between">
                <div className="text-xs text-[#777] font-mono">
                  {t('STEP', 'المرحلة')} {activeStep + 1} {t('OF', 'من')} 7
                </div>
                <div className="flex items-center gap-2">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                    className="px-4 py-2 bg-[#1c1c1c] border border-[#333] text-xs font-bold disabled:opacity-40 hover:bg-[#252525] rounded-xs"
                  >
                    {t('PREVIOUS', 'السابق')}
                  </button>
                  <button
                    disabled={activeStep === 6}
                    onClick={() => setActiveStep(prev => Math.min(6, prev + 1))}
                    className="px-4 py-2 bg-[#E60000] text-white text-xs font-bold disabled:opacity-40 hover:bg-[#CC0000] rounded-xs"
                  >
                    {t('NEXT STEP', 'التالي')}
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="border border-[#262626] p-2 bg-[#0c0c0c] rounded-sm">
                <img
                  src="https://signone.sa/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-29-at-13.13.34.jpeg"
                  alt="Process Step"
                  className="w-full h-64 object-cover filter contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Mobile Vertical Timeline for all 7 steps */}
          <div className="lg:hidden space-y-4 pt-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#E60000]">
              {t('FULL PROCESS TIMELINE', 'المسار الزمني الكامل للمشروع')}
            </h3>
            <div className="space-y-4">
              {processSteps.map((step, idx) => (
                <div key={step.step} className="p-5 bg-[#121212] border border-[#222] rounded-sm space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E60000]">
                    <span>STEP {step.step}</span>
                  </div>
                  <div className="text-sm font-bold text-white">{t(step.title, step.titleAr)}</div>
                  <p className="text-xs text-[#888]">{t(step.description, step.descriptionAr)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready to start CTA */}
      <section className="py-20 px-4 sm:px-8 text-center bg-[#0c0c0c]">
        <div className="max-w-xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold uppercase text-white">{t('READY TO INITIATE STEP 01?', 'مستعد لبدء المرحلة الأولى؟')}</h3>
          <p className="text-xs text-[#888]">{t('Schedule your preliminary consultation and site survey.', 'احجز موعد الاستشارة الأولية والمعاينة الميدانية لموقعك.')}</p>
          <button
            onClick={() => onNavigate('/quote')}
            className="px-8 py-3.5 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors mt-2"
          >
            {t('START MY PROJECT ENQUIRY', 'بدء طلب المشروع')}
          </button>
        </div>
      </section>
    </div>
  );
};
