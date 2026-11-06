import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import IndustriesPage from '@/pages/IndustriesPage';
import AboutPage from '@/pages/AboutPage';
import type { PageId } from '@/types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'products':
        return <ProductsPage />;
      case 'industries':
        return <IndustriesPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
