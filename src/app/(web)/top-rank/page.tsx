import { BottomMiddleAd, TopAd } from "@/features/ads/ads";
import { ApkCard } from "@/features/web/homepage/apk-card";
import { ApkIconHolderLong } from "@/features/web/homepage/apk-icon-holder";

import { getTopDownloadApplicationsMore } from "@/data/application";

const TopRank = async () => {
  const TopApps = await getTopDownloadApplicationsMore();
  const TopGames = await getTopDownloadApplicationsMore(true);

  return (
    <div className="w-full space-y-4">
      <TopAd />
      <div className="grid grid-cols-3 w-full gap-4">
        <div className="col-span-1">
          <ApkCard title="TOP FREE APPS">
            <div className="flex flex-col items-center justify-center gap-y-4 w-full">
              {TopApps &&
                TopApps.map((t) => (
                  <ApkIconHolderLong
                    category={t.category}
                    href={t.id}
                    name={t.name}
                    src={t.icon}
                    star={t.rating}
                    key={t.id}
                  />
                ))}
            </div>
          </ApkCard>
        </div>
        <div className="col-span-1">
          <ApkCard title="TOP FREE GAMES">
            <div className="flex flex-col items-center justify-center gap-y-4 w-full">
              {TopGames &&
                TopGames.map((t) => (
                  <ApkIconHolderLong
                    category={t.category}
                    href={t.id}
                    name={t.name}
                    src={t.icon}
                    star={t.rating}
                    key={t.id}
                  />
                ))}
            </div>
          </ApkCard>
        </div>
        <div className="col-span-1">
          <BottomMiddleAd />
        </div>
      </div>
    </div>
  );
};

export default TopRank;
