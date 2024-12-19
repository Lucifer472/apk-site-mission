import { getRelatedApps } from "@/data/application";

import { ApkCard } from "../homepage/apk-card";
import { ApkIconHolder } from "../homepage/apk-icon-holder";

export const RelatedApps = async ({ category }: { category: string }) => {
  const data = await getRelatedApps(category);

  if (!data) return;

  return (
    <ApkCard title="Related Apps">
      <div className="flex items-center justify-between flex-wrap gap-2">
        {data.map((item) => (
          <ApkIconHolder
            href={item.id}
            name={item.name}
            src={item.icon}
            key={item.id}
          />
        ))}
      </div>
    </ApkCard>
  );
};
