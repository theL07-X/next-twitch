import React from 'react'

import { Poppins } from 'next/font/google'
import Image from 'next/image'

import { cn } from '@/lib/utils'

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export default function Logo() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="rounded-full bg-white p-1">
        <Image src="/spooky.svg" alt="Logo" width={80} height={80} />
      </div>
      <div className={cn('flex flex-col items-center', font.className)}>
        <p className="text-xl font-semibold">Game Hub</p>
        <p className="text-sm text-muted-foreground">Let&apos;s Play</p>
      </div>
    </div>
  )
}
