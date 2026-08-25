import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03060C] text-slate-400 text-xs border-t border-sky-500/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white font-black text-lg">
                P
              </div>
              <span className="text-xl font-bold tracking-tight text-white">PROREX</span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm mb-4 leading-relaxed">
              Technology-led access to global markets.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Markets</h4>
              <ul className="space-y-2">
                <li><a href="#markets" className="hover:text-sky-400 transition-colors">Forex</a></li>
                <li><a href="#markets" className="hover:text-sky-400 transition-colors">Metals</a></li>
                <li><a href="#markets" className="hover:text-sky-400 transition-colors">Indices</a></li>
                <li><a href="#markets" className="hover:text-sky-400 transition-colors">Share CFDs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Accounts</h4>
              <ul className="space-y-2">
                <li><a href="#accounts" className="hover:text-sky-400 transition-colors">Standard Account</a></li>
                <li><a href="#accounts" className="hover:text-sky-400 transition-colors">ECN Account</a></li>
                <li><a href="#accounts" className="hover:text-sky-400 transition-colors">Open Account</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#platform" className="hover:text-sky-400 transition-colors">MetaTrader 5</a></li>
                <li><a href="#platform" className="hover:text-sky-400 transition-colors">Desktop</a></li>
                <li><a href="#platform" className="hover:text-sky-400 transition-colors">Mobile iOS & Android</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="#why-us" className="hover:text-sky-400 transition-colors">Why Prorex</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-sky-400 transition-colors">Risk Disclosure</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Regulatory & Risk Disclaimers (Exact Prorex copy) */}
        <div className="py-8 space-y-4 text-[11px] text-slate-500 leading-relaxed border-b border-slate-800/80">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500/80 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-400 font-semibold">Risk warning: </strong>
              Contracts for Difference (CFDs) are complex leveraged products. Leverage can amplify both gains and losses, and you may lose all of your invested capital. Consider whether you understand how CFDs work and whether you can afford the high risk of loss before trading.
            </p>
          </div>

          <p>
            <strong className="text-slate-400 font-semibold">Regional restrictions: </strong>
            Services are not offered where their provision would be contrary to local laws or regulations. Product availability and account conditions may differ by jurisdiction.
          </p>
        </div>

        {/* Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 Prorex Limited. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="hover:text-sky-400 transition-colors">Privacy</a>
            <span className="text-slate-700">·</span>
            <a href="#" className="hover:text-sky-400 transition-colors">Terms</a>
            <span className="text-slate-700">·</span>
            <a href="#" className="hover:text-sky-400 transition-colors">Risk disclosure</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
