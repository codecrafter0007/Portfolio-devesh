"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative flex h-8 w-8 items-center justify-center">
            <svg viewBox="0 0 32 32" className="h-8 w-8">
              <defs>
                <linearGradient id="navdrop" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--color-liquid-1)" />
                  <stop offset="100%" stopColor="var(--color-liquid-2)" />
                </linearGradient>
              </defs>
              <path
                d="M16 3C16 3 6 15.5 6 21.5C6 27.02 10.48 30 16 30C21.52 30 26 27.02 26 21.5C26 15.5 16 3 16 3Z"
                fill="url(#navdrop)"
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </svg>
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-text">
            Devesh<span className="text-muted">.dev</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-[13px] text-muted">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-text transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/Devesh-Mungali-Resume.pdf"
            download
            className="hidden font-mono text-[13px] text-muted hover:text-text transition-colors sm:inline"
          >
            Résumé ↓
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-4 py-2 text-[13px] font-mono text-text hover:border-liquid-1 hover:text-liquid-1 transition-colors"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </header>
  );
}
