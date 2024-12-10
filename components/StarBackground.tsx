import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

export default function StarBackground() {
  const [error, setError] = useState(false)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) {
      setError(true)
    }
  }, [])

  if (error) {
    return <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-purple-900" />
  }

  return (
    <Canvas className="absolute inset-0">
      <Stars radius={300} depth={60} count={5000} factor={7} saturation={0} fade />
    </Canvas>
  )
}

