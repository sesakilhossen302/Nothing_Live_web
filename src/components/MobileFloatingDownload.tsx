"use client";

import Link from "next/link";
import { Download, Sparkles } from "lucide-react";

export default function MobileFloatingDownload() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden">
      <Link
        href="/download"
        className="w-full py-3.5 px-6 rounded-full btn-gradient text-white font-extrabold text-sm flex items-center justify-between shadow-2xl shadow-[#D4AF37]/50 border border-white/20 active:scale-98 transition-transform"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: "5s" }} />
          <span>Get Tiamo Live Pro Mobile</span>
        </div>
        <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full text-xs">
          <Download className="w-3.5 h-3.5" />
          <span>Install</span>
        </div>
      </Link>
    </div>
  );
}
