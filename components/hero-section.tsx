"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { WaitlistModal } from "./waitlist-modal"
import { UnderConstructionModal } from "./under-construction-modal"
import { Card } from "@/components/ui/card"
import { ArrowRight, Mic, Users } from "lucide-react"
import { AnimatedDots } from "./animated-dots"

export function HeroSection() {
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [showConstruction, setShowConstruction] = useState(false)

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Exact Bujo radial gradient: light sky blue at top/center to almost white at edges */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at top center, #e8f2f8 0%, #e0f0f8 30%, #f5f7fa 60%, #fafbfc 100%)`,
        }}
      />
      
      {/* Animated dots that illuminate in a rhythmic cycle */}
      <AnimatedDots />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        {/* Centered hero content */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Small badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/60 px-4 py-1.5 text-sm font-medium text-gray-700 backdrop-blur-sm">
            AI-powered contract automation
          </div>

          {/* Main headline */}
          <h1 className="mb-6 text-5xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            <span className="block">AI for</span>
            <span className="block font-bold">Enterprise</span>
            <span className="block font-bold">Contract Automation</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">
            Deploy conversational AI that reduces legal overhead, cuts contract cycle times, and improves compliance across phone, chat, and document workflows.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="mb-16 h-14 rounded-full bg-gray-900 px-8 text-base font-medium text-white shadow-lg transition-shadow hover:bg-gray-800 hover:shadow-xl"
            onClick={() => setShowConstruction(true)}
          >
            Book a demo
          </Button>
        </div>

        {/* Two feature cards */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <Card className="group border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
              <Mic className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              AI Agents for your Contracts
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Automated contract generation that understands your templates, policies, and legal requirements—handling everything from NDAs to complex MSAs.
            </p>
            <a
              href="#features"
              className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
            >
              Learn more
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Card>

          <Card className="group border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
              <Users className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              AI Copilot for your Legal Team
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Provide real-time assistance to your existing team for faster and accurate contract review and compliance checks.
            </p>
            <a
              href="#copilot"
              className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
            >
              Learn more
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Card>
        </div>
      </div>

      <WaitlistModal open={showWaitlist} onOpenChange={setShowWaitlist} />
      <UnderConstructionModal
        open={showConstruction}
        onOpenChange={setShowConstruction}
        onOpenWaitlist={() => setShowWaitlist(true)}
      />
    </section>
  )
}
