import React from 'react'
import { ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext'

export const MobileStickyCart: React.FC = () => {
  const { totalItems, totalPrice, openCart } = useCart()

  if (totalItems === 0) return null

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
      <div className="pointer-events-auto">
        <div
          onClick={openCart}
          className="max-w-md mx-auto rounded-2xl bg-pharmacy-charcoal text-white p-2.5 sm:p-3 shadow-2xl border border-white/10 flex items-center justify-between gap-2 cursor-pointer active:scale-[0.99] transition-transform"
        >
          {/* Left / Info: Count + Price */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative w-10 h-10 rounded-xl bg-pharmacy-orange flex items-center justify-center text-white shadow-xs flex-shrink-0">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-white text-pharmacy-orange text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {totalItems}
              </span>
            </div>
            <div className="text-right min-w-0">
              <span className="text-xs text-white/70 block font-medium leading-tight truncate">
                {totalItems} {totalItems === 1 ? 'منتج' : 'منتجات'}
              </span>
              <span className="text-sm sm:text-base font-black text-pharmacy-orange leading-tight whitespace-nowrap">
                {totalPrice} ج.م
              </span>
            </div>
          </div>

          {/* Right / CTA Button */}
          <div className="flex items-center gap-1.5 bg-pharmacy-orange hover:bg-pharmacy-orange-hover text-white text-xs font-black py-2.5 px-3 sm:px-4 rounded-xl shadow-xs transition-colors flex-shrink-0 whitespace-nowrap leading-normal">
            <span>كملي الطلب</span>
            <ArrowLeft className="w-3.5 h-3.5 flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  )
}
