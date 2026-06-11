import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divine Touch Therapy Spa | Premium Wellness & Beauty in Nairobi",
  description: "Book massages, facials, nail care, makeup, waxing and more at Divine Touch Therapy Spa in Nairobi. Over 60 treatments available. Online booking with instant confirmation.",
  keywords: "spa nairobi, massage nairobi, nail care, beauty spa, divine touch spa, wellness nairobi, tantric massage, hot stone massage",
  openGraph: {
    title: "Divine Touch Therapy Spa",
    description: "Nairobi's premium wellness sanctuary. 60+ treatments. Book online now.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
