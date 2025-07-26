import Link from "next/link"
import type { Category } from "@/types"

interface CategoryGridProps {
  categories: Category[]
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-6 py-4 md:py-6">
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 gap-3 md:gap-4 lg:gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.href || "#"} className="flex flex-col items-center group">
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 ${category.color} rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow-md`}
              >
                <span className="text-lg md:text-xl lg:text-2xl">{category.icon}</span>
              </div>
              <span className="text-xs md:text-sm lg:text-base text-center text-gray-700 group-hover:text-gray-900 transition-colors duration-200 leading-tight">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
