import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebCraft TZ | Professional Website Creation in Tanzania",
  description:
    "WebCraft TZ creates modern, mobile-friendly business websites for hotels, restaurants, clinics, real estate companies, service providers, shops, and growing brands in Tanzania.",
  keywords: [
    "website creation Tanzania",
    "web design Tanzania",
    "website designer Dar es Salaam",
    "business websites Tanzania",
    "WebCraft TZ",
    "mobile friendly websites",
    "website creation agency",
  ],
  authors: [{ name: "WebCraft TZ" }],
  creator: "WebCraft TZ",
  openGraph: {
    title: "WebCraft TZ | Professional Website Creation in Tanzania",
    description:
      "Modern, mobile-friendly business websites for Tanzanian businesses that need a stronger online presence and easier customer enquiries.",
    type: "website",
    locale: "en_TZ",
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
