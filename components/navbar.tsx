"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-lg" />
            ModernFlow
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm hover:text-primary transition-colors">
              FAQ
            </Link>
            
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#features" className="block py-2 text-sm hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="block py-2 text-sm hover:text-primary">
              Pricing
            </Link>
            <Link href="#faq" className="block py-2 text-sm hover:text-primary">
              FAQ
            </Link>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
