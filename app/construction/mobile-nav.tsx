"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Services array for mobile dropdown
const services = [
  { name: "Civil & Construction", href: "/services/civil-construction" },
  { name: "Project Management", href: "/services/project-management" },
  { name: "Maintenance Services", href: "/services/maintenance" },
  { name: "Plant Hire", href: "/services/plant-hire" },
  { name: "General Supply", href: "/services/supply" },
  { name: "Facility Services", href: "/services/facility" },
  { name: "Mechanical & Electrical", href: "/services/mechanical-electrical" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  if (typeof window !== "undefined") {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-26 z-50 bg-background border-t">
          <nav className="flex flex-col p-6">
            {/* Services Dropdown for Mobile */}
            <div className="py-3 border-b">
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span className="text-lg font-medium">Services</span>
                {servicesOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>

              {servicesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-2 text-muted-foreground hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/construction" className="py-3 text-lg font-medium border-b" onClick={() => setIsOpen(false)}>
              Construction
            </Link>
            <Link href="/about" className="py-3 text-lg font-medium border-b" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="py-3 text-lg font-medium border-b" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link href="/post" className="py-3 text-lg font-medium border-b" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="/latest-insight" className="py-3 text-lg font-medium border-b" onClick={() => setIsOpen(false)}>
              Blog
            </Link>

            <div className="mt-6">
              <Button asChild className="w-full rounded-full bg-black">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Book now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

