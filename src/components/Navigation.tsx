// Navigation Component
// Generated: 2025-08-25T19:44:45.880Z
// Template: navigation-c001
// Context: layout
// Position: layout.header.0

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Dumbbell, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Classes", href: "/classes" },
    { name: "Trainers", href: "/trainers" },
    { name: "Memberships", href: "/memberships" },
    { name: "Transformations", href: "/transformations" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-secondary/20 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <Dumbbell className="size-6 text-secondary font-bold" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-foreground">PEAK</span>
                <span className="font-bold text-sm text-primary -mt-1">PERFORMANCE</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:bg-primary/10 rounded-lg border-b-2 border-transparent hover:border-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/book">
              <Button variant="outline" size="lg" className="font-bold border-primary text-primary hover:bg-primary hover:text-secondary">
                Book Now
              </Button>
            </Link>
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-secondary font-bold shadow-lg">
              Join Now
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="hover:bg-primary/10"
            >
              {isOpen ? <X className="size-6 text-primary" /> : <Menu className="size-6 text-primary" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="px-2 pt-4 pb-3 space-y-2 border-t border-primary/20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary block px-4 py-3 text-base font-bold uppercase tracking-wide transition-all duration-200 hover:bg-primary/10 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <Link href="/book">
                <Button variant="outline" className="w-full justify-center font-bold border-primary text-primary hover:bg-primary hover:text-secondary">
                  Book Now
                </Button>
              </Link>
              <Button className="w-full justify-center group bg-primary hover:bg-primary/90 text-secondary font-bold">
                Join Now
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}