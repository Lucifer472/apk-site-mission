"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckCircle, HomeIcon, Settings, UserIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Home",
    href: "/admin",
    icon: HomeIcon,
    activeIcon: HomeIcon,
  },
  {
    label: "List Apps",
    href: "/admin/list",
    icon: CheckCircle,
    activeIcon: CheckCircle,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
    activeIcon: Settings,
  },
  {
    label: "Users",
    href: "/admin/users",
    icon: UserIcon,
    activeIcon: UserIcon,
  },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col">
      {routes.map((r) => {
        const isActive = pathname === r.href;
        const Icon = !isActive ? r.icon : r.activeIcon;

        return (
          <Link href={r.href} key={r.href}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <Icon className="size-5 text-neutral-500" />
              {r.label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
