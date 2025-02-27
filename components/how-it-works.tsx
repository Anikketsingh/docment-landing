"use client"

import { motion } from "framer-motion"
import { FileText, UserCheck, CheckCircle, ArrowRight } from "lucide-react"

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

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />
      <div className="absolute -left-64 top-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-64 bottom-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-3 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Simple Process
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            How does docment.ai work?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to create and execute legally binding contracts
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-28 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />
          
          <div className="grid gap-12 md:gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center space-y-6 p-6 rounded-xl hover:bg-muted/50 transition-colors">
                  {/* Step number */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs font-bold text-primary/70 hidden md:block">
                    {step.number}
                  </div>
                  
                  {/* Icon with glow effect */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />
                    <motion.div 
                      className="relative size-20 rounded-full bg-gradient-to-br from-background to-primary/10 border border-primary/20 flex items-center justify-center shadow-lg"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 30px rgba(124, 58, 237, 0.3)" 
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <step.icon className="size-8 text-primary" />
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Arrow indicator for non-last items */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-28 -right-6 text-primary/60 hidden md:block">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile step numbers */}
          <div className="md:hidden mt-8">
            {/* <div className="flex flex-col items-center space-y-4"> */}
              {/* {steps.map((step, index) => (
                <div key={`mobile-${index}`} className="flex flex-col items-center">
                 
                </div>
              ))} */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}