"use client";

import Link from "next/link";
import useMedia from "use-media";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ChartColumnDecreasingIcon,
  ChevronDown,
  Clover,
  Gamepad2Icon,
  HomeIcon,
  SearchIcon,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

import { useNavbar } from "./hooks/use-navbar";
import { useCategory, useGameCategory } from "./hooks/use-category";

import { cn } from "@/lib/utils";
import { gameCategory, appCategory } from "@/constant";

const IconButton = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon?: LucideIcon;
  label: string;
}) => {
  return (
    <Link
      href={href}
      className="flex h-[45px] items-center justify-start gap-x-2 w-full"
    >
      {Icon && <Icon className="text-main" />}
      <span className="text-sm block font-semibold">{label}</span>
    </Link>
  );
};

export const WebSidebar = () => {
  const { isNavbar, setIsNavbar } = useNavbar();
  const { isCategory, setIsCategory } = useCategory();
  const { isGameCategory, setIsGameCategory } = useGameCategory();

  const isMobile = useMedia({ minWidth: "1280px" });

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const searchValue = formData.get("search");

    if (!!searchValue && typeof searchValue === "string") {
      router.push("/search?q=" + encodeURIComponent(searchValue));
    }
  };

  return (
    <Sheet
      modal={false}
      defaultOpen={isNavbar && !isMobile}
      open={isNavbar && !isMobile}
      onOpenChange={setIsNavbar}
    >
      <SheetContent side={"right"} className="overflow-y-auto">
        <div className="flex relative mt-6 flex-col items-start justify-start gap-y-2 w-full">
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center gap-x-2 border px-2.5 py-1 border-main-light w-full mb-6 rounded-full"
          >
            <input
              className="outline-none w-full border-none text-sm px-2"
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
          <IconButton href="/" label="Home" icon={HomeIcon} />
          <div
            className={cn(
              "w-full min-h-[45px] relative transition-all",
              isCategory ? "overflow-hidden" : "overflow-auto"
            )}
          >
            <div
              onClick={() => setIsCategory(!isCategory)}
              className="absolute h-[45px] top-0 left-0 flex cursor-pointer items-center justify-between gap-x-2 w-full"
            >
              <div className="flex items-center justify-center gap-x-2">
                <ChartColumnDecreasingIcon className="text-main" />
                <span className="text-sm block  font-semibold">
                  All Categories
                </span>
              </div>
              <ChevronDown
                className={cn(
                  "transition-all duration-700",
                  isCategory ? "-rotate-180" : "rotate-0"
                )}
              />
            </div>
            <div
              className={cn(
                "relative transition-all duration-700 bottom-[-45px] pl-8 w-full text-slate-700",
                isCategory ? "max-h-[1100px] " : "max-h-0"
              )}
            >
              {appCategory.map((c) => (
                <IconButton
                  key={c.label}
                  href={"/categories/" + c.value}
                  label={c.label}
                />
              ))}
              <div className="h-[45px]">hidden</div>
            </div>
          </div>
          <div
            className={cn(
              "w-full min-h-[45px] relative transition-all",
              isGameCategory ? "overflow-hidden" : "overflow-auto"
            )}
          >
            <div
              onClick={() => setIsGameCategory(!isGameCategory)}
              className="absolute h-[45px] top-0 left-0 flex cursor-pointer items-center justify-between gap-x-2 w-full"
            >
              <div className="flex items-center justify-center gap-x-2">
                <Gamepad2Icon className="text-main" />
                <span className="text-sm block  font-semibold">
                  Game Categories
                </span>
              </div>
              <ChevronDown
                className={cn(
                  "transition-all duration-700",
                  isGameCategory ? "-rotate-180" : "rotate-0"
                )}
              />
            </div>
            <div
              className={cn(
                "relative transition-all duration-700 bottom-[-45px] pl-8 w-full text-slate-700",
                isGameCategory ? "max-h-[1100px] " : "max-h-0"
              )}
            >
              {gameCategory.map((c) => (
                <IconButton
                  key={c.label}
                  href={"/categories/" + c.value}
                  label={c.label}
                />
              ))}
              <div className="h-[45px]">hidden</div>
            </div>
          </div>
          <IconButton href="/top-rank" label="Top Ranks" icon={Clover} />
          <IconButton href="/featured" label="Featured" icon={Sparkles} />
        </div>
      </SheetContent>
    </Sheet>
  );
};
