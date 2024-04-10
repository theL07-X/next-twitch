import Image from 'next/image'
import Link from 'next/link'

import { Poppins } from 'next/font/google'

import { cn } from '@/lib/utils'

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})
import React from 'react'

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 mr-12 flex-shrink-0 lg:mr-0 lg:shrink-0">
          <Image src="/spooky.svg" alt="GameHub" height={32} width={32}></Image>
        </div>
        <div className={cn('hidden lg:block', font.className)}>
          <p className="text-lg font-semibold">Game Hub</p>
          <p className="text-xs text-muted-foreground">Let&apos;s paly</p>
        </div>
      </div>
    </Link>
  )
}
