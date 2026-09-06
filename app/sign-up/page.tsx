import type { Metadata } from "next";
import AuthForm from "../../components/auth/AuthForm";
import { absoluteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your Talo workspace account.",
  alternates: { canonical: "/sign-up" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Sign Up | Talo by Abstrak Labs",
    url: absoluteUrl("/sign-up"),
    type: "website",
  },
};

export default function Page() {
  return <AuthForm mode="sign-up" />;
}
