import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import DownloadSection from "@/components/DownloadSection";

export const metadata: Metadata = {
  title: "About Us - Tiamo Live Pro",
  description: "Learn about the mission, vision, and team driving the next generation of live streaming entertainment on Tiamo Live Pro.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <span className="px-4 py-1.5 rounded-full glass-panel-glow text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/40 uppercase tracking-widest">
          Who We Are
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 mb-6">
          Empowering <span className="text-gradient">Broadcasters Worldwide</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto">
          Tiamo Live Pro is designed from the ground up for artists, gamers, performers, and content creators who demand premium 1080p video quality and instant monetization.
        </p>
      </div>

      <AboutSection />
      <StatsSection />
      <DownloadSection />
    </div>
  );
}
