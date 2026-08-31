import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { absoluteUrl, siteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "AI Research Freelancer — Hire From $10/Hour",
  description:
    "Hire an AI research freelancer for market, company and competitor research. Structured reports from public sources. AI research from $10/hour.",
  alternates: { canonical: "/ai-research" },
  openGraph: {
    title: "AI Research Freelancer — Hire From $10/Hour | Abstrak Labs",
    description: "Market, company and competitor research — structured, sourced reports. Hire AI research from $10/hour.",
    url: absoluteUrl("/ai-research"),
    type: "website",
  },
};

const faqs = [
  { q: "What research can you do?", a: "Market sizing, company lists, competitor, web and tender/grant research — all from public sources, delivered as spreadsheet or report with sources." },
  { q: "Do you fabricate data?", a: "No. We cite sources for each finding and flag gaps. If a data point isn't publicly verifiable, we mark it as unverified." },
  { q: "How fast is research?", a: "Most briefs complete in 3–7 hours. You see time and cost — e.g., 500 companies in 6h 42m for $67." },
  { q: "What do I send?", a: "The research question, target market or competitors, desired fields and format. Attach any prior reports to avoid duplication." },
  { q: "How is pricing calculated?", a: "$10/hour of active work. Complex briefs take longer; simple lookups are faster. No subscription." },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Research Freelancer",
    serviceType: "AI Research",
    provider: { "@type": "Organization", name: "Abstrak Labs", url: siteUrl },
    url: absoluteUrl("/ai-research"),
    description: "Hire an AI research freelancer for market, company and competitor research from $10/hour.",
    offers: { "@type": "Offer", priceCurrency: "USD", price: "10", unitText: "HOUR", url: absoluteUrl("/hire") },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <main className="min-h-screen bg-[#F5F5F3] text-black">
      <JsonLd data={[serviceJsonLd, faqJsonLd]} />
      <div className="fixed inset-0 bg-grid-brutalist pointer-events-none opacity-[0.22]" />
      <div className="relative max-w-[1440px] mx-auto border-x border-black/[0.08] bg-[#F5F5F3]">
        <header className="sticky top-0 bg-[#F5F5F3]/90 backdrop-blur-[8px] border-b border-black/[0.08] px-6 lg:px-8 h-[56px] flex items-center justify-between">
          <Link href="/" className="text-[11px] font-bold">ABSTRAK LABS</Link>
          <Link href="/hire" className="bg-black text-white mono text-[11px] px-4 py-2.5">Hire a worker — $10/hr →</Link>
        </header>

        <section className="px-6 lg:px-8 py-10 border-b border-black/[0.08]">
          <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">AI Freelancer — Research</div>
          <h1 className="display-brutalist text-[36px] lg:text-[48px] leading-[0.85] mt-3">Hire an AI Research Freelancer</h1>
          <p className="text-[15px] leading-relaxed text-black/70 mt-4 max-w-[720px]">
            Abstrak Labs provides AI freelancers for research — market research, company research, competitor research and web research — turning
            public information into structured, sourced reports. <strong>Hire an AI research worker from $10/hour.</strong>
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/hire" className="bg-[#FF4B00] text-white mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
            <Link href="/work" className="bg-white border border-black/15 mono text-[11px] px-6 py-3">See sample work →</Link>
          </div>
        </section>

        <section className="bg-white border-b border-black/[0.08]">
          <div className="px-6 lg:px-8 py-8">
            <h2 className="text-[18px] font-bold">What can an AI research freelancer do?</h2>
            <ul className="mt-4 grid md:grid-cols-2 gap-2 mono text-[12.5px] text-black/70">
              <li>• Market research & sizing</li>
              <li>• Company research (founders, funding, tech stack)</li>
              <li>• Competitor teardown (pricing, features, GTM)</li>
              <li>• Web research & fact gathering</li>
              <li>• Tender / grant research</li>
              <li>• Industry landscape mapping</li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-black/[0.08] border-t border-black/[0.08]">
            <div className="bg-white p-6">
              <h3 className="mono text-[11px] font-bold uppercase">How it works</h3>
              <ol className="mono text-[12.5px] mt-2 space-y-1.5 text-black/70">
                <li>1. Send the research brief & desired output</li>
                <li>2. We confirm scope & sources</li>
                <li>3. AI freelancer searches, extracts & cites</li>
                <li>4. Report is structured & verified</li>
                <li>5. Receive spreadsheet/report with sources</li>
              </ol>
            </div>
            <div className="bg-[#F5F5F3] p-6">
              <h3 className="mono text-[11px] font-bold uppercase">Sample delivery</h3>
              <div className="mt-2 border border-black/[0.08] bg-white p-4 mono text-center">
                <div className="text-[11px] text-black/50 uppercase tracking-[0.14em]">15 competitors mapped</div>
                <div className="text-[13px] font-bold mt-2">3h 15m → <span className="text-[#FF4B00]">$32</span></div>
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
          <div className="mt-6 mono text-[11px]">Related: <Link href="/ai-web-research" className="underline">Web Research</Link> · <Link href="/ai-lead-generation" className="underline">Lead Gen</Link> · <Link href="/ai-data-entry" className="underline">Data Entry</Link></div>
        </section>

        <section className="bg-black text-white px-6 lg:px-8 py-10 text-center">
          <h2 className="display-brutalist text-[28px]">Hire an AI research freelancer</h2>
          <Link href="/hire" className="mt-6 inline-block bg-[#FF4B00] mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
        </section>
      </div>
    </main>
  );
}
