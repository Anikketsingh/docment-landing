"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Loader2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { joinWaitlist } from "@/app/actions"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { Checkbox } from "@/components/ui/checkbox"

interface WaitlistModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const INTERESTS = [
  { id: "contracts", label: "Legal Contracts", icon: "⚖️" },
  { id: "affidavits", label: "Affidavits", icon: "📜" },
  { id: "agreements", label: "Rental Agreements", icon: "🏠" },
  { id: "notices", label: "Legal Notices", icon: "📋" },
]

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    try {
      const form = event.currentTarget
      const formData = new FormData(form)
      
      // Get form values
      const name = formData.get('name')?.toString()
      const email = formData.get('email')?.toString()
      
      // Client-side validation
      if (!name || !email) {
        toast.error("Please fill in all required fields")
        return
      }

      const result = await joinWaitlist(null, formData)

      if (result.success) {
        toast.success("Successfully joined the waitlist!")
        onOpenChange(false)
        router.push("/waitlist/success")
      } else {
        toast.error(result.error || "Something went wrong")
      }
    } catch (error) {
      console.error('ERROR:', error)
      toast.error("Failed to join waitlist")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-gradient-to-b from-background to-background/80 backdrop-blur-xl border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-purple-500/5 to-background/5 pointer-events-none" />
        
        <DialogHeader className="px-6 pt-6 pb-4 space-y-3 text-center relative">
          <div className="mx-auto w-fit bg-primary/10 rounded-full p-2.5 mb-2">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
            Join the Waitlist
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground max-w-sm mx-auto">
            Be among the first to experience AI-powered legal document automation
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={onSubmit} className="px-6 pb-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name
            </Label>
            <Input 
              id="name" 
              name="name" 
              required 
              className="bg-muted/50 border-primary/10 focus:border-primary/30 transition-colors"
              placeholder="Enter your name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address
            </Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="bg-muted/50 border-primary/10 focus:border-primary/30 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium">
              What interests you most?
            </Label>
            <div className="grid grid-cols-2 gap-3">
              {INTERESTS.map((interest) => (
                <div 
                  key={interest.id} 
                  className="relative flex items-center space-x-2 rounded-lg border border-primary/10 bg-muted/30 p-3 hover:bg-muted/50 transition-colors"
                >
                  <Checkbox 
                    id={interest.id} 
                    name="interests" 
                    value={interest.id}
                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <Label htmlFor={interest.id} className="flex items-center cursor-pointer">
                    <span className="mr-2">{interest.icon}</span>
                    <span className="text-sm">{interest.label}</span>
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="referralCode" className="text-sm font-medium">
              Referral Code <span className="text-muted-foreground">(Optional)</span>
            </Label>
            <Input 
              id="referralCode" 
              name="referralCode"
              className="bg-muted/50 border-primary/10 focus:border-primary/30 transition-colors"
              placeholder="Enter code if you have one"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-gradient-to-r from-primary via-purple-500 to-blue-500 hover:opacity-90 transition-opacity text-white font-medium rounded-lg"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Securing Your Spot...
              </>
            ) : (
              "Join the Waitlist"
            )}
          </Button>
          
          <p className="text-center text-sm text-muted-foreground pt-2">
            By joining, you agree to receive updates about our launch
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}

