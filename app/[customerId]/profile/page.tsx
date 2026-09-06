"use client";

import { useParams } from "next/navigation";
import { getCachedEmail } from "../../../lib/api/session";

export default function ProfilePage() {
  const params = useParams<{ customerId: string }>();
  const email = getCachedEmail();

  return (
    <div className="flex-1 px-6 lg:px-10 py-8">
      <div className="max-w-[720px] mx-auto">
        <h1 className="text-[22px] font-semibold tracking-[-0.02em]">Profile</h1>
        <p className="text-[13.5px] text-black/50 mt-1.5">Your account details.</p>

        <div className="mt-6 rounded-2xl bg-white border border-black/[0.06] p-6 space-y-4">
          <div>
            <div className="text-[11px] tracking-[0.08em] uppercase text-black/40 font-semibold mb-1.5">Email</div>
            <div className="text-[14px]">{email ?? "—"}</div>
          </div>
          <div className="pt-4 border-t border-black/[0.06]">
            <div className="text-[11px] tracking-[0.08em] uppercase text-black/40 font-semibold mb-1.5">User ID</div>
            <div className="text-[14px] font-mono">{params.customerId}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
