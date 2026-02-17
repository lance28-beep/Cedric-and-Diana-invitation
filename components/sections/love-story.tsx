"use client"

import React from 'react';
import Link from 'next/link';
import { StorySection } from '@/components/StorySection';
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
})

export function LoveStory() {
  return (
    <div className="min-h-screen bg-[#EFBE94] overflow-x-hidden">
      
      {/* SECTION 1: Top - Dark */}
      <StorySection
        theme="dark"
        layout="image-left"
        isFirst={true}
        imageSrc="/mobile-background/couple (1).webp"
        title="Our story"
        text={
          <>
            <p>
            Fifteen years ago, Diana had a vivid picture in her mind, an imagination of a man, someone who would not just walk beside her, but lead her into a life of adventure. She imagined him perfectly, yet for so long, he was just a wish. It&apos;s funny how the heart often knows what it&apos;s looking for long before it finds it.
            </p>
          </>
        }
      />

      {/* SECTION 2: Middle - Light */}
      <StorySection
        theme="light"
        layout="image-right"
        imageSrc="/mobile-background/couple (2).webp"
        text={
          <>
            <p>
            Then, on January 21st, 2023, in Madrid, fate finally decided it was time.
            <br />
            <br />
            It didn't start with a chance meeting on a busy street, but with a single notification from OKCupid. The message was polite, direct, and promised a future that sounded almost too good to be true:
              <br />
              <br />

            </p>
          </>
        }
      />

    <StorySection
      theme="dark"
      layout="image-left"
      imageSrc="/mobile-background/couple (3).webp"
      text={
        <>
          <p>
          <blockquote>
                "Magandang Hapon dear! Finally a profile that really does matches with mine. I am truly amazed about your profile and your views on life and could not agree more. I am not here to waste your time but to make the best out of it. I want to show u that with me u gonna have an amazing and really fun life. I love to travel around the world. Have been to over 80 countries. Lets go and discover the world together?"
            </blockquote>
          </p>
        </>     
      }
    />

      {/* SECTION 3: Bottom - Dark */}
      <StorySection
        theme="light"
        layout="image-right"
        isLast={true}
        imageSrc="/mobile-background/couple (4).webp"
        text={
          <>
            <p>
            Fast forward to today, after more than three years together, that promise has been kept in the most beautiful way. They have been to 12 countries, hundreds of unforgettable adventures, explored countless cities,  and shared innumerable weekend trips. The "let's go" from that first message truly became their reality.
            <br />
            </p>
          </>
        }
      />

      <StorySection
        theme="dark"
        layout="image-left"
        imageSrc="/mobile-background/couple (5).webp"
        text={
          <>
          <p>
            <br />
            Looking back, it’s amazing how everything happened exactly as it should have. He wasn't perfect, but he was perfect for her. He was the man she had craved to be with years before they even spoke.
            <br />

            </p>
          </>   
        }
      />

      <StorySection
        theme="light"
        layout="image-right"
        imageSrc="/mobile-background/couple (6).webp"
        text={
          <>
          <p>
          <br />
            He taught her how to be loved deeply, how to believe in her own awesomeness, and how to embrace the unknown. From baking cookies for her friends to cooking delicious meals every day, Cedric showed that true love is found in the details.
            <br />
            <br />
          </p>
        </>   
        }
      />

      <StorySection
        theme="dark"
        layout="image-left"
        imageSrc="/mobile-background/couple (7).webp"
        text={
          <>
            <p>
            Now, as they continue to explore the world, they carry with them the beautiful truth that what is meant for you will always find its way. Diana promised to follow his lead and cherish him. Every time she wakes up smiling, she knows that she has already won; she knows that the wait was worth it. She didn't just find a partner; she found her home.
            </p>
          </>   
        }
      />
      
      {/* Footer Decoration */}
      <div className="bg-[#85441E] pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 text-center text-[#EFBE94] z-0 relative px-4">
        <div className="w-12 sm:w-16 h-[1px] bg-[#EFBE94] mx-auto mb-4 sm:mb-6 opacity-30"></div>
        <Link 
          href="#guest-list"
          className={`${cinzel.className} group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-[0.7rem] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-normal text-[#85441E] bg-[#EFBE94] rounded-sm border border-[#EFBE94] transition-all duration-300 hover:bg-[#f1cfa6] hover:border-[#f1cfa6] hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EFBE94]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#85441E]`}
        >
          <span className="relative z-10">Join us</span>
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 rounded-sm bg-[#EFBE94] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-0"></div>
        </Link>
      </div>

    </div>
  );
}

