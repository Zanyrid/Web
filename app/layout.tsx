import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Blueprint — Design That Captivates Today & Inspires Tomorrow",
  description: "Architecting bold visual languages for growth. Brand strategy, digital identity, and product design for modern ambitious brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#0c0d0d] text-white font-sans antialiased selection:bg-neutral-800 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}

