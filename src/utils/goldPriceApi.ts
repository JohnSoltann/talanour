import axios from 'axios';

// Configuration for the TGJU API
const TGJU_API_CONFIG = {
  baseURL: 'https://api.tgju.org',
  headers: {
    'Authorization': 'Bearer 0bslbsaukfnzp8e8f9u5',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  params: {
    // Add timestamp to prevent caching
    rev: new Date().getTime()
  }
};

// Create an axios instance with the config
const tgjuAxios = axios.create(TGJU_API_CONFIG);

// Types for the API response
export interface GoldPriceData {
  name: string;
  price: number;
  change: number;
  percent: number;
  high: number;
  low: number;
  time: string;
  last_update?: string;
  [key: string]: any; // For any other properties that might be returned
}

// Gold symbols for TGJU API
export const GOLD_SYMBOLS = {
  MESGHAL: 'mesghal',           // مثقال طلا
  GOLD_18: 'geram18',           // طلای 18 عیار
  GOLD_24: 'geram24',           // طلای 24 عیار
  GOLD_OUNCE: 'ons',            // اونس جهانی
  COIN_EMAMI: 'emami',          // سکه امامی
  COIN_BAHAR: 'bahar',          // سکه بهار آزادی
  COIN_HALF: 'nim',             // نیم سکه
  COIN_QUARTER: 'rob',          // ربع سکه
  COIN_GRAM: 'gerami'           // سکه گرمی
};

/**
 * Fetches the current gold prices from TGJU API
 * @returns Promise with gold price data
 */
export const fetchGoldPrices = async (): Promise<GoldPriceData[]> => {
  try {
    console.log('Fetching all gold prices...');
    
    // Try both working endpoints
    const [summaryResponse, latestResponse] = await Promise.all([
      tgjuAxios.get('/v1/market/indicator/summary/price'),
      tgjuAxios.get('/v1/market/indicator/latest')
    ]);
    
    console.log('Summary Response:', summaryResponse.data);
    console.log('Latest Response:', latestResponse.data);
    
    if (summaryResponse.data && typeof summaryResponse.data === 'object') {
      // Process the response data
      const prices = Object.entries(summaryResponse.data).map(([key, value]: [string, any]) => ({
        name: value.name || key,
        price: parseFloat(value.p || value.price || 0),
        change: parseFloat(value.d || value.change || 0),
        percent: parseFloat(value.dp || value.percent || 0),
        high: parseFloat(value.h || value.high || 0),
        low: parseFloat(value.l || value.low || 0),
        time: value.t || value.time || new Date().toISOString(),
        symbol: key
      }));
      
      return prices;
    } else {
      console.error('Invalid API response structure:', summaryResponse.data);
      return Object.values(getDefaultGoldPrices());
    }
  } catch (error) {
    console.error('Error fetching gold prices:', error);
    return Object.values(getDefaultGoldPrices());
  }
};

/**
 * Fetches a specific gold type price
 * @param symbol The symbol or ID of the gold type from GOLD_SYMBOLS
 * @returns Promise with specific gold price data
 */
export const fetchSpecificGoldPrice = async (symbol: string): Promise<GoldPriceData> => {
  try {
    console.log(`Fetching gold price for ${symbol}...`);
    
    // Try both working endpoints with the specific symbol
    const [summaryResponse, latestResponse] = await Promise.all([
      tgjuAxios.get(`/v1/market/indicator/summary/price/${symbol}`),
      tgjuAxios.get(`/v1/market/indicator/latest/${symbol}`)
    ]);
    
    console.log(`Summary Response for ${symbol}:`, summaryResponse.data);
    console.log(`Latest Response for ${symbol}:`, latestResponse.data);
    
    const data = summaryResponse.data;
    
    if (data && typeof data === 'object') {
      return {
        name: data.name || symbol,
        price: parseFloat(data.p || data.price || 0),
        change: parseFloat(data.d || data.change || 0),
        percent: parseFloat(data.dp || data.percent || 0),
        high: parseFloat(data.h || data.high || 0),
        low: parseFloat(data.l || data.low || 0),
        time: data.t || data.time || new Date().toISOString(),
        symbol: symbol
      };
    } else {
      console.error(`Invalid API response structure for ${symbol}:`, data);
      const defaultData = getDefaultGoldPrices();
      return defaultData[symbol] || {
        name: symbol,
        price: 0,
        change: 0,
        percent: 0,
        high: 0,
        low: 0,
        time: new Date().toISOString(),
        symbol: symbol
      };
    }
  } catch (error) {
    console.error(`Error fetching gold price for ${symbol}:`, error);
    const defaultData = getDefaultGoldPrices();
    return defaultData[symbol] || {
      name: symbol,
      price: 0,
      change: 0,
      percent: 0,
      high: 0,
      low: 0,
      time: new Date().toISOString(),
      symbol: symbol,
      error: true
    };
  }
};

/**
 * دریافت مستقیم داده‌های قیمت طلا بدون استفاده از API (مقادیر پیش‌فرض)
 * این روش موقتی است تا زمانی که دسترسی به API را تنظیم کنیم
 */
export const getDefaultGoldPrices = (): { [key: string]: GoldPriceData } => {
  const now = new Date().toISOString();
  return {
    [GOLD_SYMBOLS.GOLD_18]: {
      name: 'طلای ۱۸ عیار',
      price: 65870000,
      change: 0.63,
      percent: 0.63,
      high: 66000000,
      low: 65000000,
      time: now,
    },
    [GOLD_SYMBOLS.GOLD_24]: {
      name: 'طلای ۲۴ عیار',
      price: 86743000,
      change: 0.63,
      percent: 0.63,
      high: 87000000,
      low: 86000000,
      time: now,
    },
    [GOLD_SYMBOLS.GOLD_OUNCE]: {
      name: 'اونس جهانی طلا',
      price: 2350000,
      change: 0.05,
      percent: 0.05,
      high: 2370000,
      low: 2340000,
      time: now,
    },
    [GOLD_SYMBOLS.COIN_EMAMI]: {
      name: 'سکه امامی',
      price: 330000000,
      change: 0.41,
      percent: 0.41,
      high: 335000000,
      low: 328000000,
      time: now,
    },
  };
};

// Export default object with all methods
const goldPriceApi = {
  fetchGoldPrices,
  fetchSpecificGoldPrice,
  GOLD_SYMBOLS,
  getDefaultGoldPrices
};

export default goldPriceApi; 