'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Users, MessageSquare, ExternalLink } from 'lucide-react'

interface DiscordWidget {
  id: string
  name: string
  instant_invite: string
  presence_count: number
  members: {
    id: string
    username: string
    status: string
    avatar_url: string
  }[]
}

export function DiscordWidget() {
  const [widgetData, setWidgetData] = useState<DiscordWidget | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://discord.com/api/guilds/1301907058546839562/widget.json')
      .then(res => res.json())
      .then(data => setWidgetData(data))
      .catch(err => setError('Failed to load Discord widget'))
  }, [])

  if (error) return null

  return (
    <section className="py-20 bg-gradient-to-b from-carbon-black/50 to-carbon-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-kite-gold via-kite-blue to-kite-purple bg-clip-text text-transparent"
        >
          Join Our Community
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-kite-gold">Why Join Our Discord?</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MessageSquare className="w-6 h-6 text-kite-blue mt-1" />
                <div>
                  <h4 className="font-semibold text-antique-white">Direct Support</h4>
                  <p className="text-antique-white/80">Get instant help from our experienced team members</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-kite-purple mt-1" />
                <div>
                  <h4 className="font-semibold text-antique-white">Active Community</h4>
                  <p className="text-antique-white/80">Connect with other server owners and developers</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-kite-gold/10 to-kite-purple/10 rounded-xl p-6 border border-antique-white/10"
          >
            {widgetData && (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-kite-gold">{widgetData.name}</h3>
                  <span className="text-kite-blue flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {widgetData.presence_count} Online
                  </span>
                </div>
                <div className="space-y-4 mb-6">
                  {widgetData.members.slice(0, 5).map(member => (
                    <div key={member.id} className="flex items-center space-x-3">
                      <img
                        src={member.avatar_url}
                        alt={member.username}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-antique-white">{member.username}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-kite-purple/20 text-kite-purple">
                        {member.status}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href={widgetData.instant_invite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-kite-gold to-kite-purple text-carbon-black py-3 rounded-lg font-semibold hover:from-kite-purple hover:to-kite-gold transition-all duration-300"
                >
                  Join Server <ExternalLink className="w-4 h-4 inline-block ml-2" />
                </a>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

