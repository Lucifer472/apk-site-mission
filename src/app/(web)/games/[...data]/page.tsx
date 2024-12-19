import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";

import { TopAd } from "@/features/ads/ads";
import { ApkCard } from "@/features/web/homepage/apk-card";
import { ApkIconHolderLong } from "@/features/web/homepage/apk-icon-holder";
import { PageSidebar } from "@/features/web/page-sidebar";

import { getApplicationByCategoryPage } from "@/data/application";

import { allCategory } from "@/constant";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ data: string[] }>;
}) => {
  const p = await params;
  const category = p.data[0];
  const page = parseInt(p.data[1] ?? "1") ?? 1;

  const data = await getApplicationByCategoryPage({ category, page });

  let isPending = true;

  if (!data || data.length < 1) {
    return redirect("/");
  }

  if (data.length === 10) {
    isPending = false;
    data.pop();
  }

  const cat = allCategory.find((c) => c.value === category);

  return (
    <PageSidebar>
      <ApkCard title={cat!.label} className="w-full">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {data.map((d) => (
              <ApkIconHolderLong
                category={d.category}
                href={d.id}
                name={d.name}
                src={d.icon}
                star={d.rating}
                key={d.id}
              />
            ))}
          </div>
          <Button
            variant={"primary"}
            size={"lg"}
            className="w-full"
            disabled={isPending}
            asChild={!isPending}
          >
            {isPending ? (
              <span>Show More Games</span>
            ) : (
              <Link href={`/categories/${cat!.value}/${page + 1}`}>
                Show More Games
              </Link>
            )}
          </Button>
        </div>
      </ApkCard>
      <TopAd />
    </PageSidebar>
  );
};

export default CategoryPage;
