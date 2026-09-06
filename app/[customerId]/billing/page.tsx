"use client";

const ACCENT = "#719DF4";

export default function BillingPage() {
  return (
    <div className="flex-1 px-6 lg:px-10 py-8">
      <div className="max-w-[720px] mx-auto">
        <h1 className="text-[22px] font-semibold tracking-[-0.02em]">Billing</h1>
        <p className="text-[13.5px] text-black/50 mt-1.5">Your plan and usage.</p>

        <div className="mt-6 rounded-2xl bg-white border border-black/[0.06] p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] tracking-[0.08em] uppercase text-black/40 font-semibold">Current plan</div>
              <div className="text-[18px] font-semibold mt-1">Pay as you go — $10/hr</div>
            </div>
            <button
              type="button"
              className="text-white text-[12.5px] font-semibold px-4 py-2 rounded-full"
              style={{ background: ACCENT }}
            >
              Manage plan
            </button>
          </div>
          <div className="mt-6 pt-6 border-t border-black/[0.06] grid grid-cols-2 gap-4">
            <div>
              <div className="text-[11px] tracking-[0.08em] uppercase text-black/40 font-semibold">This month</div>
              <div className="text-[18px] font-semibold mt-1">$0.00</div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.08em] uppercase text-black/40 font-semibold">Hours used</div>
              <div className="text-[18px] font-semibold mt-1">0.0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
