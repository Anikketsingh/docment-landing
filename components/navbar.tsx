"use client"
import Image from "next/image"
import logo_dark from '@/public/logo.png'
import * as React from "react"
import logo_light from '@/public/logo_light.png'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WaitlistModal } from "./waitlist-modal"
import { useTheme } from "./theme-provider"

export function Navbar() {
  const [showWaitlist, setShowWaitlist] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const { theme } = useTheme()
  const [resolvedTheme, setResolvedTheme] = React.useState<'dark' | 'light' | null>(null)

  React.useEffect(() => {
    setMounted(true)
    
    const updateResolvedTheme = () => {
      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        setResolvedTheme(systemTheme)
      } else {
        setResolvedTheme(theme as 'dark' | 'light')
      }
    }
    
    updateResolvedTheme()
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        updateResolvedTheme()
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  if (!mounted) {
    return null
  }

  const logoSrc = resolvedTheme === 'light' ? logo_light : logo_dark

  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        {/* Glassmorphic navbar */}
        <div className="mx-auto max-w-7xl px-4 md:px-6 pt-4">
          <div className="mx-auto flex items-center justify-between rounded-2xl border border-white/30 bg-white/30 px-6 py-4 backdrop-blur-2xl shadow-lg backdrop-saturate-150">
            {/* Left: Brand */}
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-8">
                <Image
                  src={logoSrc}
                  alt="Docment Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">docment</span>
            </Link>

            {/* Right: CTA button */}
            <div className="flex items-center gap-4">
              <Button 
                size="sm" 
                className="rounded-full border border-white/30 bg-white/60 px-6 py-2 text-sm font-medium text-gray-900 backdrop-blur-md shadow-sm transition-all hover:bg-white/80 hover:shadow-md"
                onClick={() => setShowWaitlist(true)}
              >
                Book demo
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <WaitlistModal open={showWaitlist} onOpenChange={setShowWaitlist} />
    </>
  )
}
