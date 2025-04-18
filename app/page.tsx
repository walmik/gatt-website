import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-black">
      <div className="max-w-3xl w-full flex flex-col items-center">
        {/* <div className="mb-2 flex items-center gap-2">
          <span className="mature-badge">PREVIEW</span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl mb-6 text-center futuristic-title">GATT</h1>
        <p className="text-muted-foreground text-center max-w-md mb-8">
          A re-opened investigation draws Violet Beck-Yang into the search for the infamous bounty hunter known as The Cowboy.
        </p> */}

        <div className="relative w-full aspect-[2/3] mb-8 group comic-page">
          <div className="absolute rounded-lg z-10"></div>
          <Image
            src="/reference/cover.png?height=1080&width=1920&text=GATT"
            alt="GATT"
            fill
            className="rounded-lg shadow-lg"
            priority
          />
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg z-20">
            <Link href="/comic/1">
              <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                BEGIN READING <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
