"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import type { Product } from "@/types"

interface ProductListingProps {
  products: Product[]
  onFavoriteClick?: (productId: string) => void
}

export function ProductListing({ products, onFavoriteClick }: ProductListingProps) {
  return (
    <div className="pb-20 md:pb-6 w-full">
      <div className="w-full max-w-7xl mx-auto">
        {/* Mobile List View */}
        <div className="md:hidden">
          {products.map((product) => (
            <Link key={product.id} href={`/detail/${product.id}`} className="block">
              <div className="flex p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 mx-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded-lg mr-3 bg-gray-100 shadow-sm"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">{product.title}</h3>
                  <p className="text-xs text-gray-500 mb-2">{product.location}</p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm font-semibold ${product.isPriceNegotiable ? "text-red-500" : "text-red-600"}`}
                    >
                      Fiyat: {product.price}
                    </span>
                    <button
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                      onClick={(e) => {
                        e.preventDefault()
                        onFavoriteClick?.(product.id)
                      }}
                    >
                      <Heart className="w-4 h-4 text-gray-300 hover:text-red-500 transition-colors" />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6 p-4 lg:p-6">
          {products.map((product) => (
            <Link key={product.id} href={`/detail/${product.id}`} className="block">
              <div className="bg-white rounded-xl border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-48 lg:h-56 xl:h-64 object-cover bg-gray-100 group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                    onClick={(e) => {
                      e.preventDefault()
                      onFavoriteClick?.(product.id)
                    }}
                  >
                    <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" />
                  </button>
                </div>
                <div className="p-4 lg:p-5">
                  <h3 className="text-sm lg:text-base font-medium text-gray-800 mb-2 line-clamp-2 group-hover:text-gray-900 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-500 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
                    {product.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm lg:text-base font-bold ${product.isPriceNegotiable ? "text-red-500" : "text-red-600"}`}
                    >
                      {product.price}
                    </span>
                    {!product.isPriceNegotiable && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Sabit Fiyat</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
