"use client";

import { useEffect, useState } from "react";
import { Shield, Play, Menu, X } from "lucide-react";

export default function NetraSecureNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { id: "home", name: "Home", href: "#home" },
    { id: "features", name: "Features", href: "#features" },
    { id: "why-netrasecure", name: "Why NetraSecure", href: "#why-netrasecure" },
    { id: "screenshots", name: "Screenshots", href: "#screenshots" },
    { id: "download", name: "Download", href: "#download" },
    { id: "faq", name: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navLinks.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#030712]/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 dark:text-cyan-400 group-hover:scale-105 transition-transform">
              <Shield className="h-6 w-6" />
            </div>
            <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-wide">
              Netra<span className="text-cyan-600 dark:text-cyan-400">Secure</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-sm font-medium transition-all duration-300 ease-in-out ${
                    isActive
                      ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  {/* Smooth active underline animation */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-full bg-cyan-500 rounded-full transition-all duration-300 ease-in-out ${
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white dark:bg-cyan-500 dark:text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-blue-700 dark:hover:bg-cyan-400 transition-all duration-300 hover:scale-105"
            >
              <Play className="w-4 h-4 fill-white dark:fill-black" />
              <span>Download App</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#030712] border-b border-slate-200 dark:border-white/10 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#download"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 text-white dark:bg-cyan-500 dark:text-black font-bold text-xs uppercase tracking-wider mt-4 shadow-md"
          >
            <Play className="w-4 h-4 fill-white dark:fill-black" />
            <span>Download App</span>
          </a>
        </div>
      )}
    </header>
  );
}