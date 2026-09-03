import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { absoluteUrl, siteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "AI Data Cleaning Freelancer — Hire From $10/Hour",
  description:
    "Hire an AI data cleaning freelancer for deduplication, normalization, spreadsheet cleanup and database hygiene. AI data cleaning from $10/hour.",
  alternates: { canonical: "/ai-data-cleaning" },
  openGraph: {
    title: "AI Data Cleaning Freelancer — Hire From $10/Hour | Abstrak Labs",
    description: "Deduplicate, normalize and clean spreadsheets & databases. Hire AI data cleaning from $10/hour.",
    url: absoluteUrl("/ai-data-cleaning"),
    type: "website",
    images: [{ url: absoluteUrl("/og-image.jpg"), width: 1200, height: 675 }],
  },
};

const faqs = [
  { q: "What does data cleaning include?", a: "Deduplication, normalization (names, phones, dates), blank correction, format standardization and spreadsheet hygiene — returned as a clean file with a change log." },
  { q: "Will you delete data without review?", a: "No. We flag duplicates and low-confidence merges for your approval. You get a before/after file and a summary of changes." },
  { q: "What sources can you clean?", a: "Excel, CSV, Google Sheets and CRM exports. Provide the file and the desired field rules." },
  { q: "How is it priced?", a: "$10/hour. A 20,000-row sheet typically cleans in 3–5 hours — you see rows, time and cost." },
  { q: "Can you also enrich while cleaning?", a: "Yes — we can normalize and enrich in the same workflow (e.g., add domains, LinkedIn or funding where public)." },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Data Cleaning Freelancer",
    serviceType: "AI Data Cleaning",
    provider: { "@type": "Organization", name: "Abstrak Labs", url: siteUrl },
    url: absoluteUrl("/ai-data-cleaning"),
    description: "Hire an AI data cleaning freelancer for deduplication, normalization and spreadsheet hygiene from $10/hour.",
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
          <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">AI Freelancer — Data Cleaning</div>
          <h1 className="display-brutalist text-[36px] lg:text-[48px] leading-[0.85] mt-3">Hire an AI Data Cleaning Freelancer</h1>
          <p className="text-[15px] leading-relaxed text-black/70 mt-4 max-w-[720px]">
            Abstrak Labs provides AI freelancers for data cleaning — deduplication, normalization, spreadsheet cleanup and database hygiene for
            spreadsheets, CRMs and product catalogs. <strong>Hire an AI data cleaning worker from $10/hour.</strong>
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/hire" className="bg-[#719DF4] text-white mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
            <Link href="/work" className="bg-white border border-black/15 mono text-[11px] px-6 py-3">See sample work →</Link>
          </div>
        </section>

        <section className="bg-white border-b border-black/[0.08]">
          <div className="px-6 lg:px-8 py-8">
            <h2 className="text-[18px] font-bold">What can an AI data cleaning freelancer do?</h2>
            <ul className="mt-4 grid md:grid-cols-2 gap-2 mono text-[12.5px] text-black/70">
              <li>• Deduplication (fuzzy + exact)</li>
              <li>• Name / company normalization</li>
              <li>• Phone, email, date formatting</li>
              <li>• Spreadsheet cleanup & blank fixes</li>
              <li>• Category & taxonomy mapping</li>
              <li>• CRM hygiene & field standardization</li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-black/[0.08] border-t border-black/[0.08]">
            <div className="bg-white p-6">
              <h3 className="mono text-[11px] font-bold uppercase">How it works</h3>
              <ol className="mono text-[12.5px] mt-2 space-y-1.5 text-black/70">
                <li>1. Send the file + field rules</li>
                <li>2. We confirm dedupe & format logic</li>
                <li>3. AI freelancer cleans & normalizes</li>
                <li>4. Changes are logged & flagged</li>
                <li>5. Receive clean file + change log</li>
              </ol>
            </div>
            <div className="bg-[#EDE8D0] p-6">
              <h3 className="mono text-[11px] font-bold uppercase">Sample delivery</h3>
              <div className="mt-2 border border-black/[0.08] bg-white p-4 mono text-center">
                <div className="text-[11px] text-black/50 uppercase tracking-[0.14em]">20k rows cleaned</div>
                <div className="text-[13px] font-bold mt-2">4h 10m → <span className="text-[#719DF4]">$41</span></div>
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
          <div className="mt-6 mono text-[11px]">Related: <Link href="/ai-data-entry" className="underline">Data Entry</Link> · <Link href="/ai-crm-cleanup" className="underline">CRM Cleanup</Link> · <Link href="/ai-ecommerce-operations" className="underline">E-commerce Ops</Link></div>
        </section>

        <section className="bg-black text-white px-6 lg:px-8 py-10 text-center">
          <h2 className="display-brutalist text-[28px]">Hire an AI data cleaning freelancer</h2>
          <Link href="/hire" className="mt-6 inline-block bg-[#719DF4] mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
        </section>
      </div>
    </main>
  );
}
