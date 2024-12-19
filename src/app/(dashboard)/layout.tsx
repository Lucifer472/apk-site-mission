import { redirect } from "next/navigation";
import { Toaster } from "sonner";

import { auth } from "@/auth";
import { GlobalLayoutType } from "@/types";

import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";

const DashboardLayout = async ({ children }: GlobalLayoutType) => {
  const session = await auth();

  if (!session || !session.user || !session.user.email) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-screen">
      <Toaster />
      <div className="flex w-full h-full">
        <div className="fixed left-0 top-0 hidden lg:block lg:w-[256px] h-full overflow-scroll">
          <Sidebar />
        </div>
        <div className="lg:pl-[256px] w-full">
          <div className="mx-auto max-w-screen-2xl h-full">
            <Navbar />
            <div className="h-full py-8 px-6 flex flex-col">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
