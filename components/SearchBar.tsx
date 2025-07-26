"use client"

import { Search, Mic } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
}

export function SearchBar({ placeholder = "Parça, Firma veya İl bazlı ara", onSearch }: SearchBarProps) {
  return (
    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-6 py-4 md:py-6">
        <div className="relative w-full max-w-3xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5" />
          <Input
            placeholder={placeholder}
            className="w-full pl-10 md:pl-12 pr-10 md:pr-12 py-3 md:py-4 rounded-lg border-gray-300 text-sm md:text-base focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200"
            onChange={(e) => onSearch?.(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <Mic className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
