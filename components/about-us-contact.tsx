"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Footer } from "./footer"

export function ContactHeroSection() {
    return (
        
        <>
         <section className="relative h-[50vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/tt1.jpg"
                    alt="Hero background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-black/80 z-10" />
            </div>

            <div className="container mx-auto px-4 relative items-center z-20 py-20 md:px-[5rem]">
                <div className="max-w-3xl space-y-6">
                    <ScrollAnimation>
                        <h1 className="text-3xl md:text-6xl font-bold text-white leading-[3rem]">Welcome to Ramadi Empire</h1>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.2}>
                        <p className="text-xl md:text-xl text-gray-200 leading-8">
                            At Ramadi Empire, we are committed to delivering top-tier construction, tendering, quantity surveying, and
                            procurement services. Our expertise ensures your projects are handled with precision, professionalism, and
                            unparalleled attention to detail.
                        </p>
                    </ScrollAnimation>

                </div>
            </div>

        </section>
        
        </>
       
    )
}

