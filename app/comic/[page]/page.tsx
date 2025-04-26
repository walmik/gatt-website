"use client"

import { useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Home } from "lucide-react"
import { Pagination } from "@/components/comic-pagination"

// Total number of pages in the comic
const TOTAL_PAGES = 29

export default function ComicPage() {
  const router = useRouter()
  const params = useParams()
  const currentPage = Number.parseInt(params.page as string) || 1

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentPage < TOTAL_PAGES) {
        router.push(`/comic/${currentPage + 1}`)
      } else if (e.key === "ArrowLeft" && currentPage > 1) {
        router.push(`/comic/${currentPage - 1}`)
      } else if (e.key === "Home") {
        router.push("/")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentPage, router])

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-black">
      <div className="w-full max-w-5xl">
        <div className="flex justify-between items-center mb-6">
          <Link href="/">
            <Button variant="outline" size="icon" className="border-blue-700 text-blue-400 hover:bg-blue-950">
              <Home className="h-4 w-4" />
            </Button>
          </Link>
          {/* <div className="text-xl font-semibold futuristic-title text-sm md:text-base">
            GATT — PAGE {currentPage}/{TOTAL_PAGES}
          </div>
          <div className="w-10"></div> */}
        </div>

        <div className="relative w-full aspect-[1/2] mb-6 rounded-md overflow-hidden">
          <div className="absolute rounded-lg z-10"></div>
          <Image
            src={`/reference/${currentPage}.png?height=1080&width=1920&text=GATT+${currentPage}`}
            alt={`Comic page ${currentPage}`}
            fill
            priority
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <Button
            variant="outline"
            onClick={() => router.push(`/comic/${Math.max(1, currentPage - 1)}`)}
            disabled={currentPage <= 1}
            className="gap-2 border-blue-700 text-blue-400 hover:bg-blue-950 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" /> PREVIOUS
          </Button>

          <div className="text-xl font-semibold futuristic-title text-sm md:text-base">
            {currentPage}/{TOTAL_PAGES}
          </div>

          <Button
            onClick={() => router.push(`/comic/${Math.min(TOTAL_PAGES, currentPage + 1)}`)}
            disabled={currentPage >= TOTAL_PAGES}
            className="gap-2 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
          >
            NEXT <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <Pagination currentPage={currentPage} totalPages={TOTAL_PAGES} />

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Use arrow keys to navigate: ← Previous | Next →</p>
        </div>
      </div>
    </main>
  )
}
