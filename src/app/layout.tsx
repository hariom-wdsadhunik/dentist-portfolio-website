import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Dental Care | Premium Family & Cosmetic Dentistry",
  description: "State-of-the-art, pain-free dental care. General dentistry, Invisalign, teeth whitening, and dental implants. Book your appointment online today!",
  keywords: ["Dentist", "Cosmetic Dentistry", "Invisalign", "Dental Implants", "Teeth Whitening", "Emergency Dentist"],
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0284c7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-[#334155] font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
