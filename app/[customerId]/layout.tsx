"use client";

import { useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import WorkspaceShell from "../../components/workspace/WorkspaceShell";
import { bootstrapSession } from "../../lib/api/session";

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<{ customerId: string }>();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    bootstrapSession().then((session) => {
      if (cancelled) return;
      if (!session) {
        router.replace("/sign-in");
        return;
      }
      if (session.userId !== params.customerId) {
        router.replace(pathname.replace(params.customerId, session.userId));
        return;
      }
      setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [router, pathname, params.customerId]);

  if (!ready) return null;

  return <WorkspaceShell customerId={params.customerId}>{children}</WorkspaceShell>;
}
