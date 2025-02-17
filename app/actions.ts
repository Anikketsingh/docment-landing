"use server"

import { z } from "zod"
import { supabase } from "@/lib/supabase"
import { waitlistSchema } from "@/lib/schema"
import { revalidatePath } from "next/cache"

export async function joinWaitlist(formData: FormData) {
  try {
    // Extract form data
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      referral_code: formData.get("referralCode"),
      interests: formData.getAll("interests"),
    }

    // Validate the data
    const validatedData = waitlistSchema.parse(rawData)

    // Check for existing email
    const { data: existingUser, error: checkError } = await supabase
      .from("waitlist")
      .select("id")
      .eq("email", validatedData.email)
      .maybeSingle()

    if (checkError) {
      console.error("Error checking existing user:", checkError)
      return { error: "Failed to check existing user. Please try again." }
    }

    if (existingUser) {
      return { error: "This email is already on the waitlist" }
    }

    // Generate unique referral code
    const referralCode = `DOCMENT${Math.random().toString(36).substring(2, 8).toUpperCase()}`

    // Insert new waitlist entry
    const { error: insertError } = await supabase.from("waitlist").insert([
      {
        name: validatedData.name,
        email: validatedData.email,
        referral_code: referralCode,
        interests: validatedData.interests,
        status: "pending",
      },
    ])

    if (insertError) {
      console.error("Error inserting waitlist entry:", insertError)
      if (insertError.code === "23505") {
        return { error: "This email is already on the waitlist" }
      }
      return { error: "Failed to join waitlist. Please try again." }
    }

    revalidatePath("/waitlist")
    return { success: true, referralCode }
  } catch (error) {
    console.error("Waitlist error:", error)
    if (error instanceof z.ZodError) {
      return { error: error.errors[0].message }
    }
    return { error: "Something went wrong. Please try again." }
  }
}

