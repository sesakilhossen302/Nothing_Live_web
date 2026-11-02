import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Moderation Policy - Tiamo Live Pro",
  description: "Content Moderation Policy, AI filtering, 24/7 human moderation workflows, severity levels, and appeals process for Tiamo Live Pro.",
};

export default function ContentModerationPolicyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-white/10 space-y-8">
        
        <div className="space-y-3 border-b border-white/10 pb-6">
          <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            Safety &amp; Enforcement
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Content Moderation Policy</h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <p><span className="font-semibold text-gray-300">Effective Date:</span> July 23, 2026</p>
            <p><span className="font-semibold text-gray-300">Last Updated:</span> July 23, 2026</p>
            <p><span className="font-semibold text-gray-300">Package:</span> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.tiamolivepro.app</code></p>
          </div>
        </div>

        <div className="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <p>
              At <strong className="text-white">Tiamo Live Pro</strong>, we are committed to maintaining a safe, healthy, and engaging digital space for all users. This <strong className="text-white">Content Moderation Policy</strong> outlines our systems, rules, workflows, and enforcement procedures for moderating user-generated content (UGC) across live video broadcasts, audio voice rooms, status feeds, comments, and direct messages.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. Moderation Framework &amp; System Overview</h2>
            <p>
              Tiamo Live Pro uses a <strong className="text-white">hybrid moderation system</strong> combining artificial intelligence (automated proactive filters) and round-the-clock human moderation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/5 p-5 rounded-2xl border border-white/5 space-y-2">
                <h3 className="text-lg font-bold text-pink-400">A. Automated AI Filtering (Proactive)</h3>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-300">
                  <li><strong className="text-white">Text &amp; Keyword Filtering:</strong> Real-time text screen filters detect profane words, hate speech, sexual solicitation terms, contact number sharing, and scam links in live chats and bios.</li>
                  <li><strong className="text-white">Media &amp; Hash Recognition:</strong> Automated image and video processing algorithms identify explicit nudity, violent imagery, and known CSAM hash signatures before or during broadcasts.</li>
                </ul>
              </div>

              <div className="bg-white/5 p-5 rounded-2xl border border-white/5 space-y-2">
                <h3 className="text-lg font-bold text-pink-400">B. 24/7 Human Moderation Team</h3>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-300">
                  <li><strong className="text-white">Live Stream Auditing:</strong> Trained human moderators randomly audit active video streams and audio room broadcasts around the clock.</li>
                  <li><strong className="text-white">Priority Report Queue:</strong> User reports flagged under high-priority categories (e.g., Child Safety, Violence, Nudity) are routed directly to human moderators for immediate review within 1 to 5 minutes.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. Moderation Categories &amp; Standards</h2>
            <p>
              Content is evaluated against our <a href="/community-guidelines" className="text-pink-400 underline hover:text-pink-300">Community Guidelines</a>. Key violation categories include:
            </p>

            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-white">
                    <th className="p-3 font-bold">Severity Level</th>
                    <th className="p-3 font-bold">Violation Types</th>
                    <th className="p-3 font-bold">Immediate Moderation Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-300">
                  <tr>
                    <td className="p-3 font-bold text-red-400">Critical</td>
                    <td className="p-3">CSAM/CSAE, Terrorism, Violent Threats, Severe Nudity</td>
                    <td className="p-3">Immediate Broadcast Closure + Permanent Account Ban + NCMEC/Police Report</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-orange-400">High</td>
                    <td className="p-3">Sexual Suggestiveness, Harassment, Hate Speech, Scams</td>
                    <td className="p-3">Broadcast Closure + Mic Mute + 24hr to 7-day Account Suspension</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-yellow-400">Medium</td>
                    <td className="p-3">Inappropriate Attire, Copyrighted Music/Video, Spamming</td>
                    <td className="p-3">Broadcast Warning + Mic Mute / Temporary Feature Restriction</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-blue-400">Low</td>
                    <td className="p-3">Off-topic Spam, Minor Room Disturbance</td>
                    <td className="p-3">In-app Warning / Room Kick by Host</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. Room Host &amp; Co-Host Moderation Rights</h2>
            <p>To foster community-led safety, room hosts and designated co-hosts possess localized moderation tools:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Mic Mute:</strong> Temporarily or permanently mute any mic seat occupant in an audio/video room.</li>
              <li><strong className="text-white">Kick Out:</strong> Remove disruptive viewers or guests from the room.</li>
              <li><strong className="text-white">Room Blacklist:</strong> Prevent specific users from re-entering the host&apos;s live room.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. Reporting &amp; Resolution Workflow</h2>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li><strong className="text-white">User Submits Report:</strong> Users tap the <strong className="text-white">Report Flag Icon</strong> on a stream, profile, or message.</li>
              <li><strong className="text-white">System Categorization:</strong> The report is prioritized by AI based on severity.</li>
              <li><strong className="text-white">Moderator Review:</strong> A safety team member views live stream snapshots, chat logs, or media uploads.</li>
              <li><strong className="text-white">Action Taken:</strong> If a violation is confirmed, appropriate penalties (warning, stream closure, suspension, ban) are executed immediately.</li>
              <li><strong className="text-white">Reporter Notification:</strong> The reporting user receives an in-app notification confirming action was taken.</li>
            </ol>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">5. Appeals &amp; Misaction Review</h2>
            <p>Users who believe their stream was closed or account was penalized in error can submit an appeal:</p>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
              <p className="text-sm">
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:tiamolivepro@gmail.com" className="text-pink-400 font-mono underline">
                  tiamolivepro@gmail.com
                </a>
              </p>
              <p className="text-sm"><strong className="text-white">Subject:</strong> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-300">&quot;Moderation Appeal - [User ID]&quot;</code></p>
              <p className="text-xs text-gray-400 italic">Appeals are reviewed by a senior safety supervisor within 48 hours.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">6. Contact Safety Team</h2>
            <p>For moderation concerns or safety inquiries:</p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
              <p className="text-sm"><strong className="text-white">App Name:</strong> Tiamo Live Pro</p>
              <p className="text-sm"><strong className="text-white">Package Name:</strong> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.tiamolivepro.app</code></p>
              <p className="text-sm">
                <strong className="text-white">Safety Email:</strong>{" "}
                <a href="mailto:tiamolivepro@gmail.com" className="text-pink-400 font-mono underline">
                  tiamolivepro@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
