import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/30 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6 sm:py-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-1 group">
          <span className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight group-hover:text-yellow-400 transition-colors">
            Urban
          </span>
          <span className="text-yellow-400 text-2xl sm:text-3xl font-extrabold tracking-tight group-hover:translate-x-0.5 transition-transform">
            .Zebra
          </span>
        </Link>

        {/* MENIU */}
        <div className="flex space-x-6 text-sm font-medium">
          <Link
            to="/"
            className="text-white/80 hover:text-yellow-400 transition-colors"
          >
            Blog
          </Link>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-yellow-400 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-yellow-400 transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </nav>
  );
}
