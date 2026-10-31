"use client";

import { useGetMe } from "@/hooks";
import { useRouter } from "next/navigation";
 import { useEffect } from "react";
import AuthLoading from "./auth-loading";
import { UserRole } from "@/types";
import AccessDenied from "./access-denied";

interface Iprops {
  children: React.ReactNode;
  roles: UserRole[];
}
const RoleGuard = ({ children, roles }: Iprops) => {

    const { data,isPending,isError } = useGetMe();
    const router = useRouter();

    const user=data?.data;
    const isAuthorized = !!user&&roles.includes(user.role);

    useEffect(() => {
    if (isPending) {
      return;
    }
    if (isError || !user) {
      router.replace("/login");
    }
  }, [isPending, isError, user, router.replace]);


  if (isPending) {
    return <AuthLoading />;
  }
   if (isError || !user) {
      return <AuthLoading label="Redirecting to login" />;
    }

    if (isAuthorized) {
      return <>{children}</>
    }
    return <div><AccessDenied /> </div>;
};

export default RoleGuard;