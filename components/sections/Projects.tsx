'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const projects = [
  {
    name: "BridgerLand",
    description: "A sprawling survival server with custom bridges and unique landscapes.",
    image: "/project-bridgerland.jpg",
    details: "BridgerLand features an innovative bridge-building system, allowing players to create stunning structures across vast canyons and rivers. The server includes custom-coded plugins for realistic physics and collaborative building mechanics."
  },
  {
    name: "SpeedMC",
    description: "High-octane racing and parkour experiences in Minecraft.",
    image: "/project-speedmc.jpg",
    details: "SpeedMC brings the thrill of racing to Minecraft with custom-built tracks, timed challenges, and a unique vehicle system. Players can compete in various game modes, from traditional races to complex parkour courses."
  },
  {
    name: "Sapling",
    description: "Eco-friendly survival server with tree-planting mechanics.",
    image: "/project-sapling.jpg",
    details: "Sapling encourages environmental awareness through gameplay. Players earn rewards for planting trees and maintaining biodiversity. The server features custom growth animations and a complex ecosystem simulation."
  },
  {
    name: "Minebeach",
    description: "Tropical paradise server with custom water activities.",
    image: "/project-minebeach.jpg",
    details: "Minebeach offers a unique tropical experience with custom swimming mechanics, underwater exploration, and beach-themed minigames. Players can build resorts, go scuba diving, or participate in surfing competitions."
  },
  {
    name: "BoatWaves",
    description: "Naval warfare and exploration game mode.",
    image: "/project-boatwaves.jpg",
    details: "BoatWaves introduces advanced naval combat to Minecraft. Players can build and customize ships, engage in strategic battles, and explore a vast oceanic world filled with islands and underwater treasures."
  },
  {
    name: "MobSMP",
    description: "Survival multiplayer with enhanced mob interactions.",
    image: "/project-mobsmp.jpg",
    details: "MobSMP reimagines Minecraft's creatures with enhanced AI and unique abilities. Players can tame, trade with, or battle against a variety of new and improved mobs, each with their own societies and territories."
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-carbon-black/50 to-carbon-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-kite-gold via-kite-blue to-kite-purple bg-clip-text text-transparent"
        >
          Our Projects
        </motion.h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="mb-8 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  width={400} 
                  height={225} 
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-semibold mb-2 text-kite-gold">{project.name}</h3>
                  <p className="text-antique-white/80 text-sm">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-carbon-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-carbon-black border border-kite-gold rounded-xl p-6 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-kite-gold">{selectedProject.name}</h3>
                <button onClick={() => setSelectedProject(null)} className="text-antique-white/60 hover:text-kite-gold">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <Image 
                src={selectedProject.image} 
                alt={selectedProject.name} 
                width={600} 
                height={338} 
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <p className="text-antique-white mb-4">{selectedProject.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects

