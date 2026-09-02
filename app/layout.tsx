import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import AnalyticsTracker from "../components/AnalyticsTracker";
import { JsonLd } from "../components/JsonLd";
import { siteUrl } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hire an AI Freelancer From $10/Hour | Abstrak Labs",
    template: "%s | Abstrak Labs",
  },
  description:
    "Hire an AI freelancer to handle research, data entry, lead generation, data cleaning, document processing and repetitive digital work. Start at $10/hour.",
  applicationName: "Abstrak Labs",
  referrer: "origin-when-cross-origin",
  keywords: [
    "AI freelancer",
    "hire AI freelancer",
    "AI data entry",
    "AI research",
    "AI lead generation",
    "data cleaning",
    "digital labor",
    "Abstrak Labs",
  ],
  authors: [{ name: "Abstrak Labs", url: siteUrl }],
  creator: "Abstrak Labs",
  publisher: "Abstrak Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Abstrak Labs",
    title: "Hire an AI Freelancer From $10/Hour | Abstrak Labs",
    description:
      "Hire an AI freelancer to handle research, data entry, lead generation, data cleaning, document processing and repetitive digital work. Start at $10/hour.",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Abstrak Labs — Digital Labor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire an AI Freelancer From $10/Hour | Abstrak Labs",
    description:
      "Hire an AI freelancer to handle research, data entry, lead generation, data cleaning, document processing and repetitive digital work. Start at $10/hour.",
    images: [`${siteUrl}/logo.png`],
  },
  icons: {
    icon: "/favicon.png?v=2",
    shortcut: "/favicon.png?v=2",
    apple: "/favicon.png?v=2",
  },
  category: "technology",
};

// Global Organization + WebSite JSON-LD — server-rendered for SEO/AEO
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Abstrak Labs",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Abstrak Labs provides AI freelancers for digital business work such as research, data entry, lead generation, data cleaning, document processing and repetitive operations.",
  // sameAs: only add real profiles when available — do not invent
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Abstrak Labs",
  url: siteUrl,
  description:
    "Hire an AI freelancer to handle research, data entry, lead generation, data cleaning, document processing and repetitive digital work. Start at $10/hour.",
  publisher: {
    "@type": "Organization",
    name: "Abstrak Labs",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
    },
  },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
        {children}
        <Analytics />
        <AnalyticsTracker />
      </body>
    </html>
  );
}
