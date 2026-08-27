import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export interface TickerData {
  symbol: string;
  name: string;
  category: 'Forex' | 'Metals' | 'Energies' | 'Indices' | 'Crypto';
  price: string;
  change: string;
  isPositive: boolean;
  rawPrice?: number;
  flash?: 'up' | 'down';
}

const INITIAL_FALLBACK_ITEMS: TickerData[] = [
  { symbol: 'EURUSD', name: 'Euro / US Dollar', category: 'Forex', price: '1.0850', change: '+0.12%', isPositive: true },
  { symbol: 'GBPUSD', name: 'British Pound / USD', category: 'Forex', price: '1.2950', change: '+0.08%', isPositive: true },
  { symbol: 'USDJPY', name: 'US Dollar / Yen', category: 'Forex', price: '154.20', change: '-0.15%', isPositive: false },
  { symbol: 'AUDUSD', name: 'Australian Dollar / USD', category: 'Forex', price: '0.6540', change: '+0.25%', isPositive: true },
  { symbol: 'XAUUSD', name: 'Gold / US Dollar', category: 'Metals', price: '2,745.50', change: '+0.45%', isPositive: true },
  { symbol: 'XAGUSD', name: 'Silver / US Dollar', category: 'Metals', price: '32.10', change: '+0.80%', isPositive: true },
  { symbol: 'USOil', name: 'WTI Crude Oil', category: 'Energies', price: '72.30', change: '-0.50%', isPositive: false },
  { symbol: 'UKOil', name: 'Brent Crude Oil', category: 'Energies', price: '76.40', change: '-0.40%', isPositive: false },
  { symbol: 'US500', name: 'S&P 500 Index', category: 'Indices', price: '5,860.20', change: '+0.35%', isPositive: true },
  { symbol: 'US100', name: 'Nasdaq 100 Index', category: 'Indices', price: '20,450.00', change: '+0.52%', isPositive: true },
  { symbol: 'US30', name: 'Dow Jones 30', category: 'Indices', price: '43,200.00', change: '+0.10%', isPositive: true },
  { symbol: 'BTCUSD', name: 'Bitcoin', category: 'Crypto', price: '68,500.00', change: '+1.20%', isPositive: true },
  { symbol: 'ETHUSD', name: 'Ethereum', category: 'Crypto', price: '2,540.00', change: '+1.50%', isPositive: true },
  { symbol: 'SOLUSD', name: 'Solana', category: 'Crypto', price: '180.50', change: '+2.10%', isPositive: true },
];

export const TradingViewTickerWidget: React.FC = () => {
  const [items, setItems] = useState<TickerData[]>(INITIAL_FALLBACK_ITEMS);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const prevPricesRef = useRef<Record<string, number>>({});

  useEffect(() => {
    let isMounted = true;

    // Load JSONP helper for Tencent Market API
    const fetchTencentData = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        const scriptId = 'tencent_qt_script';
        const oldScript = document.getElementById(scriptId);
        if (oldScript) {
          oldScript.remove();
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = `https://qt.gtimg.cn/q=whEURUSD,whGBPUSD,whUSDJPY,whAUDUSD,hf_XAU,hf_XAG,hf_CL,hf_OIL,usNDX,usDJI,usINX&_t=${Date.now()}`;
        script.onload = () => {
          // Read global vars created by script
          const windowAny = window as any;
          const result = {
            EURUSD: windowAny.v_whEURUSD,
            GBPUSD: windowAny.v_whGBPUSD,
            USDJPY: windowAny.v_whUSDJPY,
            AUDUSD: windowAny.v_whAUDUSD,
            XAU: windowAny.v_hf_XAU,
            XAG: windowAny.v_hf_XAG,
            USOIL: windowAny.v_hf_CL,
            UKOIL: windowAny.v_hf_OIL,
            NDX: windowAny.v_usNDX,
            DJI: windowAny.v_usDJI,
            INX: windowAny.v_usINX,
          };
          resolve(JSON.stringify(result));
        };
        script.onerror = () => reject(new Error('Tencent finance load failed'));
        document.body.appendChild(script);
      });
    };

    // Fetch OKX Crypto Data
    const fetchOKXCrypto = async () => {
      try {
        const res = await fetch('https://www.okx.com/api/v5/market/tickers?instType=SPOT');
        if (!res.ok) return null;
        const json = await res.json();
        return json.data || [];
      } catch {
        return null;
      }
    };

    const fetchAllRealMarketData = async () => {
      try {
        const [tencentRaw, okxData] = await Promise.all([
          fetchTencentData().catch(() => null),
          fetchOKXCrypto().catch(() => null),
        ]);

        if (!isMounted) return;

        const updated: TickerData[] = [];
        const prevPrices = prevPricesRef.current;

        // 1. Parse Tencent FX
        if (tencentRaw) {
          const rawObj = JSON.parse(tencentRaw);

          // Parse FX: "310~欧元美元~EURUSD~1.1658~0~20260827100205~...~change~changePct~..."
          const parseFx = (str: string, sym: string, name: string): TickerData | null => {
            if (!str) return null;
            const parts = str.split('~');
            if (parts.length < 10) return null;
            const priceNum = parseFloat(parts[3]) || 0;
            const changePctNum = parseFloat(parts[13]) || 0;
            const prev = prevPrices[sym];
            const flash = prev !== undefined && prev !== priceNum ? (priceNum > prev ? 'up' : 'down') : undefined;
            prevPrices[sym] = priceNum;

            return {
              symbol: sym,
              name,
              category: 'Forex',
              price: priceNum.toFixed(4),
              change: `${changePctNum >= 0 ? '+' : ''}${changePctNum.toFixed(2)}%`,
              isPositive: changePctNum >= 0,
              rawPrice: priceNum,
              flash,
            };
          };

          const eurusd = parseFx(rawObj.EURUSD, 'EURUSD', 'Euro / US Dollar');
          if (eurusd) updated.push(eurusd);

          const gbpusd = parseFx(rawObj.GBPUSD, 'GBPUSD', 'British Pound / USD');
          if (gbpusd) updated.push(gbpusd);

          const usdjpy = parseFx(rawObj.USDJPY, 'USDJPY', 'US Dollar / Yen');
          if (usdjpy) {
            usdjpy.price = usdjpy.rawPrice ? usdjpy.rawPrice.toFixed(2) : usdjpy.price;
            updated.push(usdjpy);
          }

          const audusd = parseFx(rawObj.AUDUSD, 'AUDUSD', 'Australian Dollar / USD');
          if (audusd) updated.push(audusd);

          // 2. Parse Metals (hf_XAU, hf_XAG): "4642.66,1.05,4642.66,..."
          const parseFutures = (str: string, sym: string, name: string, cat: 'Metals' | 'Energies', decimals = 2): TickerData | null => {
            if (!str) return null;
            const parts = str.split(',');
            if (parts.length < 3) return null;
            const priceNum = parseFloat(parts[0]) || 0;
            const changePctNum = parseFloat(parts[1]) || 0;
            const prev = prevPrices[sym];
            const flash = prev !== undefined && prev !== priceNum ? (priceNum > prev ? 'up' : 'down') : undefined;
            prevPrices[sym] = priceNum;

            return {
              symbol: sym,
              name,
              category: cat,
              price: priceNum.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }),
              change: `${changePctNum >= 0 ? '+' : ''}${changePctNum.toFixed(2)}%`,
              isPositive: changePctNum >= 0,
              rawPrice: priceNum,
              flash,
            };
          };

          const xau = parseFutures(rawObj.XAU, 'XAUUSD', 'Gold / US Dollar', 'Metals', 2);
          if (xau) updated.push(xau);

          const xag = parseFutures(rawObj.XAG, 'XAGUSD', 'Silver / US Dollar', 'Metals', 2);
          if (xag) updated.push(xag);

          const usoil = parseFutures(rawObj.USOIL, 'USOil', 'WTI Crude Oil', 'Energies', 2);
          if (usoil) updated.push(usoil);

          const ukoil = parseFutures(rawObj.UKOIL, 'UKOil', 'Brent Crude Oil', 'Energies', 2);
          if (ukoil) updated.push(ukoil);

          // 3. Parse Indices: "200~标普500~.INX~7675.70~...~change~changePct~..."
          const parseIndex = (str: string, sym: string, name: string): TickerData | null => {
            if (!str) return null;
            const parts = str.split('~');
            if (parts.length < 33) return null;
            const priceNum = parseFloat(parts[3]) || 0;
            const changePctNum = parseFloat(parts[32]) || 0;
            const prev = prevPrices[sym];
            const flash = prev !== undefined && prev !== priceNum ? (priceNum > prev ? 'up' : 'down') : undefined;
            prevPrices[sym] = priceNum;

            return {
              symbol: sym,
              name,
              category: 'Indices',
              price: priceNum.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
              change: `${changePctNum >= 0 ? '+' : ''}${changePctNum.toFixed(2)}%`,
              isPositive: changePctNum >= 0,
              rawPrice: priceNum,
              flash,
            };
          };

          const inx = parseIndex(rawObj.INX, 'US500', 'S&P 500 Index');
          if (inx) updated.push(inx);

          const ndx = parseIndex(rawObj.NDX, 'US100', 'Nasdaq 100 Index');
          if (ndx) updated.push(ndx);

          const dji = parseIndex(rawObj.DJI, 'US30', 'Dow Jones 30');
          if (dji) updated.push(dji);
        }

        // 4. Parse Crypto (OKX)
        if (okxData && Array.isArray(okxData)) {
          const parseCrypto = (instId: string, sym: string, name: string): TickerData | null => {
            const row = okxData.find((d: any) => d.instId === instId);
            if (!row) return null;
            const last = parseFloat(row.last) || 0;
            const open = parseFloat(row.open24h) || last;
            const changePct = open > 0 ? ((last - open) / open) * 100 : 0;
            const prev = prevPrices[sym];
            const flash: 'up' | 'down' | undefined = prev !== undefined && prev !== last ? (last > prev ? 'up' : 'down') : undefined;
            prevPrices[sym] = last;

            return {
              symbol: sym,
              name,
              category: 'Crypto',
              price: last.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
              change: `${changePct >= 0 ? '+' : ''}${changePct.toFixed(2)}%`,
              isPositive: changePct >= 0,
              rawPrice: last,
              flash,
            };
          };

          const btc = parseCrypto('BTC-USDT', 'BTCUSD', 'Bitcoin');
          if (btc) updated.push(btc);

          const eth = parseCrypto('ETH-USDT', 'ETHUSD', 'Ethereum');
          if (eth) updated.push(eth);

          const sol = parseCrypto('SOL-USDT', 'SOLUSD', 'Solana');
          if (sol) updated.push(sol);
        }

        if (updated.length > 0) {
          setItems(updated);
          const now = new Date();
          setLastUpdated(now.toTimeString().split(' ')[0]);
        }
      } catch (err) {
        console.error('Failed to fetch real market data', err);
      }
    };

    // Initial immediate fetch
    fetchAllRealMarketData();

    // Poll every 3 seconds for live real-time price updates
    const timer = setInterval(fetchAllRealMarketData, 3000);

    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, []);

  // Triple list for smooth continuous scrolling ticker
  const tickerList = [...items, ...items, ...items];

  return (
    <div className="w-full bg-[#050911]/95 border-y border-sky-500/10 py-2.5 overflow-hidden relative backdrop-blur-md">
      {/* Edge Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#060B14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#060B14] to-transparent z-10 pointer-events-none" />

      {/* Live Market Indicator Status */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded bg-sky-950/80 border border-sky-500/30 text-[10px] font-mono text-sky-400 backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>LIVE FEED</span>
        {lastUpdated && <span className="text-slate-500">({lastUpdated})</span>}
      </div>

      <div className="flex animate-ticker whitespace-nowrap gap-6 items-center">
        {tickerList.map((item, index) => (
          <div
            key={`${item.symbol}-${index}`}
            className={`inline-flex items-center gap-3 px-3 py-1.5 rounded-lg border transition-all duration-300 ${
              item.flash === 'up'
                ? 'bg-emerald-950/50 border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
                : item.flash === 'down'
                ? 'bg-rose-950/50 border-rose-500/60 shadow-[0_0_15px_rgba(244,63,94,0.25)]'
                : 'bg-[#0B1528]/60 border-sky-500/15 hover:border-sky-500/40'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs text-white tracking-wide">{item.symbol}</span>
              <span className="text-[10px] text-slate-400 hidden sm:inline">{item.category}</span>
            </div>

            <span
              className={`font-mono text-xs font-semibold transition-colors duration-200 ${
                item.flash === 'up'
                  ? 'text-emerald-300 font-bold'
                  : item.flash === 'down'
                  ? 'text-rose-300 font-bold'
                  : 'text-slate-100'
              }`}
            >
              {item.price}
            </span>

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
