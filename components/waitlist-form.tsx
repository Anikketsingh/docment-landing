"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { joinWaitlist } from "@/app/actions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const interests = [
  { id: "contracts", label: "Contract Management" },
  { id: "automation", label: "Process Automation" },
  { id: "legal", label: "Legal Tech" },
  { id: "ai", label: "Artificial Intelligence" },
]

export function WaitlistForm() {
  const [state, formAction] = useActionState(joinWaitlist, null)
  const formRef = React.useRef<HTMLFormElement>(null)
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    if (state?.success) {
      router.push("/waitlist/success")
    } else if (state?.error) {
      toast.error(state.error)
      setLoading(false)
    }
  }, [state, router])

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true)
    // The form action will handle the submission
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardHeader>
          <CardTitle>Join the Waitlist</CardTitle>
          <CardDescription>Fill out the form below to secure your spot in line.</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Enter your name" required disabled={loading} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="Enter your email" required disabled={loading} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="referralCode">Referral Code (Optional)</Label>
              <Input id="referralCode" name="referralCode" placeholder="Enter referral code" disabled={loading} />
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
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

