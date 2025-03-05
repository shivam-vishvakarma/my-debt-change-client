import type { Metadata } from "next";
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
      <script async src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
    </html>
  );
}
