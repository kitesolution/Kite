'use client'

import { Github, Twitter, Facebook } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaDiscord } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-carbon-black text-antique-white py-8 border-t border-antique-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <p>&copy; {new Date().getFullYear()} Kite Solutions. All rights reserved.</p>
            <p className="text-sm text-antique-white/60">Transforming Minecraft visions into reality since 2021.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <SocialLink href="https://github.com/kitesolution" icon={<Github className="w-6 h-6" />} />
            <SocialLink href="https://twitter.com/kitesolutions" icon={<Twitter className="w-6 h-6" />} />
            <SocialLink href="https://facebook.com/kitesolutions" icon={<Facebook className="w-6 h-6" />} />
            <SocialLink href="https://discord.com/invite/PqqUumKz" icon={<FaDiscord className="w-6 h-6" />} />
          </motion.div>
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-center text-sm text-antique-white/60"
        >
          We are not affiliated with Mojang Studios
        </motion.p>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon }) => (
  <motion.a
    whileHover={{ scale: 1.2 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-antique-white/60 hover:text-kite-gold"
  >
    {icon}
  </motion.a>
)

export default Footer

