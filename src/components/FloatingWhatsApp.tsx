import React from 'react'
import { MessageCircle } from 'lucide-react'
import { useCart } from '../context/CartContext'

export const FloatingWhatsApp: React.FC = () => {
  const { totalItems } = useCart()

  // Dynamic bottom position so it floats above the mobile sticky cart if items are present
  const bottomClass = totalItems > 0 ? 'bottom-20 sm:bottom-6' : 'bottom-5 sm:bottom-6'

  return (
    <div
      className={`fixed left-4 sm:left-6 z-30 transition-all duration-300 ${bottomClass}`}
    >
      <a
        href="https://wa.me/201064646463?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A9%20%D8%A3%D8%B3%D8%A7%D9%85%D8%A9%20%D8%B9%D8%B7%D8%A7%20%D8%A7%D9%84%D9%84%D9%87%20%F0%9F%91%8B%20%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%A8%D8%AE%D8%B5%D9%88%D8%B5%20%D8%B9%D8%B1%D9%88%D8%B6%20%D8%A7%D9%84%D9%85%D8%AF%D8%A7%D8%B1%D8%B3"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل مع الصيدلي عبر واتساب"
        className="group flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden md:inline text-xs font-black">
          استفسار مباشر على واتساب
        </span>
      </a>
    </div>
  )
}
