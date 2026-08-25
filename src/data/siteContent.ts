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
    tag: 'FX',
    number: '01',
    title: 'Forex',
    description: 'Trade major, minor and emerging currency pairs around the clock, five days a week.',
    actionText: 'Discover forex →',
    link: '#accounts',
    pairs: [
      { name: 'EUR/USD', spread: '0.1 pips', lev: '1:200' },
      { name: 'GBP/USD', spread: '0.2 pips', lev: '1:200' },
      { name: 'USD/JPY', spread: '0.1 pips', lev: '1:200' },
      { name: 'AUD/USD', spread: '0.3 pips', lev: '1:200' }
    ]
  },
  {
    id: 'metals',
    tag: 'Au',
    number: '02',
    title: 'Metals',
    description: 'Explore gold and other precious metals as part of a diversified trading strategy.',
    actionText: 'Explore metals →',
    link: '#accounts',
    pairs: [
      { name: 'XAU/USD (Gold)', spread: '1.2 pts', lev: '1:100' },
      { name: 'XAG/USD (Silver)', spread: '1.8 pts', lev: '1:100' },
      { name: 'Platinum', spread: '2.5 pts', lev: '1:50' },
      { name: 'Palladium', spread: '3.0 pts', lev: '1:50' }
    ]
  },
  {
    id: 'indices',
    tag: 'IX',
    number: '03',
    title: 'Indices',
    description: 'Follow the performance of leading market benchmarks through index CFDs.',
    actionText: 'View indices →',
    link: '#accounts',
    pairs: [
      { name: 'US500 (S&P)', spread: '0.4 pts', lev: '1:100' },
      { name: 'US100 (Nasdaq)', spread: '0.8 pts', lev: '1:100' },
      { name: 'US30 (Dow Jones)', spread: '1.5 pts', lev: '1:100' },
      { name: 'UK100 (FTSE)', spread: '1.0 pts', lev: '1:100' }
    ]
  },
  {
    id: 'shares',
    tag: 'EQ',
    number: '04',
    title: 'Share CFDs',
    description: 'Take a position on selected global companies without owning the underlying asset.',
    actionText: 'Browse shares →',
    link: '#accounts',
    pairs: [
      { name: 'Apple Inc (AAPL)', spread: 'Direct', lev: '1:20' },
      { name: 'NVIDIA (NVDA)', spread: 'Direct', lev: '1:20' },
      { name: 'Microsoft (MSFT)', spread: 'Direct', lev: '1:20' },
      { name: 'Tesla (TSLA)', spread: 'Direct', lev: '1:20' }
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
