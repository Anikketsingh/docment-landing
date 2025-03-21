 "use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { WaitlistModal } from "./waitlist-modal"
import { UnderConstructionModal } from "./under-construction-modal"
import { ParticleEffect } from "./particle-effect"
import { ChevronDown, CheckCircle } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [showConstruction, setShowConstruction] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { 
        repeat: Infinity, 
        duration: 1.5,
        ease: "easeInOut", 
      }
    })
  }, [controls])

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <section className="relative min-h-screen pt-20 my-5 pb-16 overflow-hidden">
      <ParticleEffect />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-primary/5 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Text content */}
          <div className="flex flex-col space-y-8 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex px-4 py-2.5 my-6 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-6">
                AI-Powered Contract Automation
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Mint AI-powered
                <br />
                <span className="text-foreground">contracts in</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"> 2 minutes</span>
              </h1>
              
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                for daily transactions
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                seamlessly verify, document, and secure your transactions with AI-powered precision
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="h-12 px-6 text-base font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity rounded-lg shadow-lg shadow-primary/20"
                onClick={() => setShowConstruction(true)}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-6 text-base font-medium border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors rounded-lg"
                onClick={() => setShowWaitlist(true)}
              >
                Schedule Demo
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <p className="text-sm text-muted-foreground mb-4">Trusted by Users for:</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">100% legally binding documents</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">IT Act compliant verification</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Secure transaction </span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">AI-powered legal assistance</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right column: Product image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-slate-200/80 via-slate-200/50 to-slate-200/30 dark:from-muted/80 dark:via-muted/50 dark:to-muted/30 rounded-lg overflow-hidden border border-primary/20 shadow-xl">
              {/* Replace this with your actual product screenshot */}
              <div className="absolute inset-0 bg-gradient-to-br from-background to-transparent opacity-70" />
              <div className="absolute inset-0 p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="h-6 w-32 bg-slate-300 dark:bg-muted/50 rounded-md" />
                </div>

                <div className="flex-1 grid grid-cols-12 gap-4">
                  <div className="col-span-3 space-y-3">
                    <div className="h-8 w-full bg-primary/20 rounded" />
                    <div className="h-6 w-full bg-slate-300 dark:bg-muted/60 rounded" />
                    <div className="h-6 w-full bg-slate-300 dark:bg-muted/60 rounded" />
                    <div className="h-6 w-full bg-slate-300 dark:bg-muted/60 rounded" />
                    <div className="h-6 w-full bg-slate-300 dark:bg-muted/60 rounded" />
                  </div>
                  <div className="col-span-9 bg-white/90 dark:bg-background/70 rounded-lg border border-slate-300 dark:border-muted p-4">
                    <div className="h-7 w-36 bg-primary/10 rounded mb-4" />
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-slate-200 dark:bg-muted/30 rounded" />
                      <div className="h-4 w-full bg-slate-200 dark:bg-muted/30 rounded" />
                      <div className="h-4 w-3/4 bg-slate-200 dark:bg-muted/30 rounded" />
                    </div>
                    <div className="h-10 w-full bg-slate-200 dark:bg-muted/20 mt-4 rounded" />
                    <div className="mt-6 flex justify-end">
                      <div className="h-9 w-24 bg-primary/30 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -right-12 -bottom-8 h-20 w-32 bg-white dark:bg-background rounded-lg border border-slate-300 dark:border-muted/30 shadow-lg p-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="h-3 w-16 bg-primary/30 rounded mb-2" />
              <div className="h-2 w-full bg-slate-300 dark:bg-muted/60 rounded mb-1.5" />
              <div className="h-2 w-3/4 bg-slate-300 dark:bg-muted/60 rounded" />
            </motion.div>

            <motion.div
              className="absolute -left-10 -top-10 h-24 w-28 bg-white dark:bg-background rounded-lg border border-slate-300 dark:border-muted/30 shadow-lg p-3"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex justify-center mb-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-lg">
                  🔒
                </div>
              </div>
              <div className="h-2 w-full bg-slate-300 dark:bg-muted/60 rounded mb-1.5" />
              <div className="h-2 w-full bg-slate-300 dark:bg-muted/60 rounded" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hidden sm:block"
        animate={controls}
        onClick={scrollToFeatures}
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground opacity-70" />
      </motion.div>
      
      <WaitlistModal open={showWaitlist} onOpenChange={setShowWaitlist} />
      <UnderConstructionModal 
        open={showConstruction}
        onOpenChange={setShowConstruction}
        onOpenWaitlist={() => setShowWaitlist(true)}
      />
    </section>
  )
}



