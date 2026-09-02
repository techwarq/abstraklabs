import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { absoluteUrl } from "../../lib/site";

const ACCENT = "#92A9E1";

export const metadata: Metadata = {
  title: "Privacy Policy — Talo by Abstrak Labs",
  description: "How Talo by Abstrak Labs collects, uses and protects your information.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Talo by Abstrak Labs",
    description: "How Talo by Abstrak Labs collects, uses and protects your information.",
    url: absoluteUrl("/privacy"),
    type: "website",
  },
};

const sections = [
  {
    title: "Information we collect",
    items: [
      { label: "Contact details", text: "name and email address when you submit a task, sign up for updates, or contact us." },
      { label: "Task content", text: "the instructions, files, links and criteria you give us so a worker can complete your task." },
      { label: "Payment information", text: "handled by our payment processor. We do not store full card numbers on our own servers." },
      {
        label: "Usage data",
        text: "pages visited, general location (country/region) and device/browser type, collected via privacy-respecting analytics (Vercel Analytics). This does not use third-party advertising cookies.",
      },
    ],
  },
  {
    title: "How we use it",
    items: [
      { text: "To complete the task you send us and deliver the result." },
      { text: "To send task updates, estimates, receipts and — if you opt in — product updates." },
      { text: "To improve reliability, pricing accuracy and the workflows we use to complete tasks." },
      { text: "To detect abuse, fraud and violations of our terms." },
    ],
  },
  {
    title: "How we share it",
    items: [
      { text: "We do not sell your personal information." },
      { text: "We share data with service providers who help us operate — payment processing, hosting (Vercel) and analytics — under agreements that limit their use of it to providing that service." },
      { text: "We may disclose information if required by law, or to protect the rights, safety or property of Talo, our users or the public." },
    ],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#EFEEEC] text-[#141414]">
      <div className="fixed inset-0 bg-lines-soft pointer-events-none opacity-[0.7]" />

      <div className="relative z-10 max-w-[1920px] mx-auto px-3 md:px-5">
        <header className="sticky top-3 md:top-4 z-50 pt-3 md:pt-4 flex justify-center">
          <div className="w-full max-w-[980px] bg-[#141414] text-white rounded-full pl-4 pr-2 py-2 flex items-center justify-between gap-4 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)]">
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/talo-logo-mark.png" alt="Talo" width={329} height={140} className="h-7 w-auto" priority />
            </Link>
            <Link
              href="/hire"
              className="bg-white text-[#141414] text-[12.5px] font-semibold px-4 py-2 rounded-full hover:bg-white/90 hover:scale-[1.04] active:scale-[0.97] transition-all whitespace-nowrap"
            >
              Hire a worker — $10/hr
            </Link>
          </div>
        </header>

        <section className="rounded-[22px] bg-white border border-black/[0.06] shadow-[0_2px_16px_-4px_rgba(20,20,20,0.06)] overflow-hidden mt-8 md:mt-12 mb-6">
          <div className="px-6 md:px-10 py-10 md:py-12 border-b border-black/[0.06]">
            <div className="text-[11px] font-semibold tracking-[0.08em] uppercase" style={{ color: ACCENT }}>
              Legal — Last updated September 2026
            </div>
            <h1 className="text-[32px] md:text-[42px] leading-[1.1] tracking-[-0.02em] font-semibold mt-3">Privacy Policy</h1>
            <p className="text-[14px] leading-relaxed text-black/55 mt-4 max-w-[640px]">
              This policy explains what information Talo, a product by Abstrak Labs (&quot;Talo&quot;, &quot;we&quot;, &quot;us&quot;), collects when
              you use talo.abstraklabs.com or hire an AI freelancer through us, and how we use, share and protect it.
            </p>
          </div>

          <div className="px-6 md:px-10 py-8 md:py-10">
            {sections.map((s) => (
              <div key={s.title} className="mb-8 last:mb-0">
                <h2 className="text-[16px] font-semibold">{s.title}</h2>
                <ul className="mt-3 space-y-2.5">
                  {s.items.map((it, i) => (
                    <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed text-black/65">
                      <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: ACCENT }} />
                      <span>
                        {it.label && <span className="font-semibold text-black/85">{it.label} — </span>}
                        {it.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="text-[16px] font-semibold">Data retention</h2>
              <p className="mt-3 text-[13.5px] leading-relaxed text-black/65 max-w-[720px]">
                We keep task data and account information for as long as needed to deliver the work, support you afterward, and meet legal or
                accounting requirements. You can ask us to delete your data at any time — see contact details below.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[16px] font-semibold">Your choices</h2>
              <ul className="mt-3 space-y-2.5">
                <li className="flex gap-2.5 text-[13.5px] leading-relaxed text-black/65">
                  <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: ACCENT }} />
                  <span>Unsubscribe from product update emails at any time using the link in those emails.</span>
                </li>
                <li className="flex gap-2.5 text-[13.5px] leading-relaxed text-black/65">
                  <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: ACCENT }} />
                  <span>Request a copy of, correction to, or deletion of your personal information by emailing us.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-[16px] font-semibold">Security</h2>
              <p className="mt-3 text-[13.5px] leading-relaxed text-black/65 max-w-[720px]">
                We use industry-standard safeguards (encryption in transit, access controls) to protect your information. No method of
                transmission or storage is 100% secure, and we can&apos;t guarantee absolute security.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-[16px] font-semibold">Changes to this policy</h2>
              <p className="mt-3 text-[13.5px] leading-relaxed text-black/65 max-w-[720px]">
                We may update this policy as Talo evolves. Material changes will be reflected by updating the &quot;Last updated&quot; date above.
              </p>
            </div>

            <div className="mt-9 rounded-xl bg-[#F5F4F1] px-5 py-4">
              <div className="text-[13px] font-semibold">Questions or requests?</div>
              <div className="text-[13px] text-black/60 mt-1">
                Email <a href="mailto:hello@abstraklabs.com" className="underline hover:text-black transition-colors">hello@abstraklabs.com</a> —
                we typically reply within hours.
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/hire"
                className="bg-[#141414] text-white text-[12.5px] font-semibold px-6 py-3 rounded-full hover:bg-black/85 transition-colors"
              >
                Hire a worker →
              </Link>
              <Link
                href="/"
                className="bg-white border border-black/15 text-[12.5px] font-semibold px-6 py-3 rounded-full hover:bg-[#F5F4F1] transition-colors"
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>

        <footer className="py-6 text-[11px] tracking-[0.06em] uppercase text-black/40 flex justify-between">
          <Link href="/" className="hover:text-black/60 transition-colors">← Back to home</Link>
          <span>© 2026 Talo by Abstrak Labs</span>
        </footer>
      </div>
    </main>
  );
}
