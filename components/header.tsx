import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./mobile-nav"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-26 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-20 h-20">
            <Image src="/logo.png" alt="Ramadi Empire Logo" fill className="object-contain h-full" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
            Ramadi Empire
          </span>

        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
          <Button asChild>
            <Link href="/book">Book now</Link>
          </Button>
        </nav>

        <MobileNav />
      </div>
    </header>
  )
}

