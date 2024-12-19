import { GlobalLayoutType } from "@/types";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

import AuthLayoutNav from "@/components/auth-nav";

const AuthLayout = async ({ children }: GlobalLayoutType) => {
  const session = await auth();

  if (session && session.user && session.user.email) {
    redirect("/admin");
  }

  return (
    <main className="w-full min-h-screen bg-zinc-100">
      <div className="mx-auto max-w-screen-2xl p-4">
        <AuthLayoutNav />
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
