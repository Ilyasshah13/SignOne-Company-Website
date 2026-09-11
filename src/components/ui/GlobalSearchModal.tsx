import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Search, X, ArrowRight, ArrowLeft, Layers, Building, Cpu } from 'lucide-react';
import { initialServices, initialProjects, initialIndustries } from '../../data/initialData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const { t, isRTL } = useLanguage();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchingServices = cleanQuery ? initialServices.filter(s =>
    s.title.toLowerCase().includes(cleanQuery) ||
    s.titleAr.includes(cleanQuery) ||
    s.description.toLowerCase().includes(cleanQuery) ||
    s.descriptionAr.includes(cleanQuery)
  ) : [];

  const matchingProjects = cleanQuery ? initialProjects.filter(p =>
    p.title.toLowerCase().includes(cleanQuery) ||
    p.titleAr.includes(cleanQuery) ||
    p.location.toLowerCase().includes(cleanQuery) ||
    p.client.toLowerCase().includes(cleanQuery)
  ) : [];

  const matchingIndustries = cleanQuery ? initialIndustries.filter(i =>
    i.title.toLowerCase().includes(cleanQuery) ||
    i.titleAr.includes(cleanQuery) ||
    i.description.toLowerCase().includes(cleanQuery)
  ) : [];

  const handleSelect = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div 
        className="w-full max-w-2xl bg-[#121212] border border-[#2a2a2a] rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#222]">
          <Search className="w-5 h-5 text-[#888] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('Search services, projects, materials, or industries...', 'ابحث في الخدمات، المشاريع، المواد، أو القطاعات...')}
            className="w-full bg-transparent px-3 text-white placeholder-[#666] text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#888] hover:text-white p-1 text-xs"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-2 text-xs bg-[#202020] hover:bg-[#303030] text-[#999] hover:text-white px-2 py-1 rounded"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 space-y-6">
          {!query && (
            <div className="text-center py-8 text-xs text-[#777]">
              {t('Type to search across Sign One capabilities, architectural services, and portfolio projects.', 'ابدأ الكتابة للبحث في إمكانيات وخدمات ومشاريع ساين ون.')}
            </div>
          )}

          {query && matchingServices.length === 0 && matchingProjects.length === 0 && matchingIndustries.length === 0 && (
            <div className="text-center py-8 text-sm text-[#888]">
              {t('No results found for', 'لم يتم العثور على نتائج لـ')} "{query}"
            </div>
          )}

          {/* Services Results */}
          {matchingServices.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-wider text-[#E60000] font-bold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>{t('Services', 'الخدمات')}</span>
              </div>
              <div className="space-y-1">
                {matchingServices.map(service => (
                  <div
                    key={service.id}
                    onClick={() => handleSelect(`/services/${service.slug}`)}
                    className="p-3 rounded bg-[#181818] hover:bg-[#222] cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#E60000] transition-colors">
                        {t(service.title, service.titleAr)}
                      </div>
                      <div className="text-xs text-[#888] line-clamp-1">
                        {t(service.description, service.descriptionAr)}
                      </div>
                    </div>
                    {isRTL ? <ArrowLeft className="w-4 h-4 text-[#555] group-hover:text-white" /> : <ArrowRight className="w-4 h-4 text-[#555] group-hover:text-white" />}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Results */}
          {matchingProjects.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-wider text-[#E60000] font-bold flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                <span>{t('Projects', 'المشاريع')}</span>
              </div>
              <div className="space-y-1">
                {matchingProjects.map(project => (
                  <div
                    key={project.id}
                    onClick={() => handleSelect(`/projects/${project.slug}`)}
                    className="p-3 rounded bg-[#181818] hover:bg-[#222] cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#E60000] transition-colors">
                        {t(project.title, project.titleAr)}
                      </div>
                      <div className="text-xs text-[#888]">
                        {t(project.location, project.locationAr)} • {project.year} • {t(project.category, project.categoryAr)}
                      </div>
                    </div>
                    {isRTL ? <ArrowLeft className="w-4 h-4 text-[#555] group-hover:text-white" /> : <ArrowRight className="w-4 h-4 text-[#555] group-hover:text-white" />}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Industries Results */}
          {matchingIndustries.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-wider text-[#E60000] font-bold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>{t('Industries', 'القطاعات')}</span>
              </div>
              <div className="space-y-1">
                {matchingIndustries.map(industry => (
                  <div
                    key={industry.id}
                    onClick={() => handleSelect(`/industries/${industry.slug}`)}
                    className="p-3 rounded bg-[#181818] hover:bg-[#222] cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#E60000] transition-colors">
                        {t(industry.title, industry.titleAr)}
                      </div>
                      <div className="text-xs text-[#888] line-clamp-1">
                        {t(industry.description, industry.descriptionAr)}
                      </div>
                    </div>
                    {isRTL ? <ArrowLeft className="w-4 h-4 text-[#555] group-hover:text-white" /> : <ArrowRight className="w-4 h-4 text-[#555] group-hover:text-white" />}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
