import type { Metadata } from "next";
import AuthForm from "../../components/auth/AuthForm";
import { absoluteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your Talo workspace.",
  alternates: { canonical: "/sign-in" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Sign In | Talo by Abstrak Labs",
    url: absoluteUrl("/sign-in"),
    type: "website",
  },
};

export default function Page() {
  return <AuthForm mode="sign-in" />;
}
