import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Deletion Instructions - Nothing Live",
  description: "Official Account Deletion instructions and web deletion request form for Nothing Live in compliance with Google Play Policies.",
};

export default function AccountDeletePage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-white/10 space-y-8">
        
        <div className="space-y-3 border-b border-white/10 pb-6">
          <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            Google Play Compliance
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Account Deletion Request &amp; Instructions</h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <p><span className="font-semibold text-gray-300">App Name:</span> Nothing Live</p>
            <p><span className="font-semibold text-gray-300">Package:</span> <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-400">com.nothinglive.app</code></p>
          </div>
        </div>

        <div className="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
            <p>
              In compliance with <strong className="text-white">Google Play Developer Data Deletion Policies</strong>, <strong className="text-white">Nothing Live</strong> provides all users with full control to delete their account and associated personal data at any time.
            </p>
          </div>

          {/* Method 1 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Method 1: Delete Account Inside the Mobile App (Recommended)</h2>
            <p>You can delete your account directly inside the <strong className="text-white">Nothing Live</strong> app by following these steps:</p>
            <ol className="list-decimal pl-5 space-y-2.5 text-gray-300">
              <li>Open the <strong className="text-white">Nothing Live</strong> app on your mobile device.</li>
              <li>Go to your <strong className="text-white">Profile</strong> tab (bottom right icon).</li>
              <li>Tap the <strong className="text-white">Settings</strong> gear icon in the top right corner.</li>
              <li>Select <strong className="text-white">Account &amp; Security</strong>.</li>
              <li>Tap <strong className="text-pink-400">Delete Account</strong> at the bottom of the screen.</li>
              <li>Read the deletion warning notice carefully.</li>
              <li>Confirm your password or authentication method and tap <strong className="text-red-400">Permanently Delete Account</strong>.</li>
            </ol>
          </section>

          {/* Method 2 */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Method 2: Request Account Deletion via Web or Email</h2>
            <p>If you have uninstalled the app or lost access to your device, you can submit an account deletion request via email:</p>
            
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
              <ol className="list-decimal pl-5 space-y-2.5 text-sm text-gray-200">
                <li>
                  Send an email to{" "}
                  <a href="mailto:nothinglive@gmail.com" className="text-pink-400 font-mono underline">
                    nothinglive@gmail.com
                  </a>{" "}
                  from the email address registered with your Nothing Live account.
                </li>
                <li>
                  Set the email subject as: <code className="bg-white/10 px-1.5 py-0.5 rounded text-pink-300">&quot;Account Deletion Request - [Your Registered Email / User ID]&quot;</code>.
                </li>
                <li>
                  Include the following details in your email body:
                  <ul className="list-disc pl-5 pt-1 space-y-1 text-gray-300 text-xs sm:text-sm">
                    <li>Your <strong className="text-white">User Name &amp; User ID</strong> (if known).</li>
                    <li>Your <strong className="text-white">Registered Email Address or Phone Number</strong>.</li>
                    <li>A brief statement: <em>&quot;I request the permanent deletion of my Nothing Live account and all associated personal data.&quot;</em></li>
                  </ul>
                </li>
              </ol>
              <p className="text-xs text-gray-400 italic pt-2">
                Our support team will verify your identity and process your deletion request within 5 to 7 business days.
              </p>
            </div>
          </section>

          {/* What Happens */}
          <section className="space-y-4 border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white">What Happens When You Delete Your Account?</h2>
            <p>Upon account deletion:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Your profile credentials, display name, avatar, bio, and social feeds will be permanently removed.</li>
              <li>Your authentication records, direct messages, and chat history will be purged from active databases within <strong className="text-white">30 days</strong>.</li>
              <li>All unused virtual items, coin balances, diamond rewards, VIP badges, and levels will be forfeited immediately and cannot be recovered.</li>
              <li>Your device ID hardware association with your user account will be unlinked.</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">Need Assistance?</h2>
            <p>If you experience any issues deleting your account, contact customer support:</p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
              <p className="text-sm">
                <strong className="text-white">Customer Support Email:</strong>{" "}
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
