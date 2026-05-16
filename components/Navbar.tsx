"use client";

import { useState, useEffect } from "react";
import { Scale, Menu, X } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { signOut } from "@/app/auth/actions";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <header className="bg-[#0D1B2A] sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-blue-400" />
          <span className="text-lg font-bold text-white tracking-wide">LegalAI</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#features" className="hover:text-white transition-colors">기능</a>
          <a href="#stats" className="hover:text-white transition-colors">도입 성과</a>
          <a href="#dashboard" className="hover:text-white transition-colors">대시보드</a>
          <a href="#cta" className="hover:text-white transition-colors">문의</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-gray-400 max-w-[160px] truncate">{user.email}</span>
              <form action={signOut}>
                <button
                  type="submit"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  로그아웃
                </button>
              </form>
            </>
          ) : (
            <>
              <a href="/auth/login" className="text-sm text-gray-300 hover:text-white transition-colors">로그인</a>
              <a
                href="/auth/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
              >
                시작하기
              </a>
            </>
          )}
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#0D1B2A] border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-sm text-gray-300">
          <a href="#features" onClick={() => setMenuOpen(false)}>기능</a>
          <a href="#stats" onClick={() => setMenuOpen(false)}>도입 성과</a>
          <a href="#dashboard" onClick={() => setMenuOpen(false)}>대시보드</a>
          {user ? (
            <form action={signOut}>
              <button type="submit" className="w-full text-left text-red-400">로그아웃</button>
            </form>
          ) : (
            <a href="/auth/signup" onClick={() => setMenuOpen(false)} className="bg-blue-600 text-white text-center py-2 rounded font-semibold">시작하기</a>
          )}
        </div>
      )}
    </header>
  );
}
