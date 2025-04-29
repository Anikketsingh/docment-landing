"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Coffee } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { PaymentForm } from "./payment-form"
import { createPaymentIntent } from "@/app/actions/payment"

const GOAL_AMOUNT = 10000
const CURRENT_AMOUNT = 3500

const donationOptions = [
  { amount: 5, label: "Buy us a coffee" },
  { amount: 10, label: "Buy us lunch" },
  { amount: 20, label: "Buy us dinner" },
]

export function DonationSection() {
  const [customAmount, setCustomAmount] = useState("")
  const [showPayment, setShowPayment] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState(0)
  const [clientSecret, setClientSecret] = useState("")
  const progress = (CURRENT_AMOUNT / GOAL_AMOUNT) * 100

  const handleDonation = async (amount: number) => {
    const result = await createPaymentIntent(amount)
    if (result.clientSecret) {
      setClientSecret(result.clientSecret)
      setSelectedAmount(amount)
      setShowPayment(true)
    }
  }

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-pink-500/10 
        backdrop-blur-3xl" />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl 
              bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Support the Future of AI Contracts
            </h2>
            <p className="text-xl text-muted-foreground">
              Help us build the next generation of legal technology
            </p>
          </div>

          <div className="space-y-8 p-8 rounded-2xl bg-background/40 backdrop-blur-sm border 
            border-primary/10 shadow-xl">
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-medium">
                <span>${CURRENT_AMOUNT.toLocaleString()}</span>
                <span>${GOAL_AMOUNT.toLocaleString()}</span>
              </div>
              <Progress
                value={progress}
                className="h-3 bg-background/50"
                indicatorClassName="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              />
              <p className="text-sm text-muted-foreground text-center">
                {progress.toFixed(1)}% towards our goal
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {donationOptions.map((option) => (
                <motion.div
                  key={option.amount}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="w-full py-8 bg-background/60 backdrop-blur-sm border-primary/20 
                      hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
                    onClick={() => handleDonation(option.amount)}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <Coffee className="h-6 w-6 text-primary" />
                      <span className="text-lg font-semibold">${option.amount}</span>
                      <span className="text-sm text-muted-foreground">{option.label}</span>
                    </div>
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="bg-background/60 backdrop-blur-sm border-primary/20 h-12 text-lg"
              />
              <Button
                variant="outline"
                className="bg-background/60 backdrop-blur-sm border-primary/20 hover:bg-primary/5 
                  hover:border-primary/30 h-12 px-8 text-lg font-medium transition-all duration-300"
                onClick={() => handleDonation(Number(customAmount))}
                disabled={!customAmount || Number(customAmount) <= 0}
              >
                Donate
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <Dialog open={showPayment} onOpenChange={setShowPayment}>
        <DialogContent className="sm:max-w-[425px] bg-background/95 backdrop-blur-2xl 
          border-primary/20 shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">Complete your donation</DialogTitle>
          </DialogHeader>
          {clientSecret && <PaymentForm clientSecret={clientSecret} amount={selectedAmount} />}
        </DialogContent>
      </Dialog>
    </section>
  )
}

