import React from 'react'
import { ShoppingBag, CheckSquare, MessageCircle, ArrowLeft } from 'lucide-react'

export const HowToOrder: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'اختاري منتجاتك',
      desc: 'تصفحي عروض المدارس وضيفي المنتجات اللي محتاجاها للشنطة مع تحديد الكمية بسهولة.',
      icon: ShoppingBag,
      color: 'text-pharmacy-orange',
      bg: 'bg-pharmacy-orange-light',
    },
    {
      num: '02',
      title: 'راجعي الطلب',
      desc: 'افتحي الشنطة وراجعي إجمالي المنتجات والأسعار المخفضة بدقة قبل إرسال الطلب.',
      icon: CheckSquare,
      color: 'text-blue-500',
      bg: 'bg-blue-50',
    },
    {
      num: '03',
      title: 'ابعتي الطلب على واتساب',
      desc: 'بضغطة واحدة، هتتفتح محادثة واتساب جاهزة بطلبك مع الصيدلي لتأكيد العنوان والتوصيل فوراً.',
      icon: MessageCircle,
      color: 'text-emerald-500',
      bg: 'bg-emerald-50',
    },
  ]

  return (
    <section id="how-to-order" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 bg-white border-y border-pharmacy-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2.5 sm:space-y-3 mb-10 sm:mb-12">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-pharmacy-orange-light text-pharmacy-orange shadow-xs">
              تجربة طلب سريعة وبدون تعقيد ✨
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-pharmacy-charcoal tracking-tight leading-[1.35] sm:leading-[1.4]">
            اطلبي في 3 خطوات بسيطة
          </h2>
          <p className="text-sm sm:text-base text-pharmacy-muted font-medium leading-[1.7]">
            بدون تسجيل حساب وبدون كارت بنكي.. طلبك مباشر مع الصيدلي عبر واتساب
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="relative rounded-3xl p-6 sm:p-7 bg-[#FAF8F5] border border-pharmacy-border/80 shadow-soft text-right space-y-4 hover:shadow-card hover:border-pharmacy-orange/40 transition-all group min-w-0"
              >
                {/* Step Number Badge + Icon */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl ${step.bg} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-pharmacy-border group-hover:text-pharmacy-orange/30 transition-colors font-mono leading-none">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-black text-pharmacy-charcoal group-hover:text-pharmacy-orange transition-colors leading-[1.4] break-words">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-pharmacy-muted leading-[1.7] font-medium mt-2 sm:mt-2.5">
                    {step.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-8 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-pharmacy-orange-subtle border border-pharmacy-orange/20 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-right">
          <div className="text-right min-w-0 flex-1 space-y-0.5">
            <p className="text-xs sm:text-sm font-bold text-pharmacy-charcoal leading-snug">
              صيدلية أسامة عطا الله - كفر شكر (أمام مسجد آل عطا الله)
            </p>
            <p className="text-[11px] sm:text-xs text-pharmacy-muted font-medium leading-relaxed">
              خدمة على مدار 24 ساعة للرد على استفساراتكم وتجهيز وتوصيل طلباتكم
            </p>
          </div>
          <a
            href="https://wa.me/201064646463"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-pharmacy-orange hover:bg-pharmacy-orange-hover text-white text-xs font-bold shadow-xs transition-colors flex-shrink-0 leading-normal"
          >
            <span>استفسار فوري</span>
            <ArrowLeft className="w-3.5 h-3.5 flex-shrink-0" />
          </a>
        </div>

      </div>
    </section>
  )
}
