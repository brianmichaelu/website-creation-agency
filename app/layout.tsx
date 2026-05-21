import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lub Run Enterprises | Website Creation Services",
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
