import type React from "react"

export interface Category {
  id: string
  name: string
  icon: string
  color: string
  href?: string
}

export interface Product {
  id: string
  title: string
  location: string
  price: string
  image: string
  isPriceNegotiable: boolean
  seller?: Seller
  details?: ProductDetail[]
}

export interface Seller {
  name: string
  isPhoneVerified: boolean
  rating?: number
}

export interface ProductDetail {
  label: string
  value: string
  valueClass?: string
}

export interface BreadcrumbItem {
  name: string
  href?: string
}

export interface NavItem {
  name: string
  icon: React.ReactNode
  href: string
  isActive?: boolean
  isSpecial?: boolean
}
