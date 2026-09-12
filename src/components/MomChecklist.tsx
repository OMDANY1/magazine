import React, { useState } from 'react'
import { Check, ArrowLeft, Sparkles, Award } from 'lucide-react'
import { CategoryId } from '../types'
import { MOM_CHECKLIST } from '../data/products'

interface MomChecklistProps {
  onSelectCategory: (category: CategoryId) => void
}

export const MomChecklist: React.FC<MomChecklistProps> = ({ onSelectCategory }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    c1: true,
    c2: false,
    c3: false,
    c4: false,
    c5: false,
    c6: false,
  })

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleFilterClick = (cat: CategoryId, e: React.MouseEvent) => {
    e.stopPropagation()
    onSelectCategory(cat)
    const element = document.getElementById('shop')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const completedCount = Object.values(checkedItems).filter(Boolean).length
  const totalCount = MOM_CHECKLIST.length
  const progressPercent = Math.round((completedCount / totalCount) * 100)

  return (
    <section id="checklist" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 bg-pharmacy-orange-subtle/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Clearer Vertical Hierarchy & Separation */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-pharmacy-orange text-white shadow-xs mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-200 flex-shrink-0" />
            <span>Checklist مخصصة للأمهات والآباء</span>
          </div>

          {/* Section Title with comfortable Arabic line-height */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-pharmacy-charcoal tracking-tight leading-[1.2] sm:leading-[1.25] mb-3 sm:mb-4">
            قبل ما الجرس يرن 🔔
          </h2>

          {/* Description with comfortable body Arabic line-height */}
          <p className="text-sm sm:text-base text-pharmacy-muted font-medium max-w-xl mx-auto leading-[1.75] sm:leading-relaxed">
            Checklist سريعة ومفيدة لتجهيز كل احتياجات يوم المدرسة بدون ما تنسي أي تفصيلة أساسية.
          </p>

          {/* Interactive Progress Bar with responsive wrap on small widths */}
          <div className="pt-5 sm:pt-6 max-w-md mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5 text-xs font-bold text-pharmacy-charcoal mb-2.5 sm:mb-3 px-1 min-w-0">
              <span className="flex-shrink-0">نسبة جاهزية الشنطة:</span>
              <span className="text-pharmacy-orange font-extrabold flex-shrink-0">
                {completedCount} من {totalCount} أساسيات ({progressPercent}%)
              </span>
            </div>

            <div className="w-full h-3 bg-pharmacy-border/60 rounded-full overflow-hidden p-0.5 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-pharmacy-orange to-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {completedCount === totalCount && (
              <div className="mt-3 sm:mt-3.5 inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 animate-in fade-in">
                <Award className="w-4 h-4 flex-shrink-0" />
                <span>عاش يا سوبر ماما! جهزتي كل أساسيات المدرسة بنجاح 🌟</span>
              </div>
            )}
          </div>
        </div>

        {/* Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 max-w-5xl mx-auto">
          {MOM_CHECKLIST.map((item) => {
            const isChecked = !!checkedItems[item.id]

            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`group relative rounded-3xl p-4 sm:p-5 bg-white border transition-all duration-300 cursor-pointer text-right flex items-start justify-between gap-3 sm:gap-4 shadow-soft hover:shadow-card active:scale-[0.99] ${
                  isChecked
                    ? 'border-pharmacy-orange/40 bg-white'
                    : 'border-pharmacy-border/80 hover:border-pharmacy-orange/30'
                }`}
              >
                {/* Content area with min-w-0 so Arabic wraps gracefully */}
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <h3
                      className={`text-base sm:text-lg font-black leading-snug sm:leading-[1.35] break-words transition-colors ${
                        isChecked
                          ? 'text-pharmacy-charcoal'
                          : 'text-pharmacy-charcoal group-hover:text-pharmacy-orange'
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-pharmacy-muted leading-[1.65] font-medium pt-0.5">
                    {item.subtitle}
                  </p>

                  {/* Filter action CTA button with guaranteed icon gap and breathing room */}
                  <div className="pt-2.5 sm:pt-3">
                    <button
                      type="button"
                      onClick={(e) => handleFilterClick(item.categoryTarget, e)}
                      className="inline-flex max-w-full items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-extrabold text-pharmacy-orange hover:text-pharmacy-orange-hover bg-pharmacy-orange-light px-3 py-1.5 rounded-xl transition-colors whitespace-normal leading-normal"
                    >
                      <span>عرض المنتجات المناسبة</span>
                      <ArrowLeft className="w-3.5 h-3.5 flex-shrink-0" />
                    </button>
                  </div>
                </div>

                {/* Custom Styled Checkbox - strictly flex-shrink-0 so it never compresses content */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-200 mt-0.5 ${
                    isChecked
                      ? 'bg-pharmacy-orange text-white shadow-xs scale-105'
                      : 'bg-pharmacy-orange-subtle border-2 border-pharmacy-border text-transparent group-hover:border-pharmacy-orange/50'
                  }`}
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
