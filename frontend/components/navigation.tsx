"use client"

import { Button } from "@/components/ui/button"
import { Scale, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">LegalEase AI</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/upload" className="text-muted-foreground hover:text-foreground transition-colors">
              Upload
            </Link>
            <Link href="/analysis" className="text-muted-foreground hover:text-foreground transition-colors">
              Analysis
            </Link>
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link href="/settings" className="text-muted-foreground hover:text-foreground transition-colors">
              Settings
            </Link>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>

          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/upload" className="text-muted-foreground hover:text-foreground transition-colors">
                Upload
              </Link>
              <Link href="/analysis" className="text-muted-foreground hover:text-foreground transition-colors">
                Analysis
              </Link>
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </Link>
              <Link href="/settings" className="text-muted-foreground hover:text-foreground transition-colors">
                Settings
              </Link>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  Sign In
                </Button>
                <Button size="sm" className="flex-1">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
