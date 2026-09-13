import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Menu, 
  X, 
  Search, 
  Globe, 
  ArrowRight, 
  ArrowLeft, 
  Phone, 
  ShieldAlert,
  Layers,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenSearch }) => {
  const { language, toggleLanguage, isRTL, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('Home', 'الرئيسية'), path: '/' },
    { name: t('About', 'عن ساين ون'), path: '/about' },
    { name: t('Services', 'الخدمات'), path: '/services' },
    { name: t('Projects', 'المشاريع'), path: '/projects' },
    { name: t('Manufacturing', 'التصنيع'), path: '/manufacturing' },
    { name: t('Process', 'منهجية العمل'), path: '/process' },
    { name: t('Industries', 'القطاعات'), path: '/industries' },
    { name: t('Contact', 'اتصل بنا'), path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro bar for corporate verified info */}
      <div className="bg-[#0e0e0e] border-b border-[#1f1f1f] text-xs py-1.5 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[#8C8C8C]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse"></span>
              {t('Saudi Signage & Architectural Solutions', 'حلول اللوحات والتصميم المعماري في المملكة العربية السعودية')}
            </span>
            <span className="text-[#333]">|</span>
            <span className="tracking-wider">{t('Prince Fahd Bin Salman Road, Riyadh', 'طريق الأمير فهد بن سلمان، الرياض')}</span>
          </div>
          <div className="flex items-center gap-5">
            <a 
              href="tel:+966500092520" 
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#E60000]" />
              <span dir="ltr">+966 500 092 520</span>
            </a>
            <span className="text-[#333]">|</span>
            <button
              onClick={() => handleNavClick('/admin')}
              className="hover:text-white transition-colors flex items-center gap-1 text-[11px] text-[#777]"
              title={t('Admin Portal', 'بوابة الإدارة')}
            >
              <ShieldAlert className="w-3 h-3 text-[#E60000]" />
              <span>{t('Admin', 'لوحة الإدارة')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#222] shadow-2xl py-3' 
            : 'bg-[#080808] border-b border-[#1a1a1a] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Authentic Brand Identity - Only Logo */}
          <div 
            onClick={() => handleNavClick('/')}
            className="cursor-pointer flex items-center select-none group py-0.5"
            title="Home"
          >
            {/* Real Logo Image */}
            <img 
              src="https://signone.sa/wp-content/uploads/2026/06/logo2.png" 
              alt="Company Logo" 
              referrerPolicy="no-referrer"
              className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`transition-colors py-1 relative ${
                    isActive 
                      ? 'text-white font-semibold' 
                      : 'text-[#999999] hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#E60000]"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#8C8C8C] hover:text-white hover:bg-[#181818] rounded-md transition-colors"
              aria-label={t('Search', 'بحث')}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#CCC] hover:text-white bg-[#161616] hover:bg-[#202020] border border-[#2a2a2a] rounded transition-colors"
              title={t('Switch Language', 'تغيير اللغة')}
            >
              <Globe className="w-3.5 h-3.5 text-[#E60000]" />
              <span>{language === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            {/* Primary Quote CTA Button */}
            <button
              onClick={() => handleNavClick('/quote')}
              className="hidden sm:inline-flex items-center gap-2 bg-[#E60000] hover:bg-[#CC0000] text-white text-xs tracking-wider uppercase font-bold px-4 py-2.5 rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-red-950/50"
            >
              <span>{t('GET A FREE QUOTE', 'طلب عرض سعر مجاني')}</span>
              {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-[#1c1c1c] rounded transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-50 bg-[#080808] border-t border-[#222] flex flex-col justify-between p-6 lg:hidden overflow-y-auto">
          <div className="space-y-4 pt-2">
            <div className="text-xs uppercase tracking-widest text-[#666] font-semibold mb-3">
              {t('Navigation Menu', 'قائمة التصفح')}
            </div>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`text-left text-lg font-semibold py-2.5 px-3 rounded-md transition-colors flex items-center justify-between ${
                      isActive 
                        ? 'bg-[#181818] text-[#E60000]' 
                        : 'text-[#DDD] hover:bg-[#121212]'
                    } ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#E60000]"></span>}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-[#222] space-y-4">
            <button
              onClick={() => handleNavClick('/quote')}
              className="w-full py-3.5 bg-[#E60000] text-white font-bold text-center text-sm uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 shadow-lg shadow-red-950/50"
            >
              <span>{t('REQUEST A QUOTE', 'طلب تسعيرة للمشروع')}</span>
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>

            <div className="flex items-center justify-between pt-2 text-xs text-[#888]">
              <a href="tel:+966500092520" className="flex items-center gap-1.5 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-[#E60000]" />
                <span dir="ltr">+966 500 092 520</span>
              </a>
              <button 
                onClick={() => handleNavClick('/admin')} 
                className="flex items-center gap-1 hover:text-white"
              >
                <ShieldAlert className="w-3.5 h-3.5 text-[#E60000]" />
                <span>{t('Admin Panel', 'لوحة التحكم')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
