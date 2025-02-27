import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { Toaster } from "react-hot-toast"
import { Analytics } from "@vercel/analytics/react"

// Change back to Inter font
const inter = Inter({ 
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Docment - AI Contract Automation",
  description: "AI-powered contract automation for everyday transactions",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'