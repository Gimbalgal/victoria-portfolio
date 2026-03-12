'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow">

      <div className="flex justify-between items-center p-6 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/myProfile.png"
            alt="Victoria"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="font-bold text-xl">Victoria</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 font-medium">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#wordpress">WordPress</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

      </div>

      {/* Overlay */}
    <div
           onClick={toggleMenu}
            className={`fixed inset-0 bg-black/40 transition-opacity duration-300 lg:hidden z-30 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
    />

      {/* Mobile Menu */}
<div
  className={`fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 pt-24 px-6 transform transition-transform duration-300 lg:hidden z-40 ${
    isOpen ? 'translate-y-0' : '-translate-y-full'
  }`}
>

  {/* Close Button */}
  <button
     onClick={toggleMenu}
      className="absolute top-6 right-6 text-3xl font-bold"
  >
     ✕
  </button>

  <ul className="flex flex-col space-y-8 text-xl font-medium">

    <li>
      <a href="#about" onClick={toggleMenu}>About</a>
    </li>

    <li>
      <a href="#projects" onClick={toggleMenu}>Projects</a>
    </li>

    <li>
      <a href="#wordpress" onClick={toggleMenu}>WordPress</a>
    </li>

    <li>
      <a href="#skills" onClick={toggleMenu}>Skills</a>
    </li>

    <li>
      <a href="#contact" onClick={toggleMenu}>Contact</a>
    </li>

  </ul>
</div>
    </nav>
  )
}