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
            <a href="#" className="flex items-center mb-4 group">
              <img
                src="/logo.png"
                alt="Prorex Logo"
                className="h-14 sm:h-16 w-auto object-contain transition-opacity group-hover:opacity-90"
              />
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
                <li><a href="#markets" className="hover:text-sky-400 transition-colors">Energies</a></li>
                <li><a href="#markets" className="hover:text-sky-400 transition-colors">Cryptocurrencies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Accounts</h4>
              <ul className="space-y-2">
                <li><a href="#accounts" className="hover:text-sky-400 transition-colors">Standard Account</a></li>
                <li><a href="#accounts" className="hover:text-sky-400 transition-colors">Pro Account</a></li>
                <li><a href="#accounts" className="hover:text-sky-400 transition-colors">Cents Account</a></li>
                <li><a href="https://client.prorexltd.com/register" className="hover:text-sky-400 transition-colors">Open Account</a></li>
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

        {/* Regulatory & Risk Disclaimers */}
        <div className="py-8 space-y-4 text-[11px] text-slate-500 leading-relaxed border-b border-slate-800/80">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500/80 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-400 font-semibold">Risk Warning: </strong>
              Trading Contracts for Difference (CFDs) and other leveraged products involves a high level of risk and may not be suitable for all investors. Leverage can work both for and against you, and you may lose all of your invested capital. Before trading, ensure that you fully understand the risks involved and consider your investment objectives, experience and risk tolerance. Please refer to our Risk Disclosure for further information.
            </p>
          </div>

          <p>
            <strong className="text-slate-400 font-semibold">Regional Restrictions: </strong>
            Prorex Limited does not provide services to residents of jurisdictions where such distribution or use would be contrary to local laws or regulations. Certain products, services and account features may not be available in all jurisdictions. It is the client's responsibility to ensure that accessing and using our services is permitted under the laws applicable to them.
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
