import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaChartLine, FaCoins, FaGlobe, FaBook } from 'react-icons/fa';

export const metadata = {
  title: 'بلاگ طلا | اخبار و مقالات طلا',
  description: 'آخرین اخبار و مقالات در مورد بازار طلا، سرمایه‌گذاری و تحلیل قیمت طلا',
}

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black/60">
            <Image 
              src="/images/blog/gold-hero.jpg" 
              alt="طلا" 
              fill 
              priority
              style={{ objectFit: 'cover' }}
              className="brightness-75 mix-blend-overlay"
            />
          </div>
          <div className="relative h-full flex items-center p-8 md:p-12 z-10">
            <div className="max-w-2xl">
              <span className="inline-block bg-yellow-500 text-black py-2 px-4 rounded-full text-sm font-medium mb-4 shadow-lg">
                اخبار طلا
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-lg">
                روند قیمت طلا در بازار جهانی
              </h1>
              <p className="text-white text-lg mb-8 text-shadow">
                تحلیل جامع از عوامل موثر بر قیمت طلا در بازار جهانی و پیش‌بینی روند آینده
              </p>
              <Link href="/blog/gold-price-trends" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full shadow-lg transition-colors">
                ادامه مطلب
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">آخرین اخبار طلا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article 1 */}
          <article className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:-translate-y-2">
            <div className="h-52 relative">
              <Image 
                src="/images/blog/gold-news1.jpg" 
                alt="اخبار طلا" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <span className="text-gray-500 text-sm block mb-2">۲۵ فروردین ۱۴۰۳</span>
              <h3 className="text-xl font-bold mb-3">افزایش تقاضای طلا در بازار جهانی</h3>
              <p className="text-gray-600 mb-4">
                گزارش جدید از افزایش تقاضای طلا در بازارهای جهانی و تاثیر آن بر قیمت‌ها
              </p>
              <Link href="/blog/gold-demand-increase" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full shadow transition-colors">
                ادامه مطلب
              </Link>
            </div>
          </article>

          {/* Article 2 */}
          <article className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:-translate-y-2">
            <div className="h-52 relative">
              <Image 
                src="/images/blog/gold-news2.jpg" 
                alt="اخبار طلا" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <span className="text-gray-500 text-sm block mb-2">۲۴ فروردین ۱۴۰۳</span>
              <h3 className="text-xl font-bold mb-3">تحلیل بازار طلا در هفته گذشته</h3>
              <p className="text-gray-600 mb-4">
                بررسی عملکرد بازار طلا در هفته گذشته و عوامل موثر بر نوسانات قیمت
              </p>
              <Link href="/blog/weekly-gold-analysis" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full shadow transition-colors">
                ادامه مطلب
              </Link>
            </div>
          </article>

          {/* Article 3 */}
          <article className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:-translate-y-2">
            <div className="h-52 relative">
              <Image 
                src="/images/blog/gold-news3.jpg" 
                alt="اخبار طلا" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <span className="text-gray-500 text-sm block mb-2">۲۳ فروردین ۱۴۰۳</span>
              <h3 className="text-xl font-bold mb-3">راهنمای سرمایه‌گذاری در طلا</h3>
              <p className="text-gray-600 mb-4">
                راهنمای جامع برای سرمایه‌گذاری در طلا و نکات مهم برای معامله‌گران
              </p>
              <Link href="/blog/gold-investment-guide" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full shadow transition-colors">
                ادامه مطلب
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">دسته‌بندی‌ها</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/blog/categories/market-analysis" className="bg-white p-8 rounded-xl text-center shadow-md transition-transform hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <FaChartLine className="text-5xl text-yellow-500" />
            </div>
            <h3 className="text-lg font-bold mb-2">تحلیل بازار</h3>
            <p className="text-gray-600 text-sm">تحلیل‌های تخصصی بازار طلا</p>
          </Link>

          <Link href="/blog/categories/investment" className="bg-white p-8 rounded-xl text-center shadow-md transition-transform hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <FaCoins className="text-5xl text-yellow-500" />
            </div>
            <h3 className="text-lg font-bold mb-2">سرمایه‌گذاری</h3>
            <p className="text-gray-600 text-sm">راهنمای سرمایه‌گذاری در طلا</p>
          </Link>

          <Link href="/blog/categories/global-market" className="bg-white p-8 rounded-xl text-center shadow-md transition-transform hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <FaGlobe className="text-5xl text-yellow-500" />
            </div>
            <h3 className="text-lg font-bold mb-2">بازار جهانی</h3>
            <p className="text-gray-600 text-sm">اخبار و تحلیل بازار جهانی</p>
          </Link>

          <Link href="/blog/categories/education" className="bg-white p-8 rounded-xl text-center shadow-md transition-transform hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <FaBook className="text-5xl text-yellow-500" />
            </div>
            <h3 className="text-lg font-bold mb-2">آموزش</h3>
            <p className="text-gray-600 text-sm">مقالات آموزشی طلا</p>
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl p-8 md:p-12 text-center text-white">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-black">عضویت در خبرنامه</h2>
            <p className="mb-8 text-black font-medium">
              برای دریافت آخرین اخبار و تحلیل‌های بازار طلا، در خبرنامه ما عضو شوید
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="ایمیل خود را وارد کنید" 
                className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-lg"
              />
              <button 
                type="submit" 
                className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-lg"
              >
                عضویت
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
} 