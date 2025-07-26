"use client"

import { ArrowLeft, Share2, Star, Menu } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  title: string
  showBackButton?: boolean
  showShareButton?: boolean
  showStarButton?: boolean
  showMenuButton?: boolean
  backHref?: string
  onMenuClick?: () => void
}

export function Header({
  title,
  showBackButton = false,
  showShareButton = true,
  showStarButton = false,
  showMenuButton = false,
  backHref = "/",
  onMenuClick,
}: HeaderProps) {
  return (
    <div className="bg-slate-700 text-white">
      <div className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {showBackButton ? (
          <Link href={backHref} className="hover:bg-slate-600 p-2 rounded-lg transition-colors duration-200">
            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        ) : (
          <div className="flex items-center">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm md:text-base">O</span>
            </div>
            {showMenuButton && (
              <button
                className="ml-3 md:hidden hover:bg-slate-600 p-2 rounded-lg transition-colors duration-200"
                onClick={onMenuClick}
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
          </div>
        )}

        <h1 className="text-sm md:text-lg lg:text-xl font-medium flex-1 text-center px-4 truncate">{title}</h1>

        <div className="flex items-center space-x-2">
          {showStarButton && (
            <button className="hover:bg-slate-600 p-2 rounded-lg transition-colors duration-200">
              <Star className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          )}
          {showShareButton && (
            <button className="hover:bg-slate-600 p-2 rounded-lg transition-colors duration-200">
              <Share2 className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
