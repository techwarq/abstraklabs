import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Product Catalog Cleanup — Sample Workflow",
  description:
    "Sample AI freelancer workflow: 10,000 SKUs normalized — categories, variants, pricing. Public-data workflow. 7h 50m · $78 at $10/hour.",
  alternates: { canonical: "/work/product-catalog-cleanup" },
  openGraph: {
    title: "Product Catalog Cleanup — Sample Workflow | Abstrak Labs",
    description: "Task, input, workflow, output, time and cost for a catalog cleanup demo.",
    url: absoluteUrl("/work/product-catalog-cleanup"),
    type: "article",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F5F3] text-black">
      <div className="fixed inset-0 bg-grid-brutalist pointer-events-none opacity-[0.22]" />
      <div className="relative max-w-[1440px] mx-auto border-x border-black/[0.08] bg-[#F5F5F3]">
        <header className="sticky top-0 bg-[#F5F5F3]/90 backdrop-blur-[8px] border-b border-black/[0.08] px-6 lg:px-8 h-[56px] flex items-center justify-between">
          <Link href="/" className="text-[11px] font-bold">ABSTRAK LABS</Link>
          <Link href="/hire" className="bg-black text-white mono text-[11px] px-4 py-2.5">Hire a worker — $10/hr →</Link>
        </header>

        <section className="px-6 lg:px-8 py-8 border-b border-black/[0.08] bg-white">
          <div className="mono text-[10px] tracking-[0.16em] uppercase flex gap-2">
            <span className="bg-black text-white px-2 py-1">Public-Data Workflow</span>
            <span className="border border-black/15 px-2 py-1">Sample Delivery</span>
          </div>
          <h1 className="display-brutalist text-[28px] lg:text-[36px] leading-[0.9] mt-4">Product Catalog Cleanup — 10k SKUs</h1>
          <p className="mono text-[11px] tracking-[0.14em] uppercase font-bold text-[#FF4B00] mt-2">Not a client project — public-data demo</p>
          <div className="mt-4 flex gap-3 mono text-[11px]">
            <Link href="/work" className="underline">← All work</Link>
            <Link href="/ai-ecommerce-operations" className="underline">Service: E-commerce Ops →</Link>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-px bg-black/[0.08] border-b border-black/[0.08]">
          <div className="bg-white p-6 lg:p-8">
            <h2 className="mono text-[11px] tracking-[0.16em] uppercase font-bold">Task</h2>
            <p className="mono text-[13px] leading-relaxed text-black/70 mt-2">Normalize 10,000 SKUs — de-duplicate, map categories, standardize variants, colors and pricing.</p>

            <h2 className="mono text-[11px] tracking-[0.16em] uppercase font-bold mt-6">Input</h2>
            <p className="mono text-[12.5px] text-black/65 mt-2 leading-relaxed">Shopify CSV (10,240 rows, 8 category trees), taxonomy rules, variant mapping (size/color), price validation.</p>

            <h2 className="mono text-[11px] tracking-[0.16em] uppercase font-bold mt-6">Workflow</h2>
            <ol className="mono text-[12.5px] mt-2 space-y-1 text-black/70 list-decimal pl-4">
              <li>Import & profile SKUs, detect duplicates (SKU + title fuzzy)</li>
              <li>Map categories to canonical taxonomy</li>
              <li>Normalize variants, colors, sizes per rules</li>
              <li>Validate pricing & flag outliers</li>
              <li>Export CSV + change log</li>
            </ol>
          </div>
          <div className="bg-[#F5F5F3] p-6 lg:p-8">
            <h2 className="mono text-[11px] tracking-[0.16em] uppercase font-bold">Output</h2>
            <p className="mono text-[12.5px] text-black/70 mt-2 leading-relaxed">Clean CSV — 10,000 SKUs (240 duplicates removed), categories mapped, variants normalized, ready for import.</p>

            <div className="mt-6 grid grid-cols-2 gap-px bg-black/[0.08] border border-black/[0.08] mono text-center">
              <div className="bg-white py-3">
                <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">Time</div>
                <div className="text-[14px] font-bold mt-1">7h 50m</div>
              </div>
              <div className="bg-white py-3 border-l border-black/[0.08]">
                <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">Cost</div>
                <div className="text-[14px] font-bold text-[#FF4B00]">$78</div>
              </div>
              <div className="bg-white py-3 col-span-2 border-t border-black/[0.08]">
                <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">Deliverable</div>
                <div className="text-[12px] font-bold mt-1">CSV + change log · $10/hour</div>
              </div>
            </div>

            <Link href="/hire" className="mt-6 inline-block bg-[#FF4B00] text-white mono text-[11px] px-6 py-3">Hire for your catalog →</Link>
            <div className="mono text-[11px] mt-4">Related: <Link href="/ai-data-cleaning" className="underline">Data Cleaning</Link> · <Link href="/ai-ecommerce-operations" className="underline">E-commerce Service</Link></div>
          </div>
        </section>

        <footer className="px-6 lg:px-8 py-6 mono text-[10px] tracking-[0.14em] uppercase text-black/40 flex justify-between">
          <Link href="/work">← Back to work</Link>
          <Link href="/hire" className="underline">Hire a worker →</Link>
        </footer>
      </div>
    </main>
  );
}
