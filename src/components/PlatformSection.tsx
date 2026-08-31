import React from 'react';
import { ArrowUpRight, Laptop, Smartphone, LineChart, Cpu, Sliders, Layers } from 'lucide-react';

export const PlatformSection: React.FC = () => {
  const platformFeatures = [
    { title: '21 charting timeframes', desc: 'From 1 minute to 1 month for deep structural analysis', icon: LineChart },
    { title: 'One-click trading', desc: 'Execute orders directly from dynamic real-time charts', icon: Cpu },
    { title: 'Integrated strategy testing', desc: 'Multi-threaded testing for automated trading models', icon: Sliders },
    { title: 'Advanced order tools', desc: '6 pending order types with stop loss and take profit controls', icon: Layers }
  ];

  return (
    <section id="platform" className="py-24 relative overflow-hidden bg-[#050912]">
      {/* Ambient background glow */}
      <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Platform Information */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/50 border border-sky-500/20 mb-4">
              <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest">
                Trade wherever you are
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Your market view, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                always within reach.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Use MetaTrader 5 to follow prices, study charts and manage positions across desktop and mobile devices.
            </p>

            {/* Feature List Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {platformFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-4 rounded-xl bg-[#0B1528]/60 border border-sky-500/10 hover:border-sky-500/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{feat.title}</h4>
                    <p className="text-xs text-slate-400 leading-normal">{feat.desc}</p>
                  </div>
                );
              })}
            </div>

            <a
              href="https://client.prorexltd.com/register"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-200"
            >
              <span>Explore MT5</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: Altum-style 3D Device & Trading Terminal Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl bg-gradient-to-tr from-[#081326] to-[#0E203E] p-6 sm:p-8 border border-sky-500/20 shadow-2xl">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-sky-500/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs text-slate-400 font-mono ml-2">MT5 Terminal — Prorex Limited</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <Laptop className="w-4 h-4 text-sky-400" />
                  <Smartphone className="w-4 h-4 text-slate-400" />
                </div>
              </div>

              {/* Terminal Inner UI */}
              <div className="bg-[#040810] rounded-xl p-5 border border-sky-500/10">
                
                {/* Portfolio Status Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div>
                    <span className="text-[11px] text-slate-500 block uppercase font-mono">Portfolio Equity</span>
                    <span className="text-2xl font-black text-white font-mono">$24,820.40</span>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                      +2.42% today
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-1">Status: Operational</span>
                  </div>
                </div>

                {/* Simulated Order Book / Positions */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#081222] border border-sky-500/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="font-bold text-white">EUR/USD</span>
                      <span className="text-[10px] bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded">BUY 1.00</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono">
                      <span className="text-slate-400">1.16840</span>
                      <span className="text-emerald-400 font-bold">+$240.00</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-[#081222] border border-sky-500/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="font-bold text-white">XAU/USD</span>
                      <span className="text-[10px] bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded">BUY 0.50</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono">
                      <span className="text-slate-400">3,386.40</span>
                      <span className="text-emerald-400 font-bold">+$615.50</span>
                    </div>
                  </div>
                </div>

                {/* Instant Order Bar */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button className="py-2.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 text-xs font-bold transition-all">
                    SELL 1.1682
                  </button>
                  <button className="py-2.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition-all">
                    BUY 1.1684
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
