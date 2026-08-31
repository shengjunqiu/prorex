import React, { useState } from 'react';
import { MARKET_CATEGORIES } from '../data/siteContent';
import { ArrowRight, TrendingUp, BarChart3, Coins, CircleDollarSign, Flame, Bitcoin, Clock, MonitorCheck, Smartphone } from 'lucide-react';

interface MarketsSectionProps {
  onOpenProducts?: (category?: string) => void;
}

export const MarketsSection: React.FC<MarketsSectionProps> = ({ onOpenProducts }) => {
  const [activeTab, setActiveTab] = useState('forex');

  const getCategoryIcon = (id: string, className = "w-5 h-5") => {
    switch (id) {
      case 'forex':
        return <CircleDollarSign className={`${className} text-sky-400`} />;
      case 'metals':
        return <Coins className={`${className} text-amber-400`} />;
      case 'indices':
        return <BarChart3 className={`${className} text-blue-400`} />;
      case 'energies':
        return <Flame className={`${className} text-orange-400`} />;
      case 'crypto':
        return <Bitcoin className={`${className} text-purple-400`} />;
      default:
        return <TrendingUp className={`${className} text-sky-400`} />;
    }
  };

  const handleActionClick = (e: React.MouseEvent, categoryId: string) => {
    e.preventDefault();
    if (onOpenProducts) {
      // Map category id to product category title
      const catMap: Record<string, string> = {
        forex: 'Forex',
        indices: 'Indices',
        energies: 'Energies',
        crypto: 'Crypto',
        metals: 'Metals'
      };
      onOpenProducts(catMap[categoryId] || 'All');
    }
  };

  return (
    <section id="markets" className="py-24 relative overflow-hidden bg-[#050912]">
      {/* Subtle Glows */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-sky-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/50 border border-sky-500/20 mb-4">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest">
              Explore the markets
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            One account. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              More possibilities.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Access a broad selection of instruments through a trading environment built for focus, speed and control.
          </p>
        </div>

        {/* Altum-style Tab Pill Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-[#0B1528] border border-sky-500/15 backdrop-blur-md max-w-full overflow-x-auto">
            {MARKET_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Display of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {MARKET_CATEGORIES.map((item) => {
            const isSelected = activeTab === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#0E1F3D] to-[#091325] border-2 border-sky-400/50 shadow-xl shadow-sky-500/15 translate-y--1'
                    : 'bg-[#081020]/70 border border-sky-500/10 hover:border-sky-500/30 hover:bg-[#0B1528]'
                }`}
              >
                <div>
                  {/* Top Header inside Card: Proper Icon without 01/02 badges */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                      {getCategoryIcon(item.id, "w-6 h-6")}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Sample Asset Badges */}
                  <div className="space-y-2 mb-6">
                    {item.pairs.map((pair) => (
                      <div
                        key={pair.name}
                        className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-lg bg-[#050B16] border border-sky-500/5"
                      >
                        <span className="font-semibold text-slate-300 text-[11px] truncate">{pair.name}</span>
                        <div className="flex items-center gap-1.5 ml-1">
                          <span className="text-[10px] text-sky-400 font-mono font-semibold">{pair.lev}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Link (Triggers Product Specification Modal) */}
                <button
                  type="button"
                  onClick={(e) => handleActionClick(e, item.id)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors pt-3 border-t border-sky-500/10 text-left"
                >
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Global Access Feature Strip with added visual icons (Slide 4 request) */}
        <div className="mt-16 rounded-2xl p-8 bg-gradient-to-r from-[#0B172E] via-[#0D1E3A] to-[#0A152A] border border-sky-500/20 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest block mb-2">
                Connected market access
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Follow opportunity across borders.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Monitor international market activity through one focused trading environment, wherever your strategy takes you.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-3 gap-4 border-t lg:border-t-0 lg:border-l border-sky-500/20 pt-6 lg:pt-0 lg:pl-8">
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-sky-400" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">5<span className="text-sky-400">d</span></span>
                <span className="text-xs text-slate-400 mt-1">Weekly market access</span>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-2">
                  <MonitorCheck className="w-5 h-5 text-sky-400" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">MT5</span>
                <span className="text-xs text-slate-400 mt-1">One connected platform</span>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-2">
                  <Smartphone className="w-5 h-5 text-sky-400" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">2</span>
                <span className="text-xs text-slate-400 mt-1">Desktop and mobile</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

