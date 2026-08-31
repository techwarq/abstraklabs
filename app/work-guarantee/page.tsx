import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "Work Guarantee — Abstrak Labs",
  description:
    "Our work guarantee: if we didn't complete the agreed task correctly, we'll make it right — redo the affected work at no additional charge or refund the applicable amount. See details.",
  alternates: { canonical: "/work-guarantee" },
  openGraph: {
    title: "Work Guarantee — Abstrak Labs",
    description: "If we didn't complete the agreed task correctly, we'll make it right — redo or refund.",
    url: absoluteUrl("/work-guarantee"),
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F5F3] text-black">
      <div className="fixed inset-0 bg-grid-brutalist pointer-events-none opacity-[0.22]" />
      <div className="relative max-w-[1440px] mx-auto border-x border-black/[0.08] bg-[#F5F5F3]">
        <header className="sticky top-0 bg-[#F5F5F3]/90 backdrop-blur-[8px] border-b border-black/[0.08] px-6 lg:px-8 h-[56px] flex items-center justify-between">
          <Link href="/" className="text-[11px] font-bold">ABSTRAK LABS</Link>
          <Link href="/hire" className="bg-black text-white mono text-[11px] px-4 py-2.5">Hire a worker — $10/hr →</Link>
        </header>

        <section className="px-6 lg:px-8 py-10 border-b border-black/[0.08] bg-white">
          <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">Guarantee — $10/hour work</div>
          <h1 className="pixel-head text-[28px] lg:text-[36px] leading-[0.9] mt-3">WORK GUARANTEE</h1>
          <p className="mono text-[12px] leading-relaxed text-black/60 mt-4 max-w-[720px]">
            We don’t ask you to blindly pay for an AI and hope it works. If we didn’t complete the agreed task correctly, we’ll make it right —
            either by redoing the affected work at no additional charge or refunding the applicable amount.
          </p>
        </section>

        <section className="bg-white border-b border-black/[0.08]">
          <div className="px-6 lg:px-8 py-8">
            <h2 className="text-[18px] font-bold">What’s covered</h2>
            <ul className="mono text-[12.5px] leading-relaxed text-black/70 mt-3 space-y-2 list-disc pl-5">
              <li>Work that does not match the agreed requirements you approved in the estimate.</li>
              <li>Incorrect fields, missed records, or unverified output that was supposed to be verified.</li>
              <li>Formatting or structure that doesn’t match the sample output we confirmed.</li>
            </ul>

            <h2 className="text-[18px] font-bold mt-8">What’s not covered</h2>
            <ul className="mono text-[12.5px] leading-relaxed text-black/70 mt-3 space-y-2 list-disc pl-5">
              <li>Changes to requirements after work started.</li>
              <li>Incomplete or ambiguous instructions where we had to make assumptions.</li>
              <li>Work completed correctly according to the agreed scope — even if you expected a different outcome.</li>
              <li>Third-party source errors (site down, data removed, paywall) where we flagged the gap.</li>
            </ul>

            <h2 className="text-[18px] font-bold mt-8">How to request a review</h2>
            <ol className="mono text-[12.5px] leading-relaxed text-black/70 mt-3 space-y-2 list-decimal pl-5">
              <li>Tell us what went wrong within 7 days of delivery — reply to the delivery email or use the dashboard.</li>
              <li>We review the original requirements, your instructions, and the delivered work.</li>
              <li>If we missed the agreed task, we’ll redo the affected portion at no additional charge or refund that portion.</li>
            </ol>

            <h2 className="text-[18px] font-bold mt-8">How payment works</h2>
            <ul className="mono text-[12.5px] leading-relaxed text-black/70 mt-3 space-y-2 list-disc pl-5">
              <li>Before work: you see an estimate (e.g., 4–6 hours) and approve a maximum (e.g., $60 at $10/hour).</li>
              <li>During work: your dashboard shows progress and current cost — no mystery bill.</li>
              <li>After work: you’re charged only for actual time used (e.g., 4h 18m → $43.00), never more than the maximum you approved.</li>
            </ul>

            <div className="mt-8 border border-black/[0.08] bg-[#F5F5F3] p-4 mono text-[11px] leading-relaxed">
              <div className="font-bold">Questions?</div>
              <div className="mt-1">
                Email <a href="mailto:hello@abstraklabs.com" className="underline">hello@abstraklabs.com</a> — we typically reply within hours.
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Link href="/hire" className="bg-[#FF4B00] text-white mono text-[11px] px-6 py-3">Hire a worker →</Link>
              <Link href="/" className="bg-white border border-black/15 mono text-[11px] px-6 py-3">Back to home</Link>
            </div>
          </div>
        </section>

        <footer className="px-6 lg:px-8 py-6 mono text-[10px] tracking-[0.14em] uppercase text-black/40 flex justify-between">
          <Link href="/">← Back to home</Link>
          <span>© 2024 Abstrak Labs</span>
        </footer>
      </div>
    </main>
  );
}
