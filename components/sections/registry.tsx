"use client"

import Image from "next/image"
import { Section } from "@/components/section"

export function Registry() {
  return (
    <Section
      id="registry"
      className="relative overflow-hidden py-10 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="relative z-10 text-center mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4">
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-white/60" />
          <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-white/60" />
        </div>
        
        <h2 className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-2 sm:mb-3 md:mb-4">
          Gift Guide
        </h2>
        
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed px-2">
          Your presence and prayers are the greatest gift we could ask for. If you would like to bless us further, we’ve prepared a small list of items that would help us start our new home together.
        </p>
        
        {/* <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/90 max-w-xl mx-auto leading-relaxed px-2">
          To view our Gift Guide, tap the QR code to open the link, or long-press and choose &quot;Open prezola.com&quot;. Thank you for being part of our journey!
        </p> */}

        <div className="mt-6 sm:mt-8 flex justify-center">
          <a
            href="https://prezola.com/buy/view/274069?utm_campaign=list_qr_code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-white/95 px-4 py-4 sm:px-6 sm:py-5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] border border-white/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:border-white/80 transition-shadow transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Open our Prezola gift list (opens in new tab)"
          >
            <Image
              src="/QR/QR Prezola.png"
              alt="Scan or tap to view our gift registry options"
              width={220}
              height={220}
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 object-contain pointer-events-none select-none"
            />
          </a>
        </div>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/90 max-w-xl mx-auto leading-relaxed px-2">
          To view our Gift Guide, tap the QR code to open the link, or long-press and choose &quot;Open prezola.com&quot;. Thank you for being part of our journey!
        </p>

        <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6">
          <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
        </div>
      </div>
    </Section>
  )
}
