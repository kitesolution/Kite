'use client'

import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

export default function Background() {
  const [isWebGLAvailable, setIsWebGLAvailable] = useState(false)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    setIsWebGLAvailable(!!gl)
  }, [])

  if (!isWebGLAvailable) {
    return (
      <div className="fixed inset-0 bg-gradient-to-b from-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('/stars.png')] opacity-50"></div>
      </div>
    )
  }

  return (
    <Canvas className="fixed inset-0">
      <Stars radius={300} depth={60} count={5000} factor={7} saturation={0} fade />
    </Canvas>
  )
}

