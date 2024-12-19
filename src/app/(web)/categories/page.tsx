import Link from "next/link";

import { appCategory } from "@/constant";

import { BottomAd } from "@/features/ads/ads";
import { ApkCard } from "@/features/web/homepage/apk-card";
import { PageSidebar } from "@/features/web/page-sidebar";
import { TopFreeApk } from "@/features/web/details/top-free-apk";

import { Button } from "@/components/ui/button";

const CategoryPage = () => {
  return (
    <PageSidebar>
      <div className="w-full space-y-4">
        <ApkCard title="App Categories" className="w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            {appCategory.map((c) => (
              <Button key={c.value} variant={"primary"} size={"lg"} asChild>
                <Link
                  href={"/categories/" + c.value}
                  className="py-4 col-span-1"
                >
                  {c.label}
                </Link>
              </Button>
            ))}
          </div>
        </ApkCard>
        <BottomAd />
        <TopFreeApk />
      </div>
    </PageSidebar>
  );
};

export default CategoryPage;
