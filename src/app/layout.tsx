import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "Home - My Debt Change",
  description: "A simple debt repayment guide for beginners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="AW-16904986183"/>
      <script async src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </html>
  );
}
