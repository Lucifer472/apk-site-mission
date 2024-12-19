"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Logo from "@/components/logo";

import { footerLinks } from "@/constant";
import { cn } from "@/lib/utils";

export const PolicyHeader = () => {
  const [isScroll, setIsScroll] = useState(false);

  const pathname = usePathname();
  const title = footerLinks.find((f) => pathname === f.link);

  useEffect(() => {
    if (window.scrollY > 10) {
      setIsScroll(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full h-[240px] before:h-[240px] md:h-[340px] flex items-center justify-center bg-[rgba(55,205,120,1)] bg-no-repeat bg-cover bg-[url('/policy-header.png')] before:bg-black before:bg-opacity-20 before:block before:absolute before:top-0 before:left-0 before:w-full before:md:h-[340px]">
      <h2 className="relative z-10 text-[40px] md:text-[50px] lg:text-[64px] text-white font-semibold">
        {title ? title.label : "Policy"}
      </h2>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full h-[60px] z-10 transition-all duration-500",
          isScroll ? "bg-black bg-opacity-95" : "bg-transparent"
        )}
      >
        <div className="max-w-screen-xl px-4 md:px-2 lg:px-0 mx-auto w-full h-full flex items-center justify-start">
          <Logo className="text-white" />
        </div>
      </nav>
    </header>
  );
};
