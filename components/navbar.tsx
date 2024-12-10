'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed w-full z-50 transition-colors duration-300 ${
          isScrolled ? "bg-dark-blue/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-bright-cyan">
              KiteSolutions
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
              <Button
                className="bg-bright-cyan hover:bg-bright-cyan/80 text-dark-blue"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-soft-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-dark-blue pt-16"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-4">
                <NavLinks mobile onClick={() => setIsMobileMenuOpen(false)} />
                <Button
                  className="bg-bright-cyan hover:bg-bright-cyan/80 text-dark-blue w-full"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLinks({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) {
  const links = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
  ]

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-silver-gray hover:text-bright-cyan transition-colors ${
            mobile ? "block text-2xl py-2" : ""
          }`}
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}

