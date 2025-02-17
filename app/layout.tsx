import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import { CustomCursor } from "@/components/custom-cursor"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Docment.ai - AI-Powered Legal Contracts",
  description: "Generate legally binding contracts in minutes with AI, e-KYC, and smart execution.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'