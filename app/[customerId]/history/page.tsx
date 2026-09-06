"use client";

const MOCK_HISTORY = [
  { id: "1", title: "1,000 SaaS companies with verified decision-maker emails", status: "Delivered", date: "Sep 1, 2026" },
  { id: "2", title: "Clean up CRM duplicate contacts", status: "Delivered", date: "Aug 22, 2026" },
  { id: "3", title: "Research competitor pricing pages", status: "Delivered", date: "Aug 14, 2026" },
];

export default function HistoryPage() {
  return (
    <div className="flex-1 px-6 lg:px-10 py-8">
      <div className="max-w-[720px] mx-auto">
        <h1 className="text-[22px] font-semibold tracking-[-0.02em]">History</h1>
        <p className="text-[13.5px] text-black/50 mt-1.5">Past tasks and their results.</p>

        <div className="mt-6 rounded-2xl bg-white border border-black/[0.06] divide-y divide-black/[0.06]">
          {MOCK_HISTORY.map((h) => (
            <div key={h.id} className="px-5 py-4 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="text-[13.5px] font-medium truncate">{h.title}</div>
                <div className="text-[12px] text-black/40 mt-0.5">{h.date}</div>
              </div>
              <span className="shrink-0 text-[11px] font-semibold text-[#22C55E] bg-[#22C55E]/10 px-2.5 py-1 rounded-full">
                {h.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
