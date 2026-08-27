export interface ProductItem {
  symbol: string;
  description: string;
  category: 'Forex' | 'Indices' | 'Energies' | 'Crypto' | 'Metals';
  contractSize?: string;
  spread?: string;
  leverage: string;
}

export const PRODUCT_LIST: ProductItem[] = [
  // Forex
  { symbol: 'AUDJPY', description: 'Australian Dollar vs Japanese Yen', category: 'Forex', leverage: '1:1000' },
  { symbol: 'AUDUSD', description: 'Australian Dollar vs US Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'EURGBP', description: 'Euro vs Great Britain Pound', category: 'Forex', leverage: '1:1000' },
  { symbol: 'EURUSD', description: 'Euro vs US Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'GBPUSD', description: 'Great Britain Pound vs US Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'NZDUSD', description: 'New Zealand Dollar vs US Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'USDCHF', description: 'US Dollar vs Swiss Franc', category: 'Forex', leverage: '1:1000' },
  { symbol: 'USDJPY', description: 'US Dollar vs Japanese Yen', category: 'Forex', leverage: '1:1000' },
  { symbol: 'AUDCAD', description: 'Australian Dollar vs Canadian Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'AUDCHF', description: 'Australian Dollar vs Swiss Franc', category: 'Forex', leverage: '1:1000' },
  { symbol: 'AUDNZD', description: 'Australian Dollar vs New Zealand Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'AUDSGD', description: 'Australian Dollar vs Singapore Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'CADCHF', description: 'Canadian Dollar vs Swiss Franc', category: 'Forex', leverage: '1:1000' },
  { symbol: 'CADJPY', description: 'Canadian Dollar vs Japanese Yen', category: 'Forex', leverage: '1:1000' },
  { symbol: 'CHFJPY', description: 'Swiss Franc vs Japanese Yen', category: 'Forex', leverage: '1:1000' },
  { symbol: 'EURAUD', description: 'Euro vs Australian Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'EURCAD', description: 'Euro vs Canadian Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'EURCHF', description: 'Euro vs Swiss Franc', category: 'Forex', leverage: '1:1000' },
  { symbol: 'EURJPY', description: 'Euro vs Japanese Yen', category: 'Forex', leverage: '1:1000' },
  { symbol: 'EURNZD', description: 'Euro vs New Zealand Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'EURSGD', description: 'Euro vs Singapore Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'GBPAUD', description: 'Great Britain Pound vs Australian Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'GBPCAD', description: 'Great Britain Pound vs Canadian Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'GBPCHF', description: 'Great Britain Pound vs Swiss Franc', category: 'Forex', leverage: '1:1000' },
  { symbol: 'GBPJPY', description: 'Great Britain Pound vs Japanese Yen', category: 'Forex', leverage: '1:1000' },
  { symbol: 'GBPNZD', description: 'Great Britain Pound vs New Zealand Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'NZDCAD', description: 'New Zealand Dollar vs Canadian Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'NZDCHF', description: 'New Zealand Dollar vs Swiss Franc', category: 'Forex', leverage: '1:1000' },
  { symbol: 'NZDJPY', description: 'New Zealand Dollar vs Japanese Yen', category: 'Forex', leverage: '1:1000' },
  { symbol: 'USDCAD', description: 'US Dollar vs Canadian Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'USDSGD', description: 'US Dollar vs Singapore Dollar', category: 'Forex', leverage: '1:1000' },
  { symbol: 'USDCNH', description: 'US Dollar vs Chinese Yuan', category: 'Forex', leverage: '1:1000' },
  { symbol: 'USDHKD', description: 'US Dollar vs Hong Kong Dollar', category: 'Forex', leverage: '1:1000' },

  // Indices
  { symbol: 'ASX', description: 'ASX200 (Australia)', category: 'Indices', contractSize: '1 lot = 100 (#N-AUS200)', leverage: '1:1000' },
  { symbol: 'CAC', description: 'CAC40 (France)', category: 'Indices', contractSize: '1 lot = 100 (#N-CAC40)', leverage: '1:1000' },
  { symbol: 'ChinaA50', description: 'FTSE CHINA A50', category: 'Indices', contractSize: '1 lot = 100 (#XIN9)', leverage: '1:1000' },
  { symbol: 'DAX', description: 'D40EUR (GER40)', category: 'Indices', contractSize: '1 lot = 100', leverage: '1:1000' },
  { symbol: 'DowJones', description: 'DowJones30 (US)', category: 'Indices', contractSize: '1 lot = 100 (#N-WS30)', leverage: '1:1000' },
  { symbol: 'EuroStoxx', description: 'DJ Euro Stoxx 50', category: 'Indices', contractSize: '1 lot = 100 (#N-ESX50)', leverage: '1:1000' },
  { symbol: 'FTSE', description: 'FTSE100 (UK)', category: 'Indices', contractSize: '1 lot = 100 (#N-UK100)', leverage: '1:1000' },
  { symbol: 'HangSeng', description: 'Hang Seng (Hong Kong)', category: 'Indices', contractSize: '1 lot = 1000 (#N-HK50)', leverage: '1:1000' },
  { symbol: 'Nasdaq', description: 'Nasdaq100 (US)', category: 'Indices', contractSize: '1 lot = 100 (#N-NAS100)', leverage: '1:1000' },
  { symbol: 'Nikkei', description: 'Nikkei225 (Japan)', category: 'Indices', contractSize: '1 lot = 1000 (#N-JPN225)', leverage: '1:1000' },
  { symbol: 'SP500', description: 'S&P500 (US)', category: 'Indices', contractSize: '1 lot = 100 (#N-SP500)', leverage: '1:1000' },

  // Energies
  { symbol: 'UKOil', description: 'Spot Brent Crude Oil', category: 'Energies', contractSize: '1 lot = 1000 Barrels', leverage: '1:1000' },
  { symbol: 'USOil', description: 'Spot WTI Crude Oil', category: 'Energies', contractSize: '1 lot = 1000 WTI', leverage: '1:1000' },

  // Crypto
  { symbol: 'BTCUSD', description: 'Bitcoin vs USD', category: 'Crypto', contractSize: '1 lot = 1 BTC', leverage: '1:1000' },
  { symbol: 'ETHUSD', description: 'Ethereum vs USD', category: 'Crypto', contractSize: '1 lot = 1 ETH', leverage: '1:1000' },
  { symbol: 'BCHUSD', description: 'Bitcoin Cash vs USD', category: 'Crypto', contractSize: '1 lot = 1 BCH', leverage: '1:1000' },
  { symbol: 'LTCUSD', description: 'LiteCoin vs USD', category: 'Crypto', contractSize: '1 lot = 1 LTC', leverage: '1:1000' },
  { symbol: 'XMRUSD', description: 'Monero vs USD', category: 'Crypto', contractSize: '1 lot = 1 XMR', leverage: '1:1000' },

  // Metals
  { symbol: 'XAUUSD', description: 'Gold vs USD', category: 'Metals', contractSize: '1 lot = 100 oz', leverage: '1:1000' },
  { symbol: 'XAGUSD', description: 'Silver vs USD', category: 'Metals', contractSize: '1 lot = 5000 oz', leverage: '1:1000' }
];
