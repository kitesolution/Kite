'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, FileText, HelpCircle, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-carbon-black to-carbon-black/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-kite-gold via-kite-blue to-kite-purple bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-kite-gold">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-antique-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-carbon-black border border-antique-white/20 text-antique-white focus:outline-none focus:border-kite-gold"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-antique-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-carbon-black border border-antique-white/20 text-antique-white focus:outline-none focus:border-kite-gold"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-antique-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-carbon-black border border-antique-white/20 text-antique-white focus:outline-none focus:border-kite-gold"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-kite-gold to-kite-purple text-carbon-black font-bold py-3 rounded-lg hover:from-kite-purple hover:to-kite-gold transition-all duration-300"
              >
                Send Message <Send className="w-4 h-4 inline-block ml-2" />
              </motion.button>
            </form>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-kite-gold">Other Ways to Reach Us</h3>
            <ul className="space-y-4">
              <ContactItem icon={<Mail className="w-6 h-6 text-kite-gold mr-3" />}>
                Email: <a href="mailto:support@kitesolution.org" className="text-kite-blue hover:underline">support@kitesolution.org</a>
              </ContactItem>
              <ContactItem icon={<MessageCircle className="w-6 h-6 text-kite-purple mr-3" />}>
                Discord: <a href="https://dsc.akii.pro" className="text-kite-blue hover:underline">Join our server</a>
              </ContactItem>
              <ContactItem icon={<FileText className="w-6 h-6 text-kite-gold mr-3" />}>
                Terms of Service: <a href="https://tos.kitesolutions.org" className="text-kite-blue hover:underline">Read here</a>
              </ContactItem>
              <ContactItem icon={<HelpCircle className="w-6 h-6 text-kite-purple mr-3" />}>
                FAQ: <a href="https://www.reddit.com/r/kitesolutions/" className="text-kite-blue hover:underline">r/kitesolutions</a>
              </ContactItem>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const ContactItem = ({ icon, children }) => (
  <motion.li 
    whileHover={{ scale: 1.05 }}
    className="flex items-center"
  >
    {icon}
    <span className="text-antique-white">{children}</span>
  </motion.li>
)

export default Contact

