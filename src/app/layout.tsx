import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import BackToTop from "@/components/BackToTop";
import MobileFloatingDownload from "@/components/MobileFloatingDownload";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Nothing Live - Premium Live Streaming & Creator Platform",
  description:
    "Experience the next generation live streaming platform with HD video, interactive live rooms, virtual gifts, and instant creator monetization.",
  keywords: [
    "Nothing Live",
    "Nothing Live App",
    "Live Streaming App",
    "Virtual Gifts",
    "Creator Earnings",
    "Private Live Rooms",
    "HD Broadcast",
  ],
  authors: [{ name: "Nothing Live Team" }],
  metadataBase: new URL("https://nothinglive.app"),
  openGraph: {
    title: "Nothing Live - Go Live. Connect. Earn.",
    description:
      "Join 100K+ broadcasers on Nothing Live. Stream in 1080p, chat in real-time, send 3D gifts, and monetize your content.",
    url: "https://nothinglive.app",
    siteName: "Nothing Live",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Nothing Live Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nothing Live - Go Live. Connect. Earn.",
    description:
      "Experience the next-gen live streaming mobile app with virtual gifts and instant payouts.",
    images: ["/logo.png"],
    creator: "@nothinglive",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-[#0f1126] text-white selection:bg-[#D4AF37] selection:text-white">

        <Navbar />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
        <MobileFloatingDownload />
      </body>
    </html>
  );
}
