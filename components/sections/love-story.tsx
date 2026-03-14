"use client"

import React from 'react';
import Link from 'next/link';
import { StorySection } from '@/components/StorySection';
import { DualImageStorySection } from '@/components/DualImageStorySection';
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
})

export function LoveStory() {
  return (
    <div className="min-h-screen bg-[#EFBE94] overflow-x-hidden">
      
      {/* INTRO: Two images flanking the opening story text */}
      <DualImageStorySection
        theme="light"
        leftImageSrc="/lovestory/1.1.JPG"
        rightImageSrc="/lovestory/1.2.JPG"
        title="Our Story"
        text={
          <>
            <p>
            For a long time, there was a vision of a life filled with adventure—a longing for a partner who wouldn&apos;t just be a companion, but a leader and a fellow explorer. For a long time, that vision remained a wish held close to the heart, waiting for the right person to bring it to life. It&apos;s funny how the heart often knows what it&apos;s looking for long before it finds it.
            </p>
          </>
        }
      />

      {/* SECTION 1: Top - Dark */}
      <StorySection
        theme="dark"
        layout="image-left"
        isFirst={true}
        imageSrc="/mobile-background/couple (1).webp"
        title=""
        text={
          <>
            <p>
            Then, on January 21st, 2023, in the heart of Madrid, the universe finally delivered. It didn't start with a chance encounter on a busy street, but with a single notification from OKC that would change everything.
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
            The message was direct and sincere:
            <br />
            "Magandang Hapon dear! Finally a profile that really does matches with mine. I am truly amazed about your profile and your views on life and could not agree more. I am not here to waste your time but to make the best out of it. I want to show u that with me u gonna have an amazing and really fun life. I love to travel around the world. Have been to over 80 countries. Let’s go and discover the world together?"
            <br />
            <br />
            In a digital world of fleeting moments, that message wasn’t just a greeting; it was a blueprint for our future.
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
          Believing that distance should never stand in the way of true love, Cédric encouraged Diana to pursue her second Master’s degree in Switzerland. He dedicated himself to making her transition smooth, helping her navigate her new surroundings and settle in. This move became the perfect bridge, allowing Diana to embrace Swiss life and for both of them to envision their shared future in person.
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
            They have now explored 12 countries together, embarked on hundreds of adventures, and shared innumerable weekends of discovery. Whether he was baking cookies for her friends or cooking delicious meals every day, he proved that true love is found in the smallest details.

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
            Though Cédric felt from the very first moment that Diana was the one, time transformed that feeling into absolute certainty. On September 9th, 2025… Diana’s birthday, amidst the stunning landscapes of Madeira, he asked her to be his wife. Luckily, she said yes.
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
          On February 3rd, 2026, that original promise to "not waste time" reached its most beautiful milestone. Cédric finally called her by her new name: Diana Müller. 
          <br />
          <br />
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
            "The world is wide, but we’ve already found our favorite place: right here, together. In each other, we found more than just a partner; we finally found a sense of home. To many more miles, many more meals, and a lifetime of 'let's go'—our greatest adventure is only just beginning."
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

