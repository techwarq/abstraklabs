import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { absoluteUrl, siteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "AI Invoice Processing Freelancer — Hire From $10/Hour",
  description:
    "Hire an AI invoice processing freelancer for extraction, line-item capture, reconciliation and structured data. AI invoice processing from $10/hour.",
  alternates: { canonical: "/ai-invoice-processing" },
  openGraph: {
    title: "AI Invoice Processing Freelancer — Hire From $10/Hour | Abstrak Labs",
    description: "Extract line items and totals from PDFs, reconcile and structure for accounting. Hire AI invoice processing from $10/hour.",
    url: absoluteUrl("/ai-invoice-processing"),
    type: "website",
    images: [{ url: absoluteUrl("/og-image.png"), width: 1200, height: 630 }],
  },
};

const faqs = [
  { q: "What invoice formats do you handle?", a: "Native PDFs, scans, and varied layouts — we extract vendor, date, line items, tax and totals into a structured sheet." },
  { q: "How do you handle errors and totals?", a: "We cross-check line items vs. totals, flag mismatches and low-confidence extractions for review." },
  { q: "Can you integrate with accounting software?", a: "We deliver Excel/CSV ready for import to QuickBooks, Xero or your system. Direct API push is possible when you provide access." },
  { q: "What about handwriting or low-quality scans?", a: "We process them but flag uncertain fields. Clean scans produce highest accuracy." },
  { q: "How is pricing calculated?", a: "$10/hour. A 500-invoice batch typically processes in 4–6 hours — you see invoices, time and cost." },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Invoice Processing Freelancer",
    serviceType: "AI Invoice Processing",
    provider: { "@type": "Organization", name: "Abstrak Labs", url: siteUrl },
    url: absoluteUrl("/ai-invoice-processing"),
    description: "Hire an AI invoice processing freelancer for extraction and reconciliation from $10/hour.",
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
          <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">AI Freelancer — Invoice Processing</div>
          <h1 className="display-brutalist text-[36px] lg:text-[48px] leading-[0.85] mt-3">Hire an AI Invoice Processing Freelancer</h1>
          <p className="text-[15px] leading-relaxed text-black/70 mt-4 max-w-[720px]">
            Abstrak Labs provides AI freelancers for invoice processing — extraction, line-item capture, total reconciliation and structured
            datasets for accounting. <strong>Hire an AI invoice processing worker from $10/hour.</strong>
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/hire" className="bg-[#719DF4] text-white mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
            <Link href="/work/invoice-processing" className="bg-white border border-black/15 mono text-[11px] px-6 py-3">See sample workflow →</Link>
          </div>
        </section>

        <section className="bg-white border-b border-black/[0.08]">
          <div className="px-6 lg:px-8 py-8">
            <h2 className="text-[18px] font-bold">What can an AI invoice processing freelancer do?</h2>
            <ul className="mt-4 grid md:grid-cols-2 gap-2 mono text-[12.5px] text-black/70">
              <li>• PDF invoice extraction (vendor, date, PO)</li>
              <li>• Line-item capture (SKU, qty, price)</li>
              <li>• Tax, discount & total reconciliation</li>
              <li>• Duplicate invoice detection</li>
              <li>• Structured Excel/CSV for accounting</li>
              <li>• Batch processing & change log</li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-black/[0.08] border-t border-black/[0.08]">
            <div className="bg-white p-6">
              <h3 className="mono text-[11px] font-bold uppercase">How it works</h3>
              <ol className="mono text-[12.5px] mt-2 space-y-1.5 text-black/70">
                <li>1. Send invoices + required fields</li>
                <li>2. We confirm layout & validation rules</li>
                <li>3. AI freelancer extracts & reconciles</li>
                <li>4. Totals are cross-checked & flagged</li>
                <li>5. Receive structured sheet + summary</li>
              </ol>
            </div>
            <div className="bg-[#EDE8D0] p-6">
              <h3 className="mono text-[11px] font-bold uppercase">Sample delivery</h3>
              <div className="mt-2 border border-black/[0.08] bg-white p-4 mono text-center">
                <div className="text-[11px] text-black/50 uppercase tracking-[0.14em]">500 invoices processed</div>
                <div className="text-[13px] font-bold mt-2">4h 45m → <span className="text-[#719DF4]">$47</span></div>
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
          <div className="mt-6 mono text-[11px]">Related: <Link href="/ai-document-processing" className="underline">Document Processing</Link> · <Link href="/ai-data-entry" className="underline">Data Entry</Link> · <Link href="/work/invoice-processing" className="underline">Sample: Invoice Processing</Link></div>
        </section>

        <section className="bg-black text-white px-6 lg:px-8 py-10 text-center">
          <h2 className="display-brutalist text-[28px]">Hire an AI invoice processing freelancer</h2>
          <Link href="/hire" className="mt-6 inline-block bg-[#719DF4] mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
        </section>
      </div>
    </main>
  );
}
