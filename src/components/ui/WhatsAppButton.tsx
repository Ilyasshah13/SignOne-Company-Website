import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';

interface WhatsAppButtonProps {
  onQuoteClick: () => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ onQuoteClick }) => {
  const { t, isRTL } = useLanguage();
  const whatsappNumber = "966560003156";
  const defaultMessage = encodeURIComponent(
    t(
      "Hello Sign One team, I would like to inquire about architectural signage and cladding solutions for my project in Saudi Arabia.",
      "السلام عليكم فريق ساين ون، أود الاستفسار بخصوص حلول اللوحات المعمارية والكلادينج لمشروعي في المملكة."
    )
  );

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#111] hover:bg-[#1a1a1a] border border-[#2d2d2d] hover:border-[#25D366] text-white py-2.5 px-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
            <MessageSquare className="w-4 h-4 fill-white" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] uppercase tracking-wider text-[#888] group-hover:text-[#25D366] font-semibold">
              {t('WhatsApp Direct', 'محادثة مباشرة')}
            </span>
            <span className="text-xs font-bold text-white tracking-wide" dir="ltr">
              +966 56 000 3156
            </span>
          </div>
        </a>
      </div>

      {/* Mobile Sticky Bottom Quick Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0c0c0c]/95 backdrop-blur-md border-t border-[#222] p-2.5 px-4 flex md:hidden items-center gap-2">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 bg-[#202020] hover:bg-[#282828] text-white text-xs font-bold rounded flex items-center justify-center gap-2 border border-[#333]"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366]" />
          <span>{t('WHATSAPP', 'واتساب')}</span>
        </a>
        <button
          onClick={onQuoteClick}
          className="flex-1 py-2.5 px-3 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs font-bold rounded flex items-center justify-center gap-1.5 shadow-md shadow-red-950/40"
        >
          <span>{t('GET A QUOTE', 'طلب تسعيرة')}</span>
          {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
        </button>
      </div>
    </>
  );
};
