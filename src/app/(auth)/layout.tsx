import React from 'react'

import Logo from './_components/logo'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-6">
      <Logo />
      {children}
    </div>
  )
}
