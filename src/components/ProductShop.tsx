import React, { useState, useMemo } from 'react'
import { Search, Filter, Sparkles, X } from 'lucide-react'
import { CategoryId, Product } from '../types'
import { PRODUCTS } from '../data/products'
import { ProductCard } from './ProductCard'

interface ProductShopProps {
  activeCategory: CategoryId
  onSelectCategory: (category: CategoryId) => void
}

export const ProductShop: React.FC<ProductShopProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('')

  const categories: { id: CategoryId; label: string; count: number }[] = [
    { id: 'all', label: 'الكل', count: PRODUCTS.length },
    {
      id: 'kids',
      label: 'للأطفال',
      count: PRODUCTS.filter((p) => p.category === 'kids').length,
    },
    {
      id: 'school',
      label: 'تجهيزات المدرسة',
      count: PRODUCTS.filter((p) => p.category === 'school').length,
    },
    {
      id: 'hygiene',
      label: 'النظافة',
      count: PRODUCTS.filter((p) => p.category === 'hygiene').length,
    },
    {
      id: 'skincare',
      label: 'العناية بالبشرة',
      count: PRODUCTS.filter((p) => p.category === 'skincare').length,
    },
    {
      id: 'parents',
      label: 'للأم والأب',
      count: PRODUCTS.filter((p) => p.category === 'parents').length,
    },
  ]

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory

      // Search filter
      const q = searchQuery.trim().toLowerCase()
      if (!q) return matchesCategory

      const matchesSearch =
        product.name.toLowerCase().includes(q) ||
        product.nameAr.toLowerCase().includes(q) ||
        product.desc.toLowerCase().includes(q) ||
        product.categoryLabel.toLowerCase().includes(q)

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <section id="shop" className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Generous Typography Spacing */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 text-right gap-4">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-pharmacy-orange text-white shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-200 flex-shrink-0" />
              <span>عروض العودة للمدارس المعتمدة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-pharmacy-charcoal tracking-tight leading-[1.2] sm:leading-[1.25]">
              اختاري اللي ناقصك 👇
            </h2>
            <p className="text-sm sm:text-base text-pharmacy-muted font-medium leading-relaxed pt-0.5">
              تصفحي جميع المنتجات (26 منتج) بأسعار العرض المخفضة، وضيفي طلبك للشنطة
            </p>
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-pharmacy-muted pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحثي بالاسم أو المنتج..."
              className="w-full pr-10 pl-9 py-2.5 sm:py-3 rounded-2xl bg-white border border-pharmacy-border focus:border-pharmacy-orange focus:ring-2 focus:ring-pharmacy-orange/20 text-xs sm:text-sm font-medium text-pharmacy-charcoal placeholder:text-pharmacy-muted/70 transition-all outline-none text-right leading-normal"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-1 text-pharmacy-muted hover:text-pharmacy-charcoal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Sticky Filter Bar (Horizontal scroll on mobile) */}
        <div className="sticky top-[68px] sm:top-[76px] z-30 bg-[#FAF8F5]/90 backdrop-blur-md py-3 mb-6 sm:mb-8 border-b border-pharmacy-border/50">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
            <span className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-pharmacy-muted pl-2 flex-shrink-0">
              <Filter className="w-3.5 h-3.5 flex-shrink-0" />
              <span>الأقسام:</span>
            </span>

            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all active:scale-95 shadow-xs leading-normal whitespace-nowrap ${
                    isActive
                      ? 'bg-pharmacy-orange text-white shadow-card'
                      : 'bg-white text-pharmacy-charcoal/80 hover:bg-pharmacy-orange-subtle hover:text-pharmacy-orange border border-pharmacy-border/80'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded-full font-black leading-none ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-pharmacy-charcoal/5 text-pharmacy-muted'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Product Count Indicator */}
        <div className="flex items-center justify-between text-xs font-semibold text-pharmacy-muted mb-4 px-1">
          <span>
            عرض {filteredProducts.length} من أصل {PRODUCTS.length} منتج
          </span>
          {activeCategory !== 'all' && (
            <button
              onClick={() => onSelectCategory('all')}
              className="text-pharmacy-orange hover:underline font-bold text-xs"
            >
              عرض كل المنتجات
            </button>
          )}
        </div>

        {/* Products Grid: 4 cols desktop, 3 cols tablet, 2 cols mobile */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-pharmacy-border p-8 space-y-3">
            <p className="text-base font-bold text-pharmacy-charcoal leading-snug">
              لم نجد منتجات تطابق "{searchQuery}"
            </p>
            <p className="text-xs text-pharmacy-muted leading-relaxed">
              جرّبي البحث بكلمات أخرى أو تصفحي كل الأقسام
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                onSelectCategory('all')
              }}
              className="px-4 py-2 rounded-xl bg-pharmacy-orange text-white text-xs font-bold shadow-sm leading-normal"
            >
              إعادة ضبط الفلتر
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
