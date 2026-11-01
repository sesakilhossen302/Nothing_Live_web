import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Guidelines - Nothing Live",
  description: "Official community standards, safety policies, zero-tolerance rules, and moderation enforcement for Nothing Live.",
};

export default function CommunityGuidelinesPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-white/10 space-y-8">
        
        <div className="space-y-3 border-b border-white/10 pb-6">
          <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            Safety &amp; Standards
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Community Guidelines</h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <p><span className="font-semibold text-gray-300">Effective Date:</span> July 23, 2026</p>
            <p><span className="font-semibold text-gray-300">Last Updated:</span> July 23, 2026</p>
            <p><span className="font-semibold text-gray-300">Package:</span> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.nothinglive.app</code></p>
          </div>
        </div>

        <div className="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <p>
              Welcome to <strong className="text-white">Nothing Live</strong>! Our mission is to provide a vibrant, fun, safe, and respectful environment where users around the world can connect, host live video broadcasts, enjoy audio voice rooms, play mini-games, and build positive communities.
            </p>
            <p>
              These <strong className="text-white">Community Guidelines</strong> apply to all users, hosts, agencies, and viewers on <strong className="text-white">Nothing Live</strong>. By accessing or using the App, you agree to comply with these rules. We enforce a <strong className="text-pink-400 uppercase tracking-wide">Zero Tolerance Policy</strong> for objectionable content, illegal activities, and abusive behavior.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. Core Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-1">
                <h3 className="font-semibold text-pink-400">🤝 Be Respectful</h3>
                <p className="text-xs text-gray-300">Treat fellow hosts, mic seat occupants, and viewers with dignity and kindness.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-1">
                <h3 className="font-semibold text-pink-400">🛡️ Keep it Safe</h3>
                <p className="text-xs text-gray-300">Never share or encourage dangerous, illegal, or harmful actions.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-1">
                <h3 className="font-semibold text-pink-400">🔒 Respect Privacy</h3>
                <p className="text-xs text-gray-300">Protect your personal safety and do not expose private information of others without explicit consent.</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-1">
                <h3 className="font-semibold text-pink-400">✨ Maintain Authenticity</h3>
                <p className="text-xs text-gray-300">Do not engage in impersonation, fraud, spam, or misleading behavior.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. Zero-Tolerance &amp; Prohibited Content</h2>
            <p>
              The following types of content and behaviors are strictly forbidden across all areas of <strong className="text-white">Nothing Live</strong> (including live streams, voice rooms, profile pictures, bios, status feeds, direct chats, and comments):
            </p>

            <div className="space-y-4 pt-2">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                <h3 className="text-lg font-semibold text-pink-400">A. Sexual Content &amp; Nudity</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-300">
                  <li>Full or partial nudity, explicit sexual acts, or pornography.</li>
                  <li>Erotic or sexually suggestive audio broadcasting or erotic performances.</li>
                  <li>Solicitation of sexual services or non-consensual sexual harassment.</li>
                  <li><strong className="text-pink-400 font-semibold">Child Sexual Exploitation (CSAM):</strong> Absolutely forbidden. Any depiction or solicitation involving minors will result in immediate permanent ban, device block, and reporting to legal authorities (including NCMEC).</li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                <h3 className="text-lg font-semibold text-pink-400">B. Harassment, Bullying &amp; Hate Speech</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-300">
                  <li>Harassing, stalking, threatening, insulting, or intimidating any user or host.</li>
                  <li>Promoting discrimination, violence, or hatred based on race, ethnicity, nationality, religion, disability, age, gender identity, or sexual orientation.</li>
                  <li>Encouraging mass-reporting or targeted online attacks against individuals.</li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                <h3 className="text-lg font-semibold text-pink-400">C. Dangerous &amp; Harmful Behavior</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-300">
                  <li>Depicting, promoting, or encouraging self-harm, suicide, or eating disorders.</li>
                  <li>Broadcasting dangerous stunts, drug use, heavy alcohol abuse, or illegal weapon usage.</li>
                  <li>Promoting violent extremism, terrorism, or dangerous organizations.</li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                <h3 className="text-lg font-semibold text-pink-400">D. Fraud, Scams &amp; Financial Exploitation</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-300">
                  <li>Soliciting money, bank details, or passwords under false pretenses.</li>
                  <li>Buying, selling, or trading virtual coins/diamonds outside official Nothing Live platforms or authorized portals.</li>
                  <li>Running unauthorized lotteries, pyramid schemes, or illegal gambling outside integrated in-app mini-games.</li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                <h3 className="text-lg font-semibold text-pink-400">E. Impersonation &amp; Misinformation</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-300">
                  <li>Posing as Nothing Live official staff, moderators, celebrities, or other users to deceive others.</li>
                  <li>Spreading malicious rumors, misinformation, or defamatory content.</li>
                </ul>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                <h3 className="text-lg font-semibold text-pink-400">F. Intellectual Property &amp; Copyright Violations</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-300">
                  <li>Re-broadcasting copyrighted movies, TV shows, live sports events, or copyrighted music without proper authorization.</li>
                  <li>Using trademarked logos or assets without permission in profile assets or promotional materials.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. Live Video &amp; Voice Room Specific Rules</h2>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">For Hosts &amp; Co-Hosts:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><strong className="text-white">Room Moderation:</strong> Hosts are responsible for keeping their live streams and voice rooms orderly. Hosts must kick or mute mic seaters who violate Community Guidelines.</li>
                <li><strong className="text-white">Active Streaming:</strong> Streaming inactive/blank screens, static images for extended periods, or sleeping on camera to farm virtual rewards is prohibited.</li>
                <li><strong className="text-white">Decent Attire:</strong> Hosts must wear appropriate clothing suitable for a public broadcast.</li>
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-semibold text-white">For Mic Seat Occupants &amp; Viewers:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Respect the room host and other mic guests.</li>
                <li>Do not play excessively loud, offensive, or copyrighted sound effects/music that disrupt the room.</li>
                <li>Do not spam the live chat with repetitive text, promotional links, or gift-begging messages.</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. User Safety &amp; In-App Reporting Tools</h2>
            <p>Nothing Live empowers users to protect themselves and maintain community quality through the following safety tools:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Block User:</strong> You can block any user at any time. Blocked users cannot message you, enter your private rooms, or view your feed.</li>
              <li><strong className="text-white">Report Content / User:</strong> Tap the <strong className="text-white">Report</strong> flag icon on any stream, profile, chat message, or post to alert our 24/7 Safety &amp; Moderation Team.</li>
              <li><strong className="text-white">Host Room Controls:</strong> Room hosts can mute, kick, or ban specific users from entering their live room.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">5. Violation Enforcement &amp; Penalties</h2>
            <p>
              Our automated moderation algorithms and 24/7 human moderation team review reported content continuously. Violations will result in actions depending on severity:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Warning Notice:</strong> In-app warning for minor or unintentional violations.</li>
              <li><strong className="text-white">Feature Restriction:</strong> Temporary mute from live room chat, temporary loss of mic seat privileges, or status post lock.</li>
              <li><strong className="text-white">Stream Termination:</strong> Immediate force-closing of live video streams or audio rooms.</li>
              <li><strong className="text-white">Temporary Account Suspension:</strong> 24-hour, 7-day, or 30-day account lockout.</li>
              <li><strong className="text-white">Permanent Account Ban:</strong> Permanent deletion of account credentials, forfeiture of remaining virtual coin balances, and device ID hardware block.</li>
              <li><strong className="text-white">Law Enforcement Escalation:</strong> Severe offenses (e.g., child exploitation, terror threats, financial fraud) will be reported to appropriate law enforcement authorities.</li>
            </ol>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">6. How to Appeal a Penalty</h2>
            <p>
              If you believe your account was suspended or your live stream was terminated in error, you may submit an appeal:
            </p>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
              <p className="text-sm">
                <strong className="text-white">Email Support:</strong> Send an email to{" "}
                <a href="mailto:nothinglive@gmail.com" className="text-pink-400 font-mono underline">
                  nothinglive@gmail.com
                </a>{" "}
                with the subject <strong className="text-white font-mono">&quot;Account Appeal - [User ID]&quot;</strong>.
              </p>
              <p className="text-sm text-gray-300">
                <strong className="text-white">Include:</strong> Your User ID, registered email/phone, a detailed description of the incident, and any supporting evidence or context.
              </p>
              <p className="text-xs text-gray-400 italic">
                Our Safety Team reviews all appeals within 48–72 hours.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">7. Contact Us</h2>
            <p>
              If you have questions about these Community Guidelines or wish to report a safety concern:
            </p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
              <p className="text-sm"><strong className="text-white">App Name:</strong> Nothing Live</p>
              <p className="text-sm"><strong className="text-white">Package Name:</strong> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.nothinglive.app</code></p>
              <p className="text-sm">
                <strong className="text-white">Safety Email:</strong>{" "}
                <a href="mailto:nothinglive@gmail.com" className="text-pink-400 font-mono underline">
                  nothinglive@gmail.com
                </a>
              </p>
              <p className="text-sm"><strong className="text-white">In-App Reporting:</strong> Tap the Report button inside any stream or user profile.</p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
