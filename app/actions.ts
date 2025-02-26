'use server'

import clientPromise from "@/lib/mongodb"

export async function joinWaitlist(prevState: any, formData: FormData) {
  try {
    console.log('1. Server action started')
    
    // Extract form data (works with both direct FormData submission and our object approach)
    const name = formData.get('name')?.toString()?.trim()
    const email = formData.get('email')?.toString()?.trim()?.toLowerCase()
    const referralCode = formData.get('referralCode')?.toString()?.trim() || null
    const interests = formData.getAll('interests').map(String)
    
    console.log('2. Extracted form data:', { name, email, referralCode, interests })
    
    // Validate required fields
    if (!name || !email) {
      console.log('3A. Required fields missing')
      return { success: false, error: "Name and email are required" }
    }

    console.log('3. Connecting to MongoDB...')
    const client = await clientPromise
    
    const db = client.db("legalchatbot") // <-- REPLACE WITH YOUR ACTUAL DB NAME
    console.log('4. Using database:', db.databaseName)

    // Create the document
    const waitlistEntry = {
      name,
      email,
      referralCode,
      interests,
      createdAt: new Date()
    }
    console.log('5. Document to insert:', waitlistEntry)

    // Check for duplicate email
    console.log('6. Checking for duplicates...')
    const existingUser = await db.collection("waitlist").findOne({ email })
    
    if (existingUser) {
      console.log('7A. Duplicate email found:', email)
      return { 
        success: false, 
        error: "This email is already registered. We'll notify you when we launch!" 
      }
    }

    // Insert document
    console.log('7. Inserting document...')
    const result = await db.collection("waitlist").insertOne(waitlistEntry)
    
    if (!result.acknowledged) {
      console.log('8A. Insert failed')
      throw new Error("Failed to insert data")
    }

    console.log('8. Document inserted successfully with ID:', result.insertedId)
    return { success: true }
  } catch (error) {
    console.error('SERVER ERROR:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to join waitlist" 
    }
  }
}