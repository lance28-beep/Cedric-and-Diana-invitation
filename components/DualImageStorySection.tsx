"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { TornPaperEdge } from './TornPaperEdge';

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

interface DualImageStorySectionProps {
  leftImageSrc: string;
  rightImageSrc: string;
  title?: string;
  text: React.ReactNode;
  theme: 'dark' | 'light';
  isFirst?: boolean;
  isLast?: boolean;
}

export const DualImageStorySection: React.FC<DualImageStorySectionProps> = ({
  leftImageSrc,
  rightImageSrc,
  title,
  text,
  theme,
  isFirst = false,
  isLast = false,
}) => {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-[#85441E]' : 'bg-[#EFBE94] relative z-10';
  const textColor = isDark ? 'text-[#EFBE94]' : 'text-[#85441E]';

  const imageFrameClass = isDark
    ? 'bg-white p-1.5 md:p-3 shadow-lg'
    : 'bg-white p-1.5 md:p-3 shadow-md';

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${bgColor} relative`}>
      {/* Torn Edges (Light sections only) */}
      {!isDark && (
        <>
          <div className="absolute top-0 left-0 w-full -mt-[8px] md:-mt-[20px] z-20 text-[#EFBE94] pointer-events-none">
            <TornPaperEdge flipped={true} />
          </div>
          <div className="absolute bottom-0 left-0 w-full -mb-[8px] md:-mb-[20px] z-20 text-[#EFBE94] pointer-events-none">
            <TornPaperEdge flipped={false} />
          </div>
        </>
      )}

      <div
        ref={sectionRef}
        className={`container mx-auto px-3 md:px-12 py-12 md:py-32 relative z-10 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        {/*
          Mobile  : flex-col  — images row on top, text block below
          Desktop : flex-row  — [left image] [text] [right image]
        */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-8">

          {/* ── Mobile: images side-by-side row / Desktop: left image column ── */}
          <div className="flex flex-row md:flex-col md:w-[28%] gap-2 md:gap-0 justify-center md:justify-start shrink-0">

            {/* Left image — always visible */}
            <div
              className={`
                w-1/2 md:w-full
                transition-all duration-1000 delay-200 ease-out
                rotate-1 md:rotate-2
                ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
              `}
            >
              <div className={`${imageFrameClass} w-full`}>
                <div className="aspect-[3/4] w-full overflow-hidden relative group">
                  <Image
                    src={leftImageSrc}
                    alt="Story moment left"
                    fill
                    sizes="(max-width: 768px) 45vw, 28vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    quality={90}
                  />
                  {isDark && (
                    <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none z-10" />
                  )}
                </div>
              </div>
            </div>

            {/* Right image — only visible in the mobile row; hidden on desktop (shown in its own column) */}
            <div
              className={`
                w-1/2 md:hidden
                transition-all duration-1000 delay-300 ease-out
                -rotate-1
                ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
              `}
            >
              <div className={`${imageFrameClass} w-full`}>
                <div className="aspect-[3/4] w-full overflow-hidden relative group">
                  <Image
                    src={rightImageSrc}
                    alt="Story moment right"
                    fill
                    sizes="45vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    quality={90}
                  />
                  {isDark && (
                    <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none z-10" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ── Center: story text ── */}
          <div
            className={`
              md:w-[40%] ${textColor} text-center mt-6 md:mt-0
              transition-all duration-1000 delay-500 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            {title && (
              <h2
                className={`${cinzel.className} text-2xl md:text-5xl mb-3 md:mb-6 tracking-wide leading-none ${
                  isDark ? 'text-[#EFBE94]' : 'text-[#85441E]'
                }`}
              >
                {title}
              </h2>
            )}
            <div
              className={`${cormorant.className} text-sm leading-relaxed sm:text-base md:text-2xl md:leading-relaxed space-y-3 md:space-y-6 ${
                theme === 'light' ? 'italic font-normal' : 'font-light'
              }`}
            >
              {text}
            </div>
          </div>

          {/* ── Desktop only: right image column ── */}
          <div
            className={`
              hidden md:flex md:w-[28%] justify-center shrink-0
              transition-all duration-1000 delay-300 ease-out
              ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
            `}
          >
            <div className="-rotate-2 w-full">
              <div className={`${imageFrameClass} w-full`}>
                <div className="aspect-[3/4] w-full overflow-hidden relative group">
                  <Image
                    src={rightImageSrc}
                    alt="Story moment right"
                    fill
                    sizes="28vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    quality={90}
                  />
                  {isDark && (
                    <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none z-10" />
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
