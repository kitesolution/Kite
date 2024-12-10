import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import { DiscordWidget } from '@/components/sections/DiscordWidget'

export default function Home() {
  return (
    <main className="min-h-screen bg-carbon-black">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <DiscordWidget />
      <Contact />
      <Footer />
    </main>
  )
}

