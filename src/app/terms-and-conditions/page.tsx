import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & Terms and Conditions - Tiamo Live Pro",
  description: "Terms of Service and Terms and Conditions governing your access to and use of the Tiamo Live Pro mobile application.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-white/10 space-y-8">
        
        <div className="space-y-3 border-b border-white/10 pb-6">
          <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            Legal Document
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Terms of Service &amp; Terms and Conditions</h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <p><span className="font-semibold text-gray-300">Effective Date:</span> July 23, 2026</p>
            <p><span className="font-semibold text-gray-300">Last Updated:</span> July 23, 2026</p>
            <p><span className="font-semibold text-gray-300">Package:</span> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.tiamolivepro.app</code></p>
          </div>
        </div>

        <div className="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <p>
              Welcome to <strong className="text-white">Tiamo Live Pro</strong>! These Terms of Service (&quot;Terms&quot;, &quot;Agreement&quot;) govern your access to and use of the <strong className="text-white">Tiamo Live Pro</strong> mobile application (Package: <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.tiamolivepro.app</code>), including all features, live audio/video streaming, interactive mini-games, virtual items, and social services offered through the App.
            </p>
            <p>
              By downloading, installing, registering for, or using <strong className="text-white">Tiamo Live Pro</strong>, you agree to be bound by these Terms and our <a href="/privacy-policy" className="text-pink-400 underline hover:text-pink-300">Privacy Policy</a>. If you do not agree to these Terms, you must not access or use the App.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. Eligibility &amp; Age Requirements</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Age Limit:</strong> You must be at least <strong className="text-white">13 years old</strong> (or 18 years old in jurisdictions where 18 is the age of legal majority for live streaming and financial transactions) to create an account and use Tiamo Live Pro.</li>
              <li><strong className="text-white">Minors:</strong> If you are between 13 and 18 years old, you may only use the App under the supervision of a parent or legal guardian who agrees to be bound by these Terms.</li>
              <li><strong className="text-white">Account Authority:</strong> By registering, you represent and warrant that you have the legal capacity to enter into a binding agreement.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. User Accounts &amp; Security</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Account Creation:</strong> You may register an account using supported authentication methods (e.g., Email, Google Sign-In). You must provide accurate, current, and complete information.</li>
              <li><strong className="text-white">Account Confidentiality:</strong> You are responsible for maintaining the confidentiality of your account credentials (passwords, tokens). You accept full responsibility for all activities that occur under your account.</li>
              <li><strong className="text-white">Single Account Policy:</strong> Creating multiple accounts to exploit rewards, games, or bypass bans is strictly prohibited and will result in permanent suspension of all associated accounts.</li>
              <li><strong className="text-white">Unauthorized Use:</strong> You must immediately notify us of any unauthorized use or security breach of your account.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. User-Generated Content (UGC) &amp; Community Guidelines</h2>
            <p>
              <strong className="text-white">Tiamo Live Pro</strong> is an interactive live streaming and social platform. To maintain a safe and positive community, we enforce a <strong className="text-pink-400 uppercase tracking-wide">Zero Tolerance Policy</strong> for objectionable, offensive, or illegal content and abusive behaviors.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-semibold text-white">Prohibited Conduct &amp; Content:</h3>
              <p className="text-sm text-gray-400">You agree <strong>NOT</strong> to create, upload, stream, post, transmit, or share any content that:</p>
              
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li><strong className="text-white">Sexual / Explicit Content:</strong> Pornography, nudity, sexually suggestive acts, or exploitation of any kind.</li>
                <li><strong className="text-white">Hate Speech &amp; Harassment:</strong> Bullying, harassment, threats, stalking, racism, religious intolerance, or discrimination based on race, ethnicity, gender, sexual orientation, or disability.</li>
                <li><strong className="text-white">Violence &amp; Dangerous Acts:</strong> Self-harm, suicide encouragement, graphic violence, illegal drugs, weapons, or terrorism.</li>
                <li><strong className="text-white">Illegal Activities &amp; Unauthorized Gambling:</strong> Promoting illegal acts, unauthorized financial scams, or illegal betting/gambling activities outside official in-app mini-games.</li>
                <li><strong className="text-white">Copyright &amp; Intellectual Property Infringement:</strong> Broadcasting copyrighted music, movies, sports streams, or intellectual property without explicit license/permission.</li>
                <li><strong className="text-white">Impersonation &amp; Fraud:</strong> Impersonating Tiamo Live Pro officials, celebrities, or other users, or misleading others for monetary gain.</li>
                <li><strong className="text-white">Spam &amp; Malicious Code:</strong> Transmitting viruses, phishing links, spam comments, or automated bots.</li>
              </ol>
            </div>

            <div className="bg-pink-500/10 border border-pink-500/20 rounded-2xl p-5 space-y-3 mt-4">
              <h3 className="text-lg font-semibold text-white">Moderation, Reporting &amp; Enforcement</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-200">
                <li><strong className="text-white">Reporting System:</strong> Tiamo Live Pro provides in-app tools allowing users to block offensive users and report violating streams, comments, or profiles.</li>
                <li><strong className="text-white">Content Removal &amp; Account Ban:</strong> We reserve the right, at our sole discretion, to monitor, review, remove any content, mute mic seats, end live streams, or permanently ban accounts that violate these Terms without prior notice.</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. Live Audio &amp; Video Streaming Rules</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Host &amp; Streamer Conduct:</strong> Streamers and mic occupants in audio/video rooms must adhere strictly to Community Guidelines. Hosts are responsible for maintaining order in their respective rooms.</li>
              <li><strong className="text-white">Real-Time Moderation:</strong> Tiamo Live Pro employs automated tools and human moderators to monitor live streams. Violating streams will be terminated immediately.</li>
              <li><strong className="text-white">Background Privacy:</strong> Ensure that your camera does not capture private or non-consenting individuals or confidential personal data during live streams.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">5. Virtual Items, Coins &amp; In-App Purchases</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Virtual Currency:</strong> Tiamo Live Pro features virtual items (coins, diamonds, gifts, VIP statuses, avatar frames). Virtual items are licensed, non-transferable, limited digital assets for use exclusively within the App.</li>
              <li><strong className="text-white">No Cash Value:</strong> Virtual items have <strong className="text-white">no real-world monetary value</strong>, cannot be exchanged for legal currency, and do not constitute personal property.</li>
              <li><strong className="text-white">Purchases:</strong> In-app purchases are processed through Google Play In-App Billing or authorized payment channels. All sales are <strong className="text-white">final and non-refundable</strong>, except as required by applicable laws or Google Play refund policies.</li>
              <li><strong className="text-white">Unauthorized Transfers:</strong> Buying, selling, or trading virtual coins/diamonds outside official Tiamo Live Pro channels or authorized Coin Seller portals is strictly prohibited and will lead to account termination.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">6. Agency, Host &amp; Coin Seller Terms</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Users who apply for special roles (e.g., <strong className="text-white">Host</strong>, <strong className="text-white">Agency Portal</strong>, <strong className="text-white">Coin Seller Portal</strong>) must enter into separate operational guidelines provided within their respective application portals.</li>
              <li>Agencies and Coin Sellers must comply with all operational quotas, verified user identification rules, and financial compliance standards.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">7. Intellectual Property Rights</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Tiamo Live Pro Ownership:</strong> The App name, branding, logos, design assets, UI components, code, and graphics are the exclusive intellectual property of Tiamo Live Pro and its licensors.</li>
              <li><strong className="text-white">License to User Content:</strong> By posting or broadcasting content on Tiamo Live Pro, you grant us a worldwide, non-exclusive, royalty-free, sublicensable license to use, stream, reproduce, display, and distribute such content solely for operating, promoting, and improving the App.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">8. Account Termination &amp; Suspension</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Termination by You:</strong> You may stop using the App or delete your account at any time via <span className="bg-white/10 px-2 py-0.5 rounded text-pink-300">Settings &gt; Account &gt; Delete Account</span>.</li>
              <li><strong className="text-white">Termination by Us:</strong> We reserve the right to suspend, restrict, or terminate your access to Tiamo Live Pro at any time, with or without cause or notice, including for violations of these Terms, non-use, or suspected fraudulent activity.</li>
              <li><strong className="text-white">Effect of Termination:</strong> Upon termination, all rights and licenses granted to you will immediately cease, and any remaining virtual coins/items will be forfeited without compensation.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">9. Disclaimer of Warranties</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">&quot;AS IS&quot; Basis:</strong> Tiamo Live Pro is provided on an <strong className="text-white">&quot;AS IS&quot;</strong> and <strong className="text-white">&quot;AS AVAILABLE&quot;</strong> basis without warranties of any kind, whether express or implied.</li>
              <li><strong className="text-white">Service Interruptions:</strong> We do not warrant that live streaming, chat services, or audio quality will be uninterrupted, bug-free, or completely secure. Network conditions or third-party infrastructure (e.g., cloud providers) may cause temporary downtime.</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Tiamo Live Pro, its developers, affiliates, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, data, virtual items, or goodwill) arising out of or related to your use of or inability to use the App.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">11. Governing Law &amp; Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of your applicable jurisdiction, without regard to its conflict of law principles. Any legal suit, action, or proceeding arising out of these Terms shall be instituted exclusively in the competent courts of jurisdiction.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">12. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. Material changes will be communicated through the App or by updating the <strong className="text-white">&quot;Last Updated&quot;</strong> date at the top. Continued use of Tiamo Live Pro after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">13. Contact Us</h2>
            <p>
              For any questions, legal notices, or inquiries regarding these Terms of Service, please contact us at:
            </p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
              <p className="text-sm"><strong className="text-white">App Name:</strong> Tiamo Live Pro</p>
              <p className="text-sm"><strong className="text-white">Package Name:</strong> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.tiamolivepro.app</code></p>
              <p className="text-sm">
                <strong className="text-white">Support Email:</strong>{" "}
                <a href="mailto:tiamolivepro@gmail.com" className="text-pink-400 font-mono underline">
                  tiamolivepro@gmail.com
                </a>
              </p>
              <p className="text-sm"><strong className="text-white">In-App Help:</strong> Settings &gt; Feedback &amp; Help</p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
