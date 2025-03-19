import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "URL to QR Code Converter",
  description: "Convert any URL to a QR code instantly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2976969141373216"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <body className={geist.className}>{children}</body>
    </html>
  );
}
