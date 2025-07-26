"use client"

import { Home, SearchIcon, Plus, Eye, User, Phone, MessageCircle } from "lucide-react"
import type { NavItem } from "@/types"

interface BottomNavigationProps {
  variant?: "default" | "detail"
  onCall?: () => void
  onMessage?: () => void
}

export function BottomNavigation({ variant = "default", onCall, onMessage }: BottomNavigationProps) {
  if (variant === "detail") {
    return (
      <>
        {/* Mobile Bottom Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
          <div className="w-full max-w-screen-sm mx-auto">
            <div className="flex">
              <button className="flex-1 flex flex-col items-center py-3 text-gray-600 hover:text-gray-800 transition-colors">
                <Home className="w-5 h-5 mb-1" />
                <span className="text-xs">Anasayfa</span>
              </button>
              <button
                className="flex-1 flex items-center justify-center bg-slate-600 hover:bg-slate-700 text-white transition-colors"
                onClick={onCall}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">Ara</span>
              </button>
              <button
                className="flex-1 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white transition-colors"
                onClick={onMessage}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span className="text-sm">Soru Sor</span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:block fixed bottom-6 right-6 space-y-3 z-50">
          <button
            className="flex items-center justify-center bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
            onClick={onCall}
          >
            <Phone className="w-5 h-5 mr-2" />
            <span>Satıcıyı Ara</span>
          </button>
          <button
            className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
            onClick={onMessage}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span>Mesaj Gönder</span>
          </button>
        </div>
      </>
    )
  }

  const navItems: NavItem[] = [
    { name: "Anasayfa", icon: <Home className="w-5 h-5 mb-1" />, href: "/", isActive: true },
    { name: "Arama", icon: <SearchIcon className="w-5 h-5 mb-1" />, href: "/search" },
    { name: "", icon: <Plus className="w-6 h-6" />, href: "/create", isSpecial: true },
    { name: "Vitrin", icon: <Eye className="w-5 h-5 mb-1" />, href: "/showcase" },
    { name: "Bana Özel", icon: <User className="w-5 h-5 mb-1" />, href: "/profile" },
  ]

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="w-full max-w-screen-sm mx-auto">
          <div className="grid grid-cols-5 py-2">
            {navItems.map((item, index) => (
              <button
                key={index}
                className={`flex flex-col items-center py-2 transition-all duration-200 ${
                  item.isSpecial
                    ? "text-white bg-red-500 rounded-full mx-2 -mt-3 hover:bg-red-600 shadow-lg"
                    : item.isActive
                      ? "text-red-500"
                      : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {item.icon}
                {item.name && <span className="text-xs font-medium">{item.name}</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Top Navigation */}
      <div className="hidden md:block bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 lg:space-x-6">
              {navItems.slice(0, -1).map((item, index) => (
                <button
                  key={index}
                  className={`flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-lg transition-all duration-200 ${
                    item.isSpecial
                      ? "bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-lg"
                      : item.isActive
                        ? "text-red-500 bg-red-50 font-medium"
                        : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {item.icon}
                  {item.name && <span className="text-sm font-medium">{item.name}</span>}
                </button>
              ))}
            </div>
            <button className="flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-all duration-200">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">Hesabım</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
