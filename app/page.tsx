"use client"

import { Header } from "@/components/Header"
import { CategoryGrid } from "@/components/CategoryGrid"
import { SearchBar } from "@/components/SearchBar"
import { QuickActions } from "@/components/QuickActions"
import { PartCategories } from "@/components/PartCategories"
import { BottomNavigation } from "@/components/BottomNavigation"
import { mainCategories, quickActions, partCategories, brandCategories, popularBrandsCategories, townCategories } from "@/data/mockData"
import { BrandCategories } from "@/components/BrandCategories"
import { PopularBrandsCategories } from "@/components/PopularBrandsCategories"
import { TownCategories } from "@/components/TownCategories"

export default function HomePage() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query)
  }

  const handleActionClick = (action: string) => {
    console.log("Action clicked:", action)
  }

  const handleCategoryClick = (category: string) => {
    console.log("Category clicked:", category)
  }

  const handleShowAll = () => {
    console.log("Show all categories")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Oto Çıkma" />

      <BottomNavigation />

      <div className="md:pt-0">
        <CategoryGrid categories={mainCategories} />

        <SearchBar onSearch={handleSearch} />

        <QuickActions actions={quickActions} onActionClick={handleActionClick} />

        <PartCategories categories={partCategories} onCategoryClick={handleCategoryClick} onShowAll={handleShowAll} />

        <TownCategories categories={townCategories} limit={9} onCategoryClick={handleCategoryClick} onShowAll={handleShowAll} />
        <PopularBrandsCategories limit={9} categories={popularBrandsCategories} onCategoryClick={handleCategoryClick} onShowAll={handleShowAll}/>
<BrandCategories categories={brandCategories} limit={9} onCategoryClick={handleCategoryClick} onShowAll={handleShowAll} />
        {/* Description Text */}
        <div className="w-full">
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-6 pb-4 md:pb-6">
            <div className="text-center bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-800">Oto çıkma</span> da yer alan çıkma yeni parça ilanlarından
                motor, şanzıman, far, stop, kaporta parçaları ve daha fazlası. Güvenilir satıcılardan kaliteli oto yedek
                parçaları.
              </p>
            </div>
          </div>
        </div>

        {/* Vehicle Brand Parts Section */}
        <div className="w-full pb-20 md:pb-6">
          <div className="w-full max-w-7xl mx-auto px-4 lg:px-6">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mr-3 shadow-md">
                  <span className="text-white text-sm md:text-base">🚗</span>
                </div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                  Araç Marka Bazında Parça İlanları
                </h2>
              </div>
              <p className="text-gray-600 text-sm md:text-base">Markanıza özel yedek parça ilanlarını keşfedin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
