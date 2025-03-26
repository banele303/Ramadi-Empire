import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type React from "react" // Added import for React
import Navbar from "./navbar"



const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ramadi Empire - Construction & Procurement Services",
  description: "Professional construction, tendering, and quantity surveying services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class"  enableSystem disableTransitionOnChange>
         <Navbar/>
          <main className="min-h-screen">{children}</main>
        
        </ThemeProvider>
      </body>
    </html>
  )
}

