import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Nothing Live",
  description: "Learn about how Nothing Live uses minimal essential cookies to maintain user sessions.",
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-white/10 space-y-8">
        
        <div className="space-y-3 border-b border-white/10 pb-6">
          <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            Legal Document
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Cookie Policy</h1>
          <p className="text-xs text-gray-400">Last updated: July 22, 2026</p>
        </div>

        <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device by your browser to remember preferences and maintain session state.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Essential Cookies Only</h2>
            <p>
              Nothing Live only uses essential security and performance cookies necessary to keep you signed in and store playback preference settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. No Advertising Cookies</h2>
            <p>
              We do not use third-party advertising cookies, remarketing trackers, or fingerprinting scripts.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
