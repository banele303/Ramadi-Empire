import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "../construction/navbar"
import { Footer } from "@/components/footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ramadi Empire - Construction & Consultancy",
  description:
    "A proudly 100% black-owned construction and consultancy company dedicated to creating and implementing solutions that address the core needs of our people and communities.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar/>
            <main className="flex-1">{children}</main>
            
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}





