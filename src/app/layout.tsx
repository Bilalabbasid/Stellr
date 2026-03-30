import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stellr — Reputation · Elevated",
  description:
    "Stellr is an AI-powered reputation management platform for premium restaurants in Pakistan. Automate Google review responses, grow star ratings, and put a QR stand on every table.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
