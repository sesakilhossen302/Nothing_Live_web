"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#12070E] border-t border-white/10 pt-16 pb-12 overflow-hidden z-10">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-64 bg-gradient-to-t from-[#D4AF37]/15 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF007A] via-[#FFD700] to-[#FF007A] p-[2px] shadow-lg shadow-pink-500/30 group-hover:shadow-pink-500/60 group-hover:scale-105 transition-all duration-300">
                <div className="w-full h-full bg-[#0a0c1a] rounded-full flex items-center justify-center overflow-hidden">
                  <Image src="/logo.png" alt="Tiamo Live Pro Logo" width={48} height={48} unoptimized className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
              <span className="font-black text-2xl tracking-tight text-white flex items-center gap-1.5">
                <span className="text-[#FF2A85]">Tiamo</span>
                <span className="text-[#FFD700]">Live</span>
                <span className="px-1.5 py-0.5 rounded-md text-[11px] font-black tracking-wider bg-gradient-to-r from-[#FF007A] to-[#FF2A85] text-white shadow-sm shadow-pink-500/50">PRO</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              The next generation live streaming mobile app. Connect with global broadcasers, engage in interactive rooms, send virtual gifts, and earn revenue seamlessly.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified Safe Platform • 2026 Edition</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/download" className="text-gray-400 hover:text-white transition-colors">Download App</Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Policies (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Legal &amp; Trust</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/community-guidelines" className="text-gray-400 hover:text-white transition-colors">Community Guidelines</Link>
              </li>
            </ul>
          </div>

          {/* Social Icons (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Community</h4>
            <div className="flex flex-wrap gap-2.5">
              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-[#D4AF37] border border-white/10 text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-[#D4AF37] border border-white/10 text-white flex items-center justify-center transition-all"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.67 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.31 1.55-1.33 2.54-.01 1.05.5 2.11 1.35 2.71 1.02.73 2.45.82 3.54.24 1.06-.55 1.7-1.74 1.71-2.94.02-4.29.01-8.59.01-12.88z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-[#D4AF37] border border-white/10 text-white flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Tiamo Live Pro Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" /> for broadcasers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
