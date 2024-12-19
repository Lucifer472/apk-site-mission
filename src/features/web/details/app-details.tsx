import { Application } from "@prisma/client";
import { ApkCard } from "../homepage/apk-card";
import { allCategory } from "@/constant";
import Image from "next/image";
import { DetailsFormatter } from "./details-fromatter";

export const AppDetailsCard = ({
  data,
  isDetailed,
}: {
  data: Application;
  isDetailed?: boolean;
}) => {
  const category = allCategory.find((c) => c.value === data.category);

  const details = [
    {
      label: "Name",
      icon: "clover.png",
      value: data.name,
    },
    {
      label: "Category",
      icon: "category.png",
      value: category ? category.label : data.category,
    },
    {
      label: "Price",
      icon: "price.png",
      value: "Free",
    },
    {
      label: "Safety",
      icon: "safety.png",
      value: "100% Safe",
    },
    {
      label: "Developer",
      icon: "dev.png",
      value: data.developer,
    },
    {
      label: "Version",
      icon: "ver.png",
      value: data.version,
    },
  ];

  return (
    <ApkCard title="About this app">
      <div className="space-y-6 w-full">
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((d) => (
            <div
              key={d.icon}
              className="flex col-span-1 items-center justify-start gap-x-1 sm:gap-x-4 rounded-md w-[145px] sm:w-[250px] bg-gradient-to-r from-green-50 to-main-hover pl-2 pr-2 sm:pr-6 py-2 border border-main-light"
            >
              <div className="size-[24px] sm:size-[32px] aspect-square relative">
                <Image
                  src={"/icons/" + d.icon}
                  alt={d.label}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="flex flex-col justify-between overflow-hidden">
                <span className="text-xs sm:text-sm text-gray-500 truncate">
                  {d.label}
                </span>
                <span className="font-medium truncate">{d.value}</span>
              </div>
            </div>
          ))}
        </div>
        {isDetailed && <DetailsFormatter content={JSON.parse(data.features)} />}
      </div>
    </ApkCard>
  );
};
