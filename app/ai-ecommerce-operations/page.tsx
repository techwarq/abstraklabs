import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { absoluteUrl, siteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "AI E-commerce Operations Freelancer — Hire From $10/Hour",
  description:
    "Hire an AI e-commerce operations freelancer for catalog cleanup, product data entry, variant normalization and store operations. AI e-commerce ops from $10/hour.",
  alternates: { canonical: "/ai-ecommerce-operations" },
  openGraph: {
    title: "AI E-commerce Operations Freelancer — Hire From $10/Hour | Abstrak Labs",
    description: "Catalog cleanup, product entry and variant normalization. Hire AI e-commerce ops from $10/hour.",
    url: absoluteUrl("/ai-ecommerce-operations"),
    type: "website",
  },
};

const faqs = [
  { q: "What e-commerce tasks can you handle?", a: "Catalog cleanup, product data entry, variant normalization, category mapping, price/monitor updates and bulk CSV preparation for Shopify, WooCommerce and marketplaces." },
  { q: "Do you work directly in our store?", a: "We deliver a cleaned CSV for import or can update via store/ERP workflows with a change log. You review before push." },
  { q: "How do you handle variants and categories?", a: "We normalize SKUs, options, tags and categories per your taxonomy and flag ambiguous mappings." },
  { q: "What about images and descriptions?", a: "We can extract, deduplicate and map images, and clean descriptions — but we don’t generate misleading claims." },
  { q: "How is it priced?", a: "$10/hour. A 10k-SKU catalog typically processes in 7–8 hours — you see SKUs, time and cost." },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI E-commerce Operations Freelancer",
    serviceType: "AI E-commerce Operations",
    provider: { "@type": "Organization", name: "Abstrak Labs", url: siteUrl },
    url: absoluteUrl("/ai-ecommerce-operations"),
    description: "Hire an AI e-commerce operations freelancer for catalog cleanup and product data from $10/hour.",
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
          <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">AI Freelancer — E-commerce Operations</div>
          <h1 className="display-brutalist text-[36px] lg:text-[48px] leading-[0.85] mt-3">Hire an AI E-commerce Operations Freelancer</h1>
          <p className="text-[15px] leading-relaxed text-black/70 mt-4 max-w-[720px]">
            Abstrak Labs provides AI freelancers for e-commerce operations — catalog cleanup, product data entry, variant normalization and
            repetitive store workflows. <strong>Hire an AI e-commerce operations worker from $10/hour.</strong>
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/hire" className="bg-[#92A9E1] text-white mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
            <Link href="/work/product-catalog-cleanup" className="bg-white border border-black/15 mono text-[11px] px-6 py-3">See sample workflow →</Link>
          </div>
        </section>

        <section className="bg-white border-b border-black/[0.08]">
          <div className="px-6 lg:px-8 py-8">
            <h2 className="text-[18px] font-bold">What can an AI e-commerce freelancer do?</h2>
            <ul className="mt-4 grid md:grid-cols-2 gap-2 mono text-[12.5px] text-black/70">
              <li>• Catalog cleanup & deduplication</li>
              <li>• Product data entry & enrichment</li>
              <li>• Variant & option normalization</li>
              <li>• Category & taxonomy mapping</li>
              <li>• Price & inventory monitoring</li>
              <li>• Bulk CSV for Shopify/Woo</li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-black/[0.08] border-t border-black/[0.08]">
            <div className="bg-white p-6">
              <h3 className="mono text-[11px] font-bold uppercase">How it works</h3>
              <ol className="mono text-[12.5px] mt-2 space-y-1.5 text-black/70">
                <li>1. Share catalog export + taxonomy</li>
                <li>2. We confirm category & variant rules</li>
                <li>3. AI freelancer cleans & normalizes</li>
                <li>4. Changes are logged & flagged</li>
                <li>5. Receive CSV ready for import</li>
              </ol>
            </div>
            <div className="bg-[#EDE8D0] p-6">
              <h3 className="mono text-[11px] font-bold uppercase">Sample delivery</h3>
              <div className="mt-2 border border-black/[0.08] bg-white p-4 mono text-center">
                <div className="text-[11px] text-black/50 uppercase tracking-[0.14em]">10,000 SKUs normalized</div>
                <div className="text-[13px] font-bold mt-2">7h 50m → <span className="text-[#92A9E1]">$78</span></div>
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
          <div className="mt-6 mono text-[11px]">Related: <Link href="/ai-data-cleaning" className="underline">Data Cleaning</Link> · <Link href="/ai-data-entry" className="underline">Data Entry</Link> · <Link href="/work/product-catalog-cleanup" className="underline">Sample: Catalog Cleanup</Link></div>
        </section>

        <section className="bg-black text-white px-6 lg:px-8 py-10 text-center">
          <h2 className="display-brutalist text-[28px]">Hire an AI e-commerce operations freelancer</h2>
          <Link href="/hire" className="mt-6 inline-block bg-[#92A9E1] mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
        </section>
      </div>
    </main>
  );
}
