"use client"

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface FallbackImageProps {
  src: string
  alt: string
  className?: string
  fallbackColor?: string
  priority?: boolean
}

export function FallbackImage({ 
  src, 
  alt, 
  className, 
  fallbackColor = '#f3f4f6',
  priority = false 
}: FallbackImageProps) {
  const [error, setError] = useState(false)

  return (
    <div 
      className={cn('relative w-full h-full', className)}
      style={error ? { backgroundColor: fallbackColor } : undefined}
    >
      {!error && (
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          onError={() => setError(true)}
          priority={priority}
        />
      )}
    </div>
  )
}
