'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="py-12 md:py-20 bg-kite-gold">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-carbon-black">
            Ready to Elevate Your Minecraft Server?
          </h2>
          <p className="text-xl mb-8 text-carbon-black/80">
            Join hundreds of satisfied server owners and take your Minecraft experience to new heights.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="https://discord.gg/NuaTPcaspB"
              className="bg-carbon-black text-kite-gold px-8 py-3 rounded-full font-semibold hover:bg-antique-white hover:text-carbon-black transition-colors inline-block"
            >
              Get Started Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

