"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Loading from "./loading"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [prevPathname, setPrevPathname] = useState("")

  useEffect(() => {
    // Show loading when pathname changes
    if (prevPathname !== pathname) {
      setIsLoading(true)
      
      // Store current pathname
      setPrevPathname(pathname)
      
      // Hide loading after a short delay
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 500) // Adjust timing as needed
      
      return () => clearTimeout(timer)
    }
  }, [pathname, prevPathname])

  return (
    <>
      {isLoading && <Loading />}
      <div style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.3s ease-in-out" }}>
        {children}
      </div>
    </>
  )
}
