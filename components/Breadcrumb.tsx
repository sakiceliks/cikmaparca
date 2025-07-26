import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { BreadcrumbItem } from "@/types"

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-6 py-3 md:py-4">
        <div className="flex items-center space-x-1 text-xs md:text-sm overflow-x-auto scrollbar-hide">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-1 whitespace-nowrap">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-all duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-gray-600 font-medium">{item.name}</span>
              )}
              {index < items.length - 1 && (
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-400 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
