import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* 🦓 LOGO */}
        <Link to="/" className="flex items-center space-x-1 group">
          <span className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors duration-300 group-hover:text-yellow-400 drop-shadow-[0_0_6px_rgba(255,215,0,0.5)]">
            Urban
          </span>
          <span className="text-[#FFD700] text-2xl sm:text-3xl font-extrabold tracking-tight drop-shadow-[0_0_6px_rgba(255,215,0,0.4)] transition-transform duration-300 group-hover:translate-x-0.5">
            .Zebra
          </span>
        </Link>

        {/* 🔗 MENIU */}
        <div className="hidden sm:flex space-x-6 text-sm font-medium">
          <Link
            to="/"
            className="text-white/80 hover:text-[#FFD700] transition-colors duration-200"
          >
            Blog
          </Link>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-[#FFD700] transition-colors duration-200"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-[#FFD700] transition-colors duration-200"
          >
            Facebook
          </a>
        </div>
      </div>
    </nav>
  );
}
