'use client'

import { Server, Code, Users, Zap, Shield, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: <Server className="w-10 h-10 text-kite-gold" />,
    title: "Server Infrastructure",
    description: "Robust and scalable server setups tailored for optimal performance.",
  },
  {
    icon: <Code className="w-10 h-10 text-kite-blue" />,
    title: "Custom Plugin Development",
    description: "Bespoke plugins to enhance gameplay and server functionality.",
  },
  {
    icon: <Users className="w-10 h-10 text-kite-purple" />,
    title: "Community Building",
    description: "Strategies to grow and engage your player base effectively.",
  },
  {
    icon: <Zap className="w-10 h-10 text-kite-gold" />,
    title: "Performance Optimization",
    description: "Fine-tuning your server for smooth gameplay experiences.",
  },
  {
    icon: <Shield className="w-10 h-10 text-kite-blue" />,
    title: "Security Solutions",
    description: "Comprehensive protection against threats and vulnerabilities.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-kite-purple" />,
    title: "Launch Support",
    description: "End-to-end assistance for successful server launches and events.",
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-carbon-black to-carbon-black/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-kite-gold via-kite-blue to-kite-purple bg-clip-text text-transparent"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-gradient-to-br from-carbon-black to-carbon-black/50 p-6 rounded-xl shadow-lg border border-antique-white/10 hover:border-kite-gold transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-kite-gold/20 via-kite-blue/20 to-kite-purple/20">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4 text-antique-white">{service.title}</h3>
              </div>
              <p className="text-antique-white/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

