import React, { useState, useMemo } from 'react';
import { PRODUCT_LIST } from '../data/products';
import { X, Search, Filter, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const ProductsModal: React.FC<ProductsModalProps> = ({ isOpen, onClose, initialCategory = 'All' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Update selectedCategory when initialCategory changes
  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = ['All', 'Forex', 'Indices', 'Energies', 'Crypto', 'Metals'];

  const filteredProducts = useMemo(() => {
    return PRODUCT_LIST.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        item.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        item.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  if (!isOpen) return null;

  const getCategoryBadge = (category: string) => {
    switch (category.toLowerCase()) {
      case 'forex':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-500/15 text-sky-400 border border-sky-500/20">Forex</span>;
      case 'indices':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/20">Indices</span>;
      case 'energies':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/20">Energies</span>;
      case 'crypto':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-400 border border-purple-500/20">Crypto</span>;
      case 'metals':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-500/15 text-yellow-400 border border-yellow-500/20">Metals</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-500/15 text-slate-300">{category}</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#070F1E] border border-sky-500/25 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-sky-500/15 bg-gradient-to-r from-[#0A172E] via-[#0E203E] to-[#0A172E] relative flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full Market Range</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Product Specifications
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Explore available CFD instruments, lot sizes, and leverage conditions.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-all focus:outline-none border border-slate-700/50"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="p-4 sm:p-6 border-b border-sky-500/10 bg-[#050B16] flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-[#0B172E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search symbol or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[#09152B] border border-sky-500/20 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
            />
          </div>
        </div>

        {/* Products Table Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {filteredProducts.length > 0 ? (
            <div className="overflow-x-auto rounded-xl border border-sky-500/15 bg-[#050C19]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-sky-500/15 bg-[#0A172E]/80 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <th className="py-3.5 px-4 sm:px-6">Symbol</th>
                    <th className="py-3.5 px-4 sm:px-6">Description</th>
                    <th className="py-3.5 px-4 sm:px-6">Market</th>
                    <th className="py-3.5 px-4 sm:px-6">Contract Size / Specs</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Max Leverage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky-500/10 text-sm">
                  {filteredProducts.map((p) => (
                    <tr key={p.symbol} className="hover:bg-[#0C1B38]/60 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-mono font-bold text-sky-400">
                        {p.symbol}
                      </td>
                      <td className="py-3 px-4 sm:px-6 font-medium text-slate-200">
                        {p.description}
                      </td>
                      <td className="py-3 px-4 sm:px-6">
                        {getCategoryBadge(p.category)}
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-xs text-slate-400 font-mono">
                        {p.contractSize || 'Standard Lot (100,000)'}
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-right font-mono font-bold text-slate-200">
                        {p.leverage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-16 text-center">
              <Filter className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400 text-base font-semibold">No instruments found</p>
              <p className="text-slate-600 text-xs mt-1">Try searching with a different symbol or keyword.</p>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="p-4 sm:p-6 border-t border-sky-500/15 bg-[#050B16] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Showing <strong className="text-white">{filteredProducts.length}</strong> of {PRODUCT_LIST.length} instruments
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
            <a
              href="https://client.prorexltd.com/register"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-md shadow-sky-500/30 transition-all"
            >
              <span>Trade Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
