"use client"

import { motion } from "framer-motion"
import { Brain, Shield, FileCheck } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Contract Generation",
    description: "Generate legally compliant contracts in minutes using advanced artificial intelligence.",
  },
  {
    icon: Shield,
    title: "Seamless e-KYC Integration",
    description: "Verify identities securely and efficiently with our integrated e-KYC system.",
  },
  {
    icon: FileCheck,
    title: "Secure & Legally Binding",
    description: "Execute contracts with confidence using our secure and legally compliant platform.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage contracts efficiently
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/5 rounded-2xl -z-10 
                transform transition-transform group-hover:scale-105" />
              <div className="relative p-8 rounded-2xl border bg-background/60 backdrop-blur-sm 
                hover:bg-background/90 transition-all duration-300 h-full flex flex-col">
                <feature.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

