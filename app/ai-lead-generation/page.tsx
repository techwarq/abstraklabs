import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { absoluteUrl, siteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "AI Lead Generation Freelancer — Hire From $10/Hour",
  description:
    "Hire an AI lead generation freelancer for prospect research, company lists, ICP filtering and contact verification. AI lead generation from $10/hour.",
  alternates: { canonical: "/ai-lead-generation" },
  openGraph: {
    title: "AI Lead Generation Freelancer — Hire From $10/Hour | Abstrak Labs",
    description: "Prospect research, company lists and verified contacts. Hire AI lead generation from $10/hour.",
    url: absoluteUrl("/ai-lead-generation"),
    type: "website",
  },
};

const faqs = [
  { q: "What leads can you generate?", a: "Company lists matching your ICP, decision-makers, and verified contact info — delivered as a clean spreadsheet with source, role, and verification status." },
  { q: "How do you verify contacts?", a: "We cross-check domains, pattern-match emails, and validate deliverability. Low-confidence contacts are flagged, not hidden." },
  { q: "Can you filter by ICP?", a: "Yes — industry, size, tech stack, funding, geography and role. Provide your ICP and we filter, then enrich." },
  { q: "What’s the cost structure?", a: "$10/hour. Example: 1,000 qualified leads in 5h 30m for $55. You see time, volume and cost." },
  { q: "Is this compliant?", a: "We use only public sources and your provided criteria. You are responsible for outreach compliance (e.g., GDPR, CAN-SPAM)." },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Lead Generation Freelancer",
    serviceType: "AI Lead Generation",
    provider: { "@type": "Organization", name: "Abstrak Labs", url: siteUrl },
    url: absoluteUrl("/ai-lead-generation"),
    description: "Hire an AI lead generation freelancer for prospect research, ICP filtering and contact verification from $10/hour.",
    offers: { "@type": "Offer", priceCurrency: "USD", price: "10", unitText: "HOUR", url: absoluteUrl("/hire") },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <main className="min-h-screen bg-[#EDE8D0] text-black">
      <JsonLd data={[serviceJsonLd, faqJsonLd]} />
      <div className="fixed inset-0 bg-grid-brutalist pointer-events-none opacity-[0.22]" />
      <div className="relative max-w-[1440px] mx-auto border-x border-black/[0.08] bg-[#EDE8D0]">
        <header className="sticky top-0 bg-[#EDE8D0]/90 backdrop-blur-[8px] border-b border-black/[0.08] px-6 lg:px-8 h-[56px] flex items-center justify-between">
          <Link href="/" className="text-[11px] font-bold">ABSTRAK LABS</Link>
          <Link href="/hire" className="bg-black text-white mono text-[11px] px-4 py-2.5">Hire a worker — $10/hr →</Link>
        </header>

        <section className="px-6 lg:px-8 py-10 border-b border-black/[0.08]">
          <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">AI Freelancer — Lead Generation</div>
          <h1 className="display-brutalist text-[36px] lg:text-[48px] leading-[0.85] mt-3">Hire an AI Lead Generation Freelancer</h1>
          <p className="text-[15px] leading-relaxed text-black/70 mt-4 max-w-[720px]">
            Abstrak Labs provides AI freelancers for lead generation — prospect research, company lists, ICP filtering, decision-maker
            enrichment and contact verification. <strong>Hire an AI lead generation worker from $10/hour.</strong>
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/hire" className="bg-[#719DF4] text-white mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
            <Link href="/work" className="bg-white border border-black/15 mono text-[11px] px-6 py-3">See sample work →</Link>
          </div>
        </section>

        <section className="bg-white border-b border-black/[0.08]">
          <div className="px-6 lg:px-8 py-8">
            <h2 className="text-[18px] font-bold">What can an AI lead generation freelancer do?</h2>
            <ul className="mt-4 grid md:grid-cols-2 gap-2 mono text-[12.5px] text-black/70">
              <li>• Prospect research by ICP</li>
              <li>• Company list building</li>
              <li>• Decision-maker mapping</li>
              <li>• Email pattern & verification</li>
              <li>• LinkedIn + domain enrichment</li>
              <li>• List deduplication & cleaning</li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-black/[0.08] border-t border-black/[0.08]">
            <div className="bg-white p-6">
              <h3 className="mono text-[11px] font-bold uppercase">How it works</h3>
              <ol className="mono text-[12.5px] mt-2 space-y-1.5 text-black/70">
                <li>1. Share ICP, geography, tech stack</li>
                <li>2. We confirm fields & verification level</li>
                <li>3. AI freelancer researches & enriches</li>
                <li>4. Contacts are verified & flagged</li>
                <li>5. Receive spreadsheet — 1,000 leads ready</li>
              </ol>
            </div>
            <div className="bg-[#EDE8D0] p-6">
              <h3 className="mono text-[11px] font-bold uppercase">Sample delivery</h3>
              <div className="mt-2 border border-black/[0.08] bg-white p-4 mono text-center">
                <div className="text-[11px] text-black/50 uppercase tracking-[0.14em]">1,000 qualified leads</div>
                <div className="text-[13px] font-bold mt-2">5h 30m → <span className="text-[#719DF4]">$55</span></div>
                <div className="text-[10px] text-black/40 mt-1">Sample workflow · not a client project</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-black/[0.08] px-6 lg:px-8 py-8">
          <h2 className="text-[18px] font-bold">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {faqs.map((f) => (
              <div key={f.q} className="py-4">
                <h3 className="mono text-[13px] font-bold">{f.q}</h3>
                <p className="mono text-[12.5px] text-black/65 mt-1 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 mono text-[11px]">Related: <Link href="/ai-web-research" className="underline">Web Research</Link> · <Link href="/ai-data-cleaning" className="underline">Data Cleaning</Link> · <Link href="/ai-data-entry" className="underline">Data Entry</Link></div>
        </section>

        <section className="bg-black text-white px-6 lg:px-8 py-10 text-center">
          <h2 className="display-brutalist text-[28px]">Hire an AI lead generation freelancer</h2>
          <Link href="/hire" className="mt-6 inline-block bg-[#719DF4] mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
        </section>
      </div>
    </main>
  );
}
