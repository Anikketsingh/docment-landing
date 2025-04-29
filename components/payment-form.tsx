"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { motion } from "framer-motion"

function CheckoutForm({ amount }: { amount: number }) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Mock payment processing
      setTimeout(() => {
        toast.success("Payment successful!")
        setLoading(false)
      }, 2000)
    } catch (error) {
      toast.error("Payment failed")
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto p-6 rounded-xl bg-background/80 backdrop-blur-sm border shadow-lg"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-2">Complete Your Payment</h3>
          <div className="text-lg font-medium text-primary">
            Amount: ${amount.toFixed(2)}
          </div>
        </div>

        <div className="space-y-4">
          {/* Payment details section */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              Secure payment powered by Stripe
            </p>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 text-lg font-medium transition-all duration-200
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
              hover:from-blue-600 hover:via-purple-600 hover:to-pink-600
              disabled:opacity-70"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin" />
                Processing...
              </div>
            ) : (
              `Pay $${amount.toFixed(2)}`
            )}
          </Button>
        </div>
      </form>
    </motion.div>
  )
}

export function PaymentForm({ amount }: { amount: number }) {
  return <CheckoutForm amount={amount} />
}

