"use client";

import { Mail, Sparkles, Clock, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-glow text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/30 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24/7 Creator Support</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Have questions about partnerships, creator verification, or technical support? Contact us anytime.
          </p>
        </div>

        {/* Support Info Cards */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 space-y-6">
            <h3 className="text-2xl font-extrabold text-white text-center">Contact Info</h3>
            <p className="text-gray-300 text-sm leading-relaxed text-center">
              Our support team is available around the clock to assist broadcasters, fans, and business partners.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Official Support Email</p>
                  <p className="text-base font-bold text-white">
                    <a href="mailto:nothinglive@gmail.com" className="hover:text-pink-400 transition-colors">
                      nothinglive@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#B5952F]/20 border border-[#B5952F]/40 flex items-center justify-center text-pink-300 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Response Time</p>
                  <p className="text-base font-bold text-white">Under 15 Minutes</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#8A7322]/20 border border-[#8A7322]/40 flex items-center justify-center text-purple-300 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Global Support</p>
                  <p className="text-base font-bold text-white">24/7 Digital Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
