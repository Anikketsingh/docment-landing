"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { joinWaitlist } from "@/app/actions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const interests = [
  { id: "contracts", label: "Contract Management" },
  { id: "automation", label: "Process Automation" },
  { id: "legal", label: "Legal Tech" },
  { id: "ai", label: "Artificial Intelligence" },
]

export function WaitlistModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData(event.currentTarget)
      const result = await joinWaitlist(formData)

      if (result.success) {
        toast.success("Successfully joined the waitlist!")
        onOpenChange(false)
        router.push("/waitlist/success")
      } else {
        toast.error(result.error || "Something went wrong")
      }
    } catch (error) {
      toast.error("Failed to join waitlist")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-background/80 backdrop-blur-xl border-primary/20">
        <DialogHeader>
          <DialogTitle>Join the Waitlist</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              disabled={loading}
              className="bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              disabled={loading}
              className="bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="referralCode">Referral Code (Optional)</Label>
            <Input
              id="referralCode"
              name="referralCode"
              placeholder="Enter referral code"
              disabled={loading}
              className="bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <Label>Interests</Label>
            <div className="grid gap-4 sm:grid-cols-2">
              {interests.map((interest) => (
                <div key={interest.id} className="flex items-center space-x-2">
                  <Checkbox id={interest.id} name="interests" value={interest.id} disabled={loading} />
                  <Label htmlFor={interest.id}>{interest.label}</Label>
                </div>
              ))}
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
            disabled={loading}
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

