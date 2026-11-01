import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "In-App Purchase & Refund Policy - Nothing Live",
  description: "In-App Purchase and Refund Policy for Nothing Live virtual coins, diamonds, gifts, Google Play billing rules, and GPA receipt claims.",
};

export default function RefundPolicyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-white/10 space-y-8">
        
        <div className="space-y-3 border-b border-white/10 pb-6">
          <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            Billing &amp; Purchases
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">In-App Purchase &amp; Refund Policy</h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <p><span className="font-semibold text-gray-300">Effective Date:</span> July 23, 2026</p>
            <p><span className="font-semibold text-gray-300">Last Updated:</span> July 23, 2026</p>
            <p><span className="font-semibold text-gray-300">Package:</span> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.nothinglive.app</code></p>
          </div>
        </div>

        <div className="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <p>
              Thank you for using <strong className="text-white">Nothing Live</strong>! This <strong className="text-white">Refund Policy</strong> governs all in-app purchases, virtual currency (coins/diamonds), virtual gifts, VIP subscriptions, and digital items acquired within the <strong className="text-white">Nothing Live</strong> mobile application.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. General Purchase Terms</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>All in-app purchases on Android devices are securely processed via <strong className="text-white">Google Play In-App Billing</strong> or official payment channels.</li>
              <li>Virtual coins, diamonds, VIP badges, and gifts are <strong className="text-white">digital virtual goods</strong>. They have no real-world monetary value, cannot be converted into legal tender, and are strictly non-transferable outside official app features.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. Non-Refundable Policy</h2>
            <p>Except as required by applicable consumer protection laws or explicit Google Play Refund Policies:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Consumed Virtual Goods:</strong> Purchases of virtual coins or diamonds that have already been partially or fully spent, gifted to hosts, or used in mini-games are <strong className="text-white">strictly non-refundable</strong>.</li>
              <li><strong className="text-white">Virtual Gifts &amp; Subscriptions:</strong> Virtual gifts sent during live streams or active VIP privileges are non-refundable once delivered.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. Google Play Refund Process</h2>
            <p>All Android in-app purchases are subject to Google Play’s refund rules:</p>
            
            <div className="space-y-4 pt-2">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                <h3 className="text-lg font-semibold text-pink-400">A. Refunds Within 48 Hours</h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  If you made a purchase less than 48 hours ago through Google Play In-App Billing, you can request a direct refund directly through Google Play by visiting your{" "}
                  <a href="https://play.google.com/store/account/orderhistory" target="_blank" rel="noopener noreferrer" className="text-pink-400 underline">
                    Google Play Order History &rarr;
                  </a>
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                <h3 className="text-lg font-semibold text-pink-400">B. Refunds After 48 Hours</h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  If more than 48 hours have passed, refunds are handled at the sole discretion of <strong className="text-white">Nothing Live</strong> customer support under valid exceptional circumstances (e.g., unauthorized fraudulent transactions or technical billing glitches where coins were paid for but not credited).
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. Exceptional Refund Scenarios &amp; Uncredited Purchases</h2>
            <p>If you paid for coins or virtual items but did not receive them due to a technical server error:</p>
            
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
              <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-200">
                <li><strong className="text-white">Do not repeat the purchase.</strong></li>
                <li>
                  Send an email to{" "}
                  <a href="mailto:nothinglive@gmail.com" className="text-pink-400 font-mono underline">
                    nothinglive@gmail.com
                  </a>{" "}
                  within <strong className="text-white">7 days</strong> of the purchase.
                </li>
                <li>
                  Include the following details:
                  <ul className="list-disc pl-5 pt-1 space-y-1 text-gray-300 text-xs sm:text-sm">
                    <li>Your <strong className="text-white">Nothing Live User ID</strong>.</li>
                    <li>Your <strong className="text-white">Google Play Order Receipt GPA Number</strong> (e.g., <code className="bg-white/10 px-1 py-0.5 rounded text-pink-300">GPA.1234-5678-9012-34567</code>).</li>
                    <li>Transaction date, time, and screenshot of purchase confirmation.</li>
                  </ul>
                </li>
              </ol>
              <p className="text-xs text-gray-400 italic pt-2">
                Our billing team will verify your GPA order number with Google Play and either manually credit your missing coins or initiate a transaction reversal within 3 to 5 business days.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">5. Chargebacks &amp; Fraud Prevention</h2>
            <p>Initiating unauthorized credit card chargebacks or fraudulent refund claims while continuing to use purchased digital goods will result in:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Immediate deduction of equivalent coin/diamond balances.</li>
              <li>Negative coin balance lock.</li>
              <li>Permanent account suspension for payment fraud.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">6. Contact Support</h2>
            <p>For purchase inquiries or billing assistance:</p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
              <p className="text-sm"><strong className="text-white">App Name:</strong> Nothing Live</p>
              <p className="text-sm"><strong className="text-white">Package Name:</strong> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.nothinglive.app</code></p>
              <p className="text-sm">
                <strong className="text-white">Billing Support Email:</strong>{" "}
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
