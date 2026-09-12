import React from 'react'
import { ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'

export const MobileStickyCart: React.FC = () => {
  const { totalItems, totalPrice, openCart } = useCart()

  if (totalItems === 0) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 sm:hidden animate-in slide-in-from-bottom duration-300 pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        <div
          onClick={openCart}
          className="rounded-2xl bg-pharmacy-charcoal text-white p-3.5 shadow-sheet flex items-center justify-between cursor-pointer active:scale-[0.98] transition-transform border border-white/10"
        >
          {/* Left / Info: Count + Price */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-pharmacy-orange flex items-center justify-center text-white shadow-xs">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-white text-pharmacy-orange text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {totalItems}
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs text-white/70 block font-medium">
                {totalItems} {totalItems === 1 ? 'منتج' : 'منتجات'}
              </span>
              <span className="text-base font-black text-pharmacy-orange">
                {totalPrice} ج.م
              </span>
            </div>
          </div>

          {/* Right / CTA Button */}
          <div className="flex items-center gap-1.5 bg-pharmacy-orange hover:bg-pharmacy-orange-hover text-white text-xs font-black py-2.5 px-4 rounded-xl shadow-xs transition-colors">
            <span>كملي الطلب</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  )
}
