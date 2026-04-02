"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="relative flex items-center justify-center px-8 md:px-14 py-8 max-w-[1400px] mx-auto w-full">
        <div className="absolute left-8 md:left-14">
          <Link href="/" aria-label="Noxus Studio Home">
            {/* Accurate NN Logo matching original Framer site */}
            <svg width="44" height="22" viewBox="0 0 44 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:opacity-70 transition-opacity duration-200">
              <rect x="0" y="0" width="6" height="22" fill="black"/>
              <polygon points="6,0 12,0 22,11 12,11" fill="black"/>
              <rect x="16" y="11" width="6" height="11" fill="black"/>
              <rect x="22" y="0" width="6" height="22" fill="black"/>
              <polygon points="28,0 34,0 44,11 34,11" fill="black"/>
              <rect x="38" y="11" width="6" height="11" fill="black"/>
            </svg>
          </Link>
        </div>
        <div className="flex gap-8 md:gap-10 text-[15px] font-medium text-[#1a1a1a]">
          <Link
            href="/work"
            className={`hover:opacity-50 transition-opacity duration-200 ${pathname === "/work" ? "opacity-50" : ""}`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`hover:opacity-50 transition-opacity duration-200 ${pathname === "/about" ? "opacity-50" : ""}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`hover:opacity-50 transition-opacity duration-200 ${pathname === "/contact" ? "opacity-50" : ""}`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
