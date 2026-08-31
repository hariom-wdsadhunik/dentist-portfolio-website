import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import MobileActionBar from "@/components/global/MobileActionBar";
import SkipToContent from "@/components/ui/SkipToContent";
import MouseEffect from "@/components/ui/MouseEffect";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Aura Dental Studio | Modern Gentle Dentistry in Bandra West, Mumbai",
  description:
    "Experience stress-free oral care with transparent pricing, 3D digital precision, and soothing comfort amenities at Aura Dental Studio in Bandra West, Mumbai.",
  keywords: [
    "Dentist Mumbai",
    "Dentist Bandra West",
    "Gentle Dentistry Mumbai",
    "Clear Aligners Mumbai",
    "Same Day Crowns Mumbai",
  ],
  authors: [{ name: "Hari Om / Aura Dental Studio Team" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Aura Dental Studio | Modern Gentle Dentistry",
    description:
      "A modern, patient-centric boutique dental studio providing gentle preventive care, precision cosmetic enhancements, and stress-free restorative dentistry in Bandra West, Mumbai.",
    siteName: "Aura Dental Studio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Aura Dental Studio Modern Gentle Dentistry in Mumbai",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0D3B36",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FBF9F5] text-[#1C1917] font-sans">
        <SkipToContent />
        <MouseEffect />
        <Header />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
