import { useState, useEffect } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { ServicesPage } from '@/app/pages/ServicesPage';
import { AboutPage } from '@/app/pages/AboutPage';
import { ExpertisePage } from '@/app/pages/ExpertisePage';
import { ContactPage } from '@/app/pages/ContactPage';
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'expertise':
        return <ExpertisePage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <Analytics />
    </div>
  );
}
