import { SITE_URL } from "@/config";
import { getApplicationBySearch } from "@/data/application";
import { PageSidebar } from "@/features/web/page-sidebar";
import Link from "next/link";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;

  const data = await getApplicationBySearch(q);

  return (
    <PageSidebar>
      <div className="space-y-4 w-full h-full">
        <h2 className="capitalize text-2xl font-semibold">
          Popular Searches for {q}
        </h2>
        <div className="flex flex-col w-full gap-y-4">
          {data && data.length > 0 ? (
            data.map((d) => (
              <Link
                key={d.id}
                href={"/details/" + d.id}
                className="flex flex-col gap-y-2"
              >
                <p className="text-xs">
                  <span className="mr-2 font-semibold">Popular </span>
                  {SITE_URL}/details/{d.id}
                </p>
                <p className="text-2xl font-medium text-main hover:underline hover:text-main-dark transition">
                  {d.name} - Free Download
                </p>
                <p className="text-gray-600 font-medium">
                  {JSON.parse(d.features).blocks[0].data.text}
                </p>
              </Link>
            ))
          ) : (
            <p className="text-xl text-gray-800">
              Sorry Nothing Found for {q} please try something else
            </p>
          )}
        </div>
      </div>
    </PageSidebar>
  );
};

export default SearchPage;
