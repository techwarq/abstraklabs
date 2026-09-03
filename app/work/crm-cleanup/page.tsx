import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "../../../lib/site";

export const metadata: Metadata = {
  title: "CRM Cleanup — Sample Workflow",
  description:
    "Sample AI freelancer workflow: CRM cleanup of 15k contacts — de-duplication, field normalization and enrichment. Internal demo. 5h 10m · $51 at $10/hour.",
  alternates: { canonical: "/work/crm-cleanup" },
  openGraph: {
    title: "CRM Cleanup — Sample Workflow | Abstrak Labs",
    description: "Task, input, workflow, output, time and cost for a CRM cleanup demo.",
    url: absoluteUrl("/work/crm-cleanup"),
    type: "article",
    images: [{ url: absoluteUrl("/og-image.jpg"), width: 1200, height: 675 }],
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
            <span className="bg-black text-white px-2 py-1">Internal Demo</span>
            <span className="border border-black/15 px-2 py-1">Sample Delivery</span>
            <span className="border border-black/15 px-2 py-1 text-black/50">Public-Data Workflow</span>
          </div>
          <h1 className="display-brutalist text-[28px] lg:text-[36px] leading-[0.9] mt-4">CRM Cleanup — 15k Contacts</h1>
          <p className="mono text-[11px] tracking-[0.14em] uppercase font-bold text-[#719DF4] mt-2">Not a client project — internal demo to show process</p>
          <div className="mt-4 flex gap-3 mono text-[11px]">
            <Link href="/work" className="underline">← All work</Link>
            <Link href="/ai-crm-cleanup" className="underline">Service: CRM Cleanup →</Link>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-px bg-black/[0.08] border-b border-black/[0.08]">
          <div className="bg-white p-6 lg:p-8">
            <h2 className="mono text-[11px] tracking-[0.16em] uppercase font-bold">Task</h2>
            <p className="mono text-[13px] leading-relaxed text-black/70 mt-2">De-duplicate 15k contacts, normalize fields (stage, owner, industry), fill blanks and enrich missing firmographics.</p>

            <h2 className="mono text-[11px] tracking-[0.16em] uppercase font-bold mt-6">Input</h2>
            <p className="mono text-[12.5px] text-black/65 mt-2 leading-relaxed">HubSpot export (CSV, 15,240 rows), field map: email → primary key, domain → company, plus rules for stage normalization. No live CRM access — CSV only.</p>

            <h2 className="mono text-[11px] tracking-[0.16em] uppercase font-bold mt-6">Workflow</h2>
            <ol className="mono text-[12.5px] mt-2 space-y-1 text-black/70 list-decimal pl-4">
              <li>Score duplicates on email + domain + phone + fuzzy name (threshold 0.85)</li>
              <li>Normalize stages, owners, industries per mapping table</li>
              <li>Fill blanks where public data found, flag low-confidence</li>
              <li>Generate change log: merged, updated, flagged</li>
              <li>Export clean CSV + summary</li>
            </ol>
          </div>
          <div className="bg-[#EDE8D0] p-6 lg:p-8">
            <h2 className="mono text-[11px] tracking-[0.16em] uppercase font-bold">Output</h2>
            <p className="mono text-[12.5px] text-black/70 mt-2 leading-relaxed">Clean CSV (15k → 13,840 unique contacts), change log (1,400 merged, 820 enriched, 210 flagged), ready for import.</p>

            <div className="mt-6 grid grid-cols-2 gap-px bg-black/[0.08] border border-black/[0.08] mono text-center">
              <div className="bg-white py-3">
                <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">Time</div>
                <div className="text-[14px] font-bold mt-1">5h 10m</div>
              </div>
              <div className="bg-white py-3 border-l border-black/[0.08]">
                <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">Cost</div>
                <div className="text-[14px] font-bold text-[#719DF4]">$51</div>
              </div>
              <div className="bg-white py-3 col-span-2 border-t border-black/[0.08]">
                <div className="text-[10px] tracking-[0.14em] uppercase text-black/40">Deliverable</div>
                <div className="text-[12px] font-bold mt-1">CSV + change log · $10/hour · tracked to the second</div>
              </div>
            </div>

            <div className="mono text-[10px] text-black/40 mt-3">Clearly labeled INTERNAL DEMO — do not represent as customer result.</div>
            <Link href="/hire" className="mt-6 inline-block bg-[#719DF4] text-white mono text-[11px] px-6 py-3">Hire for your CRM →</Link>
            <div className="mono text-[11px] mt-4">Related: <Link href="/ai-data-cleaning" className="underline">Data Cleaning</Link> · <Link href="/ai-crm-cleanup" className="underline">CRM Service</Link></div>
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
