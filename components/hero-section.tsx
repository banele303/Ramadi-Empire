"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FallbackImage } from "@/components/ui/fallback-image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gray-900">
        <FallbackImage
          src="/tt1.jpg"
          alt="Hero background"
          priority
        />
        <div className="absolute inset-0 bg-black/80 z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20 py-20 md:px-[5rem]">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[3rem]">Building Excellence, Delivering Results</h1>
          <p className="text-xl md:text-xl text-gray-200 leading-8">
            At Ramadi Empire, we are committed to delivering top-tier construction, tendering, quantity surveying, and
            procurement services. Our expertise ensures your projects are handled with precision, professionalism, and
            unparalleled attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/3 md:left-1/2 transform -translate-x-1/2 z-20">
        <Link href="#about" className="text-white flex flex-col items-center">
          <span className="mb-2">Scroll to learn more</span>
          <div>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  )
}

