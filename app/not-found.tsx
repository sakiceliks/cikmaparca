import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Sayfa Bulunamadı</h1>
          <p className="text-gray-600 mb-6">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
          <Link href="/">
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              <Home className="w-4 h-4 mr-2" />
              Ana Sayfaya Dön
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
