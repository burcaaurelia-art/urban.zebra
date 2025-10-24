import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* 🦓 Navbar */}
      <Navbar />

      {/* ✨ Spațiu sub navbar fix */}
      <div className="pt-20 sm:pt-24 flex-1">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>

      {/* ⚡ Footer */}
      <Footer />
    </div>
  );
}
