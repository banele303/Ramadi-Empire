import React from 'react';
import Image from 'next/image';

export function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="flex flex-col items-center">
        <div className="relative mb-4">
          <div className="relative w-20 h-20 mb-4">
            <Image src="/logo.png" alt="Ramadi Empire Logo" fill className="object-contain" />
          </div>
          <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-primary animate-spin mx-auto"></div>
        </div>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Loading...</h2>
        <p className="text-muted-foreground">Please wait while we prepare your experience</p>
      </div>
    </div>
  );
}

export default Loading;
