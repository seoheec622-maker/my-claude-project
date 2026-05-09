"use client";

import { useState, useEffect } from "react";
import { Scale } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-[#0A0D14]/80 border-b border-[#1F2937]" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-blue-500" />
          <span className="text-lg font-bold text-white">LegalAI</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">기능</a>
          <a href="#stats" className="hover:text-white transition-colors">성과</a>
          <a href="#cta" className="hover:text-white transition-colors">요금</a>
        </div>
        <a
          href="#cta"
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          데모 신청
        </a>
      </nav>
    </header>
  );
}
