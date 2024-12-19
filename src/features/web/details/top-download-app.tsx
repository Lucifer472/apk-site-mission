import { getTopDownloadApplicationsAll } from "@/data/application";
import { ApkCard } from "../homepage/apk-card";
import { ApkIconHolderLong } from "../homepage/apk-icon-holder";

export const TopDownloadApps = async () => {
  const data = await getTopDownloadApplicationsAll();

  if (!data) return;

  return (
    <ApkCard title="Top Downloads" link="/top-rank">
      <div className="flex flex-col gap-y-6 w-full">
        {data.map((d, index) => (
          <div
            className="flex items-center justify-center gap-x-2 w-full"
            key={d.id}
          >
            <span
              className="bg-cover bg-no-repeat aspect-[36/44] h-[22px] text-sm flex items-center justify-center"
              style={{
                backgroundImage:
                  index < 3 ? `url("/banner/${index + 1}.png")` : "transparent",
              }}
            >
              {index + 1}
            </span>
            <ApkIconHolderLong
              category={d.category}
              href={d.id}
              name={d.name}
              src={d.icon}
              star={d.rating}
            />
          </div>
        ))}
      </div>
    </ApkCard>
  );
};
