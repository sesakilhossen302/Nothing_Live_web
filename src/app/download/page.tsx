import type { Metadata } from "next";
import DownloadSection from "@/components/DownloadSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Download App - Nothing Live",
  description: "Download Nothing Live for iOS and Android. Get direct APK downloads or install from official app stores.",
};

export default function DownloadPage() {
  return (
    <div className="pt-24 sm:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <span className="px-4 py-1.5 rounded-full glass-panel-glow text-xs font-bold text-[#D4AF37] border border-[#D4AF37]/40 uppercase tracking-widest">
          Mobile Downloads
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mt-4 mb-6">
          Get <span className="text-gradient">Nothing Live Mobile</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto">
          Compatible with all modern smartphones. Start streaming in less than 30 seconds with zero setup fees.
        </p>
      </div>

      <DownloadSection />

      {/* Technical Specifications */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center">
            System Requirements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-[#D4AF37]">🤖 Android Requirements</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• OS: Android 8.0 (Oreo) or higher</li>
                <li>• RAM: 2GB Minimum (4GB Recommended for 1080p)</li>
                <li>• Storage: 85 MB Free Space</li>
                <li>• Camera & Mic: Standard hardware permissions</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-pink-400">🍎 iOS Requirements</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• OS: iOS 14.0 or higher</li>
                <li>• Device: iPhone 8, iPad 6th Gen or newer</li>
                <li>• Storage: 92 MB Free Space</li>
                <li>• Network: 4G LTE, 5G, or Wi-Fi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}
