import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* 🦓 Bara de navigație fixă */}
      <Navbar />

      {/* Spațiu sub navbar pentru a evita suprapunerea titlului */}
      <main className="pt-24 sm:pt-28 flex-1">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </main>

      {/* Footer elegant */}
      <Footer />
    </div>
  );
}
