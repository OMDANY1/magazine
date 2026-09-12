import React from 'react'
import { Phone, MessageCircle, MapPin, Clock, Heart, Sparkles } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-pharmacy-charcoal text-white pt-14 pb-24 sm:pb-14 border-t-4 border-pharmacy-orange relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-pharmacy-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Campaign Summary */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-xs">
                <img
                  src="/brand/logo_transparent.png"
                  alt="صيدلية أسامة عطا الله"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  صيدلية أسامة عطا الله
                </h3>
                <p className="text-xs text-pharmacy-orange font-bold">
                  حملة العودة للمدارس — Back to School 🎒
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed font-medium max-w-lg">
              وجهتكم المعتمدة لتجهيز كل احتياجات البيت والمدرسة من فيتامينات الأطفال، أدوات الشنطة واللانش بوكس، ومنتجات النظافة والعناية اليومية بأسعار العرض الحصرية.
            </p>

            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80 font-semibold">
              <Clock className="w-4 h-4 text-pharmacy-orange" />
              <span>خدمة واستشارات صيدلانية على مدار 24 ساعة يومياً</span>
            </div>
          </div>

          {/* Quick Links & Categories */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-black text-white tracking-wide border-b border-white/10 pb-2">
              أقسام العروض
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-white/70">
              <li>
                <a href="#shop" className="hover:text-pharmacy-orange transition-colors">
                  • فيتامينات ومناعة الأطفال
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-pharmacy-orange transition-colors">
                  • اللانش بوكس ومستلزمات الشنطة
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-pharmacy-orange transition-colors">
                  • العناية والنظافة اليومية
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-pharmacy-orange transition-colors">
                  • منتجات العناية بالبشرة والواقيات
                </a>
              </li>
              <li>
                <a href="#checklist" className="hover:text-pharmacy-orange transition-colors">
                  • Checklist شنطة المدرسة 🔔
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-sm font-black text-white tracking-wide border-b border-white/10 pb-2">
              التواصل والعنوان
            </h4>

            <div className="space-y-2.5 text-xs text-white/80">
              {/* Location */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pharmacy-orange flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  كفر شكر - قليوبية<br />
                  <span className="text-white/60 font-medium">أمام مسجد آل عطا الله</span>
                </span>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pharmacy-orange flex-shrink-0" />
                <a
                  href="tel:01064646463"
                  className="font-mono font-bold hover:text-pharmacy-orange transition-colors dir-ltr text-right"
                >
                  01064646463
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 space-y-2">
              <a
                href="https://wa.me/201064646463"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-pharmacy-orange hover:bg-pharmacy-orange-hover text-white text-xs font-bold shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>تواصل واتساب مباشر</span>
              </a>

              <a
                href="tel:01064646463"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>اتصال هاتفي سريع</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Signoff */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-medium gap-3">
          <p>
            © {new Date().getFullYear()} صيدلية أسامة عطا الله. جميع الحقوق محفوظة — حملة العودة للمدارس.
          </p>
          <div className="flex items-center gap-1 text-white/70">
            <span>جهزيهم للمدرسة… وإحنا علينا الباقي</span>
            <Sparkles className="w-3.5 h-3.5 text-pharmacy-orange" />
          </div>
        </div>
      </div>
    </footer>
  )
}
