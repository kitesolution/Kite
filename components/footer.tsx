import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Twitter, DiscIcon as Discord } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-dark-blue text-soft-white border-t border-bright-cyan/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-bright-cyan">KiteSolutions</h3>
            <p className="text-silver-gray">
              Elevating Minecraft servers with professional development and management solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-bright-cyan">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/plugins" className="text-silver-gray hover:text-bright-cyan">
                  Plugin Development
                </Link>
              </li>
              <li>
                <Link href="/services/management" className="text-silver-gray hover:text-bright-cyan">
                  Server Management
                </Link>
              </li>
              <li>
                <Link href="/services/marketing" className="text-silver-gray hover:text-bright-cyan">
                  Marketing & Community
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-bright-cyan">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-silver-gray hover:text-bright-cyan">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-silver-gray hover:text-bright-cyan">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-silver-gray hover:text-bright-cyan">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-bright-cyan">Connect</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 text-silver-gray hover:text-bright-cyan" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5 text-silver-gray hover:text-bright-cyan" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://discord.com" target="_blank" rel="noopener noreferrer">
                  <Discord className="h-5 w-5 text-silver-gray hover:text-bright-cyan" />
                  <span className="sr-only">Discord</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-bright-cyan/20 text-center text-silver-gray">
          <p>&copy; {new Date().getFullYear()} KiteSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

