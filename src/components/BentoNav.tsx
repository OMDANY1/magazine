import React from 'react'
import { Sparkles, Utensils, ShieldCheck, Heart, ArrowLeft } from 'lucide-react'
import { CategoryId } from '../types'

interface BentoNavProps {
  onSelectCategory: (category: CategoryId) => void
}

export const BentoNav: React.FC<BentoNavProps> = ({ onSelectCategory }) => {
  const cards = [
    {
      id: 'kids' as CategoryId,
      title: 'المناعة والفيتامينات',
      subtitle: 'دعم يومهم من البداية',
      description: 'فيتامينات جاميز وشراب مدعمة بالحديد والأوميجا للتركيز والنشاط في الفصل.',
      icon: Sparkles,
      iconColor: 'text-amber-500',
      badge: 'الخطوة 1',
      bgGradient: 'from-amber-500/10 via-orange-500/5 to-transparent',
      borderColor: 'hover:border-amber-400/50',
      image: '/products/1_limitless_kids_gummies.png',
      countText: '6 منتجات للأطفال',
    },
    {
      id: 'school' as CategoryId,
      title: 'الشنطة واللانش بوكس',
      subtitle: 'أساسيات المدرسة',
      description: 'لانش بوكس بابلز المقسم، فرش أسنان إيفا المبهجة، ومعجون بندولين بالفراولة.',
      icon: Utensils,
      iconColor: 'text-blue-500',
      badge: 'الخطوة 2',
      bgGradient: 'from-blue-500/10 via-sky-500/5 to-transparent',
      borderColor: 'hover:border-blue-400/50',
      image: '/products/10_lunch_box_bubbles.png',
      countText: '4 أساسيات للمدرسة',
    },
    {
      id: 'hygiene' as CategoryId,
      title: 'النظافة والعناية',
      subtitle: 'لروتين يومي أسهل',
      description: 'صابون لايف بوي المعقم ومزيلات عرق بيزلين وأكس ونيفيا لانتعاش يدوم طوال اليوم.',
      icon: ShieldCheck,
      iconColor: 'text-emerald-500',
      badge: 'الخطوة 3',
      bgGradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
      borderColor: 'hover:border-emerald-400/50',
      image: '/products/17_beesline_roll_on.png',
      countText: '5 منتجات نظافة',
    },
    {
      id: 'parents' as CategoryId,
      title: 'العناية لكل البيت',
      subtitle: 'للأم والأب كمان',
      description: 'فيتامينات ليمتليس ماكس، كريمات شان، وواقيات شمس بيزلين وبوباي.',
      icon: Heart,
      iconColor: 'text-rose-500',
      badge: 'الخطوة 4',
      bgGradient: 'from-rose-500/10 via-orange-500/5 to-transparent',
      borderColor: 'hover:border-rose-400/50',
      image: '/products/7_limitless_woman_max.png',
      countText: '11 منتج للعائلة',
    },
  ]

  const handleCardClick = (cat: CategoryId) => {
    onSelectCategory(cat)
    const element = document.getElementById('shop')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="bento" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 bg-white/70 border-y border-pharmacy-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 text-right gap-3">
          <div className="space-y-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-pharmacy-orange-light text-pharmacy-orange shadow-xs">
              تجهيز سريع في 4 خطوات 🎒
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-pharmacy-charcoal tracking-tight leading-[1.25] sm:leading-[1.3]">
              كل اللي محتاجينه قبل أول يوم مدرسة
            </h2>
            <p className="text-sm sm:text-base text-pharmacy-muted font-medium leading-relaxed pt-0.5">
              اختاري القسم المطلوب لفلترة المنتجات المناسبة بأسعار العرض الفورية
            </p>
          </div>
          <div className="hidden sm:block text-xs font-bold text-pharmacy-muted pb-1">
            اضغطي على أي قسم لعرض منتجاته 👇
          </div>
        </div>

        {/* Bento Grid: Desktop 4-card layout, Mobile 1-col / 2-col layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`group relative rounded-3xl p-5 sm:p-6 bg-white border border-pharmacy-border/80 shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between text-right ${card.borderColor} active:scale-[0.98]`}
              >
                {/* Background Gradient Accent */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                {/* Card Top: Step Badge + Icon */}
                <div className="relative z-10 flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-xl bg-pharmacy-charcoal/5 text-pharmacy-charcoal text-xs font-black">
                    {card.badge}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`w-5 h-5 ${card.iconColor}`} />
                  </div>
                </div>

                {/* Card Center: Product Preview Image */}
                <div className="relative z-10 my-3 flex justify-center items-center h-32 sm:h-36">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-108 transition-transform duration-500"
                  />
                </div>

                {/* Card Bottom: Titles + Description + Arrow CTA */}
                <div className="relative z-10 space-y-1.5 pt-2 border-t border-pharmacy-border/40 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap min-w-0">
                    <span className="text-xs font-bold text-pharmacy-orange">
                      {card.subtitle}
                    </span>
                    <span className="text-[11px] font-medium text-pharmacy-muted">
                      {card.countText}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-pharmacy-charcoal leading-snug group-hover:text-pharmacy-orange transition-colors break-words">
                    {card.title}
                  </h3>
                  <p className="text-xs text-pharmacy-charcoal/70 line-clamp-2 leading-[1.65] font-medium pt-0.5">
                    {card.description}
                  </p>

                  <div className="pt-2.5 flex items-center gap-1.5 text-xs font-extrabold text-pharmacy-orange group-hover:-translate-x-1 transition-transform">
                    <span>تصفحي المنتجات</span>
                    <ArrowLeft className="w-3.5 h-3.5 flex-shrink-0" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
