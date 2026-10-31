import AuthGuard from "@/components/auth/auth-guard";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AuthGuard>{children}</AuthGuard>
    </div>
  );
};

export default layout;
