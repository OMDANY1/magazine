import React, { useState } from 'react'
import { ShoppingBag, MessageCircle, Menu, X, Sparkles, Phone } from 'lucide-react'
import { useCart } from '../context/CartContext'

export const Header: React.FC = () => {
  const { totalItems, totalPrice, openCart } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-pharmacy-border/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-3">
        
        {/* Pharmacy Logo & Branding */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none min-w-0">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center p-1 rounded-2xl bg-pharmacy-orange-subtle group-hover:scale-105 transition-transform shadow-xs flex-shrink-0">
            <img
              src="/brand/logo_transparent.png"
              alt="صيدلية أسامة عطا الله"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col text-right min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-extrabold text-sm sm:text-base lg:text-lg text-pharmacy-charcoal leading-snug truncate">
                صيدلية أسامة عطا الله
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-pharmacy-orange-light text-pharmacy-orange border border-pharmacy-orange/20 whitespace-nowrap flex-shrink-0">
                24 ساعة
              </span>
            </div>
            <span className="text-[11px] sm:text-xs text-pharmacy-muted font-medium leading-normal mt-0.5">
              عروض العودة للمدارس 🎒
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-bold text-pharmacy-charcoal/80">
          <a
            href="#hero"
            className="hover:text-pharmacy-orange transition-colors leading-normal"
          >
            عروض المدرسة
          </a>
          <a
            href="#bento"
            className="hover:text-pharmacy-orange transition-colors leading-normal"
          >
            أقسام التجهيز
          </a>
          <a
            href="#checklist"
            className="hover:text-pharmacy-orange transition-colors flex items-center gap-1.5 text-pharmacy-orange leading-normal"
          >
            <Sparkles className="w-3.5 h-3.5 text-pharmacy-orange flex-shrink-0" />
            <span>شنطة أول يوم 🔔</span>
          </a>
          <a
            href="#shop"
            className="hover:text-pharmacy-orange transition-colors leading-normal"
          >
            المنتجات (26)
          </a>
          <a
            href="#how-to-order"
            className="hover:text-pharmacy-orange transition-colors leading-normal"
          >
            طريقة الطلب
          </a>
          <a
            href="#contact"
            className="hover:text-pharmacy-orange transition-colors leading-normal"
          >
            تواصل معنا
          </a>
        </nav>

        {/* Action CTAs: Cart + WhatsApp */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Cart Button */}
          <button
            onClick={openCart}
            aria-label="عرض سلة الطلبات"
            className="relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-pharmacy-orange-subtle hover:bg-pharmacy-orange-light border border-pharmacy-orange/30 text-pharmacy-charcoal font-bold text-xs sm:text-sm transition-all active:scale-95 shadow-sm group leading-normal whitespace-nowrap"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-pharmacy-orange group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="hidden sm:inline">طلبك</span>
            {totalItems > 0 && (
              <span className="inline-flex items-center justify-center bg-pharmacy-orange text-white text-[11px] font-extrabold w-5 h-5 rounded-full shadow-sm animate-pulse-subtle flex-shrink-0">
                {totalItems}
              </span>
            )}
            {totalItems > 0 && (
              <span className="hidden lg:inline text-xs font-bold text-pharmacy-orange pe-1.5 border-e border-pharmacy-orange/30">
                {totalPrice} ج.م
              </span>
            )}
          </button>

          {/* Primary WhatsApp CTA */}
          <a
            href="https://wa.me/201064646463?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9%20%D8%A3%D8%B3%D8%A7%D9%85%D8%A9%20%D8%B9%D8%B7%D8%A7%20%D8%A7%D9%84%D9%84%D9%87%20%F0%9F%91%8B%20%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A3%D8%B7%D9%84%D8%A8%20%D9%85%D9%86%20%D8%B9%D8%B1%D9%88%D8%B6%20%D8%A7%D9%84%D8%B1%D8%AC%D9%88%D8%B9%20%D9%84%D9%84%D9%85%D8%AF%D8%A7%D8%B1%D8%B3%20%F0%9F%8E%92"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-pharmacy-orange hover:bg-pharmacy-orange-hover text-white font-bold text-xs sm:text-sm shadow-card hover:shadow-glow-orange transition-all active:scale-95 leading-normal whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 flex-shrink-0" />
            <span>اطلب على واتساب</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-pharmacy-charcoal hover:bg-pharmacy-orange-subtle transition-colors flex-shrink-0"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-pharmacy-border/60 px-4 py-4 space-y-3 shadow-md animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-2 text-sm text-pharmacy-charcoal font-bold text-right">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-pharmacy-orange-subtle text-pharmacy-orange leading-normal"
            >
              عروض المدرسة 🎒
            </a>
            <a
              href="#bento"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-pharmacy-orange-subtle leading-normal"
            >
              أقسام التجهيز في 4 خطوات
            </a>
            <a
              href="#checklist"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-pharmacy-orange-subtle flex items-center justify-between leading-normal"
            >
              <span>قائمة قبل أول يوم 🔔</span>
              <span className="text-xs bg-pharmacy-orange text-white px-2 py-0.5 rounded-full font-bold flex-shrink-0">
                Checklist
              </span>
            </a>
            <a
              href="#shop"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-pharmacy-orange-subtle leading-normal"
            >
              المنتجات (26 منتج)
            </a>
            <a
              href="#how-to-order"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-pharmacy-orange-subtle leading-normal"
            >
              خطوات الطلب عبر واتساب
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-pharmacy-orange-subtle flex items-center gap-2 text-pharmacy-muted leading-normal"
            >
              <Phone className="w-4 h-4 text-pharmacy-orange flex-shrink-0" />
              <span>01064646463 - كفر شكر</span>
            </a>
          </nav>
          <div className="pt-2 border-t border-pharmacy-border/40">
            <a
              href="https://wa.me/201064646463?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9%20%D8%A3%D8%B3%D8%A7%D9%85%D8%A9%20%D8%B9%D8%B7%D8%A7%20%D8%A7%D9%84%D9%84%D9%87%20%F0%9F%91%8B"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-pharmacy-orange text-white font-bold text-sm shadow-md leading-normal"
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              <span>تواصل مباشرة على واتساب</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
