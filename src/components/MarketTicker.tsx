import React from 'react';
import { TICKER_ITEMS } from '../data/siteContent';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const MarketTicker: React.FC = () => {
  // Double list for seamless looping animation
  const tickerList = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="w-full bg-[#050911]/90 border-y border-sky-500/10 py-3 overflow-hidden relative backdrop-blur-md">
      {/* Subtle fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#060B14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#060B14] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-ticker whitespace-nowrap gap-8 items-center">
        {tickerList.map((item, index) => (
          <div
            key={`${item.symbol}-${index}`}
            className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-lg bg-[#0B1528]/50 border border-sky-500/10 hover:border-sky-500/30 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs text-white tracking-wide">{item.symbol}</span>
              <span className="text-[10px] text-slate-400 hidden sm:inline">{item.category}</span>
            </div>
            <span className="font-mono text-xs font-semibold text-slate-200">{item.price}</span>
            <span
              className={`inline-flex items-center gap-0.5 text-xs font-semibold ${
                item.isPositive ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {item.isPositive ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
