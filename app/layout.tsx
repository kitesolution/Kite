import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Kite Solutions | Elevate Your Minecraft Experience',
  description: 'Crafting exceptional Minecraft servers and experiences since 2021.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans bg-carbon-black text-antique-white`}>{children}</body>
    </html>
  )
}

