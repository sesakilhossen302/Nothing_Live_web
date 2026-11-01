import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion & Retention Policy - Nothing Live",
  description: "Data Deletion Policy, purging timelines, data retention exemptions, and erasure rights for Nothing Live.",
};

export default function DataDeletionPolicyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-white/10 space-y-8">
        
        <div className="space-y-3 border-b border-white/10 pb-6">
          <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            Data Privacy &amp; Erasure
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Data Deletion &amp; Data Retention Policy</h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <p><span className="font-semibold text-gray-300">Effective Date:</span> July 23, 2026</p>
            <p><span className="font-semibold text-gray-300">Last Updated:</span> July 23, 2026</p>
            <p><span className="font-semibold text-gray-300">Package:</span> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.nothinglive.app</code></p>
          </div>
        </div>

        <div className="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <p>
              This <strong className="text-white">Data Deletion Policy</strong> describes how <strong className="text-white">Nothing Live</strong> handles the deletion, purging, and retention of user data when an account is deleted or when data retention periods expire.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. User Right to Data Erasure</h2>
            <p>
              In accordance with global privacy regulations (GDPR, CCPA, and Google Play Data Policies), all users of <strong className="text-white">Nothing Live</strong> have the right to request the permanent deletion of their personal information and user-generated content.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. Categories of Data Deleted Upon Account Erasure</h2>
            <p>
              When a user account deletion request is completed, the following data categories are <strong className="text-white">permanently purged</strong> from our active production databases:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Account Identification Data:</strong> Display name, email address, phone number, password hashes, profile avatar, gender, date of birth, and biography.</li>
              <li><strong className="text-white">User-Generated Content:</strong> Uploaded status feed photos/videos, bio posts, public comments, and uploaded audio/video files.</li>
              <li><strong className="text-white">Communication Data:</strong> Direct 1-on-1 chat logs, voice messages, and inbox notification records.</li>
              <li><strong className="text-white">Social &amp; Room Data:</strong> Friend lists, follower/following connections, profile visitor logs, and room history.</li>
              <li><strong className="text-white">Virtual Balances:</strong> Unused coin balances, earned diamonds, store inventory, VIP status history, and level progress (forfeited).</li>
            </ol>
          </section>

          {/* Section 3 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. Data Purging Timeline</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">Immediate Action:</strong> Upon confirming deletion, your account is immediately deactivated, preventing any login, broadcast, or room participation.</li>
              <li><strong className="text-white">Active Database Purge:</strong> Personal profiles, chat messages, and social connections are deleted from primary cloud databases (Firebase Cloud Firestore / Realtime DB) within <strong className="text-white">30 days</strong>.</li>
              <li><strong className="text-white">Backup &amp; Server Log Rotation:</strong> Residual data in encrypted server backups and cold storage archives is overwritten and permanently purged within <strong className="text-white">60 to 90 days</strong> as part of standard server maintenance.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. Retained Data Exemptions (Legal &amp; Financial Requirements)</h2>
            <p>
              Certain limited data may be retained after account deletion where strictly required by applicable law, safety regulations, or financial auditing:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">In-App Transaction Receipts:</strong> Google Play purchase receipts, top-up transaction IDs, and payout logs are retained for <strong className="text-white">up to 7 years</strong> to comply with tax, financial auditing, and anti-money laundering (AML) laws.</li>
              <li><strong className="text-white">Safety &amp; Abuse Reports:</strong> Aggregated logs related to fraudulent activity, child exploitation reports, severe community violations, or legal subpoenas are retained in anonymized form to maintain platform security and assist law enforcement.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">5. How to Initiate Data Deletion</h2>
            <p>
              Users can request data deletion through two methods detailed in our <a href="/account-delete" className="text-pink-400 underline hover:text-pink-300">Account Deletion Guide</a>:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-white">In-App:</strong> Profile &gt; Settings &gt; Account &amp; Security &gt; Delete Account.</li>
              <li><strong className="text-white">Email Request:</strong> Send an email to <a href="mailto:nothinglive@gmail.com" className="text-pink-400 font-mono underline">nothinglive@gmail.com</a> with subject <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-300">&quot;Data Deletion Request&quot;</code>.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">6. Contact Us</h2>
            <p>For questions regarding data retention or data privacy practices:</p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
              <p className="text-sm"><strong className="text-white">App Name:</strong> Nothing Live</p>
              <p className="text-sm"><strong className="text-white">Package Name:</strong> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.nothinglive.app</code></p>
              <p className="text-sm">
                <strong className="text-white">Privacy Email:</strong>{" "}
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
