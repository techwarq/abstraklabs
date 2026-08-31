import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Invoice Processing — Sample Workflow",
  description:
    "Sample AI freelancer workflow: 500 PDF invoices extracted, line items reconciled, totals verified. Internal demo. 4h 45m · $47 at $10/hour.",
  alternates: { canonical: "/work/invoice-processing" },
  openGraph: {
    title: "Invoice Processing — Sample Workflow | Abstrak Labs",
    description: "Task, input, workflow, output, time and cost for an invoice processing demo.",
    url: absoluteUrl("/work/invoice-processing"),
    type: "article",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#EDE8D0] text-black">
      <div className="fixed inset-0 bg-grid-brutalist pointer-events-none opacity-[0.22]" />
      <div className="relative max-w-[1440px] mx-auto border-x border-black/[0.08] bg-[#EDE8D0]">
        <header className="sticky top-0 bg-[#EDE8D0]/90 backdrop-blur-[8px] border-b border-black/[0.08] px-6 lg:px-8 h-[56px] flex items-center justify-between">
          <Link href="/" className="text-[11px] font-bold">ABSTRAK LABS</Link>
          <Link href="/hire" className="bg-black text-white mono text-[11px] px-4 py-2.5">Hire a worker — $10/hr →</Link>
        </header>

        <section className="px-6 lg:px-8 py-8 border-b border-black/[0.08] bg-white">
          <div className="mono text-[10px] tracking-[0.16em] uppercase flex gap-2">
            <span className="bg-black text-white px-2 py-1">Sample Delivery</span>
            <span className="border border-black/15 px-2 py-1">Internal Demo</span>
          </div>
          <h1 className="display-brutalist text-[28px] lg:text-[36px] leading-[0.9] mt-4">Invoice Processing — 500 PDFs</h1>
          <p className="mono text-[11px] tracking-[0.14em] uppercase font-bold text-[#92A9E1] mt-2">Not a client project — internal demo</p>
          <div className="mt-4 flex gap-3 mono text-[11px]">
            <Link href="/work" className="underline">← All work</Link>
            <Link href="/ai-invoice-processing" className="underline">Service: Invoice Processing →</Link>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-px bg-black/[0.08] border-b border-black/[0.08]">
          <div className="bg-white p-6 lg:p-8">
            <h2 className="mono text-[11px] tracking-[0.16em] uppercase font-bold">Task</h2>
            <p className="mono text-[13px] leading-relaxed text-black/70 mt-2">Extract vendor, date, line items, tax and totals from 500 varied PDF invoices and reconcile totals.</p>

            <h2 className="mono text-[11px] tracking-[0.16em] uppercase font-bold mt-6">Input</h2>
            <p className="mono text-[12.5px] text-black/65 mt-2 leading-relaxed">500 PDFs (native + scans, 3 templates), field map: vendor, date, PO, SKU, qty, price, tax, total. No accounting access.</p>

            <h2 className="mono text-[11px] tracking-[0.16em] uppercase font-bold mt-6">Workflow</h2>
            <ol className="mono text-[12.5px] mt-2 space-y-1 text-black/70 list-decimal pl-4">
              <li>Parse PDFs, classify template, extract fields</li>
              <li>Capture line items per invoice</li>
              <li>Reconcile sum(line items + tax) vs. total</li>
              <li>Flag mismatches & low-confidence rows</li>
              <li>Export structured Excel + summary</li>
            </ol>
          </div>
          <div className="bg-[#EDE8D0] p-6 lg:p-8">
            <h2 className="mono text-[11px] tracking-[0.16em] uppercase font-bold">Output</h2>
            <p className="mono text-[12.5px] text-black/70 mt-2 leading-relaxed">Excel — 500 invoices, 1,840 line items, totals reconciled, 18 flagged mismatches for review.</p>

            <div className="mt-6 grid grid-cols-2 gap-px bg-black/[0.08] border border-black/[0.08] mono text-center">
              <div className="bg-white py-3">
                <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">Time</div>
                <div className="text-[14px] font-bold mt-1">4h 45m</div>
              </div>
              <div className="bg-white py-3 border-l border-black/[0.08]">
                <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">Cost</div>
                <div className="text-[14px] font-bold text-[#92A9E1]">$47</div>
              </div>
              <div className="bg-white py-3 col-span-2 border-t border-black/[0.08]">
                <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">Deliverable</div>
                <div className="text-[12px] font-bold mt-1">Excel + summary · $10/hour</div>
              </div>
            </div>

            <Link href="/hire" className="mt-6 inline-block bg-[#92A9E1] text-white mono text-[11px] px-6 py-3">Hire for your invoices →</Link>
            <div className="mono text-[11px] mt-4">Related: <Link href="/ai-document-processing" className="underline">Document Processing</Link> · <Link href="/ai-data-entry" className="underline">Data Entry</Link></div>
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
