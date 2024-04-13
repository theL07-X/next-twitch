import React from 'react'

import Actions from './actions'
import Logo from './logo'
import Search from './search'

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-[49] flex h-20 w-full items-center justify-between bg-[#252731] px-2 shadow-sm lg:px-4">
      <Logo />
      <Search />
      <Actions />
    </nav>
  )
}
