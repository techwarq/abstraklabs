import type { Metadata } from "next";
import HireClient from "../../components/HireClient";
import { absoluteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "Hire an AI Freelancer — Task Brief",
  description:
    "Describe the digital work you want done — research, data entry, lead generation, cleaning and more. AI freelancer from $10/hour. Plain English, no setup.",
  alternates: { canonical: "/hire" },
  openGraph: {
    title: "Hire an AI Freelancer — Task Brief | Abstrak Labs",
    description: "Describe the work — we handle the workflow and deliver the result. From $10/hour.",
    url: absoluteUrl("/hire"),
    type: "website",
    images: [{ url: absoluteUrl("/og-image.jpg"), width: 1200, height: 675 }],
  },
  twitter: {
    card: "summary",
    title: "Hire an AI Freelancer — Task Brief | Abstrak Labs",
    description: "Describe the work — we handle the workflow and deliver the result. From $10/hour.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <HireClient />;
}
