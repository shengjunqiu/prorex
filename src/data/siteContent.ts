export interface MarketTickerItem {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
  category: 'Forex' | 'Metals' | 'Indices' | 'Crypto' | 'Shares';
}

export const TICKER_ITEMS: MarketTickerItem[] = [
  { symbol: 'EURUSD', name: 'Euro / US Dollar', price: '1.1684', change: '+0.24%', isPositive: true, category: 'Forex' },
  { symbol: 'GBPUSD', name: 'Great British Pound / USD', price: '1.3421', change: '+0.18%', isPositive: true, category: 'Forex' },
  { symbol: 'XAUUSD', name: 'Gold / US Dollar', price: '3,386.42', change: '+0.31%', isPositive: true, category: 'Metals' },
  { symbol: 'US500', name: 'S&P 500 Index', price: '6,379.22', change: '+0.11%', isPositive: true, category: 'Indices' },
  { symbol: 'USDJPY', name: 'US Dollar / Japanese Yen', price: '146.82', change: '−0.09%', isPositive: false, category: 'Forex' },
  { symbol: 'BTCUSD', name: 'Bitcoin / US Dollar', price: '114,280', change: '+0.42%', isPositive: true, category: 'Crypto' },
  { symbol: 'US100', name: 'Nasdaq 100 Index', price: '21,450.80', change: '+0.65%', isPositive: true, category: 'Indices' },
  { symbol: 'XAGUSD', name: 'Silver / US Dollar', price: '38.45', change: '+0.15%', isPositive: true, category: 'Metals' },
];

export const MARKET_CATEGORIES = [
  {
    id: 'forex',
    title: 'Forex',
    description: 'Trade major, minor and emerging currency pairs around the clock, five days a week.',
    actionText: 'Discover forex →',
    pairs: [
      { name: 'EUR/USD', spread: '0.1 pips', lev: '1:1000' },
      { name: 'GBP/USD', spread: '0.2 pips', lev: '1:1000' },
      { name: 'USD/JPY', spread: '0.1 pips', lev: '1:1000' },
      { name: 'AUD/USD', spread: '0.3 pips', lev: '1:1000' }
    ]
  },
  {
    id: 'indices',
    title: 'Indices',
    description: 'Follow the performance of leading global market benchmarks through index CFDs.',
    actionText: 'View indices →',
    pairs: [
      { name: 'US500 (S&P)', spread: '0.4 pts', lev: '1:1000' },
      { name: 'US100 (Nasdaq)', spread: '0.8 pts', lev: '1:1000' },
      { name: 'US30 (Dow Jones)', spread: '1.5 pts', lev: '1:1000' },
      { name: 'UK100 (FTSE)', spread: '1.0 pts', lev: '1:1000' }
    ]
  },
  {
    id: 'energies',
    title: 'Energies',
    description: 'Trade global crude energy commodities including Spot Brent and WTI crude oil.',
    actionText: 'Explore energies →',
    pairs: [
      { name: 'UKOil (Brent)', spread: '2.0 pts', lev: '1:1000' },
      { name: 'USOil (WTI)', spread: '2.0 pts', lev: '1:1000' },
      { name: 'Natural Gas', spread: '2.5 pts', lev: '1:1000' },
      { name: 'Gasoline', spread: '3.0 pts', lev: '1:1000' }
    ]
  },
  {
    id: 'crypto',
    title: 'Cryptocurrencies',
    description: 'Gain exposure to top digital currencies with flexible leverage and 24/7 trading availability.',
    actionText: 'Discover crypto →',
    pairs: [
      { name: 'BTC/USD (Bitcoin)', spread: 'Tight', lev: '1:1000' },
      { name: 'ETH/USD (Ethereum)', spread: 'Tight', lev: '1:1000' },
      { name: 'LTC/USD (Litecoin)', spread: 'Tight', lev: '1:1000' },
      { name: 'BCH/USD (Bitcoin Cash)', spread: 'Tight', lev: '1:1000' }
    ]
  },
  {
    id: 'metals',
    title: 'Metals',
    description: 'Explore gold and silver as precious safe-haven metals for your trading portfolio.',
    actionText: 'Explore metals →',
    pairs: [
      { name: 'XAU/USD (Gold)', spread: '1.2 pts', lev: '1:1000' },
      { name: 'XAG/USD (Silver)', spread: '1.8 pts', lev: '1:1000' },
      { name: 'Platinum', spread: '2.5 pts', lev: '1:1000' },
      { name: 'Palladium', spread: '3.0 pts', lev: '1:1000' }
    ]
  }
];

export const TRUST_FEATURES = [
  {
    number: '01',
    title: 'Clear trading conditions',
    description: 'Understand your account terms and pricing structure before you place a trade.',
    badge: 'Transparent'
  },
  {
    number: '02',
    title: 'Funds held separately',
    description: 'Client funds are maintained in segregated accounts with established financial institutions.',
    badge: 'Segregated'
  },
  {
    number: '03',
    title: 'Flexible strategies',
    description: 'Trade using the approach that suits you, including hedging and scalping strategies.',
    badge: 'No Restriction'
  },
  {
    number: '04',
    title: 'Responsive support',
    description: 'Connect with a support team ready to assist with platform and account questions.',
    badge: '24/5 Live'
  }
];
