"use client";

import Link from "next/link";
import { ShieldCheck, Lock, EyeOff, UserCheck, ArrowRight } from "lucide-react";

export default function PrivacySummarySection() {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl glass-panel-glow border border-[#D4AF37]/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Privacy & Security Protection</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Your Data is <span className="text-gradient">End-to-End Encrypted</span>
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Nothing Live never sells user personal information or stream analytics to third parties. All chat transmissions, payment processing, and account telemetry are encrypted with TLS 1.3 protocol standards.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs text-gray-300 pt-1">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-pink-400" />
                <span>AES-256 Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeOff className="w-4 h-4 text-pink-400" />
                <span>Zero Tracking Cookies</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-pink-400" />
                <span>GDPR & CCPA Compliant</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/privacy-policy"
              className="px-6 py-3.5 rounded-full glass-panel hover:bg-white/10 border border-white/20 text-white font-bold text-sm flex items-center gap-2.5 transition-all group"
            >
              <span>Read Privacy Policy</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
