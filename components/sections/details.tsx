"use client"

import { Section } from "@/components/section"
import { Shirt, Copy, Check, Navigation, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { QRCodeSVG } from "qrcode.react"
import { siteConfig } from "@/content/site"
import { Cormorant_Garamond, WindSong, Cinzel } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const windSong = WindSong({
  subsets: ["latin"],
  weight: "400",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
})

export function Details() {
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set())
  const [currentReceptionImageIndex, setCurrentReceptionImageIndex] = useState(0)

  const receptionImages = [
    "/Details/Location.jpg",
    "/Details/ATTiKA8855-2022-10-1383-1200.jpg",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReceptionImageIndex((prev) => (prev + 1) % receptionImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItems(prev => new Set(prev).add(itemId))
      setTimeout(() => {
        setCopiedItems(prev => {
          const newSet = new Set(prev)
          newSet.delete(itemId)
          return newSet
        })
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  // Venue information
  const ceremonyVenueName = "St. Jost Kapelle"
  const ceremonyVenueDetail = ""
  const ceremonyAddress = "6373 Ennetbürgen"
  const ceremonyVenue = "St. Jost Kapelle, 6373 Ennetbürgen"
  const ceremonyMapsLink = `https://maps.google.com/?q=${encodeURIComponent(ceremonyVenue)}`

  const receptionVenueName = "ATTiKA8855"
  const receptionVenueDetail = ""
  const receptionAddress = "Hämmerli 2D, 8855 Wangen"
  const receptionVenue = "ATTiKA8855 Hämmerli 2D, 8855 Wangen"
  const receptionMapsLink = `https://maps.google.com/?q=${encodeURIComponent(receptionVenue)}`

  const openInMaps = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }


  return (
    <Section id="details" className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#EFBE94]">
      
      {/* Flower decoration - top left corner */}
      <div className="absolute left-0 top-0 z-0 pointer-events-none">
        <div
          className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] bg-[#85441E]"
          style={{
            maskImage: 'url("/decoration/corner.png")',
            WebkitMaskImage: 'url("/decoration/corner.png")',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        />
      </div>
      
      {/* Flower decoration - top right corner */}
      <div className="absolute right-0 top-0 z-0 pointer-events-none">
        <div
          className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[240px] lg:h-[240px] bg-[#85441E]"
          style={{
            maskImage: 'url("/decoration/corner.png")',
            WebkitMaskImage: 'url("/decoration/corner.png")',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            transform: 'scaleX(-1)',
          }}
        />
      </div>
      
      {/* Flower decoration - left bottom corner */}
      <div className="absolute left-0 bottom-0 z-0 pointer-events-none">
        <div
          className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] bg-[#85441E]"
          style={{
            maskImage: 'url("/decoration/cornerbottom.png")',
            WebkitMaskImage: 'url("/decoration/cornerbottom.png")',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'bottom left',
            WebkitMaskPosition: 'bottom left',
          }}
        />
      </div>
      
      {/* Flower decoration - right bottom corner */}
      <div className="absolute right-0 bottom-0 z-0 pointer-events-none">
        <div
          className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] bg-[#85441E]"
          style={{
            maskImage: 'url("/decoration/cornerbottom.png")',
            WebkitMaskImage: 'url("/decoration/cornerbottom.png")',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'bottom right',
            WebkitMaskPosition: 'bottom right',
            transform: 'scaleX(-1)',
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6">
        <div className="space-y-2 sm:space-y-3">
          <p
            className={`${cormorant.className} text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-[0.28em] text-[#85441E]`}
          >
            <span className="block">Important Information</span>
            <span className="block">for Our Special Day</span>
          </p>
          <h2
            className={`${cinzel.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#85441E]`}
          >
            Event Details
          </h2>
        </div>

        <p className={`${cormorant.className} text-xs sm:text-sm md:text-base text-[#85441E] font-light max-w-xl mx-auto leading-relaxed mt-3`}>
          Everything you need to know about our special day
        </p>

        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-[#85441E]/80 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#85441E]/80" />
          <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent via-[#85441E]/80 to-transparent" />
        </div>
      </div>

      {/* Venue and Event Information */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 md:mb-16 space-y-6 sm:space-y-10 md:space-y-14">
        
        {/* Ceremony Card */}
        <div className="relative group">
          {/* Subtle earth tone glow on hover */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#85441E]/20 to-[#85441E]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          
          {/* Main card */}
          <div className="relative elegant-card bg-[#FFF7F6] rounded-xl sm:rounded-2xl overflow-hidden border-4 border-[#85441E]/30 premium-shadow hover:border-[#85441E]/50 transition-all duration-300">
            {/* Venue Image */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[30rem] overflow-hidden">
              <Image
                src="/Details/StJostKapelle6373 Ennetbürgen.jpg"
                alt={siteConfig.ceremony.venue}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Venue name overlay */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 right-3 sm:right-4 md:right-6">
                <p className={`text-sm sm:text-base md:text-lg ${windSong.className} text-[#EFBE94] mb-1 sm:mb-2 drop-shadow-lg`}>
                  Ceremony
                </p>
                <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl ${cormorant.className} font-normal text-white mb-0.5 sm:mb-1 drop-shadow-lg uppercase tracking-[0.1em] leading-tight`}>
                  St. Jost Kapelle
                </h3>
                <p className={`text-xs sm:text-sm md:text-base ${cormorant.className} text-white/95 drop-shadow-md tracking-wide`}>
                  6373 Ennetbürgen
                </p>
              </div>
            </div>

            {/* Event Details Content */}
            <div className="p-3 sm:p-5 md:p-7 lg:p-9">
              {/* Date Section */}
              <div className="text-center mb-5 sm:mb-8 md:mb-10">
                {/* Day name */}
                <p className={`text-[10px] sm:text-xs md:text-sm ${cormorant.className} font-semibold text-[#85441E] uppercase tracking-[0.2em] mb-2 sm:mb-3`}>
                  {siteConfig.ceremony.day}
                </p>
                
                {/* Month - Script style */}
                <div className="mb-2 sm:mb-4">
                  <p className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl ${windSong.className} text-[#85441E] leading-none`}>
                    June
                  </p>
                </div>
                
                {/* Day and Year */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-7">
                  <p className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${cormorant.className} font-normal text-[#85441E] leading-none`}>
                    27
                  </p>
                  <div className="h-10 sm:h-12 md:h-16 lg:h-20 w-[2px] bg-gradient-to-b from-[#85441E] via-[#85441E] to-[#85441E]" />
                  <p className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl ${cormorant.className} font-light text-[#85441E] leading-none`}>
                    2026
                  </p>
                </div>

                {/* Decorative line */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="h-[1px] w-8 sm:w-10 md:w-14 bg-gradient-to-r from-transparent via-[#85441E] to-[#85441E]" />
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#85441E] rounded-full" />
                  <div className="h-[1px] w-8 sm:w-10 md:w-14 bg-gradient-to-l from-transparent via-[#85441E] to-[#85441E]" />
                </div>

                {/* Time */}
                <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${cormorant.className} font-semibold text-[#85441E] tracking-wide`}>
                  2:00 PM
                </p>
              </div>

              {/* Location Details */}
              <div className="bg-gradient-to-br from-[#EFBE94]/20 to-[#FFF7F6] rounded-xl p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 border-4 border-[#85441E]/20">
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#85441E] mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs sm:text-sm md:text-base ${cormorant.className} font-semibold text-[#85441E] mb-1.5 sm:mb-2 uppercase tracking-wide`}>
                      Location
                    </p>
                    <p className={`text-xs sm:text-sm md:text-base lg:text-lg ${cormorant.className} text-[#85441E] leading-relaxed`}>
                      St. Jost Kapelle, 6373 Ennetbürgen
                    </p>
                  </div>
                  {/* QR Code for Ceremony - Right side */}
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-shrink-0">
                    <div className="bg-[#FFF7F6] p-1.5 sm:p-2 md:p-2.5 rounded-lg border border-[#85441E]/20 shadow-sm">
                      <QRCodeSVG
                        value={ceremonyMapsLink}
                        size={80}
                        level="M"
                        includeMargin={false}
                        fgColor="#85441E"
                        bgColor="#FFF7F6"
                      />
                    </div>
                    <p className={`text-[9px] sm:text-[10px] md:text-xs ${cormorant.className} text-[#85441E]/60 italic text-center max-w-[80px]`}>
                      Scan for directions
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                <button
                  onClick={() => openInMaps(ceremonyMapsLink)}
                  className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-[#85441E] hover:bg-[#6d361b] text-[#EFBE94] rounded-lg ${cormorant.className} font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] premium-shadow`}
                  aria-label="Get directions to ceremony venue"
                >
                  <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span>Get Directions</span>
                </button>
                <button
                  onClick={() => copyToClipboard(ceremonyVenue, 'ceremony')}
                  className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-[#FFF7F6] border-2 border-[#85441E]/30 hover:border-[#85441E]/50 hover:bg-[#85441E]/10 text-[#85441E] rounded-lg ${cormorant.className} font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`}
                  aria-label="Copy ceremony venue address"
                >
                  {copiedItems.has('ceremony') ? (
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 text-[#85441E]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  )}
                  <span>{copiedItems.has('ceremony') ? 'Copied!' : 'Copy Address'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reception Card */}
        <div className="relative group">
          {/* Subtle earth tone glow on hover */}
          <div className="absolute -inset-1 bg-gradient-to-br from-[#85441E]/20 to-[#85441E]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          
          {/* Main card */}
          <div className="relative elegant-card bg-[#FFF7F6] rounded-xl sm:rounded-2xl overflow-hidden border-4 border-[#85441E]/30 premium-shadow hover:border-[#85441E]/50 transition-all duration-300">
            {/* Venue Image */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[30rem] overflow-hidden">
              {receptionImages.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentReceptionImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={siteConfig.reception.venue}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1280px"
                    priority={index === 0}
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
              
              {/* Venue name overlay */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 right-3 sm:right-4 md:right-6 z-20">
                <p className={`text-sm sm:text-base md:text-lg ${windSong.className} text-[#EFBE94] mb-1 sm:mb-2 drop-shadow-lg`}>
                  Reception
                </p>
                <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl ${cormorant.className} font-normal text-white mb-0.5 sm:mb-1 drop-shadow-lg uppercase tracking-[0.1em] leading-tight`}>
                  ATTiKA8855
                </h3>
                <p className={`text-xs sm:text-sm md:text-base ${cormorant.className} text-white/95 drop-shadow-md tracking-wide`}>
                  Hämmerli 2D, 8855 Wangen
                </p>
              </div>
            </div>

            {/* Event Details Content */}
            <div className="p-3 sm:p-5 md:p-7 lg:p-9">
              {/* Time */}
              <div className="text-center mb-5 sm:mb-8">
                {siteConfig.reception.time === "To follow after the ceremony" ? (
                  <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${cormorant.className} font-semibold text-[#85441E] tracking-wide`}>
                    To follow after the ceremony
                  </p>
                ) : (
                  <>
                    <p className={`text-[10px] sm:text-xs md:text-sm ${cormorant.className} font-semibold text-[#85441E] uppercase tracking-[0.2em] mb-2 sm:mb-3`}>
                      {siteConfig.reception.time === "After ceremony" ? "Starts" : "Starts at"}
                    </p>
                    <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${cormorant.className} font-semibold text-[#85441E] tracking-wide`}>
                      {siteConfig.reception.time}
                    </p>
                  </>
                )}
              </div>

              {/* Location Details */}
              <div className="bg-gradient-to-br from-[#EFBE94]/20 to-[#FFF7F6] rounded-xl p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 border-4 border-[#85441E]/20">
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#85441E] mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs sm:text-sm md:text-base ${cormorant.className} font-semibold text-[#85441E] mb-1.5 sm:mb-2 uppercase tracking-wide`}>
                      Location
                    </p>
                    <p className={`text-xs sm:text-sm md:text-base lg:text-lg ${cormorant.className} text-[#85441E] leading-relaxed`}>
                      ATTiKA8855 Hämmerli 2D, 8855 Wangen
                    </p>
                  </div>
                  {/* QR Code for Reception - Right side */}
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-shrink-0">
                    <div className="bg-[#FFF7F6] p-1.5 sm:p-2 md:p-2.5 rounded-lg border border-[#85441E]/20 shadow-sm">
                      <QRCodeSVG
                        value={receptionMapsLink}
                        size={80}
                        level="M"
                        includeMargin={false}
                        fgColor="#85441E"
                        bgColor="#FFF7F6"
                      />
                    </div>
                    <p className={`text-[9px] sm:text-[10px] md:text-xs ${cormorant.className} text-[#85441E]/60 italic text-center max-w-[80px]`}>
                      Scan for directions
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                <button
                  onClick={() => openInMaps(receptionMapsLink)}
                  className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-[#85441E] hover:bg-[#6d361b] text-[#EFBE94] rounded-lg ${cormorant.className} font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] premium-shadow`}
                  aria-label="Get directions to reception venue"
                >
                  <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  <span>Get Directions</span>
                </button>
                <button
                  onClick={() => copyToClipboard(receptionVenue, 'reception')}
                  className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 bg-[#FFF7F6] border-2 border-[#85441E]/30 hover:border-[#85441E]/50 hover:bg-[#85441E]/10 text-[#85441E] rounded-lg ${cormorant.className} font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`}
                  aria-label="Copy reception venue address"
                >
                  {copiedItems.has('reception') ? (
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0 text-[#85441E]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                  )}
                  <span>{copiedItems.has('reception') ? 'Copied!' : 'Copy Address'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attire Information */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="h-px w-10 sm:w-14 md:w-20 bg-[#85441E]/50" />
            <Shirt className="w-5 h-5 sm:w-6 sm:h-6 text-[#85441E]" />
            <div className="h-px w-10 sm:w-14 md:w-20 bg-[#85441E]/50" />
          </div>
          <h3 className={`text-xl sm:text-2xl md:text-3xl ${cinzel.className} text-[#85441E] mb-3 sm:mb-4`}>
            Attire Guidelines
          </h3>
          <p className={`text-sm sm:text-base md:text-lg ${cormorant.className} text-[#85441E] font-light`}>
            Our celebration is semi-formal / formal. Please follow the guidelines below.
          </p>
        </div>

        {/* Attire Cards */}
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          {/* Principal Sponsor Attire */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#85441E]/15 to-[#85441E]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
            
            <div className="relative bg-[#FFF7F6] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 lg:p-9 border-4 border-[#85441E]/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className={`text-base sm:text-lg md:text-xl lg:text-2xl ${cinzel.className} text-[#85441E] mb-4 sm:mb-5 md:mb-6 text-center px-2`}>
                Principal Sponsor Attire
              </h4>

              {/* Copy: follow color palette */}
              <p className={`text-center text-xs sm:text-sm md:text-base lg:text-lg ${cormorant.className} text-[#85441E]/90 font-light leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-xl mx-auto px-3`}>
                Please follow the color palette below for your outfit.
              </p>

              {/* Principal sponsor attire image */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] max-w-2xl mx-auto rounded-lg sm:rounded-xl overflow-hidden border border-[#85441E]/30 mb-4 sm:mb-6 md:mb-8">
                <Image
                  src="/Details/principal.png"
                  alt="Principal sponsor attire — follow the color palette"
                  fill
                  className="object-contain bg-[#FFF7F6]/50 p-2 sm:p-3"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 672px"
                />
              </div>

              {/* Color palette for principal sponsors - using motif colors */}
              <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap mb-5 sm:mb-6 md:mb-7 px-2">
                {["#935F3B", "#85441E", "#38150B", "#EFBE94", "#B26A3B"].map((color) => (
                  <div
                    key={color}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full shadow-md border-2 border-white ring-2 ring-[#85441E]/30 hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              
              {/* Sponsors Dress Code Text */}
              <div className="text-center pt-3 sm:pt-4 border-t border-[#85441E]/20 px-3 sm:px-4">
                <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${cormorant.className} text-[#85441E] leading-relaxed mb-3 sm:mb-4`}>
                  <span className="font-semibold">Ninang:</span> Long Gown
                </p>
                <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${cormorant.className} text-[#85441E] leading-relaxed`}>
                  <span className="font-semibold">Ninong:</span> Barong & Black Pants
                </p>
              </div>
            </div>
          </div>

          {/* Guest Attire */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#85441E]/15 to-[#85441E]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
            
            <div className="relative bg-[#FFF7F6] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 lg:p-9 border-4 border-[#85441E]/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <h4 className={`text-base sm:text-lg md:text-xl lg:text-2xl ${cinzel.className} text-[#85441E] mb-4 sm:mb-5 md:mb-6 text-center px-2`}>
                Guest Attire
              </h4>

              {/* Copy: follow color palette */}
              <p className={`text-center text-xs sm:text-sm md:text-base lg:text-lg ${cormorant.className} text-[#85441E]/90 font-light leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-xl mx-auto px-3`}>
                Please follow the color palette below for your outfit.
              </p>

              {/* Guest attire image */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] max-w-2xl mx-auto rounded-lg sm:rounded-xl overflow-hidden border border-[#85441E]/30 mb-4 sm:mb-6 md:mb-8">
                <Image
                  src="/Details/guest.png"
                  alt="Guest attire inspiration — follow the color palette"
                  fill
                  className="object-contain bg-[#FFF7F6]/50 p-2 sm:p-3"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 672px"
                />
              </div>

              {/* Color palette circles - using motif colors */}
              <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap mb-5 sm:mb-6 md:mb-7 px-2">
                {["#935F3B", "#85441E", "#38150B", "#EFBE94", "#B26A3B"].map((color) => (
                  <div
                    key={color}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full shadow-md border-2 border-white ring-2 ring-[#85441E]/30 hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              
              {/* Guest Dress Code Text */}
              <div className="text-center pt-3 sm:pt-4 border-t border-[#85441E]/20 px-3 sm:px-4">
                <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${cormorant.className} text-[#85441E] leading-relaxed mb-3 sm:mb-4`}>
                  <span className="font-semibold">Semi-Formal / Formal</span>
                </p>
                <p className={`text-xs sm:text-sm ${cormorant.className} text-[#85441E]/90 font-light`}>
                  Elegant attire that complements our wedding motif. Kindly avoid plain white or bridal ivory.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Reminders Section */}
        <div className="relative group mt-10 sm:mt-14 md:mt-16">
          <div className="absolute -inset-1 bg-gradient-to-br from-[#85441E]/15 to-[#85441E]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          
          <div className="relative bg-[#FFF7F6] backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-9 border-4 border-[#85441E]/30 shadow-lg hover:shadow-xl transition-all duration-300" style={{ backgroundColor: '#FFF7F6' }}>
            <h4 className={`text-lg sm:text-xl md:text-2xl ${cinzel.className} text-[#85441E] mb-6 sm:mb-7 md:mb-8 text-center`}>
              Important Reminders
            </h4>
            
            {/* Reminders List */}
            <div className="space-y-5 sm:space-y-6 md:space-y-7">
              {/* Attendance Limited */}
              <div className="bg-gradient-to-br from-[#EFBE94]/20 via-[#FFF7F6]/50 to-[#FFF7F6] rounded-xl p-5 sm:p-6 md:p-7 border border-[#85441E]/20">
                <p className={`text-sm sm:text-base md:text-lg ${cormorant.className} text-[#85441E] leading-relaxed`}>
                  <span className="font-semibold">Invitation Only:</span> As we celebrate this moment with our closest loved ones, we kindly ask that attendance be limited to those named on the invitation.
                </p>
              </div>

              {/* No Boxed Gifts */}
              <div className="bg-gradient-to-br from-[#EFBE94]/20 via-[#FFF7F6]/50 to-[#FFF7F6] rounded-xl p-5 sm:p-6 md:p-7 border border-[#85441E]/20">
                <p className={`text-sm sm:text-base md:text-lg ${cormorant.className} text-[#85441E] leading-relaxed`}>
                  <span className="font-semibold">Gift Policy:</span> We kindly ask for no boxed gifts. Monetary gifts are welcome but never expected.
                </p>
              </div>

              {/* Adults Only */}
              <div className="bg-gradient-to-br from-[#EFBE94]/20 via-[#FFF7F6]/50 to-[#FFF7F6] rounded-xl p-5 sm:p-6 md:p-7 border border-[#85441E]/20">
                <p className={`text-sm sm:text-base md:text-lg ${cormorant.className} text-[#85441E] leading-relaxed`}>
                  <span className="font-semibold">Adults-Only Event:</span> We love your little ones, but to keep the celebration intimate, we kindly request an adults-only event. (Children in our family and the entourage are the exception)
                </p>
              </div>

              {/* No Photos */}
              <div className="bg-gradient-to-br from-[#EFBE94]/20 via-[#FFF7F6]/50 to-[#FFF7F6] rounded-xl p-5 sm:p-6 md:p-7 border border-[#85441E]/20">
                <p className={`text-sm sm:text-base md:text-lg ${cormorant.className} text-[#85441E] leading-relaxed`}>
                  <span className="font-semibold">Photo Policy:</span> We'd love for everyone to be fully present. Please avoid posting photos during the celebration or ahead of time—our photographers will take care of the memories.
                </p>
              </div>

              {/* RSVP Contact */}
              <div className="bg-gradient-to-br from-[#EFBE94]/20 via-[#FFF7F6]/50 to-[#FFF7F6] rounded-xl p-5 sm:p-6 md:p-7 border border-[#85441E]/20">
                <p className={`text-sm sm:text-base md:text-lg ${cormorant.className} text-[#85441E] leading-relaxed`}>
                  <span className="font-semibold">RSVP Contact:</span> Please reach out to {siteConfig.details.rsvp.contact} at {siteConfig.details.rsvp.phone}
                </p>
              </div>
            </div>

            {/* Thank You Note */}
            <div className="mt-7 sm:mt-8 md:mt-9 pt-6 sm:pt-7 md:pt-8 border-t border-[#85441E]/20">
              <p className={`text-sm sm:text-base md:text-lg ${cormorant.className} text-[#85441E] text-center leading-relaxed italic`}>
                Thank you for your understanding and cooperation. We look forward to celebrating with you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}