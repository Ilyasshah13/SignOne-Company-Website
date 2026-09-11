import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { initialProjects } from '../data/initialData';
import { MapPin, Search, Filter, ArrowRight, ArrowLeft, Building2 } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const { t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedLocation, setSelectedLocation] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'ALL',
    'Corporate',
    'Retail',
    'Hospitality',
    'Banking & Finance',
    'Healthcare'
  ];

  const locations = [
    'ALL',
    'Riyadh',
    'Jeddah',
    'Al Khobar'
  ];

  const filteredProjects = initialProjects.filter(project => {
    const matchesCategory = selectedCategory === 'ALL' || project.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesLocation = selectedLocation === 'ALL' || project.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const q = searchQuery.toLowerCase();
    const matchesSearch = !searchQuery || (
      project.title.toLowerCase().includes(q) ||
      project.titleAr.includes(q) ||
      project.client.toLowerCase().includes(q) ||
      project.location.toLowerCase().includes(q)
    );
    return matchesCategory && matchesLocation && matchesSearch;
  });

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Header Banner */}
      <section className="py-20 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E60000] font-bold">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t('PORTFOLIO OF EXCELLENCE', 'سجل المشاريع المتميزة')}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            {t('SELECTED ARCHITECTURAL PROJECTS', 'مشاريعنا المنفذة في المملكة')}
          </h1>
          <p className="text-sm sm:text-base text-[#999] max-w-3xl leading-relaxed">
            {t(
              'Explore how Sign One engineered, fabricated, and installed monumental signage, cladding envelopes, and wayfinding networks for Saudi Arabia’s leading landmark developments.',
              'استكشف كيف قامت ساين ون بهندسة وتصنيع وتركيب أضخم اللوحات وتكسيات الواجهات وشبكات الإرشاد المعمارية لأبرز المشاريع في المملكة.'
            )}
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 px-4 sm:px-8 border-b border-[#1c1c1c] bg-[#111] sticky top-[60px] z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-xs transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#E60000] text-white'
                    : 'bg-[#181818] text-[#888] hover:text-white border border-[#2a2a2a]'
                }`}
              >
                {cat === 'ALL' ? t('ALL CATEGORIES', 'جميع الفئات') : cat}
              </button>
            ))}
          </div>

          {/* Search and Location filter */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-[#181818] border border-[#2a2a2a] text-xs text-[#CCC] py-2 px-3 rounded-xs focus:outline-none"
            >
              <option value="ALL">{t('All Locations', 'كافة المدن')}</option>
              <option value="Riyadh">{t('Riyadh', 'الرياض')}</option>
              <option value="Jeddah">{t('Jeddah', 'جدة')}</option>
              <option value="Al Khobar">{t('Al Khobar', 'الخبر')}</option>
            </select>

            <div className="relative flex-1 md:w-60">
              <Search className="w-3.5 h-3.5 text-[#777] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('Search project...', 'بحث عن مشروع...')}
                className="w-full bg-[#181818] border border-[#2a2a2a] text-xs text-white pl-8 pr-3 py-2 rounded-xs placeholder-[#666] focus:outline-none focus:border-[#555]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-[#121212] border border-[#222] rounded-sm p-8 space-y-4">
              <p className="text-sm text-[#888]">
                {t('No projects match your filter criteria.', 'لا توجد مشاريع مطابقة لمعايير البحث الحالية.')}
              </p>
              <button
                onClick={() => { setSelectedCategory('ALL'); setSelectedLocation('ALL'); setSearchQuery(''); }}
                className="text-xs uppercase tracking-wider font-bold text-[#E60000] hover:underline"
              >
                {t('RESET FILTERS', 'إعادة ضبط الفلاتر')}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => onNavigate(`/projects/${project.slug}`)}
                  className="bg-[#121212] border border-[#202020] hover:border-[#E60000] rounded-sm overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.featuredImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    <div className="absolute top-4 left-4 font-mono text-[10px] bg-black/80 px-2 py-1 text-white border border-white/20">
                      {project.year} • {t(project.category, project.categoryAr)}
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#AAA]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#E60000]" />
                        <span>{t(project.location, project.locationAr)}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-[11px] font-mono text-[#888] uppercase mb-1">{project.client}</div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#E60000] transition-colors mb-2">
                      {t(project.title, project.titleAr)}
                    </h3>
                    <p className="text-xs text-[#888] leading-relaxed line-clamp-2 mb-4">
                      {t(project.description, project.descriptionAr)}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.services.slice(0, 2).map((srv, idx) => (
                        <span key={idx} className="text-[10px] bg-[#1a1a1a] text-[#aaa] px-2 py-0.5 rounded-xs border border-[#2a2a2a]">
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <div className="pt-3 border-t border-[#222] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#999] group-hover:text-white">
                      <span>{t('VIEW CASE STUDY', 'استعراض دراسة المشروع')}</span>
                      {isRTL ? <ArrowLeft className="w-4 h-4 text-[#E60000]" /> : <ArrowRight className="w-4 h-4 text-[#E60000]" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
