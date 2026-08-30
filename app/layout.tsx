import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import AnalyticsTracker from "../components/AnalyticsTracker";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abstrak Labs | Stop Hiring People for Work AI Can Do — $10/hr",
  description: "You have the task. We have the agents. Give us research, data, lead gen, browser tasks — we deliver completed work at $10/hr. Don't learn automation, don't hire freelancers.",
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



