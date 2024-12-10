'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ImageCarousel } from '@/components/ui/ImageCarousel'
import { Shield, Code, Rocket } from 'lucide-react'

const stats = [
  { icon: <Shield className="w-6 h-6" />, label: "Years Experience", value: "3+" },
  { icon: <Code className="w-6 h-6" />, label: "Custom Plugins", value: "50+" },
  { icon: <Rocket className="w-6 h-6" />, label: "Servers Launched", value: "100+" },
]

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-kite-gold via-kite-blue to-kite-purple bg-clip-text text-transparent">
              Elevate Your Minecraft Experience
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-antique-white/80">
              Professional Minecraft server development and management solutions. Crafting exceptional experiences since 2021.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 bg-gradient-to-br from-kite-gold/10 to-kite-purple/10 rounded-lg border border-antique-white/10 hover:border-kite-gold/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-r from-kite-gold to-kite-purple rounded-full flex items-center justify-center text-carbon-black">
                    {stat.icon}
                  </div>
                  <div className="font-bold text-2xl text-kite-gold">{stat.value}</div>
                  <div className="text-sm text-antique-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="https://discord.gg/NuaTPcaspB"
                className="bg-gradient-to-r from-kite-gold to-kite-purple text-carbon-black px-8 py-4 rounded-full font-semibold hover:from-kite-purple hover:to-kite-gold transition-all duration-300 inline-block"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-kite-gold/20 via-kite-blue/20 to-kite-purple/20 rounded-xl filter blur-3xl"></div>
            <ImageCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

