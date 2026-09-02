import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "../../lib/site";

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

export default function Page() {
  return (
    <main className="min-h-screen bg-[#EDE8D0] text-black">
      <div className="fixed inset-0 bg-grid-brutalist pointer-events-none opacity-[0.22]" />
      <div className="relative max-w-[1440px] mx-auto border-x border-black/[0.08] bg-[#EDE8D0]">
        <header className="sticky top-0 bg-[#EDE8D0]/90 backdrop-blur-[8px] border-b border-black/[0.08] px-6 lg:px-8 h-[56px] flex items-center justify-between">
          <Link href="/" className="text-[11px] font-bold">TALO</Link>
          <Link href="/hire" className="bg-black text-white mono text-[11px] px-4 py-2.5">Hire a worker — $10/hr →</Link>
        </header>

        <section className="px-6 lg:px-8 py-10 border-b border-black/[0.08] bg-white">
          <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">Legal — Last updated September 2026</div>
          <h1 className="pixel-head text-[28px] lg:text-[36px] leading-[0.9] mt-3">PRIVACY POLICY</h1>
          <p className="mono text-[12px] leading-relaxed text-black/60 mt-4 max-w-[720px]">
            This policy explains what information Talo, a product by Abstrak Labs (&quot;Talo&quot;, &quot;we&quot;, &quot;us&quot;), collects when you use talo.abstraklabs.com
            or hire an AI freelancer through us, and how we use, share and protect it.
          </p>
        </section>

        <section className="bg-white border-b border-black/[0.08]">
          <div className="px-6 lg:px-8 py-8">
            <h2 className="text-[18px] font-bold">Information we collect</h2>
            <ul className="mono text-[12.5px] leading-relaxed text-black/70 mt-3 space-y-2 list-disc pl-5">
              <li><span className="font-bold">Contact details</span> — name and email address when you submit a task, sign up for updates, or contact us.</li>
              <li><span className="font-bold">Task content</span> — the instructions, files, links and criteria you give us so a worker can complete your task.</li>
              <li><span className="font-bold">Payment information</span> — handled by our payment processor. We do not store full card numbers on our own servers.</li>
              <li><span className="font-bold">Usage data</span> — pages visited, general location (country/region) and device/browser type, collected via privacy-respecting analytics (Vercel Analytics). This does not use third-party advertising cookies.</li>
            </ul>

            <h2 className="text-[18px] font-bold mt-8">How we use it</h2>
            <ul className="mono text-[12.5px] leading-relaxed text-black/70 mt-3 space-y-2 list-disc pl-5">
              <li>To complete the task you send us and deliver the result.</li>
              <li>To send task updates, estimates, receipts and — if you opt in — product updates.</li>
              <li>To improve reliability, pricing accuracy and the workflows we use to complete tasks.</li>
              <li>To detect abuse, fraud and violations of our terms.</li>
            </ul>

            <h2 className="text-[18px] font-bold mt-8">How we share it</h2>
            <ul className="mono text-[12.5px] leading-relaxed text-black/70 mt-3 space-y-2 list-disc pl-5">
              <li>We do not sell your personal information.</li>
              <li>We share data with service providers who help us operate — payment processing, hosting (Vercel) and analytics — under agreements that limit their use of it to providing that service.</li>
              <li>We may disclose information if required by law, or to protect the rights, safety or property of Talo, our users or the public.</li>
            </ul>

            <h2 className="text-[18px] font-bold mt-8">Data retention</h2>
            <p className="mono text-[12.5px] leading-relaxed text-black/70 mt-3">
              We keep task data and account information for as long as needed to deliver the work, support you afterward, and meet legal or accounting
              requirements. You can ask us to delete your data at any time — see contact details below.
            </p>

            <h2 className="text-[18px] font-bold mt-8">Your choices</h2>
            <ul className="mono text-[12.5px] leading-relaxed text-black/70 mt-3 space-y-2 list-disc pl-5">
              <li>Unsubscribe from product update emails at any time using the link in those emails.</li>
              <li>Request a copy of, correction to, or deletion of your personal information by emailing us.</li>
            </ul>

            <h2 className="text-[18px] font-bold mt-8">Security</h2>
            <p className="mono text-[12.5px] leading-relaxed text-black/70 mt-3">
              We use industry-standard safeguards (encryption in transit, access controls) to protect your information. No method of transmission or
              storage is 100% secure, and we can&apos;t guarantee absolute security.
            </p>

            <h2 className="text-[18px] font-bold mt-8">Changes to this policy</h2>
            <p className="mono text-[12.5px] leading-relaxed text-black/70 mt-3">
              We may update this policy as Talo evolves. Material changes will be reflected by updating the &quot;Last updated&quot; date above.
            </p>

            <div className="mt-8 border border-black/[0.08] bg-[#EDE8D0] p-4 mono text-[11px] leading-relaxed">
              <div className="font-bold">Questions or requests?</div>
              <div className="mt-1">
                Email <a href="mailto:hello@abstraklabs.com" className="underline">hello@abstraklabs.com</a> — we typically reply within hours.
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Link href="/hire" className="bg-[#92A9E1] text-white mono text-[11px] px-6 py-3">Hire a worker →</Link>
              <Link href="/" className="bg-white border border-black/15 mono text-[11px] px-6 py-3">Back to home</Link>
            </div>
          </div>
        </section>

        <footer className="px-6 lg:px-8 py-6 mono text-[10px] tracking-[0.14em] uppercase text-black/40 flex justify-between">
          <Link href="/">← Back to home</Link>
          <span>© 2026 Talo by Abstrak Labs</span>
        </footer>
      </div>
    </main>
  );
}
