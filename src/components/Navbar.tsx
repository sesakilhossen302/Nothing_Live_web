"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Radio, Sparkles } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "Screenshots", href: "/#screenshots" },
  { name: "Download", href: "/download" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/#faq" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#2C2513]/80 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-lg shadow-[#0f1126]/80 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#D4AF37] via-[#FFD700] to-[#9B51E0] p-[2px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-[#0a0c1a] rounded-[14px] flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Nothing Live Logo"
                  width={48}
                  height={48}
                  priority
                  unoptimized
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                Nothing<span className="text-[#D4AF37]"> Live</span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              </span>
              <span className="text-[10px] text-amber-200/70 tracking-widest uppercase font-semibold">
                Next-Gen Live
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/30 to-[#B5952F]/30 border border-[#D4AF37]/40 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/download"
              className="relative group overflow-hidden px-5 py-2.5 rounded-full font-semibold text-xs xl:text-sm text-white btn-gradient flex items-center gap-2"
            >
              <Download className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
              <span>Download App</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/download"
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#D4AF37] to-[#B5952F] flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>App</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.06] border border-white/10 text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#2C2513]/95 backdrop-blur-2xl border-b border-[#D4AF37]/20 overflow-hidden"
          >
            <div className="px-5 py-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-base font-medium text-gray-200 hover:text-white hover:bg-[#D4AF37]/20 border border-transparent hover:border-[#D4AF37]/30 transition-all"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/download"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl font-bold text-center text-white btn-gradient flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Nothing Live</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
