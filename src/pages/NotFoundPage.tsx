import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Compass, ArrowLeft, ArrowRight } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="bg-[#080808] text-white min-h-[75vh] flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 bg-[#181818] border border-[#333] text-[#E60000] rounded-sm flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <div className="font-mono text-sm text-[#E60000] font-bold">404 — NOT FOUND</div>
          <h1 className="text-3xl font-black uppercase text-white tracking-tight">
            {t('PAGE DOES NOT EXIST', 'الصفحة غير موجودة')}
          </h1>
          <p className="text-xs text-[#888]">
            {t('The architectural drawing or page you are seeking could not be found.', 'المخطط أو الصفحة المطلوبة غير متاحة حالياً.')}
          </p>
        </div>

        <button
          onClick={() => onNavigate('/')}
          className="px-6 py-3 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors inline-flex items-center gap-2"
        >
          {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>{t('RETURN TO HOME', 'العودة للرئيسية')}</span>
        </button>
      </div>
    </div>
  );
};
