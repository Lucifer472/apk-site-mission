import { BottomAd, BottomMiddleAd, MiddleAd, TopAd } from "@/features/ads/ads";

import { ApkCard } from "@/features/web/homepage/apk-card";
import {
  ApkIconHolder,
  ApkIconHolderLong,
} from "@/features/web/homepage/apk-icon-holder";
import { ImageSlider } from "@/features/web/homepage/image-slider";

import {
  getApplicationByAge,
  getSocialApps,
  getSportsApps,
  getTopDownloadApplications,
} from "@/data/application";
import { ageGroup, allCategory } from "@/constant";

const Homepage = async () => {
  const topDownloadApps = await getTopDownloadApplications();
  const topDownloadGames = await getTopDownloadApplications(true);
  const lowAge = await getApplicationByAge(ageGroup[2].value);
  const sport = await getSportsApps();
  const social = await getSocialApps();

  return (
    <div className="min-h-screen px-4 sm:px-2 lg:px-0">
      <TopAd />
      <ImageSlider />
      {topDownloadApps && (
        <ApkCard link="/top-rank" title="Top Download Apps">
          <div className="w-full flex items-center justify-between flex-wrap">
            {topDownloadApps.map((d) => (
              <ApkIconHolder
                href={d.id}
                name={d.name}
                src={d.icon}
                key={d.id}
              />
            ))}
          </div>
        </ApkCard>
      )}
      <MiddleAd />
      {topDownloadGames && (
        <ApkCard link="/top-rank" title="🎮Popular Games In Last 24 Hours">
          <div className="w-full flex items-center justify-between flex-wrap">
            {topDownloadGames.map((d) => (
              <ApkIconHolder
                href={d.id}
                name={d.name}
                src={d.icon}
                key={d.id}
              />
            ))}
          </div>
        </ApkCard>
      )}
      {social && (
        <ApkCard
          link="/categories/social"
          title="📱Popular Social Apps In Last 24 Hours"
        >
          <div className="w-full flex items-center justify-between flex-wrap gap-6">
            {social.map((d) => {
              const category = allCategory.find((c) => c.value === d.category);
              return (
                <ApkIconHolderLong
                  href={d.id}
                  name={d.name}
                  src={d.icon}
                  category={category ? category.label : d.category}
                  star={d.rating}
                  key={d.id}
                />
              );
            })}
          </div>
        </ApkCard>
      )}
      <BottomMiddleAd />
      {sport && (
        <ApkCard link="/categories/sport" title=" 🧘‍♀️Your Home, Your Gym!">
          <div className="w-full flex items-center justify-between flex-wrap">
            {sport.map((d) => (
              <ApkIconHolder
                href={d.id}
                name={d.name}
                src={d.icon}
                key={d.id}
              />
            ))}
          </div>
        </ApkCard>
      )}
      {lowAge && (
        <ApkCard link="/games" title="👧👦Play, Learn, and Grow (Only for 12-)">
          <div className="w-full flex items-center justify-between flex-wrap">
            {lowAge.map((d) => (
              <ApkIconHolder
                href={d.id}
                name={d.name}
                src={d.icon}
                key={d.id}
              />
            ))}
          </div>
        </ApkCard>
      )}
      <BottomAd />
    </div>
  );
};

export default Homepage;
