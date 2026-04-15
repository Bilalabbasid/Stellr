import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE = "https://stellr.biz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Stellr — AI Reputation Management for Premium Restaurants in Pakistan",
    template: "%s · Stellr",
  },
  description:
    "Stellr automates Google review responses for premium restaurants in Islamabad, Lahore & Karachi. Grow your star rating, turn diners into regulars, and protect your brand — on autopilot.",
  applicationName: "Stellr",
  keywords: [
    "restaurant reputation management Pakistan",
    "Google review automation",
    "AI review replies",
    "restaurant marketing Islamabad",
    "restaurant marketing Lahore",
    "restaurant marketing Karachi",
    "QR code review stand",
    "restaurant Google rating",
    "reputation management for restaurants",
    "premium restaurants Pakistan",
  ],
  authors: [{ name: "Bilal Abbasi", url: SITE }],
  creator: "Bilal Abbasi",
  publisher: "Stellr",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE,
    siteName: "Stellr",
    title: "Stellr — Reputation · Elevated",
    description:
      "AI-powered Google review automation and premium QR table stands for Pakistan's top restaurants. Grow your rating on autopilot.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stellr — Reputation · Elevated",
    description:
      "AI-powered Google review automation for premium restaurants in Pakistan. Grow your rating on autopilot.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#082312",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stellr",
  legalName: "Stellr",
  url: SITE,
  logo: `${SITE}/icon.svg`,
  description:
    "AI-powered reputation management platform for premium restaurants in Pakistan. Automates Google review responses and provides premium QR stands for tables.",
  email: "bilal@stellr.biz",
  founder: {
    "@type": "Person",
    name: "Bilal Abbasi",
    jobTitle: "Founder & CEO",
  },
  foundingDate: "2025",
  areaServed: [
    { "@type": "City", name: "Islamabad" },
    { "@type": "City", name: "Lahore" },
    { "@type": "City", name: "Karachi" },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
  slogan: "Reputation · Elevated",
  sameAs: [SITE],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Stellr",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI that responds to every Google review in your restaurant's voice, plus premium QR stands to grow review volume.",
  offers: {
    "@type": "Offer",
    priceCurrency: "PKR",
    availability: "https://schema.org/InStock",
  },
  provider: {
    "@type": "Organization",
    name: "Stellr",
    url: SITE,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
