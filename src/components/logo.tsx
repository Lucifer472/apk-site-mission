import Image from "next/image";
import Link from "next/link";

import { SITE_TITLE } from "@/config";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "relative flex items-center justify-center gap-x-1 py-4",
        className
      )}
    >
      <Image
        src={"/logo.png"}
        alt="Logo"
        width={30}
        height={30}
        style={{ aspectRatio: "1/1" }}
      />
      <span className="font-medium text-lg">{SITE_TITLE}</span>
    </Link>
  );
};

export default Logo;
