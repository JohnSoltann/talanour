'use client';

import React, { useState, useEffect } from 'react';
import goldPriceApi, { GoldPriceData, GOLD_SYMBOLS } from '../utils/goldPriceApi';

interface GoldPrice {
  type: string;
  price: number;
  change: number;
  lastUpdated: string;
}

const GoldPriceWidget = () => {
  const [goldPrices, setGoldPrices] = useState<GoldPrice[]>([
    { type: 'طلای ۱۸ عیار (هر گرم)', price: 0, change: 0, lastUpdated: '۰۰:۰۰:۰۰' },
    { type: 'طلای ۲۴ عیار (هر گرم)', price: 0, change: 0, lastUpdated: '۰۰:۰۰:۰۰' },
    { type: 'اونس جهانی طلا', price: 0, change: 0, lastUpdated: '۰۰:۰۰:۰۰' },
    { type: 'سکه امامی (تمام بهار)', price: 0, change: 0, lastUpdated: '۰۰:۰۰:۰۰' },
  ]);
  
  const [currentTime, setCurrentTime] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isUsingDefault, setIsUsingDefault] = useState<boolean>(false);
  
  // Fetch gold prices from API
  const fetchGoldPrices = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Get current time in Persian format for lastUpdated
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const persianTime = `${convertToPersianNumber(hours)}:${convertToPersianNumber(minutes)}:${convertToPersianNumber(seconds)}`;
      
      console.log('Fetching gold prices from API...');
      
      // Fetch prices from API
      const prices = await goldPriceApi.fetchGoldPrices();
      console.log('Received prices:', prices);
      
      // Map the prices to our format
      const updatedPrices: GoldPrice[] = [
        {
          type: 'طلای ۱۸ عیار (هر گرم)',
          price: prices.find(p => p.symbol === GOLD_SYMBOLS.GOLD_18)?.price || 0,
          change: prices.find(p => p.symbol === GOLD_SYMBOLS.GOLD_18)?.percent || 0,
          lastUpdated: persianTime
        },
        {
          type: 'طلای ۲۴ عیار (هر گرم)',
          price: prices.find(p => p.symbol === GOLD_SYMBOLS.GOLD_24)?.price || 0,
          change: prices.find(p => p.symbol === GOLD_SYMBOLS.GOLD_24)?.percent || 0,
          lastUpdated: persianTime
        },
        {
          type: 'اونس جهانی طلا',
          price: prices.find(p => p.symbol === GOLD_SYMBOLS.GOLD_OUNCE)?.price || 0,
          change: prices.find(p => p.symbol === GOLD_SYMBOLS.GOLD_OUNCE)?.percent || 0,
          lastUpdated: persianTime
        },
        {
          type: 'سکه امامی (تمام بهار)',
          price: prices.find(p => p.symbol === GOLD_SYMBOLS.COIN_EMAMI)?.price || 0,
          change: prices.find(p => p.symbol === GOLD_SYMBOLS.COIN_EMAMI)?.percent || 0,
          lastUpdated: persianTime
        }
      ];
      
      console.log('Updated prices:', updatedPrices);
      setGoldPrices(updatedPrices);
      setLoading(false);
      setIsUsingDefault(false);
    } catch (err) {
      console.error('Error fetching gold prices:', err);
      setError('خطا در دریافت قیمت‌ها. لطفاً دوباره تلاش کنید.');
      setLoading(false);
      setIsUsingDefault(true);
    }
  };
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      
      // Convert to Persian numerals
      const persianTime = `${convertToPersianNumber(hours)}:${convertToPersianNumber(minutes)}:${convertToPersianNumber(seconds)}`;
      
      setCurrentTime(persianTime);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Fetch prices initially and then every 5 minutes
  useEffect(() => {
    fetchGoldPrices();
    
    const updateInterval = setInterval(() => {
      fetchGoldPrices();
    }, 300000); // Update every 5 minutes (300000ms)
    
    return () => clearInterval(updateInterval);
  }, []);
  
  // Helper function to convert numbers to Persian
  const convertToPersianNumber = (num: string | number): string => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/[0-9]/g, function(w) {
      return persianDigits[+w];
    });
  };
  
  // Format price with commas and convert to Persian
  const formatPrice = (price: number): string => {
    if (!price) return '۰';
    return convertToPersianNumber(Math.round(price).toLocaleString('fa-IR'));
  };
  
  // Handle retry when there's an error
  const handleRetry = () => {
    fetchGoldPrices();
  };
  
  return (
    <div>
      {error && (
        <div className="text-red-600 mb-4 text-center p-3 bg-red-100 rounded-lg flex flex-col items-center">
          <p>{error}</p>
          <button 
            onClick={handleRetry}
            className="mt-2 px-4 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            تلاش مجدد
          </button>
        </div>
      )}
      
      {isUsingDefault && !error && (
        <div className="text-amber-700 mb-4 text-center p-2 bg-amber-100 rounded-lg text-xs">
          توجه: در حال نمایش داده‌های نمونه. اتصال به API در حال بررسی است.
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {goldPrices.map((gold, index) => (
          <div 
            key={index} 
            className={`rounded-2xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 ${
              gold.type.includes('سکه') 
                ? 'glass-dollar hover:shadow-lg' 
                : 'glass-gold hover:shadow-lg'
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm md:text-base font-bold">{gold.type}</h3>
              {loading ? (
                <div className="w-8 h-6 bg-gray-200 animate-pulse rounded"></div>
              ) : (
                <span className={`px-2.5 py-1 rounded-xl text-xs md:text-sm font-bold ${
                  gold.change >= 0 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {gold.change >= 0 ? '▲' : '▼'} {convertToPersianNumber(Math.abs(gold.change || 0))}٪
                </span>
              )}
            </div>
            <div className="text-xl md:text-2xl font-bold flex justify-between items-end">
              {loading ? (
                <div className="w-32 h-8 bg-gray-200 animate-pulse rounded"></div>
              ) : (
                <>
                  <span className="font-black">
                    {formatPrice(gold.price)}
                  </span>
                  <span className="text-xs md:text-sm font-normal">تومان</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center text-xs md:text-sm">
        <span className="inline-flex items-center">
          <svg className="w-3 h-3 md:w-4 md:h-4 mr-1 text-gold-500 animate-ping" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
          آخرین به‌روزرسانی قیمت: {currentTime} | منبع: مثقال‌ (TGJU.org)
        </span>
      </div>
    </div>
  );
};

export default GoldPriceWidget; 