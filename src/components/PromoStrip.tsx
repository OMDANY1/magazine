import React from 'react'
import { Sparkles, Gift } from 'lucide-react'

export const PromoStrip: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-amber-600 via-pharmacy-orange to-orange-600 text-white py-2.5 px-4 text-xs sm:text-sm font-semibold tracking-wide relative overflow-hidden shadow-sm z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 text-center select-none">
        <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-0.5 rounded-full text-xs font-bold text-amber-100 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
          عرض العودة للمدارس
        </span>
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center font-bold">
          <span className="flex items-center gap-1.5">
            اشتري 3… توفر 10%
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 inline" />
          </span>
          <span className="opacity-60 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            اشتري أكتر… تكسب خصم وهدية
            <Gift className="w-3.5 h-3.5 text-yellow-300 inline" />
          </span>
        </div>
      </div>
    </div>
  )
}
