import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between py-3 px-5">
        
        {/* 🦓 LOGO TEXT */}
        <Link to="/" className="flex items-center space-x-1 group">
          <span className="text-white text-2xl font-extrabold tracking-tight transition-colors duration-300 group-hover:text-yellow-500">
            Urban
          </span>
          <span className="text-yellow-500 text-2xl font-extrabold tracking-tight">
            .Zebra
          </span>
        </Link>

        {/* 🔗 MENIU */}
        <div className="flex space-x-6 text-sm font-medium">
          <Link
            to="/"
            className="text-white/80 hover:text-yellow-500 transition-colors duration-200"
          >
            Blog
          </Link>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-yellow-500 transition-colors duration-200"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-yellow-500 transition-colors duration-200"
          >
            Facebook
          </a>
        </div>
      </div>
    </nav>
  );
}
