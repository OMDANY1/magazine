import React from 'react'
import { Gift, Sparkles, ArrowLeft, MessageCircle } from 'lucide-react'

export const CampaignBanner: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 my-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Big Orange Campaign Card */}
        <div className="relative rounded-3xl sm:rounded-4xl bg-gradient-to-r from-pharmacy-orange via-pharmacy-orange to-amber-600 text-white p-6 sm:p-12 lg:p-16 shadow-glow-orange overflow-hidden text-right">
          
          {/* Subtle Graphic School Patterns */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-notebook-grid opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4 sm:space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white font-extrabold text-xs sm:text-sm max-w-full">
              <Gift className="w-4 h-4 text-amber-200 flex-shrink-0" />
              <span>مفاجأة عروض المدارس من صيدلية أسامة عطا الله</span>
            </div>

            {/* Huge Editorial Headlines */}
            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.3] sm:leading-[1.34] tracking-tight">
                اشتري 3… <br className="sm:hidden" />
                <span className="text-amber-200">ووفر 10% ✨</span>
              </h2>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white/95 leading-[1.32] sm:leading-[1.36]">
                واشتري أكتر… <br className="sm:hidden" />
                <span className="text-amber-100">تكسب خصم وهدية 🎁</span>
              </h3>
            </div>

            {/* Campaign Details with Comfortable Line-height */}
            <p className="text-sm sm:text-base text-white/90 font-medium leading-[1.8] max-w-xl pt-2 sm:pt-3">
              اجمعي كل طلبات أطفالك من الفيتامينات، اللانش بوكس، فرش ومعجون الأسنان، ومرطبات البشرة في طلب واحد، واحصلي على الخصم الفوري والهدية مع كل طلب مجمع من صيدليتنا عبر واتساب.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-pharmacy-orange-light text-pharmacy-orange font-black text-sm sm:text-base shadow-soft transition-all active:scale-95 group leading-normal"
              >
                <span>ابدئي التسوق واختاري منتجاتك</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
              </a>

              <a
                href="https://wa.me/201064646463?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9%20%D8%A3%D8%B3%D8%A7%D9%85%D8%A9%20%D8%B9%D8%B7%D8%A7%20%D8%A7%D9%84%D9%84%D9%87%20%F0%9F%91%8B%20%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A3%D8%B3%D8%AA%D9%81%D9%8A%D8%AF%20%D9%85%D9%86%20%D8%B9%D8%B1%D8%B6%20%D8%A7%D8%B4%D8%AA%D8%B1%D9%8A%203%20%D9%88%D9%88%D9%81%D8%B1%2010%25%20%D9%88%D9%87%D8%AF%D9%8A%D8%A9%20%F0%9F%8E%81"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-bold text-sm sm:text-base border border-white/30 transition-all active:scale-95 leading-normal"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span>استفسري على واتساب</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
