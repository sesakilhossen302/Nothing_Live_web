import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us - Tiamo Live Pro",
  description: "Get in touch with the Tiamo Live Pro support, creator partnership, and press teams.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <span className="px-4 py-1.5 rounded-full glass-panel-glow text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/40 uppercase tracking-widest">
          Support & Partnerships
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 mb-6">
          We're Here <span className="text-gradient">To Help</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto">
          Whether you're a streamer looking for verification, an agency seeking creator partnerships, or a user with support questions.
        </p>
      </div>

      <ContactSection />
    </div>
  );
}
