"use client"

import { Button } from "@/components/ui/button"

interface PartCategoriesProps {
  categories: string[]
  title?: string
  onCategoryClick?: (category: string) => void
  onShowAll?: () => void
}

export function PartCategories({
  categories,
  title = "Çıkma Yedek Parça",
  onCategoryClick,
  onShowAll,
}: PartCategoriesProps) {
  return (
    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-6 pb-4 md:pb-6">
        <div className="flex items-center mb-3 md:mb-4">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-slate-600 rounded-full flex items-center justify-center mr-2 md:mr-3 shadow-sm">
            <span className="text-white text-xs md:text-sm">🔧</span>
          </div>
          <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800">{title}</h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 2xl:grid-cols-9 gap-2 md:gap-3 mb-4">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="h-8 md:h-10 lg:h-12 text-xs md:text-sm font-normal border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent hover:border-gray-400 hover:shadow-sm transition-all duration-200"
              onClick={() => onCategoryClick?.(category)}
            >
              <span className="truncate px-1">{category}</span>
            </Button>
          ))}
        </div>

        <div className="text-center md:text-left">
          <button
            className="text-blue-600 text-sm md:text-base font-medium hover:text-blue-700 hover:underline transition-all duration-200"
            onClick={onShowAll}
          >
            Tümünü Göster →
          </button>
        </div>
      </div>
    </div>
  )
}
