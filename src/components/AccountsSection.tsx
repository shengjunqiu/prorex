import React, { useState } from 'react';
import { Check, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

export const AccountsSection: React.FC = () => {
  const [activeType, setActiveType] = useState<'standard' | 'ecn'>('standard');

  return (
    <section id="accounts" className="py-24 relative overflow-hidden bg-background">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/50 border border-sky-500/20 mb-4">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest">
              Account options
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Choose the setup <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-blue-500">
              that suits your style.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Start with the same platform access and select the pricing structure that aligns with how you trade.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-[#0B1528] border border-sky-500/20">
            <button
              onClick={() => setActiveType('standard')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeType === 'standard'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Standard
            </button>
            <button
              onClick={() => setActiveType('ecn')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeType === 'ecn'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ECN
            </button>
          </div>
        </div>

        {/* Account Cards Container */}
        <div className="max-w-4xl mx-auto">
          {activeType === 'standard' ? (
            <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#0C1B35] via-[#09152B] to-[#060D1A] border-2 border-sky-400/40 shadow-2xl shadow-sky-500/10">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold uppercase tracking-wider mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span>Simple, commission-free pricing</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                    Standard Account
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed mb-8">
                    A straightforward option with no separate commission and a variable market spread.
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>Open Standard account</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Pricing Parameters Grid */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-4 bg-[#050C18]/80 p-6 rounded-2xl border border-sky-500/15">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">Commission</span>
                    <span className="text-2xl font-bold text-emerald-400 font-mono mt-1">$0</span>
                    <span className="text-[11px] text-slate-500">per lot</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">Minimum deposit</span>
                    <span className="text-2xl font-bold text-white font-mono mt-1">$100</span>
                    <span className="text-[11px] text-slate-500">to get started</span>
                  </div>

                  <div className="flex flex-col border-t border-slate-800 pt-3">
                    <span className="text-xs text-slate-400 font-medium">Maximum leverage</span>
                    <span className="text-xl font-bold text-sky-400 font-mono mt-1">1:200</span>
                    <span className="text-[11px] text-slate-500">subject to eligibility</span>
                  </div>

                  <div className="flex flex-col border-t border-slate-800 pt-3">
                    <span className="text-xs text-slate-400 font-medium">Minimum trade</span>
                    <span className="text-xl font-bold text-white font-mono mt-1">0.01</span>
                    <span className="text-[11px] text-slate-500">lots</span>
                  </div>
                </div>
              </div>

              {/* Checklist items */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-sky-500/10 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>MetaTrader 5 Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Segregated Client Funds</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Hedging & Scalping Allowed</span>
                </div>
              </div>

            </div>
          ) : (
            <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#0C1B35] via-[#09152B] to-[#060D1A] border-2 border-sky-400/40 shadow-2xl shadow-sky-500/10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider mb-6">
                <Zap className="w-4 h-4" />
                <span>Raw spreads with low commission</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                    ECN Account
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed mb-8">
                    Direct raw market spreads from 0.0 pips for high-volume traders and automated strategies.
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>Open ECN account</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                <div className="lg:col-span-5 grid grid-cols-2 gap-4 bg-[#050C18]/80 p-6 rounded-2xl border border-sky-500/15">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">Raw Spread</span>
                    <span className="text-2xl font-bold text-sky-400 font-mono mt-1">From 0.0</span>
                    <span className="text-[11px] text-slate-500">pips</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">Minimum deposit</span>
                    <span className="text-2xl font-bold text-white font-mono mt-1">$500</span>
                    <span className="text-[11px] text-slate-500">to get started</span>
                  </div>

                  <div className="flex flex-col border-t border-slate-800 pt-3">
                    <span className="text-xs text-slate-400 font-medium">Maximum leverage</span>
                    <span className="text-xl font-bold text-sky-400 font-mono mt-1">1:200</span>
                    <span className="text-[11px] text-slate-500">subject to eligibility</span>
                  </div>

                  <div className="flex flex-col border-t border-slate-800 pt-3">
                    <span className="text-xs text-slate-400 font-medium">Execution</span>
                    <span className="text-xl font-bold text-emerald-400 font-mono mt-1">Market</span>
                    <span className="text-[11px] text-slate-500">ultra-low latency</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-sky-500/10 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Direct Liquidity Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Expert Advisors (EAs) Supported</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Priority Execution Route</span>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
