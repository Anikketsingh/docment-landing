import { z } from "zod"

export const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  referral_code: z.string().optional().nullable(),
  interests: z.array(z.string()).optional().default([]),
})

export type WaitlistFormData = z.infer<typeof waitlistSchema>

