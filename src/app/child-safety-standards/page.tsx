import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child Safety Standards & CSAM Policy - Nothing Live",
  description: "Official Child Safety Standards, Zero Tolerance CSAM policy, NCMEC reporting protocols, and age restrictions for Nothing Live.",
};

export default function ChildSafetyStandardsPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-white/10 space-y-8">
        
        <div className="space-y-3 border-b border-white/10 pb-6">
          <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            Child Protection &amp; Safety Policy
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Child Safety Standards &amp; CSAM Policy</h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <p><span className="font-semibold text-gray-300">Effective Date:</span> July 23, 2026</p>
            <p><span className="font-semibold text-gray-300">Last Updated:</span> July 23, 2026</p>
            <p><span className="font-semibold text-gray-300">Package:</span> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.nothinglive.app</code></p>
          </div>
        </div>

        <div className="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 space-y-3">
            <p className="text-white font-medium">
              At <strong className="text-white font-bold">Nothing Live</strong>, we are unconditionally committed to protecting children and creating a safe digital environment. We maintain a <strong className="text-red-400 uppercase tracking-wide">Zero Tolerance Policy</strong> toward Child Sexual Abuse Material (CSAM), Child Sexual Exploitation and Abuse (CSAE), grooming, and any form of harm or exploitation targeting minors.
            </p>
            <p className="text-xs text-gray-300">
              This document outlines our explicit <strong className="text-white">Child Safety Standards</strong> in compliance with Google Play Developer Content Policies, international laws, and child protection regulations.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. Zero Tolerance for CSAM / CSAE</h2>
            <p>Nothing Live strictly prohibits:</p>
            <ul className="list-disc pl-5 space-y-3 text-gray-300">
              <li>
                <strong className="text-white">Child Sexual Abuse Material (CSAM):</strong> Generating, uploading, streaming, storing, sharing, or linking to any visual, audio, or text representation of explicit sexual acts or nudity involving minors.
              </li>
              <li>
                <strong className="text-white">Child Sexual Exploitation and Abuse (CSAE):</strong> Any attempt to solicit, groom, coerce, harass, exploit, or blackmail a minor for sexual, financial, or personal purposes.
              </li>
              <li>
                <strong className="text-white">Inappropriate Exposure:</strong> Any live stream, voice room, profile image, or direct message depicting or exposing minors in a sexually suggestive, abusive, or dangerous manner.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. Age Restrictions &amp; Account Policy</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Minimum Age Requirement:</strong> Nothing Live is intended exclusively for users who are <strong className="text-white">at least 13 years of age</strong> (or 18+ for live streaming hosting and financial transactions).</li>
              <li><strong className="text-white">Prohibition of Underage Accounts:</strong> Children under the age of 13 are strictly prohibited from creating accounts, hosting live streams, or participating in audio voice rooms.</li>
              <li><strong className="text-white">Immediate Termination:</strong> If an account is discovered to be operated by a child under 13, or if a minor is being exploited, the account will be immediately terminated, and all associated device IDs will be permanently blocked.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. Moderation &amp; Technical Safeguards</h2>
            <p>Nothing Live employs a multi-layered safety infrastructure to prevent, detect, and neutralize child safety threats:</p>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li><strong className="text-white">Automated AI Content Filtering:</strong> Text and media filtering systems detect keywords, abusive patterns, and known hash signatures associated with objectionable or explicit content.</li>
              <li><strong className="text-white">24/7 Human Moderation Team:</strong> Trained moderation staff review user reports, live broadcast feeds, audio room activity, and suspicious accounts around the clock.</li>
              <li><strong className="text-white">In-App Reporting Tools:</strong> Every live stream, audio room seat, chat message, and user profile features an easily accessible <strong className="text-white">Report</strong> button. Reports categorized under &quot;Child Safety&quot; or &quot;CSAM&quot; are prioritized for immediate review.</li>
              <li><strong className="text-white">Instant Room Termination &amp; Mic Mute:</strong> Moderators have authority to force-close broadcasts and revoke mic seat privileges immediately upon detecting potential violations.</li>
            </ol>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. Mandatory Reporting to Authorities (NCMEC &amp; Law Enforcement)</h2>
            <p>In accordance with federal and international laws (including 18 U.S.C. § 2258A):</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Reporting to NCMEC:</strong> Nothing Live promptly reports all instances of suspected CSAM or CSAE to the <strong className="text-white">National Center for Missing &amp; Exploited Children (NCMEC)</strong> via their CyberTipline.</li>
              <li><strong className="text-white">Law Enforcement Cooperation:</strong> We fully cooperate with local and international law enforcement agencies by preserving relevant evidence, log data, IP addresses, and account details to assist in the prosecution of offenders.</li>
              <li><strong className="text-white">Reporting to Google Play:</strong> Severe violations involving child exploitation are escalated immediately to Google Play&apos;s Trust &amp; Safety team.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">5. How to Report Child Safety Concerns</h2>
            <p>If you encounter any content, account, live stream, or message on Nothing Live that jeopardizes child safety or involves CSAM/CSAE:</p>
            
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
              <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-200">
                <li>
                  <strong className="text-white">In-App Report:</strong> Tap the <strong className="text-white">Report Flag Icon</strong> on the stream, user profile, or chat message and select <strong className="text-pink-300">&quot;Child Safety / Abuse&quot;</strong>.
                </li>
                <li>
                  <strong className="text-white">Direct Safety Contact:</strong> Send an urgent email directly to our Child Safety Team at{" "}
                  <a href="mailto:nothinglive@gmail.com" className="text-pink-400 font-mono underline">
                    nothinglive@gmail.com
                  </a>{" "}
                  with the subject <strong className="text-white font-mono">&quot;URGENT: Child Safety Report&quot;</strong>.
                </li>
                <li>
                  <strong className="text-white">External Authorities:</strong> You may also report CSAM directly to the{" "}
                  <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer" className="text-pink-400 underline">
                    NCMEC CyberTipline &rarr;
                  </a>
                </li>
              </ol>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">6. Continuous Review &amp; Compliance</h2>
            <p>
              Nothing Live regularly audits its safety policies, AI filters, and moderation workflows to adapt to emerging digital threats and maintain 100% compliance with Google Play Child Safety Guidelines.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">7. Contact Information</h2>
            <p>For official inquiries regarding our Child Safety Standards:</p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
              <p className="text-sm"><strong className="text-white">App Name:</strong> Nothing Live</p>
              <p className="text-sm"><strong className="text-white">Package Name:</strong> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.nothinglive.app</code></p>
              <p className="text-sm">
                <strong className="text-white">Child Safety Contact:</strong>{" "}
                <a href="mailto:nothinglive@gmail.com" className="text-pink-400 font-mono underline">
                  nothinglive@gmail.com
                </a>
              </p>
              <p className="text-sm">
                <strong className="text-white">General Support:</strong>{" "}
                <a href="mailto:nothinglive@gmail.com" className="text-pink-400 font-mono underline">
                  nothinglive@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
