import { getTopDownloadApplications } from "@/data/application";

import { ApkCard } from "../homepage/apk-card";
import { ApkIconHolder } from "../homepage/apk-icon-holder";

export const TopFreeApk = async ({ isGame }: { isGame?: boolean }) => {
  const data = await getTopDownloadApplications(isGame);

  if (!data) return;

  return (
    <ApkCard title="Top Free Apps" link="/top-rank">
      <div className="flex items-center flex-wrap justify-between gap-4">
        {data.map((d) => (
          <ApkIconHolder href={d.id} name={d.name} src={d.icon} key={d.id} />
        ))}
      </div>
    </ApkCard>
  );
};
