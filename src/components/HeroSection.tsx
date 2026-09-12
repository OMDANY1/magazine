import React from 'react'
import { ArrowLeft, Sparkles, ShieldCheck, CheckCircle2, ShoppingBag } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-4 pb-12 sm:pt-8 sm:pb-20 overflow-hidden">
      
      {/* Background Graphic Accents */}
      <div className="absolute top-10 right-0 -mr-20 w-96 h-96 bg-pharmacy-orange-subtle rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Right Column (in RTL: Main Editorial Pitch & CTAs) */}
          <div className="lg:col-span-7 text-right space-y-5 sm:space-y-6">
            
            {/* Seasonal Campaign Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pharmacy-orange-light text-pharmacy-orange border border-pharmacy-orange/20 font-bold text-xs sm:text-sm shadow-xs">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span>عروض العودة للمدارس • صيدلية أسامة عطا الله</span>
            </div>

            {/* Main Punchy Headlines with Intentional Arabic Line-height */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-pharmacy-charcoal tracking-tight space-y-1 sm:space-y-1.5">
                <span className="text-pharmacy-orange block leading-[1.26] sm:leading-[1.28]">
                  رجعين بذكاء 🎒
                </span>
                <span className="block leading-[1.26] sm:leading-[1.28]">
                  كل تجهيزات المدرسة…
                </span>
                <span className="block leading-[1.26] sm:leading-[1.28]">
                  في مكان واحد.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-pharmacy-charcoal/80 font-medium leading-[1.75] max-w-xl pt-1 sm:pt-2">
                من المناعة والعناية اليومية، للانش بوكس والنظافة… جهزي احتياجات البيت والمدرسة بسهولة من صيدلية أسامة عطا الله.
              </p>
            </div>

            {/* Emotional Campaign Slogan Note */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-pharmacy-orange/20 shadow-soft flex items-center gap-3 w-full sm:w-auto">
              <div className="w-11 h-11 rounded-2xl bg-pharmacy-orange text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-sm">
                🎒
              </div>
              <div className="text-right min-w-0">
                <p className="text-sm sm:text-base font-extrabold text-pharmacy-orange leading-[1.4]">
                  جهزيهم للمدرسة… وإحنا علينا الباقي.
                </p>
                <p className="text-xs text-pharmacy-muted font-medium leading-normal mt-1">
                  أسعار العروض المعتمدة + توصيل سريع لكفر شكر ومحيطها
                </p>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-pharmacy-orange hover:bg-pharmacy-orange-hover text-white text-base font-bold shadow-card hover:shadow-glow-orange transition-all active:scale-95 group"
              >
                <span>ابدئي تجهيز الشنطة</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
              </a>
              <a
                href="#bento"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-pharmacy-orange-subtle text-pharmacy-charcoal border border-pharmacy-border/80 text-base font-bold shadow-soft transition-all active:scale-95"
              >
                <span>شوفي العروض والأقسام</span>
              </a>
            </div>

            {/* Trust Micro-Bullets */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-pharmacy-border/60 w-full max-w-lg text-center sm:text-right">
              <div className="flex flex-col sm:flex-row items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-pharmacy-charcoal/80 leading-snug min-w-0 break-words">
                <CheckCircle2 className="w-4 h-4 text-pharmacy-teal flex-shrink-0" />
                <span>26 منتج بأسعار العرض</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-pharmacy-charcoal/80 leading-snug min-w-0 break-words">
                <ShieldCheck className="w-4 h-4 text-pharmacy-orange flex-shrink-0" />
                <span>طلب مباشر بالواتساب</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-pharmacy-charcoal/80 leading-snug min-w-0 break-words">
                <ShoppingBag className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>توصيل سريع للمنزل</span>
              </div>
            </div>

          </div>

          {/* Left Column (in RTL: Visual Campaign Artwork Composition) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Campaign Card with Genuine Magazine Artwork */}
              <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden bg-white p-3 sm:p-4 shadow-card border border-pharmacy-orange/20 group">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-orange-50 to-white aspect-[4/5] flex items-center justify-center">
                  <img
                    src="/brand/hero_campaign.png"
                    alt="عروض العودة للمدارس - صيدلية أسامة عطا الله"
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pharmacy-charcoal/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Bottom Ribbon on Artwork */}
                  <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-soft text-right">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-right min-w-0">
                        <p className="text-xs font-bold text-pharmacy-orange leading-normal">عرض خاص للمدارس</p>
                        <p className="text-xs sm:text-sm font-extrabold text-pharmacy-charcoal leading-normal mt-0.5">وفر 10% عند شراء 3 منتجات</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-xl bg-pharmacy-orange text-white text-xs font-black flex-shrink-0 whitespace-nowrap">
                        هدية 🎁
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Product Badge 1: Limitless Gummies Cutout */}
              <div className="absolute -top-3 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl shadow-card border border-pharmacy-orange/20 flex items-center gap-3 animate-float-slow z-20 max-w-[calc(100%-1rem)]">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center p-1 bg-amber-50 rounded-xl flex-shrink-0">
                  <img
                    src="/products/1_limitless_kids_gummies.png"
                    alt="Limitless Kids"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-right min-w-0">
                  <span className="text-[10px] font-bold text-pharmacy-muted block leading-normal">مناعة الصغار</span>
                  <span className="text-xs sm:text-sm font-extrabold text-pharmacy-charcoal block leading-normal truncate">
                    ليمتليس كيدز
                  </span>
                  <span className="text-xs sm:text-sm font-black text-pharmacy-orange leading-normal block mt-0.5">
                    279 ج.م <span className="text-[10px] text-pharmacy-muted line-through font-normal">310</span>
                  </span>
                </div>
              </div>

              {/* Floating Product Badge 2: Bubbles Lunch Box */}
              <div className="absolute -bottom-3 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl shadow-card border border-pharmacy-orange/20 flex items-center gap-3 z-20 max-w-[calc(100%-1rem)]">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center p-1 bg-sky-50 rounded-xl flex-shrink-0">
                  <img
                    src="/products/10_lunch_box_bubbles.png"
                    alt="Lunch Box Bubbles"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-right min-w-0">
                  <span className="text-[10px] font-bold text-emerald-600 block leading-normal">أساسيات الشنطة</span>
                  <span className="text-xs sm:text-sm font-extrabold text-pharmacy-charcoal block leading-normal truncate">
                    لانش بوكس بابلز
                  </span>
                  <span className="text-xs sm:text-sm font-black text-pharmacy-orange leading-normal block mt-0.5">
                    171 ج.م <span className="text-[10px] text-pharmacy-muted line-through font-normal">190</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
