import fs from "fs/promises"
import path from "path"
import MasonryGallery from "@/components/masonry-gallery"
import { siteConfig } from "@/content/site"
import { Cinzel, Cormorant_Garamond } from "next/font/google"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

// Generate on each request so newly added images in public/ appear without a rebuild
export const dynamic = "force-dynamic"

async function getImagesFrom(dir: string) {
  const abs = path.join(process.cwd(), "public", dir)
  try {
    const entries = await fs.readdir(abs, { withFileTypes: true })
    return entries
      .filter((e) => e.isFile())
      .map((e) => `/${dir}/${e.name}`.replace(/\\/g, "/"))
      .filter((p) => p.match(/\.(jpe?g|png|webp|gif)$/i))
      .sort((a, b) => {
        // Prefer number in parentheses e.g. "couple (1).webp", else number before extension
        const numA = parseInt(a.match(/\((\d+)\)/)?.[1] || a.match(/(\d+)\.(jpe?g|png|webp|gif)$/i)?.[1] || "0", 10)
        const numB = parseInt(b.match(/\((\d+)\)/)?.[1] || b.match(/(\d+)\.(jpe?g|png|webp|gif)$/i)?.[1] || "0", 10)
        return numA - numB
      })
  } catch {
    return []
  }
}

export default async function GalleryPage() {
  const galleryImages = await getImagesFrom("Gallery pics")
  const images = galleryImages.map((src) => ({ src, category: "gallery" as const }))

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background - glam barn */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#EFBE94]/25 via-[#F7E4CF]/30 to-[#EFBE94]/25" />

      <section className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-8 sm:w-12 md:w-16 h-px bg-[#935F3B]/60" />
            <div className="w-1.5 h-1.5 bg-[#EFBE94] rounded-full" />
            <div className="w-1.5 h-1.5 bg-[#B26A3B] rounded-full" />
            <div className="w-1.5 h-1.5 bg-[#EFBE94] rounded-full" />
            <div className="w-8 sm:w-12 md:w-16 h-px bg-[#935F3B]/60" />
          </div>

          <h1 className={`${cinzel.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#38150B] mb-2 sm:mb-3 md:mb-4`}>
            Our Love Story Gallery.
          </h1>
          <p className={`${cormorant.className} text-xs sm:text-sm md:text-base lg:text-lg text-[#85441E] font-light max-w-xl mx-auto leading-relaxed px-2`}>
            Every photograph tells a story of {siteConfig.couple.groomNickname} & {siteConfig.couple.brideNickname}&apos;s journey to forever
          </p>

          <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
            <div className="w-1.5 h-1.5 bg-[#EFBE94] rounded-full" />
            <div className="w-1.5 h-1.5 bg-[#B26A3B] rounded-full" />
            <div className="w-1.5 h-1.5 bg-[#EFBE94] rounded-full" />
          </div>
        </div>

        {images.length === 0 ? (
          <div className={`${cormorant.className} text-center text-[#85441E]`}>
            <p className="font-light">
              No images found. Add files to{" "}
              <code className="px-2 py-1 bg-[#EFBE94]/80 rounded border border-[#935F3B]/40 text-[#38150B]">
                public/Gallery pics
              </code>
              .
            </p>
          </div>
        ) : (
          <MasonryGallery images={images} />
        )}
      </section>
    </main>
  )
}


