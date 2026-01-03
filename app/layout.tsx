import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import AnalyticsTracker from "../components/AnalyticsTracker";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abstrak Labs | Humans + AI, done right.",
  description: "Abstrak Labs builds B2B and consumer products that act as sidekicks for human potential. We architect ecosystems for efficiency and delight.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <AnalyticsTracker />
      </body>
    </html>
  );
}



