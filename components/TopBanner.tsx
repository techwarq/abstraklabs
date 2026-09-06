"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const WORKSPACE_ROUTE = /^\/[^/]+\/(hire|history|billing|profile)(\/|$)/;

export default function TopBanner() {
  const pathname = usePathname() ?? "";
  const hidden =
    pathname === "/sign-in" || pathname === "/sign-up" || WORKSPACE_ROUTE.test(pathname);

  if (hidden) return null;

  return (
    <Link
      href="/hire"
      className="block bg-[#141414] text-center py-2.5 px-4 text-[12.5px] sm:text-[13px] font-semibold hover:bg-black transition-colors"
      style={{ color: "#719DF4" }}
    >
      We&apos;re not live yet — tell us what you want to get done today and we&apos;ll get back to you with 50% off access to Talo →
    </Link>
  );
}
