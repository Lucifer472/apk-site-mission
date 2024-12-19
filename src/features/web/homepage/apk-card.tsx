import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ApkCardProp = {
  title: string;
  link?: string;
  children: React.ReactNode;
  className?: string;
};

export const ApkCard = ({ title, link, children, className }: ApkCardProp) => {
  return (
    <div className={cn(className ? className : "my-6 w-full")}>
      <Card>
        <CardHeader>
          <CardTitle className="w-full flex items-center justify-between text-lg overflow-hidden font-medium">
            <h2 className="truncate">{title}</h2>
            {link && (
              <Link
                href={link}
                className="text-neutral-600 text-sm flex items-center justify-center"
              >
                <span className="hidden sm:inline">More</span>
                <ChevronRight className="size-6" />
              </Link>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};
