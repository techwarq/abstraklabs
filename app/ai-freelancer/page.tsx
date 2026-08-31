import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { siteUrl, absoluteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "Hire an AI Freelancer From $10/Hour",
  description:
    "Hire an AI freelancer to handle research, data entry, lead generation, data cleaning, document processing and repetitive digital work. Start at $10/hour.",
  alternates: { canonical: "/ai-freelancer" },
  openGraph: {
    title: "Hire an AI Freelancer From $10/Hour | Abstrak Labs",
    description:
      "Hire an AI freelancer to handle research, data entry, lead generation, data cleaning, document processing and repetitive digital work. Start at $10/hour.",
    url: absoluteUrl("/ai-freelancer"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire an AI Freelancer From $10/Hour | Abstrak Labs",
    description:
      "Hire an AI freelancer to handle research, data entry, lead generation, data cleaning, document processing and repetitive digital work. Start at $10/hour.",
  },
};

const faqs = [
  {
    q: "What is an AI freelancer?",
    a: "An AI freelancer is a digital worker from Abstrak Labs that completes defined business tasks — like research, data entry or lead enrichment — using autonomous AI, then delivers the finished result. You describe the work, we handle the workflow, you receive the deliverable.",
  },
  {
    q: "How much does an AI freelancer cost?",
    a: "From $10/hour of active work, tracked to the second. A 6h 42m task is $67. No subscription, no seat fees, no minimum. You see time, work and cost per task.",
  },
  {
    q: "What can an AI freelancer do?",
    a: "Research, data entry, lead generation, data cleaning, CRM cleanup, invoice processing, e-commerce operations, document processing and other repetitive browser work. If it's digital and repeatable, we can likely handle it.",
  },
  {
    q: "How is this different from a human freelancer?",
    a: "Human freelancers require briefing, management, revisions and availability coordination. AI freelancers run the workflow autonomously, deliver in hours instead of days, and cost $10/hour. Best for well-defined, repeatable work; humans are still better for judgment-heavy or creative decisions.",
  },
  {
    q: "How is this different from an AI agent or AI tool?",
    a: "AI tools give you software to configure and operate. Abstrak Labs gives you the result. You don't build agents, write prompts or manage software — you send the task and we deliver the spreadsheet, report or dataset.",
  },
  {
    q: "How do I hire an AI freelancer?",
    a: "Go to Hire a Worker, describe the task in plain English, attach files if needed, and confirm where to deliver. We estimate time/cost, run the workflow, verify output and send the result.",
  },
  {
    q: "What do I receive?",
    a: "The finished deliverable — typically a spreadsheet, dataset, report or updated records — plus a summary of what was executed, time taken and cost.",
  },
  {
    q: "Do you check the work for accuracy?",
    a: "Yes. Each workflow includes verification steps, and we review output before delivery. Small corrections are included if the result doesn't meet the agreed requirements.",
  },
];

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hire an AI Freelancer",
    serviceType: "AI Freelancer",
    provider: { "@type": "Organization", name: "Abstrak Labs", url: siteUrl },
    areaServed: "Worldwide",
    url: absoluteUrl("/ai-freelancer"),
    description:
      "Hire an AI freelancer from Abstrak Labs to complete research, data entry, lead generation, data cleaning, document processing and repetitive digital work from $10/hour.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "10",
      unitText: "HOUR",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/hire"),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Hire an AI Freelancer", item: absoluteUrl("/ai-freelancer") },
    ],
  };

  return (
    <main className="min-h-screen bg-[#EDE8D0] text-black selection:bg-[#92A9E1] selection:text-white">
      <JsonLd data={[serviceJsonLd, faqJsonLd, breadcrumbJsonLd]} />
      <div className="fixed inset-0 bg-grid-brutalist pointer-events-none opacity-[0.22]" />
      <div className="relative max-w-[1440px] mx-auto border-x border-black/[0.08] bg-[#EDE8D0]">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-[#EDE8D0]/92 backdrop-blur-[8px] border-b border-black/[0.08]">
          <div className="px-6 lg:px-8 h-[56px] flex items-center justify-between">
            <Link href="/" className="leading-none">
              <div className="text-[11px] font-bold tracking-[-0.02em]">ABSTRAK LABS</div>
              <div className="mono text-[9px] tracking-[0.18em] text-black/55 -mt-0.5">DIGITAL LABOR</div>
            </Link>
            <nav className="hidden lg:flex gap-6 mono text-[10.5px] tracking-[0.14em] uppercase text-black/55">
              <Link href="/ai-freelancer" className="text-black font-bold">AI Freelancer</Link>
              <Link href="/work" className="hover:text-black">Work</Link>
              <Link href="/hire" className="hover:text-black">Pricing</Link>
            </nav>
            <Link href="/hire" className="bg-black text-white mono text-[11px] tracking-[0.12em] uppercase font-bold px-4 py-2.5">
              Hire a worker — $10/hr →
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="border-b border-black/[0.08] bg-[#EDE8D0]">
          <div className="px-6 lg:px-8 py-10 lg:py-12">
            <div className="mono text-[10px] tracking-[0.16em] uppercase text-black/40">Abstrak Labs — Digital Labor</div>
            <h1 className="display-brutalist text-[36px] sm:text-[46px] lg:text-[54px] leading-[0.85] tracking-[-0.04em] mt-3">
              Hire an AI Freelancer
            </h1>
            <p className="mono text-[11px] tracking-[0.14em] uppercase font-bold text-[#92A9E1] mt-3">From $10/hour · No subscription</p>
            <p className="text-[15px] leading-relaxed text-black/70 mt-6 max-w-[720px]">
              Abstrak Labs lets businesses hire AI freelancers to complete digital work such as research, data entry, lead generation, data
              cleaning, document processing and repetitive browser tasks. AI freelancers are available from{" "}
              <strong className="text-black">$10/hour</strong>.
            </p>
            <div className="mt-7 flex gap-3">
              <Link href="/hire" className="bg-[#92A9E1] text-white mono text-[11px] tracking-[0.14em] uppercase font-bold px-6 py-3">
                Hire an AI freelancer →
              </Link>
              <Link href="/work" className="bg-white border border-black/15 mono text-[11px] tracking-[0.14em] uppercase font-bold px-6 py-3">
                See sample work →
              </Link>
            </div>
          </div>
        </section>

        {/* AEO — What is */}
        <section className="border-b border-black/[0.08] bg-white">
          <div className="px-6 lg:px-8 py-8">
            <h2 className="text-[18px] font-bold tracking-tight">What is an AI freelancer?</h2>
            <p className="mono text-[13px] leading-relaxed text-black/65 mt-3 max-w-[760px]">
              An AI freelancer is a digital worker that completes a defined task using autonomous AI — then delivers the finished result. Unlike
              AI tools that give you software to operate, an AI freelancer gives you the outcome. You describe what needs to be done in plain
              English, we run the workflow, verify the output and send the spreadsheet, dataset or report.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/[0.08] border-t border-black/[0.08]">
            <div className="bg-white p-6">
              <h3 className="mono text-[11px] tracking-[0.14em] uppercase font-bold">What it does</h3>
              <p className="mono text-[12px] text-black/60 mt-2 leading-relaxed">
                Research, data entry, lead lists, cleaning, CRM updates, document extraction and other repeatable digital operations.
              </p>
            </div>
            <div className="bg-white p-6">
              <h3 className="mono text-[11px] tracking-[0.14em] uppercase font-bold">Who it’s for</h3>
              <p className="mono text-[12px] text-black/60 mt-2 leading-relaxed">
                Teams with boring, repetitive work they don’t want to spend hours doing — ops, sales, research, e-commerce, finance.
              </p>
            </div>
            <div className="bg-white p-6">
              <h3 className="mono text-[11px] tracking-[0.14em] uppercase font-bold">How it’s different</h3>
              <p className="mono text-[12px] text-black/60 mt-2 leading-relaxed">You buy the result, not the software. No prompts, no setup, no freelancer to manage.</p>
            </div>
          </div>
        </section>

        {/* What can do */}
        <section className="border-b border-black/[0.08] bg-[#EDE8D0]">
          <div className="px-6 lg:px-8 py-8 bg-white border-b border-black/[0.08]">
            <h2 className="text-[18px] font-bold tracking-tight">What can an AI freelancer do?</h2>
            <p className="mono text-[12px] text-black/60 mt-2">Example tasks that map directly to hiring intent. Each links to a dedicated service page.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.08]">
            {[
              { href: "/ai-data-entry", t: "Data entry", d: "Spreadsheet & PDF→Excel, copy/paste, database cleanup." },
              { href: "/ai-web-research", t: "Web research", d: "Company, market and competitor research from public sources." },
              { href: "/ai-lead-generation", t: "Lead generation", d: "Prospect lists, ICP filtering, contact verification." },
              { href: "/ai-data-cleaning", t: "Data cleaning", d: "Deduplication, normalization, spreadsheet cleanup." },
              { href: "/ai-crm-cleanup", t: "CRM cleanup", d: "De-dupe contacts, normalize fields, enrich records." },
              { href: "/ai-invoice-processing", t: "Invoice processing", d: "Extract line items, reconcile totals, structure for accounting." },
              { href: "/ai-ecommerce-operations", t: "E-commerce ops", d: "Catalog cleanup, product data entry, variant normalization." },
              { href: "/ai-document-processing", t: "Document processing", d: "Forms, records, PDFs → structured data." },
              { href: "/ai-research", t: "Research", d: "Market, company and tender/grant research." },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="bg-white p-6 hover:bg-[#EDE8D0] transition-colors group">
                <div className="mono text-[12px] font-bold tracking-[0.04em] group-hover:text-[#92A9E1]">{c.t} →</div>
                <div className="mono text-[11.5px] text-black/60 mt-1 leading-relaxed">{c.d}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* How hiring works + pricing + example */}
        <section className="border-b border-black/[0.08] bg-white">
          <div className="grid grid-cols-12 gap-px bg-black/[0.08]">
            <div className="col-span-12 lg:col-span-7 bg-white p-6 lg:p-8">
              <h2 className="text-[18px] font-bold tracking-tight">How hiring works</h2>
              <ol className="mt-4 space-y-3 mono text-[12.5px] leading-relaxed text-black/70">
                <li>
                  <strong className="text-black">1. Send the task</strong> — describe it in plain English, attach files.
                </li>
                <li>
                  <strong className="text-black">2. We confirm scope</strong> — we estimate time/cost at $10/hr.
                </li>
                <li>
                  <strong className="text-black">3. AI freelancer runs the workflow</strong> — research, browse, extract, verify, organize.
                </li>
                <li>
                  <strong className="text-black">4. You get the result</strong> — spreadsheet, dataset, report or updated records.
                </li>
              </ol>
              <h2 className="text-[16px] font-bold tracking-tight mt-8">How much does it cost?</h2>
              <p className="mono text-[12.5px] text-black/70 mt-2">
                <strong className="text-black">$10/hour</strong> of active work, tracked to the second. No subscription, no minimum. A 6h 42m task is $67
                — you see the exact time and cost per delivery.
              </p>
              <div className="mt-6 flex gap-3">
                <Link href="/hire" className="bg-black text-white mono text-[11px] tracking-[0.14em] uppercase font-bold px-5 py-2.5">
                  Hire an AI freelancer →
                </Link>
                <Link href="/work" className="border border-black/15 mono text-[11px] tracking-[0.14em] uppercase font-bold px-5 py-2.5">
                  See sample work
                </Link>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 bg-[#EDE8D0] p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-black/[0.08]">
              <div className="mono text-[10px] tracking-[0.16em] uppercase font-bold text-black/40">Sample delivery</div>
              <div className="mt-3 border border-black/[0.08] bg-white p-4">
                <div className="mono text-[11px] font-bold">500 qualified companies</div>
                <div className="mono text-[11px] text-black/60 mt-1">Research → Filter → Verify → Enrich → Spreadsheet</div>
                <div className="mt-3 grid grid-cols-2 gap-px bg-black/[0.08] border border-black/[0.08] mono text-center">
                  <div className="bg-white py-2">
                    <div className="text-[10px] text-black/40 uppercase tracking-[0.14em]">Time</div>
                    <div className="text-[13px] font-bold">6h 42m</div>
                  </div>
                  <div className="bg-white py-2 border-l border-black/[0.08]">
                    <div className="text-[10px] text-black/40 uppercase tracking-[0.14em]">Cost</div>
                    <div className="text-[13px] font-bold text-[#92A9E1]">$67</div>
                  </div>
                </div>
                <div className="mono text-[10px] text-black/40 mt-2">Sample workflow — clearly labeled, not a client project</div>
              </div>
              <h2 className="text-[14px] font-bold tracking-tight mt-6">Limitations & human review</h2>
              <p className="mono text-[12px] text-black/60 mt-2 leading-relaxed">
                AI freelancers are best for well-defined, repeatable work. For judgment-heavy decisions, legal, medical or highly sensitive data, add
                human review. We flag low-confidence items for you to confirm.
              </p>
            </div>
          </div>
        </section>

        {/* Differences */}
        <section className="border-b border-black/[0.08] bg-[#EDE8D0]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/[0.08]">
            <div className="bg-white p-6 lg:p-8">
              <h2 className="text-[14px] font-bold">AI freelancer vs human freelancer</h2>
              <p className="mono text-[12.5px] text-black/65 mt-2 leading-relaxed">
                Human: briefing, management, variable quality, days to deliver, $25–$75/hr. AI freelancer: define the outcome, get the finished
                result in hours, $10/hr, verified. Use AI for scale, humans for strategy and edge cases.
              </p>
            </div>
            <div className="bg-white p-6 lg:p-8">
              <h2 className="text-[14px] font-bold">AI freelancer vs AI agent / tool</h2>
              <p className="mono text-[12.5px] text-black/65 mt-2 leading-relaxed">
                Tools give you software to build and run. Abstrak gives you the deliverable. You don’t configure agents or prompts — you send the
                task, we handle the workflow and deliver the spreadsheet/report.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-black/[0.08] bg-white">
          <div className="px-6 lg:px-8 py-7 border-b border-black/[0.08]">
            <h2 className="text-[18px] font-bold tracking-tight">Frequently asked questions</h2>
          </div>
          <div className="divide-y divide-black/[0.08]">
            {faqs.map((f) => (
              <div key={f.q} className="px-6 lg:px-8 py-5">
                <h3 className="mono text-[13px] font-bold">{f.q}</h3>
                <p className="mono text-[12.5px] leading-relaxed text-black/65 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA + internal links */}
        <section className="bg-black text-white">
          <div className="px-6 lg:px-8 py-10 text-center">
            <h2 className="display-brutalist text-[28px] md:text-[36px] leading-[0.9]">Hire an AI freelancer today.</h2>
            <p className="mono text-[12px] text-white/60 mt-3">Describe the task. We’ll handle the workflow and deliver the result. From $10/hour.</p>
            <div className="mt-6 flex justify-center gap-3">
              <Link href="/hire" className="bg-[#92A9E1] text-white mono text-[11px] tracking-[0.14em] uppercase font-bold px-6 py-3">
                Hire an AI freelancer →
              </Link>
              <Link href="/work" className="border border-white/20 mono text-[11px] tracking-[0.14em] uppercase font-bold px-6 py-3">
                See sample work
              </Link>
            </div>
            <div className="mt-8 mono text-[11px] leading-relaxed text-white/50">
              Related:{" "}
              <Link href="/ai-data-entry" className="underline hover:text-white">
                Data Entry
              </Link>{" "}
              ·{" "}
              <Link href="/ai-research" className="underline hover:text-white">
                Research
              </Link>{" "}
              ·{" "}
              <Link href="/ai-lead-generation" className="underline hover:text-white">
                Lead Generation
              </Link>{" "}
              ·{" "}
              <Link href="/ai-crm-cleanup" className="underline hover:text-white">
                CRM Cleanup
              </Link>
            </div>
          </div>
        </section>

        <footer className="border-t border-black/[0.08] bg-[#EDE8D0] px-6 lg:px-8 py-6 mono text-[10px] tracking-[0.14em] uppercase text-black/40 flex justify-between">
          <span>© 2024 Abstrak Labs</span>
          <Link href="/" className="hover:text-black">
            ← Back to home
          </Link>
        </footer>
      </div>
    </main>
  );
}
