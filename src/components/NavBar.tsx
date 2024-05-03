import React, { useState } from 'react'
import Link from 'next/link'
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'
import { navBarData } from '@/data/navBarData'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth={'xl'}
      className="bg-transparent sm:py-4 mb-4"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Master</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 bg-inherit" justify="end">
        <NavbarBrand>
          <p className="font-bold text-inherit">Master</p>
        </NavbarBrand>
        {navBarData.map(({ index, urlPath, navTitle }) => (
          <NavbarItem key={index} isActive>
            <Link
              href={urlPath}
              className={`px-4 hover:text-gray-200`}
              aria-current="page"
              color="#2C1768"
            >
              {navTitle}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className="bg-inherit">
        {navBarData.map(({ index, urlPath, navTitle }) => (
          <NavbarMenuItem key={index} className="bg-inherit" isActive>
            <Link
              className="w-full"
              href={urlPath}
              aria-current="page"
              color="#2C1768"
            >
              {navTitle}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
