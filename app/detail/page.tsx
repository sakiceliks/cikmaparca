import { ArrowLeft, Share2, Star, Phone, MessageCircle, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DetailPage() {
  const productDetails = [
    { label: "Satılık Fiyat", value: "13.000 TL", valueClass: "text-blue-600 font-semibold" },
    { label: "İlan No", value: "3931096" },
    { label: "İl", value: "Bursa", valueClass: "text-blue-600" },
    { label: "İlçe", value: "Yıldırım", valueClass: "text-blue-600" },
    { label: "Tarih", value: "25/07/2025" },
    { label: "Model", value: "2025 - 2025" },
    { label: "Araç Markası", value: "Alfa Romeo", valueClass: "text-blue-600" },
    { label: "Araç Serisi", value: "Giulietta", valueClass: "text-blue-600" },
    { label: "Parça Tipi", value: "ABS", valueClass: "text-blue-600" },
    { label: "Çıkma Parça", value: "ABS Beyni", valueClass: "text-blue-600" },
  ]

  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-700 text-white p-4 flex items-center justify-between">
        <ArrowLeft className="w-5 h-5" />
        <h1 className="text-sm font-medium flex-1 text-center px-4">İlan Detayları</h1>
        <div className="flex items-center space-x-3">
          <Star className="w-5 h-5" />
          <Share2 className="w-5 h-5" />
        </div>
      </div>

      {/* Product Title */}
      <div className="p-4 bg-gray-50">
        <h2 className="text-sm font-medium text-gray-800">
          alfa romeo giulietta 2016 1.6 otomatik abs beyni (son fiyat)
        </h2>
      </div>

      {/* Product Image */}
      <div className="relative">
        <img
          src="/placeholder.svg?height=300&width=400"
          alt="ABS Brake Module"
          className="w-full h-64 object-cover bg-gray-100"
        />
        <div className="absolute bottom-4 right-4">
          <Button size="sm" className="bg-black/70 hover:bg-black/80 text-white text-xs">
            Fotoğrafları Görüntüle →
          </Button>
        </div>
      </div>

      {/* Seller Info */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <span className="text-red-500 font-medium">EFE OTO</span>
          <span className="text-xs">|</span>
          <span className="text-xs">→</span>
        </div>
        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
          <Phone className="w-4 h-4 mr-1" />
          Cep Onayı
        </Button>
      </div>

      {/* Breadcrumb */}
      <div className="p-4 text-xs text-gray-600 border-b border-gray-200">
        Oto Çıkma Parça {">"} Alfa Romeo {">"} Giulietta {">"} ABS {">"} ABS Beyni
        <br />
        <span className="text-gray-500">Bursa / Yıldırım</span>
      </div>

      {/* Action Buttons */}
      <div className="flex p-4 space-x-2 border-b border-gray-200">
        <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white">İlan Bilgileri</Button>
        <Button variant="outline" className="flex-1 border-red-500 text-red-500 hover:bg-red-50 bg-transparent">
          Açıklama
        </Button>
        <Button variant="outline" className="flex-1 border-red-500 text-red-500 hover:bg-red-50 bg-transparent">
          Konum
        </Button>
      </div>

      {/* Product Details Table */}
      <div className="pb-20">
        {productDetails.map((detail, index) => (
          <div key={index} className="flex border-b border-gray-100">
            <div className="w-1/3 p-3 bg-gray-50 text-sm text-gray-700 font-medium">{detail.label}</div>
            <div className={`flex-1 p-3 text-sm ${detail.valueClass || "text-gray-800"}`}>{detail.value}</div>
          </div>
        ))}
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200">
        <div className="flex">
          <button className="flex-1 flex flex-col items-center py-3 text-gray-600">
            <Home className="w-5 h-5 mb-1" />
            <span className="text-xs">Anasayfa</span>
          </button>
          <button className="flex-1 flex items-center justify-center bg-slate-600 text-white">
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm">Ara</span>
          </button>
          <button className="flex-1 flex items-center justify-center bg-green-600 text-white">
            <MessageCircle className="w-4 h-4 mr-2" />
            <span className="text-sm">Soru Sor</span>
          </button>
        </div>
      </div>
    </div>
  )
}
