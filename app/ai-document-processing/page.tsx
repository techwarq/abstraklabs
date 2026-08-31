import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { absoluteUrl, siteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "AI Document Processing Freelancer — Hire From $10/Hour",
  description:
    "Hire an AI document processing freelancer for PDF extraction, form processing, record verification and document workflows. AI document processing from $10/hour.",
  alternates: { canonical: "/ai-document-processing" },
  openGraph: {
    title: "AI Document Processing Freelancer — Hire From $10/Hour | Abstrak Labs",
    description: "PDF extraction, forms and records → structured data. Hire AI document processing from $10/hour.",
    url: absoluteUrl("/ai-document-processing"),
    type: "website",
  },
};

const faqs = [
  { q: "What documents can you process?", a: "PDFs, scans, forms, invoices, contracts, records and image-based documents — extracted into structured spreadsheets or databases." },
  { q: "How do you handle low-quality scans?", a: "We extract and flag low-confidence fields. You get the structured data plus flags for quick review." },
  { q: "Can you handle handwriting?", a: "Typed and printed text works best. Handwriting is processed with lower confidence and flagged." },
  { q: "What’s the workflow?", a: "Send files + field map, we confirm, AI freelancer extracts and validates, you receive structured data and a summary." },
  { q: "How is it priced?", a: "$10/hour. A 1,000-document batch typically processes in 5–7 hours — you see docs, time and cost." },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Document Processing Freelancer",
    serviceType: "AI Document Processing",
    provider: { "@type": "Organization", name: "Abstrak Labs", url: siteUrl },
    url: absoluteUrl("/ai-document-processing"),
    description: "Hire an AI document processing freelancer for PDF extraction and forms from $10/hour.",
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
          <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">AI Freelancer — Document Processing</div>
          <h1 className="display-brutalist text-[36px] lg:text-[48px] leading-[0.85] mt-3">Hire an AI Document Processing Freelancer</h1>
          <p className="text-[15px] leading-relaxed text-black/70 mt-4 max-w-[720px]">
            Abstrak Labs provides AI freelancers for document processing — PDF extraction, form processing, record verification and document-to-data
            workflows. <strong>Hire an AI document processing worker from $10/hour.</strong>
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/hire" className="bg-[#FF4B00] text-white mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
            <Link href="/work" className="bg-white border border-black/15 mono text-[11px] px-6 py-3">See sample work →</Link>
          </div>
        </section>

        <section className="bg-white border-b border-black/[0.08]">
          <div className="px-6 lg:px-8 py-8">
            <h2 className="text-[18px] font-bold">What can an AI document processing freelancer do?</h2>
            <ul className="mt-4 grid md:grid-cols-2 gap-2 mono text-[12.5px] text-black/70">
              <li>• PDF & scan extraction</li>
              <li>• Form processing & field mapping</li>
              <li>• Record verification & cross-check</li>
              <li>• Contract & agreement parsing</li>
              <li>• Table extraction → spreadsheet</li>
              <li>• Batch processing with logs</li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-black/[0.08] border-t border-black/[0.08]">
            <div className="bg-white p-6">
              <h3 className="mono text-[11px] font-bold uppercase">How it works</h3>
              <ol className="mono text-[12.5px] mt-2 space-y-1.5 text-black/70">
                <li>1. Send documents + field map</li>
                <li>2. We confirm extraction rules</li>
                <li>3. AI freelancer extracts & validates</li>
                <li>4. Low-confidence fields flagged</li>
                <li>5. Receive structured data + summary</li>
              </ol>
            </div>
            <div className="bg-[#F5F5F3] p-6">
              <h3 className="mono text-[11px] font-bold uppercase">Sample delivery</h3>
              <div className="mt-2 border border-black/[0.08] bg-white p-4 mono text-center">
                <div className="text-[11px] text-black/50 uppercase tracking-[0.14em]">1,000 documents processed</div>
                <div className="text-[13px] font-bold mt-2">6h 20m → <span className="text-[#FF4B00]">$63</span></div>
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
          <div className="mt-6 mono text-[11px]">Related: <Link href="/ai-data-entry" className="underline">Data Entry</Link> · <Link href="/ai-document-processing" className="underline">Invoice Processing</Link> · <Link href="/ai-data-cleaning" className="underline">Data Cleaning</Link></div>
        </section>

        <section className="bg-black text-white px-6 lg:px-8 py-10 text-center">
          <h2 className="display-brutalist text-[28px]">Hire an AI document processing freelancer</h2>
          <Link href="/hire" className="mt-6 inline-block bg-[#FF4B00] mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
        </section>
      </div>
    </main>
  );
}
