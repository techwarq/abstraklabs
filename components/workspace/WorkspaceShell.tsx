"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "../../lib/api/auth";

function NavIcon({
  href,
  label,
  active,
  onClick,
  children,
}: {
  href?: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const className = `group relative w-9 h-9 rounded-[10px] grid place-items-center transition-colors ${
    active ? "bg-white text-[#141414]" : "text-white/55 hover:text-white hover:bg-white/10"
  }`;

  const inner = (
    <>
      {children}
      <span className="pointer-events-none absolute left-full ml-2.5 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#141414] text-white text-[11px] font-medium px-2.5 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-50">
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} aria-label={label} className={className}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} aria-label={label} className={className}>
      {inner}
    </button>
  );
}

export default function WorkspaceShell({
  customerId,
  children,
}: {
  customerId: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (segment: string) => pathname?.startsWith(`/${customerId}/${segment}`);

  const handleSignOut = async () => {
    await logout();
    router.push("/sign-in");
  };

  return (
    <div className="min-h-screen flex bg-[#EFEEEC] text-[#141414]">
      <aside className="w-16 shrink-0 bg-[#141414] flex flex-col items-center py-4 gap-1">
        <Link href={`/${customerId}/hire`} className="mb-5">
          <Image src="/icon-mark.png" alt="Talo" width={28} height={28} className="w-7 h-7" />
        </Link>

        <NavIcon href={`/${customerId}/hire`} label="Hire" active={isActive("hire")}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </NavIcon>

        <NavIcon href={`/${customerId}/history`} label="History" active={isActive("history")}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 3-6.7" />
            <path d="M3 4v5h5" />
            <path d="M12 7v5l3.5 2" />
          </svg>
        </NavIcon>

        <NavIcon href={`/${customerId}/billing`} label="Billing" active={isActive("billing")}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2.5" y="5.5" width="19" height="13" rx="2.2" />
            <path d="M2.5 9.5h19" />
          </svg>
        </NavIcon>

        <NavIcon href={`/${customerId}/profile`} label="Profile" active={isActive("profile")}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="3.5" />
            <path d="M4.5 20c1.6-3.6 4.7-5.5 7.5-5.5s5.9 1.9 7.5 5.5" />
          </svg>
        </NavIcon>

        <div className="flex-1" />

        <NavIcon label="Sign out" onClick={handleSignOut}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <path d="M16 17l5-5-5-5" />
            <path d="M21 12H9" />
          </svg>
        </NavIcon>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">{children}</div>
    </div>
  );
}
