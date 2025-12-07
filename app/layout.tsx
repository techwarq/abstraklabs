import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AbstrakLabs",
  description: "Next.js app with Tailwind CSS",
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
      <body>{children}</body>
    </html>
  );
}



