"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, Shield, AlertTriangle, Clock, CheckCircle, BanknoteIcon, XCircle, Sparkles } from "lucide-react"

interface StoryProps {
  children: React.ReactNode
  icon: React.ReactNode
  variant?: "warning" | "success" | "info" | "danger" | "primary"
}

const variantStyles = {
  warning: "bg-amber-500/10 text-amber-600 border-amber-200/30",
  success: "bg-emerald-500/10 text-emerald-600 border-emerald-200/30",
  info: "bg-blue-500/10 text-blue-600 border-blue-200/30",
  danger: "bg-red-500/10 text-red-600 border-red-200/30",
  primary: "bg-primary/10 text-primary border-primary/20",
}

function Story({ children, icon, variant = "primary" }: StoryProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    margin: "-25% 0px -25% 0px",
    once: false,
  })

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-start gap-6 p-8 rounded-xl transition-all duration-500 border overflow-hidden ${
        isInView 
          ? `bg-gradient-to-br ${variantStyles[variant]} shadow-lg scale-100 opacity-100` 
          : "bg-transparent border-transparent scale-95 opacity-50"
      }`}
    >
      {/* Background pattern element */}
      <div 
        className={`absolute pointer-events-none inset-0 opacity-[0.03] ${isInView ? "opacity-[0.03]" : "opacity-0"} transition-opacity duration-500`}
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "15px 15px",
        }}
      />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-1 shrink-0"
      >
        <div className={`p-3.5 rounded-full bg-background shadow-sm text-primary border border-primary/20`}>
          {icon}
        </div>
      </motion.div>
      <div
        className={`transition-all duration-500 relative z-10 ${
          isInView 
            ? "text-foreground" 
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
    <section id="get-real" className="py-32 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />
      
      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-3 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Real Stories
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Experiences That Matter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how docment.ai prevents costly mistakes and protects your interests
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Story icon={<AlertTriangle className="w-5 h-5" />} variant="warning">
            <h3 className="font-bold text-lg mb-2">A Costly Mistake: The Risk of Undocumented Transactions</h3>
            <p className="text-base leading-relaxed">
              Ajay from our college purchased a phone via OLX, only to receive a police call 20 days later—the phone was reported stolen. The seller? Vanished without a trace.
            </p>
          </Story>

          <Story icon={<Shield className="w-5 h-5" />} variant="info">
            <p className="text-base leading-relaxed font-medium">
              Don't let this happen to you. Protect your transactions with docment.ai—verify parties, document deals, and generate legally binding contracts in minutes. Stay secure. Stay documented.
            </p>
          </Story>

          <Story icon={<FileText className="w-5 h-5" />} variant="primary">
            <h3 className="font-bold text-lg mb-2">Skip the Hassle. Get Legally Valid Documents in Minutes</h3>
            <p className="text-base leading-relaxed">
              Gauri, a newly enrolled student at Miranda House, needed to submit an affidavit for her department and hostel. She took a 30-minute ride to the nearest notary, only to wait over an hour—only to find an error in the typing.
            </p>
          </Story>

          <Story icon={<Clock className="w-5 h-5" />} variant="info">
            <p className="text-base leading-relaxed font-medium">
              With docment.ai, she could have generated a legally valid affidavit instantly, error-free and hassle-free. Save time, avoid errors, and get your documents done in minutes!
            </p>
          </Story>

          <Story icon={<BanknoteIcon className="w-5 h-5" />} variant="warning">
            <h3 className="font-bold text-lg mb-2">Lend Smart. Stay Protected.</h3>
            <p className="text-base leading-relaxed">
              Aniket lent ₹1 Lakh to his colleague Sumit in an emergency, backed by a cheque for repayment. When the time came, the cheque was dishonored. In court, Sumit denied the debt, spinning a false narrative to escape liability.
            </p>
          </Story>

          <Story icon={<XCircle className="w-5 h-5" />} variant="danger">
            <h3 className="font-bold text-lg mb-2">The Reality:</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-base">
              <li>8–10 court hearings just to prove the debt</li>
              <li>₹40,000+ in litigation costs</li>
              <li>Minimal chance of recovery</li>
            </ul>
          </Story>

          <Story icon={<CheckCircle className="w-5 h-5" />} variant="success">
            <h3 className="font-bold text-lg mb-2">The Solution – docment.ai</h3>
            <p className="text-base leading-relaxed mb-2">
              With docment.ai, Aniket could have generated a legally binding contract in minutes, detailing:
            </p>
            <ul className="space-y-1 text-base">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                Purpose of transfer – Debt
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                Mode of transfer – UPI/NEFT/RTGS
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">✓</span>
                Mode of recovery – Cheque (with a photo attached)
              </li>
            </ul>
          </Story>

          <Story icon={<Sparkles className="w-5 h-5" />} variant="primary">
            <h3 className="font-bold text-lg mb-2">The Impact:</h3>
            <ol className="space-y-3 mt-2 counter-reset text-base">
              <li className="relative pl-8">
                <span className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-xs font-bold">1</span>
                <span className="font-medium">Prevents disputes</span> – Clear documentation deters defaults
              </li>
              <li className="relative pl-8">
                <span className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-xs font-bold">2</span>
                <span className="font-medium">Speeds up legal claims</span> – Transaction particulars are proven in the first hearing
              </li>
              <li className="relative pl-8">
                <span className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-xs font-bold">3</span>
                <span className="font-medium">Cuts litigation costs by 70%</span> – Faster resolution, lower expenses
              </li>
            </ol>
          </Story>
        </div>
      </div>
    </section>
  )
}