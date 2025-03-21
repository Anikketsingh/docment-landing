"use client"
import Image from "next/image"
import logo_dark from '@/public/logo.png'
import * as React from "react"
import logo_light from '@/public/logo_light.png'
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { WaitlistModal } from "./waitlist-modal"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "./theme-provider"

// Define navbar items with their section IDs
const navItems = [
  { name: "Features", href: "#features" },
  { name: "Get Real", href: "#get-real" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [showWaitlist, setShowWaitlist] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const { theme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/90 backdrop-blur-md border-b shadow-sm py-2" 
            : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center relative">
            <div className="relative h-14 w-14 z-10">
              <Image
                src={theme === 'light' ? logo_light : logo_dark}
                alt="Docment Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-extrabold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 -ml-3">Docment</span>
          </Link>

          <div className="hidden md:flex items-center justify-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={scrollToSection(item.href)}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-opacity text-white"
              onClick={() => setShowWaitlist(true)}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </motion.header>
      
      {/* Waitlist Modal */}
      <WaitlistModal open={showWaitlist} onOpenChange={setShowWaitlist} />
    </>
  )
}
