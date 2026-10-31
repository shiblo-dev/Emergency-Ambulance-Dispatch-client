"use client";

import Logo from "@/assets/svg/Logo";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { useGetMe, useLogout } from "@/hooks";
import { UserRole } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

export default function Header() {
  const routes = [
    { name: "Home", url: "/" },
    { name: "About us", url: "/aboutUs" },
    { name: "Services", url: "/services" },
    { name: "Blog", url: "/blog" },
    { name: "Contact us", url: "/contact" },
  ];

  const dashboardRoute: Record<UserRole, string> = {
    ADMIN: "/admin",
    DISPATCHER: "/dispatcher",
    PATIENT: "/patient",
  };

  const { data, isLoading } = useGetMe();
  const { mutate: logout } = useLogout();
  const queryClient = useQueryClient();

  const role: UserRole = !!data?.data && data?.data.role;

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        toast.add({
          title: "Tata",
          description: (
      <span className="text-green-600">Logged out successfully</span>
    ),
          type: "success",
        });
        queryClient.removeQueries({ queryKey: ["user"] });
      },
      onError: () => {
        toast.add({
          title: "Logout failed",
          description: "Something Went Wrong",
          type: "error",
        });
      },
    });
  };

  return (
    <header className="w-full h-16 border border-b">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Logo />
          <span> Emergency Ambulance Dispatch</span>
        </div>

        <nav className="flex gap-5">
          {routes.map((route) => (
            <Link key={route.url} href={route.url}>
              {route.name}
            </Link>
          ))}

          {role && <Link href={dashboardRoute[role]}>Dashboard</Link>}
        </nav>
        <div>
          {!isLoading && !data && (
            <Button
              variant="outline"
              render={<Link href="/login">Login</Link>}
              nativeButton={false}
            >
              Login
            </Button>
          )}

          {!isLoading && data && (
            <div className="flex items-center justify-center gap-2">
              <p>Welcome! <span className="  font-bold text-xl"> {data?.data?.name}</span></p>
              <Button onClick={handleLogout} variant="destructive">
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
