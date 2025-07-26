"use client"

import { Phone, MapPin, Calendar, Car, AlertCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Product } from "@/types"

interface ProductDetailProps {
  product: Product | null
  onCallSeller?: () => void
  onViewPhotos?: () => void
}

export function ProductDetail({ product, onCallSeller, onViewPhotos }: ProductDetailProps) {
  // Error state - Product not found
  if (!product) {
    return (
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center max-w-md">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-red-800 mb-2">Ürün Bulunamadı</h2>
            <p className="text-red-600 mb-6">Aradığınız ürün mevcut değil veya kaldırılmış olabilir.</p>
            <Link href="/listing">
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Ürün Listesine Dön
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Fallback data for missing details or seller
  const fallbackDetails = [
    {
      label: "Satılık Fiyat",
      value: product.price,
      valueClass: product.isPriceNegotiable ? "text-red-500 font-semibold" : "text-blue-600 font-semibold",
    },
    { label: "İlan No", value: `39310${product.id.padStart(2, "0")}` },
    { label: "İl", value: product.location.split("/")[0].trim(), valueClass: "text-blue-600" },
    { label: "İlçe", value: product.location.split("/")[1]?.trim() || "Merkez", valueClass: "text-blue-600" },
    { label: "Tarih", value: new Date().toLocaleDateString("tr-TR") },
    { label: "Model", value: "2015 - 2020" },
    { label: "Araç Markası", value: "Alfa Romeo", valueClass: "text-blue-600" },
    { label: "Araç Serisi", value: "Giulietta", valueClass: "text-blue-600" },
    { label: "Parça Tipi", value: "ABS", valueClass: "text-blue-600" },
    { label: "Çıkma Parça", value: "ABS Beyni", valueClass: "text-blue-600" },
  ]

  const fallbackSeller = {
    name: "OTO PARÇA SATICI",
    isPhoneVerified: false,
  }

  const productDetails = product.details || fallbackDetails
  const productSeller = product.seller || fallbackSeller

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="lg:grid lg:grid-cols-5 lg:gap-8">
        {/* Left Column - Images and Basic Info */}
        <div className="lg:col-span-3">
          {/* Product Title */}
          <div className="p-4 md:p-6 bg-gray-50 border-b md:border-b-0 md:rounded-t-xl md:border border-gray-200">
            <h1 className="text-base md:text-xl lg:text-2xl font-semibold text-gray-800 leading-tight">
              {product.title}
            </h1>
            <div className="flex items-center mt-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {product.location}
            </div>
          </div>

          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image || "/placeholder.svg?height=400&width=600"}
              alt={product.title}
              className="w-full h-64 md:h-80 lg:h-96 xl:h-[28rem] object-cover bg-gray-100"
            />
            <div className="absolute bottom-4 right-4">
              <Button
                size="sm"
                className="bg-black/70 hover:bg-black/80 text-white text-xs md:text-sm backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={onViewPhotos}
              >
                📸 Fotoğrafları Görüntüle
              </Button>
            </div>
            <div className="absolute top-4 left-4">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                {product.isPriceNegotiable ? "💬 Pazarlık" : "🔥 Sabit Fiyat"}
              </span>
            </div>
          </div>

          {/* Mobile Only - Quick Info */}
          <div className="lg:hidden p-4 bg-white border-b border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold text-red-600">{product.price}</span>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date().toLocaleDateString("tr-TR")}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Details and Actions */}
        <div className="lg:col-span-2">
          {/* Desktop Price & Info Card */}
          <div className="hidden lg:block bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
            <div className="text-3xl font-bold text-red-600 mb-4">{product.price}</div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                {product.location}
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                {new Date().toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center text-gray-600">
                <Car className="w-4 h-4 mr-2 text-gray-400" />
                Alfa Romeo Giulietta
              </div>
            </div>
          </div>

          {/* Seller Info Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 mx-4 md:mx-0 mb-4 md:mb-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold text-lg">{productSeller.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">{productSeller.name}</h3>
                  <p className="text-sm text-gray-500">
                    {productSeller.isPhoneVerified ? "Doğrulanmış Satıcı" : "Bireysel Satıcı"}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div
                className={`flex items-center text-sm ${productSeller.isPhoneVerified ? "text-green-600" : "text-orange-600"}`}
              >
                <div
                  className={`w-2 h-2 ${productSeller.isPhoneVerified ? "bg-green-500" : "bg-orange-500"} rounded-full mr-2`}
                ></div>
                {productSeller.isPhoneVerified ? "Telefon Doğrulanmış" : "Telefon Doğrulanmamış"}
              </div>
              <Button
                className={`w-full ${productSeller.isPhoneVerified ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"} text-white shadow-md hover:shadow-lg transition-all duration-200`}
                onClick={onCallSeller}
              >
                <Phone className="w-4 h-4 mr-2" />
                {productSeller.isPhoneVerified ? "Telefonu Göster" : "İletişim Bilgileri"}
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 p-4 md:p-0 md:mb-6 border-b md:border-b-0 border-gray-200">
            <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg transition-all duration-200">
              📋 İlan Bilgileri
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-red-500 text-red-500 hover:bg-red-50 bg-transparent transition-all duration-200"
            >
              📝 Açıklama
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-red-500 text-red-500 hover:bg-red-50 bg-transparent transition-all duration-200"
            >
              📍 Konum
            </Button>
          </div>
        </div>
      </div>

      {/* Product Details Table */}
      <div className="pb-20 md:pb-6 mt-6">
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mx-4 md:mx-0">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 md:p-6 border-b border-gray-200">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center">📊 Teknik Detaylar</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {productDetails.map((detail, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="p-3 md:p-4 bg-gray-50 md:bg-gray-50 text-sm md:text-base text-gray-700 font-semibold border-b md:border-b-0 md:border-r border-gray-100">
                  {detail.label}
                </div>
                <div
                  className={`md:col-span-2 p-3 md:p-4 text-sm md:text-base ${detail.valueClass || "text-gray-800"}`}
                >
                  {detail.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
