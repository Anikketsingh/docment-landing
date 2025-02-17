"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, ShoppingBag, AlertTriangle, Shield, GraduationCap, Clock, CheckCircle } from "lucide-react"

interface StoryProps {
  children: React.ReactNode
  icon: React.ReactNode
}

function Story({ children, icon }: StoryProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: "-30% 0px -30% 0px", // Adjusted margin for better scrolling experience
    once: false,
  })

  return (
    <motion.div
      ref={ref}
      className={`flex items-start gap-6 p-8 rounded-xl transition-all duration-500 ${
        isInView 
          ? "bg-primary/5 shadow-lg scale-100 opacity-100" 
          : "bg-transparent scale-95 opacity-50"
      }`}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mt-1 shrink-0"
      >
        <div className="p-3 rounded-full bg-primary/10 text-primary">{icon}</div>
      </motion.div>
      <div
        className={`transition-all duration-500 ${
          isInView 
            ? "text-foreground font-medium" 
            : "text-muted-foreground"
        }`}
      >
        {children}
      </div>
    </motion.div>
  )
}

export function ScrollHighlight() {
  return (
    <section className="py-32 bg-muted/50">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
            Real Stories, Real Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Docment is transforming document management
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Story icon={<FileText className="w-6 h-6" />}>
            Documinter is a platform which enables its users to document their day-to-day transactions.
          </Story>

          <Story icon={<ShoppingBag className="w-6 h-6" />}>
            Eg. Documenting an Affidavit for college, Documenting sale of your old furniture, Documenting Peer to Peer
            transactions.
          </Story>

          <Story icon={<AlertTriangle className="w-6 h-6" />}>
            Ajay from Our college bought a phone via OLX and 20 days later police called him and told that the phone is
            a stolen property. The person from whom he bought that phone left no trace.
          </Story>

          <Story icon={<Shield className="w-6 h-6" />}>
            If he would have documented that transaction, he would not be facing this trouble. #Documinter adds a layer
            of security and reliability in peer-to-peer transactions (P2P transactions).
          </Story>

          <Story icon={<GraduationCap className="w-6 h-6" />}>
            Gauri recently enrolled in JNU needs to submit an affidavit in her department and her hostel, she has to
            take a 30-minute ride to a nearest notary who took more than an hour to make the same and also made an error
            in the typing.
          </Story>

          <Story icon={<Clock className="w-6 h-6" />}>
            If she would have used Documinter to do the same, she would have saved those precious hours and chances of
            any mistakes would have been minimal.
          </Story>

          <Story icon={<CheckCircle className="w-6 h-6" />}>#Documinter means convenience and reliability.</Story>
        </div>
      </div>
    </section>
  )
}

