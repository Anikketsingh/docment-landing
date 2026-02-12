"use client"

import { motion } from "framer-motion"
import { FileText, UserCheck, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: UserCheck,
    title: "Verify Identity with e-KYC",
    description: "Complete the e-KYC process for secure verification to ensure legal compliance and document authenticity.",
    number: "01",
  },
  {
    icon: FileText,
    title: "Enter Transaction Details",
    description: "Input key details of your transaction including parties involved, terms, conditions, and any specific requirements.",
    number: "02",
  },
  {
    icon: CheckCircle,
    title: "Get Your Contract Minted",
    description: "docment AI instantly generates a legally valid contract or agreement, ready to be e-signed and executed.",
    number: "03",
  },
]

function DocumentAnimation() {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle glow */}
        <motion.circle
          cx="200"
          cy="200"
          r="120"
          fill="rgba(99, 102, 241, 0.1)"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Document stack - appearing one by one */}
        {[0, 1, 2].map((index) => (
          <motion.g key={index}>
            {/* Document shadow */}
            <motion.ellipse
              cx={200 + index * 8}
              cy={280 + index * 2}
              rx={60 + index * 3}
              ry={8}
              fill="rgba(0, 0, 0, 0.1)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.4,
                duration: 0.5,
              }}
            />
            {/* Document */}
            <motion.rect
              x={140 + index * 8}
              y={180 - index * 15}
              width={120}
              height={160}
              rx={4}
              fill="white"
              stroke="rgba(99, 102, 241, 0.3)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 50, rotate: -5 + index * 2 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: -5 + index * 2,
              }}
              transition={{
                delay: index * 0.4,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
            />
            {/* Document lines */}
            {[0, 1, 2, 3, 4].map((line) => (
              <motion.line
                key={line}
                x1={160 + index * 8}
                y1={200 + line * 20 - index * 15}
                x2={240 + index * 8}
                y2={200 + line * 20 - index * 15}
                stroke="rgba(99, 102, 241, 0.2)"
                strokeWidth="2"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{
                  delay: index * 0.4 + line * 0.1,
                  duration: 0.3,
                }}
              />
            ))}
            {/* Checkmark on top document */}
            {index === 2 && (
              <motion.g>
                <motion.circle
                  cx={200 + index * 8}
                  cy={200 - index * 15}
                  r="20"
                  fill="rgba(34, 197, 94, 0.2)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: index * 0.4 + 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                />
                <motion.path
                  d="M 190 200 L 198 208 L 210 192"
                  stroke="rgb(34, 197, 94)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: index * 0.4 + 0.7,
                    duration: 0.4,
                  }}
                />
              </motion.g>
            )}
          </motion.g>
        ))}

        {/* Sparkles/Particles around documents */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const radius = 100
          const x = 200 + Math.cos(angle) * radius
          const y = 200 + Math.sin(angle) * radius
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="3"
              fill="rgba(99, 102, 241, 0.6)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                delay: 1.2 + i * 0.1,
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          )
        })}

        {/* "Instant" text animation */}
        <motion.text
          x="200"
          y="320"
          textAnchor="middle"
          fontSize="18"
          fontWeight="600"
          fill="rgba(99, 102, 241, 0.8)"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Generated Instantly
        </motion.text>
      </svg>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-white/40 py-24 md:py-32">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Simple Process
          </span>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            How does docment.ai work?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Three simple steps to create and execute legally binding contracts
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-xs font-bold text-primary">{step.number}</span>
                    <h3 className="text-xl font-semibold text-gray-900 md:text-2xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Animated SVG */}
          <div className="relative hidden lg:block">
            <DocumentAnimation />
          </div>
        </div>
      </div>
    </section>
  )
}
