"use client"

import { useEffect } from "react"
import confetti from "canvas-confetti"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Share2 } from "lucide-react"

export default function SuccessPage() {
  useEffect(() => {
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 p-8"
      >
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Welcome to the Waitlist! 🎉</h1>
          <p className="text-muted-foreground text-lg">You&apos;re now in line for early access to Docment.</p>
        </div>
        <div className="space-y-4">
          <p className="text-lg">Your referral code:</p>
          <div className="bg-muted p-4 rounded-lg font-mono text-xl">
            DOCMENT{Math.random().toString(36).substring(2, 8).toUpperCase()}
          </div>
          <Button variant="outline" className="gap-2">
            <Share2 className="size-4" />
            Share with Friends
          </Button>
        </div>
        <div className="pt-8">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

