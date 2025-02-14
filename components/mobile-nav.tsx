"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const routes = [
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/post",
    label: "Projects",
  },
  {
    href: "/latest-insight",
    label: "Blog",
  },
  {
    href: "/contact",
    label: "Contact",
  },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Ramadi Empire</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-lg ${pathname === route.href ? "text-primary font-semibold" : "text-muted-foreground"}`}
              onClick={() => setOpen(false)}
            >
              {route.label}
            </Link>
          ))}
          <Button asChild className="mt-4">
            <Link href="/book" onClick={() => setOpen(false)}>
              Book now
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

