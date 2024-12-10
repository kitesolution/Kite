'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What types of Minecraft servers do you support?',
    answer: 'We support all types of Minecraft servers, including survival, creative, minigames, and modded servers. Our solutions are customizable to fit the unique needs of your server, regardless of its type or size.',
  },
  {
    question: 'How quickly can you implement new features or fix issues?',
    answer: 'Our team works efficiently to implement new features and fix issues as quickly as possible. Typically, minor changes can be done within 24-48 hours, while more complex features may take a few days to a week, depending on the scope of the project.',
  },
  {
    question: 'Do you offer ongoing support after implementation?',
    answer: 'Yes, we provide ongoing support for all our services. This includes regular check-ins, performance monitoring, and quick response times for any issues that may arise. We\'re committed to ensuring your server runs smoothly at all times.',
  },
  {
    question: 'Can you help with server migration and setup?',
    answer: 'We offer comprehensive server migration and setup services. Whether you\'re moving from one host to another or setting up a new server from scratch, our team can handle the entire process to ensure a smooth transition with minimal downtime.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-purple-900/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-indigo-900/30 hover:bg-indigo-800/40 rounded-lg transition-colors"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-purple-200">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-300" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-300" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 text-purple-300 bg-indigo-900/20 rounded-b-lg">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

