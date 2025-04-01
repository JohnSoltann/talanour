import React from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl overflow-hidden shadow-gold-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Decorative Side */}
            <div className="hidden md:flex bg-gradient-to-br from-gold-400 to-gold-600 p-8 items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-4">طلانور</div>
                <div className="text-xl text-white mb-6">سرمایه‌گذاری امن در طلا</div>
                <div className="glass-gold bg-white bg-opacity-20 p-6 rounded-lg text-white text-right">
                  <p className="mb-4">با عضویت در طلانور از مزایای زیر بهره‌مند شوید:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      خرید و فروش آسان و سریع
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      کیف پول اختصاصی
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      قیمت‌های رقابتی
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 ml-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      پشتیبانی ۲۴ ساعته
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Register Form */}
            <div className="p-8">
              <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold text-gold-800 mb-2">ثبت نام در طلانور</h1>
                <p className="text-gray-600">حساب کاربری جدید ایجاد کنید</p>
              </div>
              
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">نام</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="نام خود را وارد کنید"
                      className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">نام خانوادگی</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="نام خانوادگی خود را وارد کنید"
                      className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">شماره موبایل</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                    className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                    dir="ltr"
                  />
                  <p className="mt-1 text-sm text-gray-500">از این شماره برای تایید و ورود به حساب کاربری استفاده خواهد شد</p>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">ایمیل (اختیاری)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@mail.com"
                    className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                    dir="ltr"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 font-medium mb-2">رمز عبور</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="حداقل ۸ کاراکتر"
                    className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                    dir="ltr"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">تکرار رمز عبور</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="تکرار رمز عبور"
                    className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                    dir="ltr"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="referralCode" className="block text-gray-700 font-medium mb-2">کد معرف (اختیاری)</label>
                  <input
                    type="text"
                    id="referralCode"
                    name="referralCode"
                    placeholder="کد معرف را وارد کنید"
                    className="w-full px-4 py-3 border border-gold-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                    dir="ltr"
                  />
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      className="h-4 w-4 text-gold-500 focus:ring-gold-400"
                    />
                    <label htmlFor="terms" className="mr-2 text-sm text-gray-700">
                      <span>من </span>
                      <Link href="/terms" className="text-gold-600 hover:text-gold-800">
                        قوانین و مقررات
                      </Link>
                      <span> را خوانده و می‌پذیرم</span>
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2"
                >
                  ثبت نام
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600">
                  قبلاً ثبت نام کرده‌اید؟{' '}
                  <Link href="/login" className="text-gold-600 hover:text-gold-800 font-medium">
                    ورود به حساب
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 