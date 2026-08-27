import React from 'react';
import { ArrowUpRight, ChevronRight, Activity, Zap, ShieldCheck } from 'lucide-react';
import { TradingViewMiniChart } from './TradingViewMiniChart';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] bg-sky-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/25 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span className="text-xs font-semibold text-sky-300 uppercase tracking-wider">
                Global markets, one precise platform
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              See the market. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-blue-500">
                Move with clarity.
              </span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              Explore global opportunities with flexible accounts, responsive execution and the tools you need to make informed trading decisions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#accounts"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Start trading</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href="#platform"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-slate-200 bg-[#0B1528]/80 hover:bg-[#10203C] border border-sky-500/20 hover:border-sky-500/40 backdrop-blur-md transition-all duration-200"
              >
                <span>Explore the platform</span>
                <ChevronRight className="w-4 h-4 text-sky-400" />
              </a>
            </div>

            {/* Hero Quick Metrics (3 Badges) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-slate-800/80 w-full max-w-xl">
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium">Spread</span>
                <span className="text-lg sm:text-xl font-bold text-white mt-0.5">Variable</span>
              </div>
              <div className="flex flex-col border-x border-slate-800/80 px-3 sm:px-6">
                <span className="text-xs text-slate-400 font-medium">Leverage</span>
                <span className="text-lg sm:text-xl font-bold text-sky-400 mt-0.5">Up to 1:1000</span>
              </div>
              <div className="flex flex-col pl-2 sm:pl-0">
                <span className="text-xs text-slate-400 font-medium">Min. trade</span>
                <span className="text-lg sm:text-xl font-bold text-white mt-0.5">0.01 lots</span>
              </div>
            </div>
          </div>

          {/* Right Column: Altum-style High-tech Floating Trading Card Interface */}
          <div className="lg:col-span-5 relative">
            {/* Glow beneath the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/30 to-blue-600/30 rounded-3xl blur-2xl opacity-75 -z-10" />

            {/* Main FinTech Dashboard Card */}
            <div className="glass-panel rounded-2xl p-6 shadow-2xl relative border border-sky-500/20 backdrop-blur-xl">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-sky-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-white text-base">MetaTrader 5</h4>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold px-1.5 py-0.5 rounded">
                        LIVE
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">Desktop and mobile</p>
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-mono">0.01s Exec</span>
              </div>

              {/* Central Chart Graphic Mock -> Replaced with Real-Time TradingView Widget */}
              <div className="bg-[#050B16] rounded-xl p-2 border border-sky-500/10 mb-5 min-h-[220px]">
                <TradingViewMiniChart />
              </div>

              {/* Bottom Micro Features */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#070F1E] p-3 rounded-xl border border-sky-500/10 flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block">Speed</span>
                    <span className="text-xs font-bold text-slate-200">Ultra-fast order</span>
                  </div>
                </div>

                <div className="bg-[#070F1E] p-3 rounded-xl border border-sky-500/10 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 block">Funds</span>
                    <span className="text-xs font-bold text-slate-200">Segregated Accounts</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
