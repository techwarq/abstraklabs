import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { absoluteUrl, siteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "AI Web Research Freelancer — Hire From $10/Hour",
  description:
    "Hire an AI web research freelancer for company, product and web research from public sources. Structured, sourced deliverables. AI web research from $10/hour.",
  alternates: { canonical: "/ai-web-research" },
  openGraph: {
    title: "AI Web Research Freelancer — Hire From $10/Hour | Abstrak Labs",
    description: "Company and web research with citations. Hire AI web research from $10/hour.",
    url: absoluteUrl("/ai-web-research"),
    type: "website",
  },
};

const faqs = [
  { q: "What web research can you do?", a: "Company profiles, product research, pricing checks, web fact gathering and public-record research — delivered with sources and confidence flags." },
  { q: "How do you ensure accuracy?", a: "We cite every source, cross-check multiple pages and flag unverified or conflicting data for review." },
  { q: "Can you handle large lists?", a: "Yes — hundreds of companies or products in one batch, batched and verified for delivery." },
  { q: "What do you need to start?", a: "The research question, desired fields, target sites if any, and output format (sheet/report)." },
  { q: "How is it priced?", a: "$10/hour. A 500-company brief is ~6h 42m for $67. You see time and cost per delivery." },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Web Research Freelancer",
    serviceType: "AI Web Research",
    provider: { "@type": "Organization", name: "Abstrak Labs", url: siteUrl },
    url: absoluteUrl("/ai-web-research"),
    description: "Hire an AI web research freelancer for company and web research from $10/hour.",
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
          <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">AI Freelancer — Web Research</div>
          <h1 className="display-brutalist text-[36px] lg:text-[48px] leading-[0.85] mt-3">Hire an AI Web Research Freelancer</h1>
          <p className="text-[15px] leading-relaxed text-black/70 mt-4 max-w-[720px]">
            Abstrak Labs provides AI freelancers for web research — company research, product research and public web gathering, structured with
            sources. <strong>Hire an AI web research worker from $10/hour.</strong>
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/hire" className="bg-[#FF4B00] text-white mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
            <Link href="/work" className="bg-white border border-black/15 mono text-[11px] px-6 py-3">See sample work →</Link>
          </div>
        </section>

        <section className="bg-white border-b border-black/[0.08]">
          <div className="px-6 lg:px-8 py-8">
            <h2 className="text-[18px] font-bold">What can an AI web research freelancer do?</h2>
            <ul className="mt-4 grid md:grid-cols-2 gap-2 mono text-[12.5px] text-black/70">
              <li>• Company & founder research</li>
              <li>• Product & pricing research</li>
              <li>• Web fact gathering with citations</li>
              <li>• Public-record & site research</li>
              <li>• List building & enrichment</li>
              <li>• Source verification</li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-black/[0.08] border-t border-black/[0.08]">
            <div className="bg-white p-6">
              <h3 className="mono text-[11px] font-bold uppercase">How it works</h3>
              <ol className="mono text-[12.5px] mt-2 space-y-1.5 text-black/70">
                <li>1. Send the brief & desired fields</li>
                <li>2. We confirm scope & sources</li>
                <li>3. AI freelancer researches & cites</li>
                <li>4. Output is structured & verified</li>
                <li>5. Receive sheet/report with sources</li>
              </ol>
            </div>
            <div className="bg-[#F5F5F3] p-6">
              <h3 className="mono text-[11px] font-bold uppercase">Sample delivery</h3>
              <div className="mt-2 border border-black/[0.08] bg-white p-4 mono text-center">
                <div className="text-[11px] text-black/50 uppercase tracking-[0.14em]">500 companies researched</div>
                <div className="text-[13px] font-bold mt-2">6h 42m → <span className="text-[#FF4B00]">$67</span></div>
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
          <div className="mt-6 mono text-[11px]">Related: <Link href="/ai-research" className="underline">Research</Link> · <Link href="/ai-lead-generation" className="underline">Lead Gen</Link> · <Link href="/ai-data-entry" className="underline">Data Entry</Link></div>
        </section>

        <section className="bg-black text-white px-6 lg:px-8 py-10 text-center">
          <h2 className="display-brutalist text-[28px]">Hire an AI web research freelancer</h2>
          <Link href="/hire" className="mt-6 inline-block bg-[#FF4B00] mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
        </section>
      </div>
    </main>
  );
}
