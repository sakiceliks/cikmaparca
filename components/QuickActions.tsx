"use client"

import { Button } from "@/components/ui/button"

interface QuickActionsProps {
  actions: string[]
  onActionClick?: (action: string) => void
}

export function QuickActions({ actions, onActionClick }: QuickActionsProps) {
  return (
    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-6 pb-4 md:pb-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-3 md:gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-12 md:h-14 lg:h-16 text-xs md:text-sm font-normal border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent hover:border-gray-400 hover:shadow-sm transition-all duration-200"
              onClick={() => onActionClick?.(action)}
            >
              <span className="text-center leading-tight px-1">{action}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
