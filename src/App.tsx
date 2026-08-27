import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TradingViewTickerWidget } from './components/TradingViewTickerWidget';
import { MarketsSection } from './components/MarketsSection';
import { AccountsSection } from './components/AccountsSection';
import { PlatformSection } from './components/PlatformSection';
import { TrustAndFeatures } from './components/TrustAndFeatures';
import { Footer } from './components/Footer';
import { ProductsModal } from './components/ProductsModal';

export const App: React.FC = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>('All');

  const handleOpenProducts = (category = 'All') => {
    setSelectedProductCategory(category);
    setIsProductsOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-slate-100 font-sans selection:bg-sky-500/30 selection:text-white">
      {/* Top Fixed Floating Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <TradingViewTickerWidget />
        <MarketsSection onOpenProducts={handleOpenProducts} />
        <AccountsSection />
        <PlatformSection />
        <TrustAndFeatures />
      </main>

      {/* Footer & Legal Compliance */}
      <Footer />

      {/* Products Specification Modal */}
      <ProductsModal
        isOpen={isProductsOpen}
        onClose={() => setIsProductsOpen(false)}
        initialCategory={selectedProductCategory}
      />
    </div>
  );
};

export default App;
