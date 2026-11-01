"use client";

import { motion } from "framer-motion";
import { Target, Eye, Sparkles, HeartHandshake, ShieldAlert, Globe, Zap, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-glow text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/30 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Story & Values</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Redefining <span className="text-gradient">Live Entertainment</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Nothing Live was born with a single passion: empowering creators with a luxury platform that turns talent into sustainable revenue while giving fans unforgettable interactive experiences.
          </p>
        </div>

        {/* Split Layout: Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl glass-panel-glow border border-[#D4AF37]/40 space-y-6 relative overflow-hidden group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#D4AF37] to-[#B5952F] p-[1px] shadow-lg shadow-[#D4AF37]/30">
              <div className="w-full h-full bg-[#0f1126] rounded-[15px] flex items-center justify-center text-white">
                <Target className="w-7 h-7 text-[#D4AF37]" />
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">OUR MISSION</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Empower 1 Million Broadcasters
              </h3>
              <p className="text-gray-300 text-base leading-relaxed font-normal">
                To break down traditional broadcasting barriers by providing creators of all backgrounds with cutting-edge 1080p streaming tools, instant monetization options, and a safe global fan community.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-pink-400" />
                <span>Fair Creator Split</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>190+ Countries</span>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/15 space-y-6 relative overflow-hidden group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#B5952F] to-[#8A7322] p-[1px] shadow-lg shadow-[#B5952F]/30">
              <div className="w-full h-full bg-[#0f1126] rounded-[15px] flex items-center justify-center text-white">
                <Eye className="w-7 h-7 text-pink-300" />
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">OUR VISION</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                The World's Most Premium Platform
              </h3>
              <p className="text-gray-300 text-base leading-relaxed font-normal">
                To become the global gold standard for interactive live video, virtual gifting, and real-time social entertainment through continuous engineering innovation and luxury UI aesthetics.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-4 text-xs text-gray-300">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Sub-Second Latency</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Industry Leading UI</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Why Nothing Live Section */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why <span className="text-gradient">Nothing Live?</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Unlike traditional legacy platforms, Nothing Live prioritizes high bitrate video quality, creator earnings, and ultra-fast room loading speeds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="text-2xl font-black text-[#D4AF37]">01. Premium Aesthetic</div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Clean dark luxury design with glassmorphism, soft glowing highlights, and zero intrusive legacy banner advertisements.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="text-2xl font-black text-pink-400">02. Instant Revenue</div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Direct payouts without minimum waiting months. Convert fan gifts, diamonds, and VIP subscriptions directly to local cash.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
              <div className="text-2xl font-black text-[#D4AF37]">03. Safety First</div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Automated 24/7 AI moderation and manual compliance officers ensure a respectful, harassment-free live streaming atmosphere.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
