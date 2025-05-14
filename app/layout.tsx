import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import type React from "react" // Added import for React
import Loading from "@/components/loading"


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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/tt1.jpg" as="image" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background text-foreground antialiased transition-colors duration-300">
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

