"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function AnimatedDots() {
  const [dots, setDots] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Generate dots in a grid pattern
    const dotArray: Array<{ id: number; x: number; y: number; delay: number }> = []
    const spacing = 28
    const rows = Math.ceil((typeof window !== 'undefined' ? window.innerHeight : 800) / spacing) + 4
    const cols = Math.ceil((typeof window !== 'undefined' ? window.innerWidth : 1200) / spacing) + 4

    let id = 0
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dotArray.push({
          id: id++,
          x: col * spacing,
          y: row * spacing,
          delay: Math.random() * 3, // Random delay for rhythmic pattern
        })
      }
    }
    setDots(dotArray)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid of animated dots */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            width: '1px',
            height: '1px',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [1, 2, 1],
            boxShadow: [
              '0 0 0px rgba(255, 255, 255, 0)',
              '0 0 6px 3px rgba(255, 255, 255, 0.8)',
              '0 0 0px rgba(255, 255, 255, 0)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}

      {/* Subtle floating glow orbs for extra visual interest */}
      <motion.div
        className="absolute w-[300px] h-[300px] bg-blue-200/20 rounded-full blur-[100px]"
        style={{
          top: '20%',
          left: '10%',
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[250px] h-[250px] bg-blue-300/15 rounded-full blur-[100px]"
        style={{
          top: '60%',
          right: '15%',
        }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
