"use client"

import { Header } from "@/components/Header"
import { ProductDetail } from "@/components/ProductDetail"
import { BottomNavigation } from "@/components/BottomNavigation"
import { mockProducts } from "@/data/mockData"
import { useParams } from "next/navigation"

export default function DetailPage() {
  const params = useParams()
  const productId = params.id as string

  const product = mockProducts.find((p) => p.id === productId) || null

  const handleCallSeller = () => {
    if (product?.seller) {
      console.log("Calling seller:", product.seller.name)
      // Telefon numarası gösterme veya arama işlemi
      alert(`${product.seller.name} ile iletişime geçiliyor...`)
    }
  }

  const handleMessage = () => {
    if (product?.seller) {
      console.log("Messaging seller:", product.seller.name)
      // Mesaj gönderme işlemi
      alert(`${product.seller.name} ile mesajlaşma başlatılıyor...`)
    }
  }

  const handleViewPhotos = () => {
    if (product) {
      console.log("Viewing photos for product:", product.id)
      // Fotoğraf galerisi açma işlemi
      alert("Fotoğraf galerisi açılıyor...")
    }
  }

  // Dynamic title based on product
  const pageTitle = product
    ? `${product.title.substring(0, 30)}${product.title.length > 30 ? "..." : ""}`
    : "İlan Bulunamadı"

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={pageTitle} showBackButton showStarButton={!!product} backHref="/listing" />

      <div className="pt-0 md:pt-6">
        <ProductDetail product={product} onCallSeller={handleCallSeller} onViewPhotos={handleViewPhotos} />
      </div>

      {product && <BottomNavigation variant="detail" onCall={handleCallSeller} onMessage={handleMessage} />}
    </div>
  )
}
