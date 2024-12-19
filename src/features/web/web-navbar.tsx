"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MenuIcon, SearchIcon } from "lucide-react";

import Logo from "@/components/logo";

import { navLinks } from "@/constant";
import { cn } from "@/lib/utils";

import { useNavbar } from "./hooks/use-navbar";

export const WebNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const searchParams = useSearchParams();

  const { setIsNavbar } = useNavbar();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const searchValue = formData.get("search");

    if (!!searchValue && typeof searchValue === "string") {
      router.push("/search?q=" + encodeURIComponent(searchValue));
    }
  };

  return (
    <header className="bg-white w-full h-[60px] border-b border-neutral-200">
      <nav className="max-w-screen-xl mx-auto w-full h-full flex items-center justify-between px-4 lg:px-0">
        <div className="gap-x-2 flex items-center justify-start">
          <Logo />
          <form
            onSubmit={handleSubmit}
            className="hidden lg:flex items-center justify-center gap-x-2 border px-2.5 py-1 border-main-light rounded-full"
          >
            <input
              className="outline-none min-w-[280px] border-none text-sm px-2"
              type="text"
              name="search"
              id="search"
              defaultValue={searchParams.get("q") ?? ""}
              placeholder="search any application"
            />
            <button type="submit">
              <SearchIcon className="size-6 text-main" />
            </button>
          </form>
        </div>
        <div
          onClick={() => setIsNavbar(true)}
          className="flex lg:hidden cursor-pointer items-center justify-end"
        >
          <MenuIcon className="text-main size-8" />
        </div>
        <div className="hidden lg:flex items-center justify-end h-full">
          {navLinks.map((link) => {
            const active = pathname === link.link;
            return (
              <Link
                href={link.link}
                key={link.link}
                className={cn(
                  "px-6 h-full flex items-center justify-center hover:bg-main-hover",
                  active && "bg-main-hover"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
