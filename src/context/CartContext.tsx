import React, { createContext, useContext, useState, useEffect } from 'react'
import { CartItem, Product } from '../types'

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, delta: number) => void
  getItemQuantity: (productId: string) => number
  clearCart: () => void
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  totalItems: number
  totalPrice: number
  totalSavings: number
  whatsappOrderUrl: string
  singleProductWhatsappUrl: (product: Product) => string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const STORAGE_KEY = 'osama_atta_allah_cart_v1'
const WHATSAPP_PHONE = '201064646463'

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch (e) {
      console.error('Failed to persist cart:', e)
    }
  }, [items])

  const addToCart = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { product, quantity }]
    })
  }

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId))
  }

  const updateQuantity = (productId: string, delta: number) => {
    setItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta
            return newQty > 0 ? { ...item, quantity: newQty } : null
          }
          return item
        })
        .filter(Boolean) as CartItem[]
    })
  }

  const getItemQuantity = (productId: string): number => {
    const item = items.find((i) => i.product.id === productId)
    return item ? item.quantity : 0
  }

  const clearCart = () => {
    setItems([])
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen((prev) => !prev)

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  const totalSavings = items.reduce(
    (acc, item) => acc + (item.product.oldPrice - item.product.price) * item.quantity,
    0
  )

  const generateWhatsappMessage = (): string => {
    if (items.length === 0) {
      return 'مرحباً صيدلية أسامة عطا الله 👋\nعايز استفسر بخصوص عروض الرجوع للمدارس 🎒'
    }

    const itemsText = items
      .map(
        (item) =>
          `${item.quantity}× ${item.product.name} — ${item.product.price * item.quantity} ج.م`
      )
      .join('\n')

    return (
      'مرحباً صيدلية أسامة عطا الله 👋\n' +
      'عايز أطلب من عروض الرجوع للمدارس 🎒\n\n' +
      'الطلب:\n' +
      itemsText +
      '\n\n' +
      `الإجمالي: ${totalPrice} ج.م\n\n` +
      'الاسم:\n' +
      'المنطقة / العنوان:\n\n' +
      'شكراً ❤️'
    )
  }

  const whatsappOrderUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    generateWhatsappMessage()
  )}`

  const singleProductWhatsappUrl = (product: Product): string => {
    const msg =
      'مرحباً صيدلية أسامة عطا الله 👋\n' +
      'عايز أطلب من عروض الرجوع للمدارس 🎒:\n\n' +
      `1× ${product.name} — ${product.price} ج.م\n\n` +
      'الاسم:\n' +
      'العنوان:\n\n' +
      'شكراً ❤️'
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        getItemQuantity,
        clearCart,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        totalItems,
        totalPrice,
        totalSavings,
        whatsappOrderUrl,
        singleProductWhatsappUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
