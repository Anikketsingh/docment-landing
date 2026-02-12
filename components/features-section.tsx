"use client"

import { motion } from "framer-motion"
import { Brain, Shield, FileCheck, Zap, Clock, Globe } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Contract Generation",
    description: "Generate legally compliant contracts in minutes using advanced artificial intelligence that adapts to your specific transaction needs.",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    icon: Shield,
    title: "Seamless e-KYC Integration",
    description: "Verify identities securely and efficiently with our integrated e-KYC system backed by government databases for maximum security.",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    icon: Zap,
    title: "Lightning Fast Processing",
    description: "Create contracts in minutes instead of days with our streamlined process that eliminates unnecessary delays and paperwork.",
    color: "from-amber-500/20 to-amber-600/20"
  },
  {
    icon: FileCheck,
    title: "Secure & Legally Binding",
    description: "Execute contracts with confidence using our secure and legally compliant platform that adheres to all relevant Indian laws.",
    color: "from-emerald-500/20 to-emerald-600/20"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access our platform anytime, anywhere to create and execute contracts on your schedule without waiting for business hours.",
    color: "from-pink-500/20 to-pink-600/20"
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Create contracts in multiple languages to ensure all parties fully understand the terms and conditions of the agreement.",
    color: "from-cyan-500/20 to-cyan-600/20"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-white/40 py-24 md:py-28">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-3 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Powerful Capabilities
          </div>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Features That Empower You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ensure airtight transaction records with our AI-driven platform, verifying party details, 
            streamlining contract generation, and safeguarding every step with e-KYC authentication—all
            built on the robust framework of Indian law.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full relative group">
                {/* Background gradient that scales on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-80 
                  group-hover:opacity-100 transition-all duration-500 -z-10 
                  transform group-hover:scale-[1.03] shadow-xl`} />
                
                <div className="h-full relative p-8 rounded-2xl border border-primary/10 bg-background/80 backdrop-blur-md 
                  hover:bg-background/90 transition-all duration-300 flex flex-col">
                  
                  {/* Icon with animated background */}
                  <div className="relative mb-6 inline-flex">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl 
                      opacity-70 group-hover:opacity-90 transition-opacity" />
                    <div className="relative size-16 rounded-full bg-gradient-to-br from-background/80 to-primary/10 
                      border border-primary/20 flex items-center justify-center shadow-lg group-hover:shadow-primary/20
                      transition-all duration-300">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                  
                  {/* Learn more link */}
                  <div className="mt-6 pt-4 border-t border-primary/10 text-sm font-medium">
                    <a href="#" className="text-primary flex items-center opacity-70 hover:opacity-100 transition-opacity">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}