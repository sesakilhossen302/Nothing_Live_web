"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, QrCode, Smartphone, CheckCircle, Sparkles, Shield } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <div className="relative rounded-[40px] bg-gradient-to-r from-[#3D1E2E] via-[#2C2513] to-[#0f1126] p-8 sm:p-14 lg:p-20 border border-[#D4AF37]/40 shadow-2xl shadow-[#D4AF37]/20 overflow-hidden">
          
          {/* Animated Background Orbs inside Card */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#D4AF37]/30 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#8A7322]/40 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-glow text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/40 uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>Instant Free Download</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Download <span className="text-gradient">Nothing Live Today</span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal">
                Join over 100,000 broadcasers and fans worldwide. Stream in high definition, chat live, send virtual gifts, and monetized your creativity instantly on iOS and Android.
              </p>

              {/* Feature Checkmarks */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>Android 8.0+ Compatible</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>iOS 14.0+ Compatible</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>No Ads • 100% Free</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                {/* Google Play Button */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.nothinglive.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center gap-3 transition-all duration-300 shadow-lg group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#D4AF37] to-[#B5952F] flex items-center justify-center font-bold text-white text-sm">
                    ▶
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">GET IT ON</p>
                    <p className="text-sm font-extrabold text-white group-hover:text-pink-300 transition-colors">Google Play</p>
                  </div>
                </a>

                {/* APK Download Button */}
                <a
                  href="#download-apk"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Nothing Live Direct APK (com.nothinglive.app) download initiated!");
                  }}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl btn-gradient text-white flex items-center justify-center gap-3 transition-all duration-300 shadow-xl group"
                >
                  <Download className="w-6 h-6 transform group-hover:translate-y-0.5 transition-transform" />
                  <div className="text-left">
                    <p className="text-[10px] text-gray-200 font-medium uppercase tracking-wider">DIRECT DOWNLOAD</p>
                    <p className="text-sm font-extrabold text-white">APK Download (v2.4)</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right QR Code Showcase */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative p-6 rounded-3xl glass-panel border border-white/20 text-center max-w-[260px] w-full shadow-2xl space-y-4">
                <div className="w-10 h-10 mx-auto rounded-xl bg-gradient-to-tr from-[#D4AF37] to-[#8A7322] flex items-center justify-center text-white">
                  <QrCode className="w-5 h-5" />
                </div>
                
                {/* Visual Styled QR Box */}
                <div className="relative aspect-square w-full bg-white p-3 rounded-2xl flex items-center justify-center border-4 border-[#D4AF37]/40 shadow-inner">
                  <div className="w-full h-full border-2 border-dashed border-gray-400 rounded-xl flex flex-col items-center justify-center text-gray-800 p-2 space-y-1">
                    <Smartphone className="w-8 h-8 text-[#D4AF37]" />
                    <p className="text-[11px] font-bold text-center">Scan to Install on Mobile</p>
                    <p className="text-[9px] text-gray-500 font-medium">iOS & Android</p>
                  </div>
                </div>

                <p className="text-xs text-gray-300 font-medium">
                  Scan QR code with your phone camera to download automatically.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
