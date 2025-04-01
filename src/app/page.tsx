import GoldPriceWidget from '../components/GoldPriceWidget';
import FAQ from '../components/FAQ';
import DailyPurchases from '../components/DailyPurchases';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFDF7]">
      <Hero />

      {/* Gold Price Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="glass-gold p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">قیمت لحظه‌ای طلا</h2>
          <GoldPriceWidget />
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <section className="py-16 bg-[#FFF8E1]">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">چگونه در طلانور سرمایه‌گذاری کنیم؟</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="glass p-6 rounded-lg text-center">
                <div className="text-4xl text-gold-500 mb-4">1️⃣</div>
                <h3 className="text-lg font-bold text-gold-700 mb-2">ثبت نام</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">در سامانه طلانور ثبت‌نام کرده و با تأیید هویت خود، حساب کاربری معتبر ایجاد کنید.</p>
              </div>
              
              <div className="glass p-6 rounded-lg text-center">
                <div className="text-4xl text-gold-500 mb-4">2️⃣</div>
                <h3 className="text-lg font-bold text-gold-700 mb-2">شارژ حساب</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">کیف پول دیجیتال خود را از طریق درگاه‌های بانکی امن و با کارمزد صفر شارژ کنید.</p>
              </div>
              
              <div className="glass p-6 rounded-lg text-center">
                <div className="text-4xl text-gold-500 mb-4">3️⃣</div>
                <h3 className="text-lg font-bold text-gold-700 mb-2">خرید طلا</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">مقدار طلای موردنظر خود را انتخاب کرده و به صورت آنی معامله را تکمیل کنید.</p>
              </div>
              
              <div className="glass p-6 rounded-lg text-center">
                <div className="text-4xl text-gold-500 mb-4">4️⃣</div>
                <h3 className="text-lg font-bold text-gold-700 mb-2">مدیریت سرمایه</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">طلای خود را در حساب امن نگهداری کنید یا در زمان مناسب فروخته و سود کنید.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-16">
          <div className="glass-gold p-8 rounded-2xl shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">سوالات متداول</h2>
            <FAQ />
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">معاملات امروز طلانور</h2>
            <DailyPurchases />
          </div>
        </section>
      </div>
    </div>
  );
} 