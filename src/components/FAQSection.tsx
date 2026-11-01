"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const faqData = [
  {
    question: "How do I download and install Nothing Live?",
    answer:
      "You can download Nothing Live directly from the Google Play Store, Apple App Store, or download our official standalone APK directly from the Download page on this website. Installation takes less than 30 seconds.",
  },
  {
    question: "Is Nothing Live free to use for broadcasers and viewers?",
    answer:
      "Yes! Nothing Live is 100% free to download, view streams, and broadcast. Viewers have the optional ability to purchase virtual gifts, diamonds, and VIP memberships to support their favorite creators.",
  },
  {
    question: "How do creators earn money on Nothing Live?",
    answer:
      "Creators earn money through virtual gifts sent by viewers during live streams, private room ticket sales, VIP subscriptions, and monthly creator performance bonuses. Earned diamonds can be cashed out instantly.",
  },
  {
    question: "What are the minimum system requirements for HD streaming?",
    answer:
      "For Android, Nothing Live requires Android 8.0 or higher with at least 2GB of RAM. For iOS, it requires iOS 14.0 or higher. Our adaptive bitrate technology automatically adjusts quality based on your connection.",
  },
  {
    question: "How does Nothing Live keep streams safe and moderated?",
    answer:
      "We utilize proprietary real-time AI moderation models alongside a dedicated 24/7 trust and safety team. Inappropriate content, spam, and policy violations are detected and removed within seconds.",
  },
  {
    question: "How do instant creator payouts work?",
    answer:
      "Creators can link their preferred withdrawal method (Bank Transfer, PayPal, Payoneer, or Crypto) in the Creator Hub and request daily cashouts once the minimum $10 balance threshold is reached.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-glow text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/30 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Have questions about broadcasting, earnings, or downloading? We have answered the most common questions here.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl glass-panel transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? "border-[#D4AF37]/60 bg-[#2C2513]/60 shadow-lg shadow-[#D4AF37]/10"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-white focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 transition-colors ${isOpen ? "text-[#D4AF37]" : "text-gray-400"}`} />
                    <span>{item.question}</span>
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.06] border border-white/10 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#D4AF37] text-white" : "text-gray-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-white/[0.06]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
