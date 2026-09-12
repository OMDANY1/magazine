import React from 'react'
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, ArrowLeft, ShieldCheck } from 'lucide-react'
import { useCart } from '../context/CartContext'

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
    totalSavings,
    whatsappOrderUrl,
  } = useCart()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden text-right">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-pharmacy-charcoal/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      />

      {/* Slide-over Drawer Panel */}
      <div className="absolute inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-pharmacy-border/80 flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-pharmacy-orange text-white flex items-center justify-center font-bold shadow-xs flex-shrink-0">
                🎒
              </div>
              <div className="min-w-0">
                <h2 className="text-base sm:text-lg font-black text-pharmacy-charcoal leading-snug">
                  طلبك للمدرسة
                </h2>
                <span className="text-xs text-pharmacy-muted font-medium leading-normal block">
                  {totalItems} منتجات في الشنطة
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  title="تفريغ السلة بالكامل"
                  className="p-2 text-pharmacy-muted hover:text-rose-500 rounded-xl hover:bg-rose-50 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={closeCart}
                aria-label="إغلاق"
                className="p-2 text-pharmacy-charcoal hover:bg-pharmacy-orange-subtle rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Items List Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 rounded-full bg-pharmacy-orange-subtle flex items-center justify-center mx-auto text-3xl shadow-xs">
                  🎒
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-black text-pharmacy-charcoal leading-snug">
                    شنطة الطلب لسه فاضية!
                  </h3>
                  <p className="text-xs sm:text-sm text-pharmacy-muted max-w-xs mx-auto leading-[1.7]">
                    اختاري من عروض العودة للمدارس وضيفي الفيتامينات واللانش بوكس والعناية بضغطة واحدة.
                  </p>
                </div>
                <button
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-pharmacy-orange text-white text-xs font-bold shadow-sm leading-normal"
                >
                  <span>تصفحي العروض الآن</span>
                  <ArrowLeft className="w-4 h-4 flex-shrink-0" />
                </button>
              </div>
            ) : (
              items.map((item) => {
                const lineTotal = item.product.price * item.quantity

                return (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF8F5] border border-pharmacy-border/70 hover:border-pharmacy-orange/30 transition-all"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 rounded-xl bg-white p-1 border border-pharmacy-border/50 flex-shrink-0 flex items-center justify-center">
                      <img
                        src={item.product.image}
                        alt={item.product.nameAr}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    {/* Details with multi-line wrap and clear spacing */}
                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-pharmacy-charcoal leading-snug line-clamp-2 break-words">
                          {item.product.nameAr}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-pharmacy-muted hover:text-rose-500 p-0.5 flex-shrink-0"
                          title="حذف المنتج"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        {/* Price & Subtotal */}
                        <div className="text-xs font-bold text-pharmacy-orange leading-normal">
                          <span>{lineTotal} ج.م</span>
                          {item.quantity > 1 && (
                            <span className="text-[10px] text-pharmacy-muted font-normal mr-1">
                              ({item.product.price} × {item.quantity})
                            </span>
                          )}
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-1.5 bg-white rounded-xl border border-pharmacy-border px-1 py-0.5 shadow-xs flex-shrink-0">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="w-5 h-5 rounded-lg text-pharmacy-charcoal hover:bg-pharmacy-orange-subtle flex items-center justify-center"
                            aria-label="إنقاص"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-black text-pharmacy-charcoal min-w-5 text-center leading-none">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="w-5 h-5 rounded-lg bg-pharmacy-orange text-white hover:bg-pharmacy-orange-hover flex items-center justify-center"
                            aria-label="زيادة"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>

          {/* Footer Summary & WhatsApp Order Flow */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-pharmacy-border bg-white space-y-3.5">
              {/* Calculations */}
              <div className="space-y-2 text-xs font-medium text-pharmacy-charcoal">
                <div className="flex items-center justify-between text-pharmacy-muted">
                  <span>عدد المنتجات:</span>
                  <span className="font-bold text-pharmacy-charcoal">{totalItems} قطعة</span>
                </div>
                {totalSavings > 0 && (
                  <div className="flex items-center justify-between text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-xl">
                    <span>إجمالي التوفير في العرض:</span>
                    <span className="font-black">وفرتِ {totalSavings} ج.م 🎉</span>
                  </div>
                )}
                <div className="flex items-baseline justify-between pt-2 border-t border-pharmacy-border/60">
                  <span className="text-base font-black text-pharmacy-charcoal">
                    الإجمالي:
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-black text-pharmacy-orange tracking-tight leading-none">
                      {totalPrice}
                    </span>
                    <span className="text-xs font-extrabold text-pharmacy-charcoal leading-none">
                      ج.م
                    </span>
                  </div>
                </div>
              </div>

              {/* Reassurance Message */}
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-pharmacy-orange-subtle border border-pharmacy-orange/20 text-right">
                <ShieldCheck className="w-4 h-4 text-pharmacy-orange flex-shrink-0 mt-0.5" />
                <p className="text-[11px] sm:text-xs text-pharmacy-charcoal/80 font-medium leading-[1.65]">
                  هتكملي تفاصيل الطلب والتوصيل مباشرة مع الصيدلية على واتساب.
                </p>
              </div>

              {/* Primary CTA: Order via WhatsApp */}
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-black text-sm sm:text-base shadow-lg shadow-emerald-600/20 active:scale-[0.98] transition-all leading-normal whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 fill-current flex-shrink-0" />
                <span>أكمل الطلب على واتساب</span>
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
