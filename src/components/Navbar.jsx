import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="w-full bg-black/60 backdrop-blur-md border-b border-white/10 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-extrabold text-white hover:text-[#D4AF37] transition">
          Urban<span className="text-[#D4AF37]">.Zebra</span>
        </Link>

        {/* MENIU */}
        <div className="flex space-x-6 text-white/80">
          <a href="#blog" className="hover:text-[#D4AF37] transition">Blog</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition">Facebook</a>
        </div>

      </div>
    </nav>
  )
}
