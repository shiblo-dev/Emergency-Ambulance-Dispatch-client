import RoleGuard from "@/components/auth/role-guard";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <RoleGuard roles={["DISPATCHER"]}>
      <DashboardShell {...{ role: "DISPATCHER" }}>{children}</DashboardShell>
    </RoleGuard>
  );
}
