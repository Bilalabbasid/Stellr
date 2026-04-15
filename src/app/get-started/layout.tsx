import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "Talk to Stellr about growing your restaurant's Google rating. Fill in your details and Bilal will be in touch within 24 hours.",
  alternates: {
    canonical: "/get-started",
  },
  openGraph: {
    title: "Get started with Stellr",
    description:
      "Talk to Stellr about growing your restaurant's Google rating. We respond within 24 hours.",
    url: "/get-started",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
