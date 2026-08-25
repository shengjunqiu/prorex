import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarketTicker } from './components/MarketTicker';
import { MarketsSection } from './components/MarketsSection';
import { AccountsSection } from './components/AccountsSection';
import { PlatformSection } from './components/PlatformSection';
import { TrustAndFeatures } from './components/TrustAndFeatures';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-slate-100 font-sans selection:bg-sky-500/30 selection:text-white">
      {/* Top Fixed Floating Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <MarketTicker />
        <MarketsSection />
        <AccountsSection />
        <PlatformSection />
        <TrustAndFeatures />
      </main>

      {/* Footer & Legal Compliance */}
      <Footer />
    </div>
  );
};

export default App;
