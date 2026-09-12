import React, { useState } from 'react'
import { CartProvider } from './context/CartContext'
import { PromoStrip } from './components/PromoStrip'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { BentoNav } from './components/BentoNav'
import { MomChecklist } from './components/MomChecklist'
import { CampaignBanner } from './components/CampaignBanner'
import { ProductShop } from './components/ProductShop'
import { HowToOrder } from './components/HowToOrder'
import { Footer } from './components/Footer'
import { CartDrawer } from './components/CartDrawer'
import { MobileStickyCart } from './components/MobileStickyCart'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { CategoryId } from './types'

export const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all')

  const handleSelectCategory = (category: CategoryId) => {
    setActiveCategory(category)
  }

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-pharmacy-charcoal font-alexandria antialiased selection:bg-pharmacy-orange selection:text-white relative">
        
        {/* Top Promotional Strip */}
        <PromoStrip />

        {/* Sticky Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection />

          {/* 4-Step Bento Category Navigation */}
          <BentoNav onSelectCategory={handleSelectCategory} />

          {/* Mom Checklist Experience */}
          <MomChecklist onSelectCategory={handleSelectCategory} />

          {/* Mid-Page Campaign Banner */}
          <CampaignBanner />

          {/* Core Product Shopping Area (26 Products) */}
          <ProductShop
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
          />

          {/* 3-Step Trust / Ordering Guide */}
          <HowToOrder />
        </main>

        {/* Footer */}
        <Footer />

        {/* Cart Drawer (RTL Desktop Slide-over / Mobile Sheet) */}
        <CartDrawer />

        {/* Mobile Sticky Cart Summary Bar */}
        <MobileStickyCart />

        {/* Floating WhatsApp Contact Button */}
        <FloatingWhatsApp />
      </div>
    </CartProvider>
  )
}

export default App
