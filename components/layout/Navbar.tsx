'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-carbon-black/90 backdrop-blur-sm text-antique-white py-4 fixed w-full z-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/img/logo.png" 
              alt="logo" 
              width={50} 
              height={50} 
              className="mr-2"
            />
            <span className="text-xl font-bold text-kite-gold">Kite Solutions</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="#services" scroll={true}>Services</NavLink>
            <NavLink href="#projects" scroll={true}>Projects</NavLink>
            <NavLink href="#testimonials" scroll={true}>Testimonials</NavLink>
            <NavLink href="#faq" scroll={true}>FAQ</NavLink>
            <NavLink href="#contact" scroll={true}>Contact</NavLink>
            <NavLink href="https://tos.akii.pro" target="_blank" rel="noopener noreferrer">TOS</NavLink>
            <NavLink 
              href="https://discord.gg/NuaTPcaspB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-kite-gold text-carbon-black px-4 py-2 rounded-full font-semibold hover:bg-antique-white transition-colors"
            >
              Discord
            </NavLink>
          </div>
          <button 
            className="md:hidden text-kite-gold" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 space-y-4"
          >
            <NavLink href="#services" mobile scroll={true} onClick={() => setIsOpen(false)}>Services</NavLink>
            <NavLink href="#projects" mobile scroll={true} onClick={() => setIsOpen(false)}>Projects</NavLink>
            <NavLink href="#testimonials" mobile scroll={true} onClick={() => setIsOpen(false)}>Testimonials</NavLink>
            <NavLink href="#faq" mobile scroll={true} onClick={() => setIsOpen(false)}>FAQ</NavLink>
            <NavLink href="#contact" mobile scroll={true} onClick={() => setIsOpen(false)}>Contact</NavLink>
            <NavLink href="https://tos.akii.pro" target="_blank" rel="noopener noreferrer" mobile onClick={() => setIsOpen(false)}>TOS</NavLink>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

const NavLink = ({ href, children, mobile, onClick, scroll, className }) => {
  const handleClick = (e) => {
    if (scroll && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClick) onClick();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link 
        href={href} 
        className={`hover:text-kite-gold transition-colors ${mobile ? 'block' : ''} ${className || ''}`}
        onClick={handleClick}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Navbar

