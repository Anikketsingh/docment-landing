import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables")
}

export const supabase = createClient(supabaseUrl, supabaseKey)

export type WaitlistEntry = {
  id: string
  name: string
  email: string
  referral_code: string | null
  interests: string[]
  status: "pending" | "approved" | "rejected"
  joined_at: string
}

