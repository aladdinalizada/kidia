"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-500">
          kidia
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6 text-sm">
          <Link href="#">Təlimlər</Link>
          <Link href="#">Məşğələlər</Link>
          <Link href="#">Reyting</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Tariflər</Link>
          <Link href="#">Haqqımızda</Link>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/login"
            className="rounded-full bg-orange-500 px-5 py-2 text-white"
          >
            Daxil ol
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-3">
          {[
            "Təlimlər",
            "Məşğələlər",
            "Reyting",
            "Blog",
            "Tariflər",
            "Haqqımızda",
          ].map((item) => (
            <p key={item} className="text-sm">
              {item}
            </p>
          ))}
          <Link
            href="/login"
            className="block text-center rounded-full bg-orange-500 py-2 text-white"
          >
            Daxil ol
          </Link>
        </div>
      )}
    </header>
  );
}
