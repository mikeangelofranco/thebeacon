import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Beacon | Independent Perspectives on Philippine News, Politics & Public Affairs",
  description:
    "Independent perspectives on Philippine news, politics, and public affairs. Seeking truth. Questioning power. Encouraging informed opinions. Rooted in Lapu-Lapu City, Cebu.",
  keywords: [
    "The Beacon",
    "Philippines",
    "Philippine news",
    "politics",
    "public affairs",
    "Lapu-Lapu City",
    "Cebu",
    "Visayas",
    "budget transparency",
    "investigative",
    "due process",
    "editorial",
    "current events",
    "context",
    "perspective",
  ],
  openGraph: {
    title: "The Beacon | Lapu-Lapu City",
    description:
      "Independent perspectives on Philippine news, politics, and public affairs. Seeking truth. Questioning power. Encouraging informed opinions.",
    url: "https://thebeacon.plughubcore.com",
    siteName: "The Beacon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Beacon | Lapu-Lapu City",
    description:
      "Independent perspectives on Philippine news, politics, and public affairs. Seeking truth. Questioning power. Encouraging informed opinions.",
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
