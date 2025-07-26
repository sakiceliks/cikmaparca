"use client"

import { SlidersHorizontal, BarChart3, Grid3X3 } from "lucide-react"

interface FilterControlsProps {
  onFilter?: () => void
  onSort?: () => void
  onViewChange?: () => void
}

export function FilterControls({ onFilter, onSort, onViewChange }: FilterControlsProps) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-3">
          <button
            className="flex flex-col items-center py-3 md:py-4 text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-all duration-200 border-r border-gray-200"
            onClick={onFilter}
          >
            <SlidersHorizontal className="w-5 h-5 md:w-6 md:h-6 mb-1" />
            <span className="text-xs md:text-sm font-medium">Filtrele</span>
          </button>
          <button
            className="flex flex-col items-center py-3 md:py-4 text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-all duration-200 border-r border-gray-200 md:border-r"
            onClick={onSort}
          >
            <BarChart3 className="w-5 h-5 md:w-6 md:h-6 mb-1" />
            <span className="text-xs md:text-sm font-medium">Sırala</span>
          </button>
          <button
            className="flex flex-col items-center py-3 md:py-4 text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-all duration-200"
            onClick={onViewChange}
          >
            <Grid3X3 className="w-5 h-5 md:w-6 md:h-6 mb-1" />
            <span className="text-xs md:text-sm font-medium">Görünüm</span>
          </button>
        </div>
      </div>
    </div>
  )
}
