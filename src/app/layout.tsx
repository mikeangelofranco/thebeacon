import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Beacon — Clarity in a Noisy World",
  description:
    "A Philippine-based publication providing context, perspective, and thought-provoking discussions on current events, society, culture, and more.",
  keywords: [
    "The Beacon",
    "Philippines",
    "current events",
    "context",
    "perspective",
    "discussion",
    "Cebu",
    "news",
    "editorial",
  ],
  openGraph: {
    title: "The Beacon — Clarity in a Noisy World",
    description:
      "Guiding Filipinos through the noise with context, perspective, and thoughtful discussion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-navy text-ivory">
        {children}
      </body>
    </html>
  );
}
