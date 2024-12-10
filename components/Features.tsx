'use client'

import { motion } from 'framer-motion'
import { Shield, Rocket, Code, Clock } from 'lucide-react'

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance to keep your server running smoothly.',
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Scalable Solutions',
    description: 'Grow your server from a small community to a large network with ease.',
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Custom Development',
    description: 'Tailored features to make your server stand out from the crowd.',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Quick Turnaround',
    description: 'Fast implementation of new features and fixes to minimize downtime.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-purple-900/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500"
        >
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-indigo-900/30 backdrop-blur-sm rounded-lg p-6 hover:bg-indigo-800/40 transition-colors"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-200">{feature.title}</h3>
              <p className="text-purple-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

