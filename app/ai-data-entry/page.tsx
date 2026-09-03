import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { absoluteUrl, siteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "AI Data Entry Freelancer — Hire From $10/Hour",
  description:
    "Hire an AI data entry freelancer for spreadsheet processing, PDF-to-Excel, CRM entry and database cleanup. AI data entry from $10/hour.",
  alternates: { canonical: "/ai-data-entry" },
  openGraph: {
    title: "AI Data Entry Freelancer — Hire From $10/Hour | Abstrak Labs",
    description: "PDF → Excel, spreadsheet entry, CRM cleanup and database workflows. Hire an AI data entry freelancer from $10/hour.",
    url: absoluteUrl("/ai-data-entry"),
    type: "website",
    images: [{ url: absoluteUrl("/og-image.jpg"), width: 1200, height: 675 }],
  },
};

const faqs = [
  { q: "What does an AI data entry freelancer do?", a: "It takes files, spreadsheets or PDFs, extracts and enters the data, verifies fields and returns a clean, structured spreadsheet or database — without manual copy/paste." },
  { q: "Can you handle PDFs and scans?", a: "Yes. We process native PDFs and scanned documents, extract tables and text, then structure them into Excel/CSV. Low-confidence rows are flagged for review." },
  { q: "How accurate is AI data entry?", a: "Very high for structured data. We validate formats, de-duplicate and flag ambiguities. For critical fields, we recommend a quick human spot-check." },
  { q: "How does pricing work?", a: "$10/hour of active work. You see time, rows processed and cost per delivery — e.g., 10,000 records in 5h 42m for $57." },
  { q: "What do I send to get started?", a: "The source files, a sample of the desired output, and any field rules. Describe the task in plain English and where to deliver." },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Data Entry Freelancer",
    serviceType: "AI Data Entry",
    provider: { "@type": "Organization", name: "Abstrak Labs", url: siteUrl },
    url: absoluteUrl("/ai-data-entry"),
    description: "Hire an AI data entry freelancer for PDF→Excel, spreadsheet processing, CRM entry and database cleanup from $10/hour.",
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
          <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">AI Freelancer — Data Entry</div>
          <h1 className="display-brutalist text-[36px] lg:text-[48px] leading-[0.85] mt-3">Hire an AI Data Entry Freelancer</h1>
          <p className="text-[15px] leading-relaxed text-black/70 mt-4 max-w-[720px]">
            Abstrak Labs provides AI freelancers for data entry, spreadsheet processing, PDF-to-spreadsheet conversion, database cleanup and
            repetitive data workflows. <strong>Hire an AI data entry worker from $10/hour.</strong>
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/hire" className="bg-[#719DF4] text-white mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
            <Link href="/work" className="bg-white border border-black/15 mono text-[11px] px-6 py-3">See sample work →</Link>
          </div>
        </section>

        <section className="bg-white border-b border-black/[0.08]">
          <div className="px-6 lg:px-8 py-8">
            <h2 className="text-[18px] font-bold">What can an AI data entry freelancer do?</h2>
            <ul className="mt-4 grid md:grid-cols-2 gap-2 mono text-[12.5px] text-black/70">
              <li>• PDF → Excel / CSV (native & scanned)</li>
              <li>• Spreadsheet data entry & cleanup</li>
              <li>• CRM data entry (contacts, deals, notes)</li>
              <li>• Product data entry & enrichment</li>
              <li>• Database cleanup & deduplication</li>
              <li>• Copy/paste workflows & portal entry</li>
              <li>• Data verification & formatting</li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-black/[0.08] border-t border-black/[0.08]">
            <div className="bg-white p-6">
              <h3 className="mono text-[11px] font-bold uppercase">How it works</h3>
              <ol className="mono text-[12.5px] mt-2 space-y-1.5 text-black/70">
                <li>1. Send the task + files</li>
                <li>2. Share sample output & rules</li>
                <li>3. AI freelancer extracts & enters data</li>
                <li>4. Results are validated & flagged</li>
                <li>5. Receive the finished spreadsheet/database</li>
              </ol>
            </div>
            <div className="bg-[#EDE8D0] p-6">
              <h3 className="mono text-[11px] font-bold uppercase">Sample delivery</h3>
              <div className="mt-2 border border-black/[0.08] bg-white p-4 mono text-center">
                <div className="text-[11px] text-black/50 uppercase tracking-[0.14em]">10,000 records processed</div>
                <div className="text-[13px] font-bold mt-2">5h 42m → <span className="text-[#719DF4]">$57</span></div>
                <div className="text-[10px] text-black/40 mt-1">Sample workflow · $10/hr · not a client project</div>
              </div>
              <div className="mono text-[11px] font-bold mt-4">$10/hour · No subscription</div>
              <p className="mono text-[11.5px] text-black/60 mt-1">Pay for active work, see rows, time and cost.</p>
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
          <div className="mt-6 mono text-[11px]">Related: <Link href="/ai-data-cleaning" className="underline">Data Cleaning</Link> · <Link href="/ai-crm-cleanup" className="underline">CRM Cleanup</Link> · <Link href="/ai-document-processing" className="underline">Document Processing</Link> · <Link href="/hire" className="underline">Hire →</Link></div>
        </section>

        <section className="bg-black text-white px-6 lg:px-8 py-10 text-center">
          <h2 className="display-brutalist text-[28px]">Hire an AI data entry freelancer</h2>
          <p className="mono text-[12px] text-white/60 mt-2">Describe your task — we’ll handle the workflow and deliver the result. From $10/hour.</p>
          <Link href="/hire" className="mt-6 inline-block bg-[#719DF4] mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
        </section>
      </div>
    </main>
  );
}
