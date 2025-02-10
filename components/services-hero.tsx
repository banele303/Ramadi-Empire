"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ServicesHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/ss2.jpg"
          alt="Services background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Comprehensive Services
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            From tendering and quantity surveying to document preparation and supply chain management, we offer a full
            spectrum of services to meet all your construction and procurement needs.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

