"use client"

import { motion } from "framer-motion"
import { FileText, UserCheck, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Enter Details",
    description: "Provide basic information about your contract requirements.",
  },
  {
    icon: UserCheck,
    title: "Verify Identity",
    description: "Complete the e-KYC process for secure verification.",
  },
  {
    icon: CheckCircle,
    title: "Execute Contract",
    description: "Sign and execute your contract instantly.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-32 bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to create and execute contracts
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-3 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
                  <div className="relative size-20 rounded-full bg-primary/10 flex items-center justify-center 
                    transform transition-transform hover:scale-110 duration-300">
                    <step.icon className="size-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-full w-full h-px bg-border 
                  -translate-y-1/2 -translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

