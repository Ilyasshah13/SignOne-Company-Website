import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0b0b] border-t border-[#1c1c1c] text-[#9a9a9a] text-sm">
      {/* Upper strategic statement */}
      <div className="border-b border-[#181818] py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-[#E60000]"></div>
              <span className="text-xs uppercase tracking-widest text-[#E60000] font-bold">
                {t('FROM CONCEPT TO CREATION', 'من الفكرة إلى الإتقان')}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {t(
                'Saudi Arabia’s Trusted Architectural Signage & Cladding Partner.',
                'شريككم الموثوق في اللوحات المعمارية وتكسية الواجهات بالمملكة.'
              )}
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={(e) => handleLinkClick(e, '/quote')}
              className="bg-[#E60000] hover:bg-[#CC0000] text-white text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-sm transition-all duration-200 shadow-lg shadow-red-950/40"
            >
              {t('REQUEST A QUOTE', 'طلب عرض سعر')}
            </button>
            <a
              href="https://wa.me/966500092520"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#333] hover:border-white text-white text-xs uppercase tracking-wider font-semibold px-6 py-3 rounded-sm transition-colors"
            >
              {t('WHATSAPP INQUIRY', 'محادثة واتساب')}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#E60000] flex items-center justify-center font-black text-white text-lg">
                1
              </div>
              <span className="font-extrabold tracking-widest text-xl text-white">SIGN ONE</span>
            </div>
            <p className="text-sm leading-relaxed text-[#7e7e7e] max-w-sm">
              {t(
                'Sign One delivers complete signage, 3D letters, illuminated signs, aluminum cladding and architectural branding solutions across Saudi Arabia, from design and engineering to manufacturing and installation.',
                'تقدم ساين ون حلولاً متكاملة للوحات الإعلانية، الحروف ثلاثية الأبعاد، اللوحات المضيئة، كلادينج الألمنيوم، والهويات المعمارية في جميع أنحاء المملكة العربية السعودية، بدءاً من التصميم والهندسة وحتى التصنيع والتركيب الاحترافي.'
              )}
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#666]">
              <ShieldCheck className="w-4 h-4 text-[#E60000]" />
              <span>{t('SASO & Civil Defense Fire-Safety Certified', 'معتمد من هيئة المواصفات والدفاع المدني')}</span>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              {t('COMPANY', 'الشركة')}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="hover:text-white transition-colors">
                  {t('About Sign One', 'عن ساين ون')}
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className="hover:text-white transition-colors">
                  {t('Our Services', 'خدماتنا')}
                </a>
              </li>
              <li>
                <a href="/projects" onClick={(e) => handleLinkClick(e, '/projects')} className="hover:text-white transition-colors">
                  {t('Project Portfolio', 'معرض المشاريع')}
                </a>
              </li>
              <li>
                <a href="/manufacturing" onClick={(e) => handleLinkClick(e, '/manufacturing')} className="hover:text-white transition-colors">
                  {t('Manufacturing & Factory', 'التصنيع والمصنع')}
                </a>
              </li>
              <li>
                <a href="/process" onClick={(e) => handleLinkClick(e, '/process')} className="hover:text-white transition-colors">
                  {t('7-Step Process', 'منهجية العمل')}
                </a>
              </li>
              <li>
                <a href="/industries" onClick={(e) => handleLinkClick(e, '/industries')} className="hover:text-white transition-colors">
                  {t('Industries Served', 'القطاعات المستهدفة')}
                </a>
              </li>
            </ul>
          </div>

          {/* Key Services Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              {t('KEY SERVICES', 'أبرز الخدمات')}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="/services/3d-letters" onClick={(e) => handleLinkClick(e, '/services/3d-letters')} className="hover:text-white transition-colors">
                  {t('3D Dimensional Letters', 'حروف بارزة ثلاثية الأبعاد')}
                </a>
              </li>
              <li>
                <a href="/services/led-channel-letters" onClick={(e) => handleLinkClick(e, '/services/led-channel-letters')} className="hover:text-white transition-colors">
                  {t('LED & Channel Letters', 'حروف مضيئة وقنوات LED')}
                </a>
              </li>
              <li>
                <a href="/services/illuminated-signage" onClick={(e) => handleLinkClick(e, '/services/illuminated-signage')} className="hover:text-white transition-colors">
                  {t('Illuminated Signage', 'لوحات وفوانيس مضيئة')}
                </a>
              </li>
              <li>
                <a href="/services/aluminum-cladding" onClick={(e) => handleLinkClick(e, '/services/aluminum-cladding')} className="hover:text-white transition-colors">
                  {t('Aluminum Cladding (ACP)', 'كلادينج ألمنيوم وواجهات')}
                </a>
              </li>
              <li>
                <a href="/services/wayfinding" onClick={(e) => handleLinkClick(e, '/services/wayfinding')} className="hover:text-white transition-colors">
                  {t('Wayfinding Systems', 'أنظمة اللوحات الإرشادية')}
                </a>
              </li>
              <li>
                <a href="/services/pylon-totem-signs" onClick={(e) => handleLinkClick(e, '/services/pylon-totem-signs')} className="hover:text-white transition-colors">
                  {t('Pylon & Totem Signs', 'لوحات بيلون وتوتم')}
                </a>
              </li>
              <li>
                <a href="/services/custom-fabrication" onClick={(e) => handleLinkClick(e, '/services/custom-fabrication')} className="hover:text-white transition-colors">
                  {t('Custom Architectural Fabrication', 'تصنيع معماري مخصص')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Verified */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-white font-bold">
              {t('CONTACT US', 'تواصل معنا')}
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E60000] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {t('Prince Fahd Bin Salman Road, Riyadh, Kingdom of Saudi Arabia', 'طريق الأمير فهد بن سلمان، الرياض، المملكة العربية السعودية')}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E60000] shrink-0" />
                <a href="tel:+966500092520" className="hover:text-white transition-colors" dir="ltr">
                  +966 500 092 520
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E60000] shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:one@signone.sa" className="hover:text-white transition-colors">
                    one@signone.sa
                  </a>
                  <a href="mailto:pr@signone.sa" className="hover:text-white transition-colors text-[11px] text-[#777]">
                    pr@signone.sa
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-1 text-[11px] text-[#777]">
                <Clock className="w-3.5 h-3.5 text-[#555] shrink-0" />
                <span>{t('Sun – Thu: 8:00 AM – 6:00 PM', 'الأحد – الخميس: ٨:٠٠ ص – ٦:٠٠ م')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-[#161616] py-6 px-4 sm:px-8 text-xs text-[#666]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} SIGN ONE. {t('ALL RIGHTS RESERVED.', 'جميع الحقوق محفوظة.')}
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={(e) => handleLinkClick(e, '/privacy')} 
              className="hover:text-white transition-colors"
            >
              {t('Privacy Policy', 'سياسة الخصوصية')}
            </button>
            <span>•</span>
            <button 
              onClick={(e) => handleLinkClick(e, '/terms')} 
              className="hover:text-white transition-colors"
            >
              {t('Terms & Conditions', 'الشروط والأحكام')}
            </button>
            <span>•</span>
            <button 
              onClick={(e) => handleLinkClick(e, '/admin')} 
              className="hover:text-white transition-colors text-[#555]"
            >
              {t('Admin', 'الإدارة')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
