import React from 'react'
import { Plus, Minus, ShoppingBag, MessageCircle, Sparkles, Tag } from 'lucide-react'
import { Product } from '../types'
import { useCart } from '../context/CartContext'

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, updateQuantity, getItemQuantity, singleProductWhatsappUrl } = useCart()
  const quantity = getItemQuantity(product.id)

  const discountAmount = product.oldPrice - product.price
  const discountPercent = Math.round((discountAmount / product.oldPrice) * 100)

  return (
    <div className="group relative rounded-3xl bg-white p-3.5 sm:p-5 border border-pharmacy-border/80 hover:border-pharmacy-orange/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between text-right overflow-hidden">
      
      {/* Top Bar: Badges with flex-wrap & safe gap */}
      <div className="relative z-10 flex items-center justify-between gap-1.5 flex-wrap min-w-0 mb-2">
        {/* Main Offer / Promo Badge */}
        {product.badge ? (
          <span
            className={`inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl text-[10px] sm:text-xs font-black shadow-xs whitespace-nowrap ${
              product.badge === 'Buy 1 Get 1'
                ? 'bg-gradient-to-r from-amber-500 to-pharmacy-orange text-white'
                : product.badge === 'أقوى توفير'
                ? 'bg-rose-600 text-white'
                : 'bg-pharmacy-orange-light text-pharmacy-orange border border-pharmacy-orange/20'
            }`}
          >
            <Sparkles className="w-3 h-3 flex-shrink-0" />
            <span>{product.badge}</span>
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl text-[10px] font-bold bg-pharmacy-orange-subtle text-pharmacy-muted border border-pharmacy-border/60 whitespace-nowrap">
            <Tag className="w-2.5 h-2.5 flex-shrink-0" />
            <span>عرض المدارس</span>
          </span>
        )}

        {/* Savings Amount Badge */}
        {discountAmount > 0 && (
          <span className="text-[10px] sm:text-[11px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-1.5 sm:px-2 py-0.5 rounded-lg whitespace-nowrap">
            وفر {discountAmount} ج.م ({discountPercent}%)
          </span>
        )}
      </div>

      {/* Product Image Area */}
      <div className="relative my-2 sm:my-3 rounded-2xl bg-gradient-to-b from-[#FBF9F7] to-white p-3 sm:p-4 flex items-center justify-center h-44 sm:h-52 overflow-hidden border border-pharmacy-border/30 group-hover:border-pharmacy-orange/20 transition-colors">
        <img
          src={product.image}
          alt={product.nameAr}
          loading="lazy"
          className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:scale-106 group-hover:-translate-y-1 transition-transform duration-500"
        />
      </div>

      {/* Product Details with Natural Wrapping & Balanced Rhythm */}
      <div className="pt-1">
        {/* Category Label */}
        <span className="text-[10px] sm:text-[11px] font-bold text-pharmacy-muted block leading-normal">
          {product.categoryLabel}
        </span>

        {/* Product Names: Arabic (Primary) wraps into 2 lines + English (Secondary) */}
        <h3 className="text-sm sm:text-base font-black text-pharmacy-charcoal leading-[1.45] line-clamp-2 group-hover:text-pharmacy-orange transition-colors break-words mt-1">
          {product.nameAr}
        </h3>
        <p className="text-[11px] sm:text-xs font-semibold text-pharmacy-muted line-clamp-1 font-mono dir-ltr text-right leading-normal mt-1">
          {product.name}
        </p>

        {/* Source Description with Comfortable Line-height */}
        {product.desc && (
          <p className="text-[11px] sm:text-xs text-pharmacy-charcoal/70 line-clamp-2 leading-[1.65] mt-2">
            {product.desc}
          </p>
        )}

        {/* Pricing Layout with 10-12px spacing above price divider */}
        <div className="mt-3 pt-2.5 pb-1 border-t border-pharmacy-border/40 flex items-baseline justify-between gap-1 flex-wrap min-w-0">
          <div className="flex items-baseline gap-1 flex-shrink-0">
            <span className="text-xl sm:text-2xl font-black text-pharmacy-orange tracking-tight leading-none">
              {product.price}
            </span>
            <span className="text-xs font-bold text-pharmacy-charcoal leading-normal">
              ج.م
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] sm:text-xs text-pharmacy-muted flex-shrink-0 whitespace-nowrap">
            <span className="font-medium leading-normal">بدلاً من</span>
            <span className="line-through decoration-rose-500 decoration-1.5 text-pharmacy-muted font-bold leading-normal">
              {product.oldPrice}
            </span>
          </div>
        </div>
      </div>

      {/* Action CTAs: Add to Cart / Stepper / WhatsApp with 10-12px spacing */}
      <div className="mt-3">
        {quantity === 0 ? (
          <div className="flex items-center gap-2">
            <button
              onClick={() => addToCart(product)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-2.5 sm:px-3 rounded-2xl bg-pharmacy-orange hover:bg-pharmacy-orange-hover text-white text-xs sm:text-sm font-black shadow-xs hover:shadow-glow-orange transition-all active:scale-95 leading-normal whitespace-nowrap"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>ضيفيه للطلب</span>
            </button>

            {/* Quick Single-item WhatsApp link */}
            <a
              href={singleProductWhatsappUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`طلب ${product.nameAr} مباشرة على واتساب`}
              title="طلب سريع لهذا المنتج فقط على واتساب"
              className="p-2.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-200 transition-colors flex-shrink-0 active:scale-95 flex items-center justify-center"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        ) : (
          <div className="flex items-center justify-between rounded-2xl bg-pharmacy-orange-subtle border border-pharmacy-orange/40 p-1">
            <button
              onClick={() => updateQuantity(product.id, -1)}
              aria-label="تقليل الكمية"
              className="w-8 h-8 rounded-xl bg-white text-pharmacy-charcoal hover:bg-pharmacy-orange-light flex items-center justify-center font-bold text-sm shadow-xs transition-colors active:scale-90 flex-shrink-0"
            >
              <Minus className="w-3.5 h-3.5 text-pharmacy-charcoal" />
            </button>

            <span className="text-xs sm:text-sm font-black text-pharmacy-orange px-1 sm:px-2 whitespace-nowrap min-w-0 text-center">
              {quantity} في طلبك
            </span>

            <button
              onClick={() => updateQuantity(product.id, 1)}
              aria-label="زيادة الكمية"
              className="w-8 h-8 rounded-xl bg-pharmacy-orange text-white hover:bg-pharmacy-orange-hover flex items-center justify-center font-bold text-sm shadow-xs transition-colors active:scale-90 flex-shrink-0"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

    </div>
  )
}
