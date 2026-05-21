import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebCraft TZ | Website Creation Services in Tanzania",
  description:
    "Modern, mobile-friendly website creation services for businesses in Dar es Salaam, Tanzania.",
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
