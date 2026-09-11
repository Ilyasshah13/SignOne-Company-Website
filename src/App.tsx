/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { GlobalSearchModal } from './components/ui/GlobalSearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { ManufacturingPage } from './pages/ManufacturingPage';
import { ProcessPage } from './pages/ProcessPage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Keyboard shortcut (CMD+K or CTRL+K) to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Simple clean router
  const renderCurrentPage = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={handleNavigate} />;
    }
    // 2. About
    if (currentPath === '/about') {
      return <AboutPage onNavigate={handleNavigate} />;
    }
    // 3. Services list
    if (currentPath === '/services') {
      return <ServicesPage onNavigate={handleNavigate} />;
    }
    // 4. Service Detail: /services/:slug
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '').split('/')[0];
      return <ServiceDetailPage slug={slug} onNavigate={handleNavigate} />;
    }
    // 5. Projects list
    if (currentPath === '/projects') {
      return <ProjectsPage onNavigate={handleNavigate} />;
    }
    // 6. Project Detail: /projects/:slug
    if (currentPath.startsWith('/projects/')) {
      const slug = currentPath.replace('/projects/', '').split('/')[0];
      return <ProjectDetailPage slug={slug} onNavigate={handleNavigate} />;
    }
    // 7. Industries list
    if (currentPath === '/industries') {
      return <IndustriesPage onNavigate={handleNavigate} />;
    }
    // 8. Industry Detail: /industries/:slug
    if (currentPath.startsWith('/industries/')) {
      const slug = currentPath.replace('/industries/', '').split('/')[0];
      return <IndustryDetailPage slug={slug} onNavigate={handleNavigate} />;
    }
    // 9. Manufacturing
    if (currentPath === '/manufacturing') {
      return <ManufacturingPage onNavigate={handleNavigate} />;
    }
    // 10. Process
    if (currentPath === '/process') {
      return <ProcessPage onNavigate={handleNavigate} />;
    }
    // 11. Quote enquiry
    if (currentPath === '/quote') {
      return <QuotePage onNavigate={handleNavigate} />;
    }
    // 12. Contact
    if (currentPath === '/contact') {
      return <ContactPage onNavigate={handleNavigate} />;
    }
    // 13. Admin
    if (currentPath === '/admin') {
      return <AdminPage onNavigate={handleNavigate} />;
    }
    // 14. Privacy & Terms
    if (currentPath === '/privacy') {
      return <PrivacyPage />;
    }
    if (currentPath === '/terms') {
      return <TermsPage />;
    }

    // Default 404
    return <NotFoundPage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#E60000] selection:text-white">
      {/* Global Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Render */}
      <main className="flex-1 w-full">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Sticky Fast Floating Contact & Call Actions */}
      <WhatsAppButton />

      {/* Global Instant Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

