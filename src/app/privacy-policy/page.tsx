import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Nothing Live",
  description: "Nothing Live Privacy Policy detailing data collection, device permissions, third-party services, and data deletion rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-white/10 space-y-8">
        
        <div className="space-y-3 border-b border-white/10 pb-6">
          <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            Legal Document
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Privacy Policy for Nothing Live</h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <p><span className="font-semibold text-gray-300">Effective Date:</span> July 23, 2026</p>
            <p><span className="font-semibold text-gray-300">Last Updated:</span> July 23, 2026</p>
            <p><span className="font-semibold text-gray-300">Package:</span> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.nothinglive.app</code></p>
          </div>
        </div>

        <div className="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <p>
              Welcome to <strong className="text-white">Nothing Live</strong> (referred to as &quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or the &quot;App&quot;). We are committed to protecting your privacy and ensuring you have a safe and positive experience while using our live streaming, voice audio rooms, social networking, and interactive mini-game services.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application <strong className="text-white">Nothing Live</strong> (Package: <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.nothinglive.app</code>). Please read this Privacy Policy carefully. By accessing or using the App, you agree to the collection and use of information in accordance with this policy.
            </p>
            <p className="text-xs text-gray-400 italic">
              If you do not agree with the terms of this Privacy Policy, please do not access or use the App.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. Information We Collect</h2>
            <p>
              We collect information to provide better services to all our users, ranging from basic account setup to interactive real-time audio and video streaming.
            </p>
            
            <div className="space-y-4 pl-2">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-pink-400">A. Information You Provide to Us</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li><strong className="text-white">Account Registration Data:</strong> When you create an account, we may collect your name, email address, profile picture, gender, date of birth, country/region, and authentication credentials (e.g., Google Sign-In tokens, password hashes).</li>
                  <li><strong className="text-white">User Content:</strong> Content you upload, post, or transmit through the App, including profile biography, status feeds, photos, uploaded audio/video files, and direct chat messages.</li>
                  <li><strong className="text-white">Support Requests &amp; Feedback:</strong> Information you provide when contacting customer support or submitting feedback (e.g., screenshots, descriptions of issues).</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-pink-400">B. Information Automatically Collected</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li><strong className="text-white">Device Information:</strong> Device model, operating system version, unique device identifiers (Android ID, Advertising ID), network provider, and hardware specifications.</li>
                  <li><strong className="text-white">Log &amp; Usage Data:</strong> IP address, access times, app crashes, features used, pages viewed, and live room interaction logs (e.g., room entry/exit times, gift sending history).</li>
                  <li><strong className="text-white">Audio &amp; Video Data:</strong> Real-time audio and video data transmitted during live streams and audio voice rooms (processed via our third-party streaming infrastructure for transmission purposes).</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-pink-400">C. Financial &amp; Purchase Data</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li><strong className="text-white">In-App Purchases &amp; Virtual Items:</strong> Transaction history, virtual coin/diamond balances, VIP subscription statuses, and coin transfer records. Payments are processed securely via Google Play In-App Billing or authorized payment gateways; we <strong className="text-white">do not</strong> collect or store full credit card or bank credentials on our servers.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. Device Permissions Required</h2>
            <p>
              To provide live streaming, interactive audio rooms, and social features, <strong className="text-white">Nothing Live</strong> requests the following device permissions:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <li className="bg-white/5 p-3.5 rounded-xl border border-white/5 space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <span>📷 Camera</span>
                  <code className="text-xs bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded">CAMERA</code>
                </div>
                <p className="text-xs text-gray-300">Required to broadcast live video streams, participate in video rooms, and take profile pictures.</p>
              </li>
              <li className="bg-white/5 p-3.5 rounded-xl border border-white/5 space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <span>🎙️ Microphone</span>
                  <code className="text-xs bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded">RECORD_AUDIO</code>
                </div>
                <p className="text-xs text-gray-300">Required for live voice streaming, audio room mic seating, and voice message recording.</p>
              </li>
              <li className="bg-white/5 p-3.5 rounded-xl border border-white/5 space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <span>📁 Photos &amp; Storage</span>
                  <code className="text-xs bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded">STORAGE</code>
                </div>
                <p className="text-xs text-gray-300">Required to upload profile photos, share media files in chats, save media, and store app data.</p>
              </li>
              <li className="bg-white/5 p-3.5 rounded-xl border border-white/5 space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <span>🔔 Notifications</span>
                  <code className="text-xs bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded">POST_NOTIFICATIONS</code>
                </div>
                <p className="text-xs text-gray-300">Required to send push notifications for incoming messages, live stream starts, system updates, and reward announcements.</p>
              </li>
              <li className="bg-white/5 p-3.5 rounded-xl border border-white/5 space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <span>🌐 Network Access</span>
                  <code className="text-xs bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded">INTERNET</code>
                </div>
                <p className="text-xs text-gray-300">Required for online streaming, server communication, and data synchronization.</p>
              </li>
              <li className="bg-white/5 p-3.5 rounded-xl border border-white/5 space-y-1">
                <div className="font-semibold text-white flex items-center gap-2">
                  <span>⚡ Wakelock</span>
                  <code className="text-xs bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded">WAKE_LOCK</code>
                </div>
                <p className="text-xs text-gray-300">Keeps the screen active while hosting or watching a live room.</p>
              </li>
            </ul>
            <p className="text-xs text-gray-400 italic pt-2">
              You can grant or revoke these permissions at any time through your device settings. However, revoking key permissions (e.g., Camera or Microphone) will disable related live streaming features.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. How We Use Your Information</h2>
            <p>We use the collected information for the following core purposes:</p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Provide and Maintain Services:</strong> Operate live streaming rooms, voice audio rooms, 1-on-1 chats, status feeds, and interactive mini-games.</li>
              <li><strong className="text-white">Account Management:</strong> Authenticate users, process logins via email/Google, manage user levels, ranks, and VIP statuses.</li>
              <li><strong className="text-white">Safety &amp; Security:</strong> Monitor and prevent fraud, spam, illegal activities, harassment, hate speech, and violations of our Community Guidelines.</li>
              <li><strong className="text-white">Customer Support:</strong> Respond to support tickets, user inquiries, and user block/report requests.</li>
              <li><strong className="text-white">Notifications:</strong> Send real-time updates regarding account activity, live stream alerts, and system announcements.</li>
              <li><strong className="text-white">Analytics &amp; Improvements:</strong> Diagnose technical bugs, analyze app performance, and improve user experience.</li>
            </ol>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. Third-Party Services &amp; Data Processors</h2>
            <p>
              We integrate trusted third-party SDKs and service providers to power core functionality in <strong className="text-white">Nothing Live</strong>. These third parties collect and process data in accordance with their respective privacy policies:
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="bg-white/5 p-5 rounded-2xl border border-white/5 space-y-2">
                <h3 className="text-lg font-bold text-white">Google Play Services / Firebase (Google LLC)</h3>
                <p className="text-sm text-gray-300"><strong className="text-white">Services:</strong> Firebase Authentication, Cloud Firestore, Realtime Database, Cloud Storage, Firebase Cloud Messaging (FCM), Google Sign-In.</p>
                <p className="text-sm text-gray-300"><strong className="text-white">Purpose:</strong> User login, real-time database sync, push notifications, and secure cloud storage.</p>
                <p className="text-xs text-pink-400">
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Read Google Privacy Policy &rarr;
                  </a>
                </p>
              </div>

              <div className="bg-white/5 p-5 rounded-2xl border border-white/5 space-y-2">
                <h3 className="text-lg font-bold text-white">ZEGO Cloud (ZEGO Express Engine &amp; ZegoUIKit)</h3>
                <p className="text-sm text-gray-300"><strong className="text-white">Services:</strong> Real-time Audio/Video SDK, Live Streaming Infrastructure.</p>
                <p className="text-sm text-gray-300"><strong className="text-white">Purpose:</strong> Low-latency live video streaming, multi-mic audio room voice transmission.</p>
                <p className="text-xs text-pink-400">
                  <a href="https://www.zegocloud.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Read ZEGO Cloud Privacy Policy &rarr;
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">5. Data Sharing &amp; Disclosure</h2>
            <p>We do not sell your personal data. We may share your information under the following limited circumstances:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Publicly Visible Data:</strong> Your display name, profile avatar, user ID, user level, VIP status, and public live room activities (e.g., public comments, gift logs, ranking leaderboards) are visible to other users in the App.</li>
              <li><strong className="text-white">Third-Party Service Providers:</strong> With vetted providers (such as Firebase and ZEGO Cloud) who assist in app delivery, cloud storage, and video processing under strict confidentiality terms.</li>
              <li><strong className="text-white">Legal Compliance:</strong> If required by law, subpoena, court order, or government request, or to protect the safety, rights, or property of <strong className="text-white">Nothing Live</strong>, our users, or the public.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">6. Account &amp; Data Deletion Policy (Google Play Compliance)</h2>
            <p>
              In compliance with Google Play Developer Policies, users have the right to request the deletion of their account and associated personal data at any time.
            </p>

            <div className="bg-pink-500/10 border border-pink-500/20 rounded-2xl p-5 space-y-4">
              <h3 className="text-lg font-semibold text-white">How to Delete Your Account &amp; Data:</h3>
              <ol className="list-decimal pl-5 space-y-3 text-sm text-gray-200">
                <li>
                  <strong className="text-white">In-App Deletion Path:</strong><br />
                  Go to <span className="bg-white/10 px-2 py-0.5 rounded text-pink-300">Settings &gt; Account &amp; Security &gt; Delete Account</span> inside the App and confirm your password/authentication.
                </li>
                <li>
                  <strong className="text-white">Email Request Path:</strong><br />
                  If you cannot access your account, send an email request to our support team at{" "}
                  <a href="mailto:nothinglive@gmail.com" className="text-pink-400 font-mono underline">
                    nothinglive@gmail.com
                  </a>{" "}
                  from your registered email address with the subject <strong className="text-white font-mono">&quot;Account Deletion Request&quot;</strong>.
                </li>
              </ol>
            </div>

            <div className="space-y-2 pl-2">
              <h3 className="text-lg font-semibold text-white">What Happens Upon Deletion:</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Your account credentials, profile details, user ID, status feeds, and personal data will be permanently deleted from our primary servers within <strong className="text-white">30 days</strong>.</li>
                <li>Historical transaction logs and safety/abuse reports may be retained in anonymized/aggregated form where required by law or for security auditing.</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">7. Children&apos;s Privacy</h2>
            <p>
              <strong className="text-white">Nothing Live</strong> is strictly intended for users who are <strong className="text-white">at least 13 years of age</strong> (or 18+ depending on local jurisdiction for live streaming/purchases). We do not knowingly solicit or collect personal information from children under the age of 13.
            </p>
            <p>
              If we learn that we have collected personal data from a child under 13 without verified parental consent, we will take immediate steps to delete that information and terminate the account. If you believe a child under 13 has provided us with personal data, please contact us at{" "}
              <a href="mailto:nothinglive@gmail.com" className="text-pink-400 font-mono underline">
                nothinglive@gmail.com
              </a>.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">8. Data Security &amp; Storage</h2>
            <p>
              We implement industry-standard administrative, technical, and physical security measures to protect your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Encrypted Transmission:</strong> All data exchanged between the App and servers is encrypted using HTTPS/SSL protocols.</li>
              <li><strong className="text-white">Secure Local Storage:</strong> Sensitive tokens and credentials on your device are stored using secure local storage mechanisms (<code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-300">flutter_secure_storage</code>).</li>
              <li><strong className="text-white">Access Controls:</strong> Database access is limited strictly to authorized operations and secured via Firebase Security Rules.</li>
            </ul>
            <p className="text-xs text-gray-400 italic">
              While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Posting the updated Privacy Policy in the App or on our website.</li>
              <li>Updating the <strong className="text-white">&quot;Last Updated&quot;</strong> date at the top of this policy.</li>
            </ul>
            <p className="text-xs text-gray-400">
              You are advised to review this Privacy Policy periodically for any changes. Continued use of the App after updates constitutes acceptance of the modified policy.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">10. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
            </p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
              <p className="text-sm"><strong className="text-white">App Name:</strong> Nothing Live</p>
              <p className="text-sm"><strong className="text-white">Package Name:</strong> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.nothinglive.app</code></p>
              <p className="text-sm">
                <strong className="text-white">Developer / Support Email:</strong>{" "}
                <a href="mailto:nothinglive@gmail.com" className="text-pink-400 font-mono underline">
                  nothinglive@gmail.com
                </a>
              </p>
              <p className="text-sm"><strong className="text-white">In-App Support:</strong> Settings &gt; Feedback &amp; Help</p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
