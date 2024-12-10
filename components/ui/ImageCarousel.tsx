'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  {
    src: "/minecraft-build-1.jpg",
    title: "Fantasy Kingdoms",
    author: "KiteSolutions"
  },
  {
    src: "/minecraft-build-2.jpg",
    title: "Modern Cities",
    author: "KiteSolutions"
  },
  {
    src: "/minecraft-build-3.jpg",
    title: "Adventure Maps",
    author: "KiteSolutions"
  }
]

export function ImageCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % images.length)
  const prev = () => setCurrent((current - 1 + images.length) % images.length)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [current])

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative aspect-video"
        >
          <Image
            src={images[current].src}
            alt={images[current].title}
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon-black to-transparent opacity-70" />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className="bg-carbon-black/50 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-kite-gold mb-2">{images[current].title}</h3>
              <p className="text-sm text-antique-white">By {images[current].author}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-carbon-black/50 flex items-center justify-center text-antique-white hover:bg-carbon-black/70 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-carbon-black/50 flex items-center justify-center text-antique-white hover:bg-carbon-black/70 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

