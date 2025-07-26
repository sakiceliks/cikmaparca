"use client"

import { Header } from "@/components/Header"
import { Breadcrumb } from "@/components/Breadcrumb"
import { FilterControls } from "@/components/FilterControls"
import { ProductListing } from "@/components/ProductListing"
import { BottomNavigation } from "@/components/BottomNavigation"
import { mockProducts, breadcrumbItems } from "@/data/mockData"

export default function ListingPage() {
  const handleFilter = () => {
    console.log("Filter clicked")
  }

  const handleSort = () => {
    console.log("Sort clicked")
  }

  const handleViewChange = () => {
    console.log("View change clicked")
  }

  const handleFavoriteClick = (productId: string) => {
    console.log("Favorite clicked for product:", productId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Alfa Romeo Giulietta ABS Beyni" showBackButton backHref="/" />

      <BottomNavigation />

      <Breadcrumb items={breadcrumbItems} />

      <FilterControls onFilter={handleFilter} onSort={handleSort} onViewChange={handleViewChange} />

      <ProductListing products={mockProducts} onFavoriteClick={handleFavoriteClick} />
    </div>
  )
}
