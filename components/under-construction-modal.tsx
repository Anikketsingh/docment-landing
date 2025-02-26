"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

interface UnderConstructionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onOpenWaitlist: () => void
}

export function UnderConstructionModal({
  open,
  onOpenChange,
  onOpenWaitlist
}: UnderConstructionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Product Under Construction</DialogTitle>
          <DialogDescription>
            We're working hard to bring you an amazing experience.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center justify-center py-6">
          {/* Animated Gears */}
          <div className="relative w-32 h-32 mb-4">
            <motion.div 
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M60,20 L65,20 L68,10 L52,10 L55,20 Z M90,52 L90,68 L100,65 L100,55 Z M68,100 L52,100 L55,110 L65,110 L Z M20,55 L20,65 L10,68 L10,52 Z M25,34 L34,25 L28,14 L17,28 Z M86,25 L95,34 L106,28 L92,17 Z M95,86 L86,95 L92,106 L106,92 Z M34,95 L25,86 L14,92 L28,106 Z"
                  fill="#9333ea"
                  className="opacity-90"
                />
                <circle cx="60" cy="60" r="15" fill="#9333ea" className="opacity-80" />
              </svg>
            </motion.div>
            
            <motion.div 
              className="absolute inset-0 ml-10 mt-10"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M50,15 L55,15 L58,5 L42,5 L45,15 Z M80,42 L80,58 L90,55 L90,45 Z M58,85 L42,85 L45,95 L55,95 L Z M10,45 L10,55 L0,58 L0,42 Z M20,24 L29,15 L23,4 L12,18 Z M76,15 L85,24 L96,18 L82,7 Z M85,76 L76,85 L82,96 L96,82 Z M29,85 L20,76 L9,82 L23,96 Z"
                  fill="#3b82f6"
                  className="opacity-90"
                />
                <circle cx="50" cy="50" r="12" fill="#3b82f6" className="opacity-80" />
              </svg>
            </motion.div>
          </div>
          
          <p className="text-center text-muted-foreground mb-4">
            Our team is working around the clock to finish development. Be among the first to know when we launch!
          </p>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="sm:flex-1"
          >
            Maybe Later
          </Button>
          <Button
            onClick={() => {
              onOpenChange(false)
              onOpenWaitlist()
            }}
            className="sm:flex-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            Join Waitlist
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}