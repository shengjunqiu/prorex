import React from 'react';
import { TRUST_FEATURES } from '../data/siteContent';
import { ShieldCheck, Lock, SlidersHorizontal, Headphones, ArrowUpRight } from 'lucide-react';

export const TrustAndFeatures: React.FC = () => {
  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Lock className="w-6 h-6 text-sky-400" />;
      case 1:
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 2:
        return <SlidersHorizontal className="w-6 h-6 text-blue-400" />;
      case 3:
        return <Headphones className="w-6 h-6 text-amber-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-background">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[300px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/50 border border-sky-500/20 mb-4">
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest">
              Built around traders
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5">
            Confidence comes from <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              clear foundations.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A resilient trading relationship starts with clear operational safeguards, transparent conditions and dependable platform access.
          </p>
        </div>

        {/* Protection / Infrastructure Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {TRUST_FEATURES.map((item, idx) => (
            <div
              key={item.number}
              className="group p-6 rounded-2xl bg-[#091325]/70 border border-sky-500/10 hover:border-sky-500/30 hover:bg-[#0D1C36] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#060B14] border border-sky-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getFeatureIcon(idx)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">
                    {item.number}
                  </span>
                </div>

                <div className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/20 mb-3">
                  {item.badge}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Verified safeguard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Big Bottom CTA Banner (Ready to approach the markets with clarity?) */}
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-[#0C1C38] via-[#0E244B] to-[#0A1832] border border-sky-500/30 shadow-2xl overflow-hidden text-center">
          {/* Internal light glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-sky-400/20 rounded-full blur-[90px] pointer-events-none" />
          
          <div className="relative max-w-3xl mx-auto">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-3">
              Your next move
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Ready to approach the markets with clarity?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Set up your account and explore the trading environment.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#accounts"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-xl shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Create an account</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
