import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { absoluteUrl, siteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "AI CRM Cleanup Freelancer — Hire From $10/Hour",
  description:
    "Hire an AI CRM cleanup freelancer for deduplication, field normalization, contact enrichment and database hygiene. AI CRM cleanup from $10/hour.",
  alternates: { canonical: "/ai-crm-cleanup" },
  openGraph: {
    title: "AI CRM Cleanup Freelancer — Hire From $10/Hour | Abstrak Labs",
    description: "De-dupe contacts, normalize fields and enrich records. Hire AI CRM cleanup from $10/hour.",
    url: absoluteUrl("/ai-crm-cleanup"),
    type: "website",
  },
};

const faqs = [
  { q: "What CRM cleanup do you handle?", a: "De-duplication, field normalization (names, stages, owners), blank enrichment, and bulk updates for HubSpot, Salesforce, Pipedrive and sheets." },
  { q: "Do you work directly in our CRM?", a: "We can deliver a cleaned CSV for import or, when allowed, update via CRM workflows/APIs with a full change log for review before push." },
  { q: "How do you avoid merging wrong records?", a: "We score duplicates on multiple fields (email, domain, phone, name) and flag low-confidence merges for you. No silent deletes." },
  { q: "What’s the cost?", a: "$10/hour. A 15k-contact CRM typically cleans in 4–6 hours — you see contacts, time and cost." },
  { q: "Can you also enrich contacts?", a: "Yes — add titles, LinkedIn, domains or firmographics where public, alongside cleanup." },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI CRM Cleanup Freelancer",
    serviceType: "AI CRM Cleanup",
    provider: { "@type": "Organization", name: "Abstrak Labs", url: siteUrl },
    url: absoluteUrl("/ai-crm-cleanup"),
    description: "Hire an AI CRM cleanup freelancer for deduplication and normalization from $10/hour.",
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
          <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">AI Freelancer — CRM Cleanup</div>
          <h1 className="display-brutalist text-[36px] lg:text-[48px] leading-[0.85] mt-3">Hire an AI CRM Cleanup Freelancer</h1>
          <p className="text-[15px] leading-relaxed text-black/70 mt-4 max-w-[720px]">
            Abstrak Labs provides AI freelancers for CRM cleanup — deduplication, field normalization, blank enrichment and ongoing database
            hygiene for HubSpot, Salesforce and other CRMs. <strong>Hire an AI CRM cleanup worker from $10/hour.</strong>
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/hire" className="bg-[#92A9E1] text-white mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
            <Link href="/work/crm-cleanup" className="bg-white border border-black/15 mono text-[11px] px-6 py-3">See sample workflow →</Link>
          </div>
        </section>

        <section className="bg-white border-b border-black/[0.08]">
          <div className="px-6 lg:px-8 py-8">
            <h2 className="text-[18px] font-bold">What can an AI CRM cleanup freelancer do?</h2>
            <ul className="mt-4 grid md:grid-cols-2 gap-2 mono text-[12.5px] text-black/70">
              <li>• Duplicate detection & merging (fuzzy + exact)</li>
              <li>• Field normalization (stages, owners, industries)</li>
              <li>• Contact & company enrichment</li>
              <li>• Blank fill & format standardization</li>
              <li>• Bulk updates with change log</li>
              <li>• Ongoing hygiene workflows</li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-black/[0.08] border-t border-black/[0.08]">
            <div className="bg-white p-6">
              <h3 className="mono text-[11px] font-bold uppercase">How it works</h3>
              <ol className="mono text-[12.5px] mt-2 space-y-1.5 text-black/70">
                <li>1. Export CRM or share access + rules</li>
                <li>2. We confirm dedupe & field logic</li>
                <li>3. AI freelancer cleans & enriches</li>
                <li>4. You review change log & flags</li>
                <li>5. Import or push updates</li>
              </ol>
            </div>
            <div className="bg-[#EDE8D0] p-6">
              <h3 className="mono text-[11px] font-bold uppercase">Sample delivery</h3>
              <div className="mt-2 border border-black/[0.08] bg-white p-4 mono text-center">
                <div className="text-[11px] text-black/50 uppercase tracking-[0.14em]">15k contacts cleaned</div>
                <div className="text-[13px] font-bold mt-2">5h 10m → <span className="text-[#92A9E1]">$51</span></div>
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
          <div className="mt-6 mono text-[11px]">Related: <Link href="/ai-data-cleaning" className="underline">Data Cleaning</Link> · <Link href="/ai-data-entry" className="underline">Data Entry</Link> · <Link href="/work/crm-cleanup" className="underline">Sample: CRM Cleanup</Link></div>
        </section>

        <section className="bg-black text-white px-6 lg:px-8 py-10 text-center">
          <h2 className="display-brutalist text-[28px]">Hire an AI CRM cleanup freelancer</h2>
          <Link href="/hire" className="mt-6 inline-block bg-[#92A9E1] mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
        </section>
      </div>
    </main>
  );
}
