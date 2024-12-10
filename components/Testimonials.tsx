'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Blitz',
    role: 'Owner at SourMC',
    content: 'Very fast and excellent, Didn\'t need to wait not even an Hour.',
    rating: 5,
  },
  {
    name: 'Maul',
    role: 'Owner of Friendly Hospital',
    content: 'Kite Solution did a fantastic & incredible job on the Server template, custom bots, emojis, graphics. Highly Recommmended to others!',
    rating: 5,
  },
  {
    name: 'Alexander',
    role: 'Founder at TerraFusion & AlenDER',
    content: 'He is a very organized person, he is very friendly towards my Community and is overall a Pain Killer. Big thanks to him.',
    rating: 5,
  },
  {
    name: 'NuggetCheese',
    role: 'Onwer of ChickenNugget',
    content: 'He was really nice and let me choose anything i wanted for the server if i told him something he would just do it and he also replies right away',
    rating: 5,
  },
  {
    name: 'Yautia',
    role: 'Owner at Unknown',
    content: 'The support we receive from KiteSolutions is unparalleled. They\'re always there when we need them, no matter the time of day.',
    rating: 5,
  },
  {
    name: 'Zuicide',
    role: 'Owner of CakeMC',
    content: 'KiteSolutions transformed our small server into a thriving community. Their custom plugins and optimization services made all the difference!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-indigo-900/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500"
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-purple-900/30 backdrop-blur-sm rounded-lg p-6 hover:bg-purple-800/40 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold">{testimonial.name[0]}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-200">{testimonial.name}</h3>
                  <p className="text-purple-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-purple-200 mb-4">{testimonial.content}</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

