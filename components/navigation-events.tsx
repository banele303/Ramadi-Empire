"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Loading } from "./loading"

export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true)
    }
    const handleStop = () => {
      setIsLoading(false)
    }

    window.addEventListener("beforeunload", handleStart)
    window.addEventListener("load", handleStop)
    
    // Custom event listeners for Next.js navigation
    document.addEventListener("next:router:change:start", handleStart)
    document.addEventListener("next:router:change:complete", handleStop)
    document.addEventListener("next:router:change:error", handleStop)

    return () => {
      window.removeEventListener("beforeunload", handleStart)
      window.removeEventListener("load", handleStop)
      document.removeEventListener("next:router:change:start", handleStart)
      document.removeEventListener("next:router:change:complete", handleStop)
      document.removeEventListener("next:router:change:error", handleStop)
    }
  }, [])

  // Listen for route changes
  useEffect(() => {
    setIsLoading(false)
  }, [pathname, searchParams])

  return isLoading ? <Loading /> : null
}
