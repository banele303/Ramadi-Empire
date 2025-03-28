"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X, Home, Info, Briefcase, Award, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"

const services = [
    { name: "Civil & Construction", href: "/services/civil-construction" },
    { name: "Project Management", href: "/services/project-management" },
    { name: "Maintenance Services", href: "/services/maintenance" },
    { name: "Plant Hire", href: "/services/plant-hire" },
    { name: "General Supply", href: "/services/supply" },
    { name: "Laundry Services", href: "/services/facility" },
    { name: "Mechanical & Electrical", href: "/services/mechanical-electrical" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    return (
        <>
            <header
                className={cn(
                    "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow",
                    isScrolled && "shadow-md",
                )}
            >
                <div className="container flex h-22 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="relative ">

                            <Link href="/" className="flex items-center gap-2">
                                <div className="relative w-20 h-20">
                                    <Image src="/logo.png" alt="Ramadi Empire Logo" fill className="object-contain h-full" />
                                </div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                                    Ramadi Empire
                                </span>

                            </Link>
                        </div>

                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        <Link
                            href="/"
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === "/" && "text-primary font-semibold",
                            )}
                        >
                            Home
                        </Link>
                        <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                            About
                        </Link>
                        <Link href="/construction" className="text-sm font-medium transition-colors hover:text-primary">
                            Construction
                        </Link>

                        {/* Services Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button
                                    className={cn(
                                        "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                                        pathname.includes("/services") && "text-primary font-semibold",
                                    )}
                                >
                                    Services <ChevronDown className="h-4 w-4" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="center" className="w-56">
                                {services.map((service) => (
                                    <DropdownMenuItem key={service.href} asChild>
                                        <Link
                                            href={service.href}
                                            className={cn("w-full cursor-pointer", pathname === service.href && "bg-muted")}
                                        >
                                            {service.name}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link href="/#why-choose-us" className="text-sm font-medium transition-colors hover:text-primary">
                            Why Choose Us
                        </Link>



                        <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
                            Contact
                        </Link>
                    </nav>

                    <div className="hidden md:flex">
                        <Link href="tel:+27 76 223 2914">
                            <Button size="lg">Call Now</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu - Separate from header */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 top-16 z-40 bg-background">
                    <nav className="container flex flex-col gap-4 p-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 py-3 text-lg font-medium border-b"
                            onClick={() => setIsOpen(false)}
                        >
                            <Home className="h-5 w-5" />
                            Home
                        </Link>
                        <Link
                            href="/#about"
                            className="flex items-center gap-2 py-3 text-lg font-medium border-b"
                            onClick={() => setIsOpen(false)}
                        >
                            <Info className="h-5 w-5" />
                            About
                        </Link>

                        {/* Mobile Services List */}
                        <div className="border-b">
                            <div className="flex items-center gap-2 py-3 text-lg font-medium">
                                <Briefcase className="h-5 w-5" />
                                Services
                            </div>
                            <div className="pl-7 pb-3 space-y-3">
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
                        </div>

                        <Link
                            href="/#why-choose-us"
                            className="flex items-center gap-2 py-3 text-lg font-medium border-b"
                            onClick={() => setIsOpen(false)}
                        >
                            <Award className="h-5 w-5" />
                            Why Choose Us
                        </Link>
                        <Link
                            href="tel:+27 76 223 2914"
                            className="flex items-center gap-2 py-3 text-lg font-medium border-b"
                            onClick={() => setIsOpen(false)}
                        >
                            <Phone className="h-5 w-5" />
                            Contact
                        </Link>



                        <div className="mt-6">
                            <Button className="w-full" onClick={() => setIsOpen(false)}>
                                Get In Touch
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </>
    )
}

