"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Instrument_Serif } from "next/font/google";
import * as auth from "../../lib/api/auth";
import { setCachedEmail } from "../../lib/api/session";
import { ApiError } from "../../lib/api/client";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic" });

const ACCENT = "#719DF4";

export default function AuthForm({ mode }: { mode: "sign-in" | "sign-up" }) {
  const router = useRouter();
  const isSignUp = mode === "sign-up";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError("Enter a valid email.");
    if (password.length < 6) return setError("Password must be at least 6 characters.");

    setSubmitting(true);
    try {
      if (isSignUp) {
        await auth.register(email.trim(), password);
      } else {
        await auth.login(email.trim(), password);
      }
      setCachedEmail(email.trim());
      const { userId } = await auth.me();
      router.push(`/${userId}/hire`);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong — try again.");
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#EFEEEC] text-[#141414] flex flex-col">
      <div className="fixed inset-0 bg-lines-soft pointer-events-none opacity-[0.7]" />

      <div className="relative z-10 max-w-[1920px] mx-auto px-3 md:px-5 w-full flex-1 flex flex-col">
        <header className="sticky top-3 md:top-4 z-50 pt-3 md:pt-4 flex justify-center">
          <div className="w-full max-w-[980px] bg-[#141414] text-white rounded-full pl-4 pr-2 py-2 flex items-center justify-between gap-4 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)]">
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/talo-logo-mark.png" alt="Talo" width={329} height={140} className="h-7 w-auto" priority />
            </Link>
            <Link
              href="/"
              className="bg-white text-[#141414] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              ← Back to site
            </Link>
          </div>
        </header>

        <div className="relative z-10 flex-1 flex items-center justify-center p-6 lg:p-10">
          <div className="w-full max-w-[420px]">
            <div className="text-center">
              <h1 className="text-[32px] md:text-[38px] leading-[1.05] tracking-[-0.02em] font-semibold">
                {isSignUp ? (
                  <>
                    Create your <span className={serif.className} style={{ color: ACCENT }}>account</span>
                  </>
                ) : (
                  <>
                    Welcome <span className={serif.className} style={{ color: ACCENT }}>back</span>
                  </>
                )}
              </h1>
              <p className="text-[14px] leading-relaxed text-black/50 mt-4">
                {isSignUp ? "Set up your workspace and start handing off work." : "Sign in to get back to your workspace."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="rounded-[28px] bg-white shadow-[0_4px_24px_-8px_rgba(20,20,20,0.1)] p-2 space-y-1.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  autoFocus
                  className="w-full bg-transparent border-0 rounded-[22px] px-4 py-3.5 text-[14px] placeholder:text-black/30 outline-none focus:outline-none focus:ring-0 appearance-none"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-transparent border-0 rounded-[22px] px-4 py-3.5 text-[14px] placeholder:text-black/30 outline-none focus:outline-none focus:ring-0 appearance-none"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full text-white font-semibold py-3.5 rounded-[22px] transition-all hover:scale-[1.01] active:scale-[0.98] disabled:opacity-60"
                  style={{ background: ACCENT }}
                >
                  {submitting ? "Please wait…" : isSignUp ? "Create account →" : "Sign in →"}
                </button>
              </div>
              {error && <div className="text-[11.5px] text-red-500 text-center mt-3">{error}</div>}
            </form>

            <div className="text-[13px] text-black/50 text-center mt-6">
              {isSignUp ? (
                <>
                  Already have an account?{" "}
                  <Link href="/sign-in" className="font-semibold" style={{ color: ACCENT }}>
                    Sign in
                  </Link>
                </>
              ) : (
                <>
                  New here?{" "}
                  <Link href="/sign-up" className="font-semibold" style={{ color: ACCENT }}>
                    Create an account
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
