export type CategoryId = 'all' | 'kids' | 'school' | 'hygiene' | 'skincare' | 'parents'

export interface Product {
  id: string
  name: string
  nameAr: string
  price: number
  oldPrice: number
  category: CategoryId
  categoryLabel: string
  desc: string
  image: string
  badge?: string
  popular?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface ChecklistItem {
  id: string
  title: string
  subtitle: string
  icon: string
  categoryTarget: CategoryId
}
