import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA & Copyright Policy - Tiamo Live Pro",
  description: "Digital Millennium Copyright Act (DMCA) policies, takedown notices, counter-notification procedures, and three-strike policy for Tiamo Live Pro.",
};

export default function CopyrightPolicyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-white/10 space-y-8">
        
        <div className="space-y-3 border-b border-white/10 pb-6">
          <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            Intellectual Property
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">DMCA &amp; Copyright Policy</h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <p><span className="font-semibold text-gray-300">Effective Date:</span> July 23, 2026</p>
            <p><span className="font-semibold text-gray-300">Last Updated:</span> July 23, 2026</p>
            <p><span className="font-semibold text-gray-300">Package:</span> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.tiamolivepro.app</code></p>
          </div>
        </div>

        <div className="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <p>
              <strong className="text-white">Tiamo Live Pro</strong> respects the intellectual property rights of creators, broadcasters, musicians, and artists. We expect all users, hosts, and content creators on our platform to do the same.
            </p>
            <p className="text-xs text-gray-300">
              In accordance with the <strong className="text-white">Digital Millennium Copyright Act (DMCA)</strong> and international copyright laws, <strong className="text-white">Tiamo Live Pro</strong> will respond expeditiously to notices of alleged copyright infringement committed using our application.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. Reporting Copyright Infringement (DMCA Takedown Notice)</h2>
            <p>
              If you are a copyright owner, or authorized to act on behalf of one, and believe that any content hosted or broadcasted on <strong className="text-white">Tiamo Live Pro</strong> infringes upon your copyright, please submit a written DMCA Notice containing the following information:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Identification of Copyrighted Work:</strong> A description of the copyrighted work claimed to have been infringed (or a representative list of works).</li>
              <li><strong className="text-white">Identification of Infringing Content:</strong> The exact URL, live stream ID, host user ID, or screenshot/link pointing to the infringing material on Tiamo Live Pro.</li>
              <li><strong className="text-white">Contact Information:</strong> Your full legal name, company name (if applicable), physical address, telephone number, and email address.</li>
              <li><strong className="text-white">Good Faith Statement:</strong> A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
              <li><strong className="text-white">Accuracy &amp; Penalty Statement:</strong> A statement made under penalty of perjury that the information in the notification is accurate and that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
              <li><strong className="text-white">Signature:</strong> A physical or electronic signature of the copyright owner or authorized representative.</li>
            </ol>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2 mt-3">
              <p className="text-sm"><strong className="text-white">Designated Copyright Agent Email:</strong> <a href="mailto:tiamolivepro@gmail.com" className="text-pink-400 font-mono underline">tiamolivepro@gmail.com</a></p>
              <p className="text-sm"><strong className="text-white">Subject Line:</strong> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-300">&quot;DMCA Takedown Notice&quot;</code></p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. DMCA Counter-Notification Procedure</h2>
            <p>
              If your live stream, status post, or media file was removed due to a copyright takedown notice and you believe this was due to a mistake or misidentification, you may submit a Counter-Notification containing:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300">
              <li>Identification of the material that was removed and its location before removal.</li>
              <li>Your full legal name, address, phone number, and user ID.</li>
              <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification.</li>
              <li>Your consent to the jurisdiction of applicable courts for legal proceedings.</li>
              <li>Your physical or electronic signature.</li>
            </ol>
            <p className="text-sm">
              Send counter-notices to <a href="mailto:tiamolivepro@gmail.com" className="text-pink-400 font-mono underline">tiamolivepro@gmail.com</a>.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. Repeat Infringer Policy</h2>
            <p>
              In accordance with DMCA guidelines and Google Play Policies, <strong className="text-white">Tiamo Live Pro</strong> enforces a <strong className="text-pink-400">Three-Strike Policy</strong> for repeat copyright infringers:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">1st Strike:</strong> Removal of infringing content / immediate live stream termination + warning.</li>
              <li><strong className="text-white">2nd Strike:</strong> 7-day broadcast ban and account feature restriction.</li>
              <li><strong className="text-white">3rd Strike:</strong> Permanent account termination, unlinking of creator status, and forfeiture of virtual rewards.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. Contact Copyright Team</h2>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
              <p className="text-sm"><strong className="text-white">App Name:</strong> Tiamo Live Pro</p>
              <p className="text-sm"><strong className="text-white">Package Name:</strong> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.tiamolivepro.app</code></p>
              <p className="text-sm">
                <strong className="text-white">Copyright Agent Email:</strong>{" "}
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
