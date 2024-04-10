import React from 'react'
import Logo from './logo'
import Search from './search'
import Actions from './actions'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 justify-between items-center shadow-sm flex">
      <Logo />
      <Search />
      <Actions />
    </nav>
  )
}
