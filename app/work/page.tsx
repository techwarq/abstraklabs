import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "Sample Workflows — Real Deliveries",
  description:
    "Sample AI freelancer workflows — CRM cleanup, invoice processing and catalog cleanup. Internal demos with task, input, workflow, output, time and cost. From $10/hour.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Sample Workflows — Real Deliveries | Abstrak Labs",
    description: "Sample AI freelancer workflows with task, input, workflow, output, time and cost.",
    url: absoluteUrl("/work"),
    type: "website",
    images: [{ url: absoluteUrl("/og-image.png"), width: 1200, height: 630 }],
  },
};

const samples = [
  {
    href: "/work/crm-cleanup",
    n: "01",
    title: "CRM Cleanup",
    task: "De-duplicate 15k contacts, normalize fields and enrich records.",
    input: "HubSpot export (CSV) + dedupe rules",
    workflow: "Import → Score duplicates → Normalize → Enrich → Change log",
    output: "Clean CSV + change log — 15k contacts",
    time: "5h 10m",
    cost: "$51",
    label: "Internal Demo",
  },
  {
    href: "/work/invoice-processing",
    n: "02",
    title: "Invoice Processing",
    task: "Extract 500 PDF invoices, reconcile line items and totals.",
    input: "500 PDF invoices + field map",
    workflow: "Extract → Parse → Reconcile → Flag → Structured sheet",
    output: "Excel — 500 invoices, line items, totals",
    time: "4h 45m",
    cost: "$47",
    label: "Sample Delivery",
  },
  {
    href: "/work/product-catalog-cleanup",
    n: "03",
    title: "Product Catalog Cleanup",
    task: "Normalize 10,000 SKUs — categories, variants and pricing.",
    input: "Shopify CSV + taxonomy rules",
    workflow: "Import → Deduplicate → Normalize → Map → CSV",
    output: "CSV — 10,000 SKUs normalized",
    time: "7h 50m",
    cost: "$78",
    label: "Public-Data Workflow",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#EDE8D0] text-black">
      <div className="fixed inset-0 bg-grid-brutalist pointer-events-none opacity-[0.22]" />
      <div className="relative max-w-[1440px] mx-auto border-x border-black/[0.08] bg-[#EDE8D0]">
        <header className="sticky top-0 bg-[#EDE8D0]/90 backdrop-blur-[8px] border-b border-black/[0.08] px-6 lg:px-8 h-[56px] flex items-center justify-between">
          <Link href="/" className="text-[11px] font-bold">ABSTRAK LABS</Link>
          <Link href="/hire" className="bg-black text-white mono text-[11px] px-4 py-2.5">Hire a worker — $10/hr →</Link>
        </header>

        <section className="px-6 lg:px-8 py-10 border-b border-black/[0.08]">
          <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">Work — Sample Workflows</div>
          <h1 className="display-brutalist text-[36px] lg:text-[48px] leading-[0.85] mt-3">Real Workflows. Sample Deliveries.</h1>
          <p className="mono text-[11px] tracking-[0.14em] uppercase font-bold text-[#719DF4] mt-3">Not client projects — internal demos to show how work is done</p>
          <p className="text-[14px] leading-relaxed text-black/65 mt-4 max-w-[720px]">
            We’re early-stage, so we don’t fabricate customers or testimonials. These are sample deliveries that show the task, input, workflow,
            output, time and cost — clearly labeled as internal demos.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-black/[0.08] border-b border-black/[0.08]">
          {samples.map((s) => (
            <Link key={s.href} href={s.href} className="bg-white p-6 lg:p-7 hover:bg-[#EDE8D0] transition-colors group">
              <div className="mono text-[10px] tracking-[0.14em] uppercase flex items-center justify-between">
                <span className="bg-black text-white px-2 py-1">{s.label}</span>
                <span className="text-black/40">Sample {s.n}</span>
              </div>
              <h2 className="text-[16px] font-bold tracking-tight uppercase mt-4 group-hover:text-[#719DF4]">{s.title} →</h2>
              <div className="mono text-[10px] tracking-[0.14em] uppercase font-bold text-black/40 mt-4">Task</div>
              <div className="mono text-[12px] text-black/70 mt-1 leading-relaxed">{s.task}</div>
              <div className="mono text-[10px] tracking-[0.14em] uppercase font-bold text-black/40 mt-3">Input</div>
              <div className="mono text-[11px] text-black/60 mt-1">{s.input}</div>
              <div className="mono text-[10px] tracking-[0.14em] uppercase font-bold text-black/40 mt-3">Workflow</div>
              <div className="mono text-[10px] font-bold mt-1">{s.workflow}</div>
              <div className="mt-4 grid grid-cols-2 gap-px bg-black/[0.08] border border-black/[0.08] mono text-center">
                <div className="bg-white py-2">
                  <div className="text-[10px] text-black/40 uppercase">Time</div>
                  <div className="text-[12px] font-bold">{s.time}</div>
                </div>
                <div className="bg-white py-2 border-l border-black/[0.08]">
                  <div className="text-[10px] text-black/40 uppercase">Cost</div>
                  <div className="text-[12px] font-bold text-[#719DF4]">{s.cost}</div>
                </div>
              </div>
              <div className="mono text-[11px] text-black/50 mt-3">Output: {s.output}</div>
            </Link>
          ))}
        </section>

        <section className="px-6 lg:px-8 py-8 bg-white border-b border-black/[0.08]">
          <h2 className="text-[16px] font-bold">How to interpret these samples</h2>
          <p className="mono text-[12.5px] text-black/65 mt-2 leading-relaxed max-w-[760px]">
            Each sample shows a real internal run: what someone asked, what files were provided, what the AI freelancer did, what was delivered,
            how long it took and what it would cost at $10/hour. Use them to decide if the service fits your task — then{" "}
            <Link href="/hire" className="underline font-bold text-black">
              hire a worker
            </Link>{" "}
            to run your own workflow.
          </p>
          <div className="mt-6 mono text-[11px]">
            Explore services: <Link href="/ai-data-entry" className="underline">Data Entry</Link> ·{" "}
            <Link href="/ai-crm-cleanup" className="underline">CRM Cleanup</Link> ·{" "}
            <Link href="/ai-invoice-processing" className="underline">Invoice Processing</Link> ·{" "}
            <Link href="/ai-ecommerce-operations" className="underline">E-commerce Ops</Link>
          </div>
        </section>

        <section className="bg-black text-white px-6 lg:px-8 py-10 text-center">
          <h2 className="display-brutalist text-[28px]">Want your own delivery?</h2>
          <p className="mono text-[12px] text-white/60 mt-2">Describe the task — we’ll handle the workflow and deliver the result. From $10/hour.</p>
          <Link href="/hire" className="mt-6 inline-block bg-[#719DF4] mono text-[11px] px-6 py-3">Hire an AI freelancer →</Link>
        </section>
      </div>
    </main>
  );
}
