'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Server Owner',
    content: 'KiteSolutions transformed our small server into a thriving community. Their custom plugins and optimization services made all the difference!',
    rating: 5,
  },
  {
    name: 'Sarah Lee',
    role: 'Community Manager',
    content: 'The support we receive from KiteSolutions is unparalleled. They\'re always there when we need them, no matter the time of day.',
    rating: 5,
  },
  {
    name: 'Mike Chen',
    role: 'Developer',
    content: 'As a developer myself, I\'m impressed by the quality of code KiteSolutions delivers. Their custom plugins integrate seamlessly with our existing setup.',
    rating: 5,
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-carbon-black to-carbon-black/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-kite-gold via-kite-blue to-kite-purple bg-clip-text text-transparent"
        >
          What Our Clients Say
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-kite-gold/10 to-kite-purple/10 rounded-xl p-8 shadow-lg"
            >
              <p className="text-xl text-antique-white mb-6">{testimonials[current].content}</p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-kite-gold">{testimonials[current].name}</h3>
                  <p className="text-antique-white/60">{testimonials[current].role}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-kite-gold fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => setCurrent((prevCurrent) => (prevCurrent - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-kite-gold/20 hover:bg-kite-gold/40 rounded-full p-2 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-antique-white" />
          </button>
          <button
            onClick={() => setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-kite-gold/20 hover:bg-kite-gold/40 rounded-full p-2 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 text-antique-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

