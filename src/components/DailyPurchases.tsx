'use client';

import React, { useState, useEffect } from 'react';

interface Purchase {
  id: number;
  userName: string;
  amount: string;
  time: string;
  type: 'buy' | 'sell';
}

const DailyPurchases = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  
  useEffect(() => {
    // Mock data for purchases
    const mockPurchases: Purchase[] = [
      { id: 1, userName: 'علی.م', amount: '۵.۳ گرم', time: '۱۰:۲۵', type: 'buy' },
      { id: 2, userName: 'محمد.ص', amount: '۷.۲ گرم', time: '۱۰:۱۸', type: 'buy' },
      { id: 3, userName: 'فاطمه.ر', amount: '۱۰ گرم', time: '۱۰:۰۵', type: 'buy' },
      { id: 4, userName: 'سارا.ن', amount: '۲.۵ گرم', time: '۰۹:۵۶', type: 'sell' },
      { id: 5, userName: 'رضا.ک', amount: '۱۵.۸ گرم', time: '۰۹:۴۲', type: 'buy' },
      { id: 6, userName: 'امیر.ع', amount: '۴.۲ گرم', time: '۰۹:۳۰', type: 'sell' },
      { id: 7, userName: 'زهرا.د', amount: '۸.۵ گرم', time: '۰۹:۱۵', type: 'buy' },
      { id: 8, userName: 'حسین.ب', amount: '۱۲ گرم', time: '۰۹:۰۳', type: 'buy' },
    ];
    
    setPurchases(mockPurchases);
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      const names = ['مهدی', 'سعید', 'مینا', 'پریسا', 'شیما', 'علیرضا', 'محسن', 'فرناز', 'آرش', 'نیما'];
      const lastNames = ['الف', 'م', 'ب', 'ح', 'س', 'ط', 'ل', 'ن', 'ت', 'د'];
      
      const randomName = `${names[Math.floor(Math.random() * names.length)]}.${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
      const randomAmount = (Math.random() * 15 + 1).toFixed(1);
      
      const newPurchase: Purchase = {
        id: Date.now(),
        userName: randomName,
        amount: `${convertToPersianNumber(randomAmount)} گرم`,
        time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
        type: Math.random() > 0.3 ? 'buy' : 'sell'
      };
      
      setPurchases(prev => [newPurchase, ...prev.slice(0, 7)]);
    }, 60000); // Add new purchase every minute
    
    return () => clearInterval(interval);
  }, []);
  
  // Helper function to convert numbers to Persian
  const convertToPersianNumber = (num: string | number): string => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().replace(/[0-9]/g, function(w) {
      return persianDigits[+w];
    });
  };
  
  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gold-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-right text-sm md:text-base font-medium">کاربر</th>
              <th className="px-6 py-3 text-right text-sm md:text-base font-medium">نوع معامله</th>
              <th className="px-6 py-3 text-right text-sm md:text-base font-medium">مقدار (گرم)</th>
              <th className="px-6 py-3 text-right text-sm md:text-base font-medium">ساعت ثبت</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gold-100">
            {purchases.map((purchase) => (
              <tr key={purchase.id} className="hover:bg-gold-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base">{purchase.userName}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs md:text-sm font-medium ${
                    purchase.type === 'buy' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {purchase.type === 'buy' ? 'خرید' : 'فروش'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-sm md:text-base">{purchase.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base">{purchase.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4 text-xs md:text-sm opacity-75">
        آخرین معاملات ثبت شده در سامانه (به‌روزرسانی لحظه‌ای)
      </div>
    </div>
  );
};

export default DailyPurchases; 