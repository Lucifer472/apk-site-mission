"use client";

import { DownloadIcon } from "lucide-react";
import { useUpdateApplication } from "./api/use-update-application";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const ClickedApp = ({
  link,
  id,
  target,
}: {
  link: string;
  id: string;
  target?: boolean;
}) => {
  const { mutate, isPending } = useUpdateApplication();

  const router = useRouter();

  const handleClick = () => {
    mutate(
      {
        param: { applicationId: id },
      },
      {
        onSettled: () => {
          if (target) {
            window.open(link, "_blank");
          } else {
            router.push(link);
          }
        },
      }
    );
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        target ? "w-full" : "w-full md:w-fit"
      )}
    >
      <button
        disabled={isPending}
        onClick={handleClick}
        className={cn(
          "flex items-center justify-center gap-x-1 overflow-hidden relative w-full py-4 bg-main text-white rounded-xl",
          !target && "md:w-[180px]"
        )}
      >
        <div className="absolute top-0 right-0 text-xs p-[2px] bg-white bg-opacity-15">
          Latest Apk
        </div>
        <DownloadIcon />
        <span className="font-semibold">Download</span>
        <div className="animation-round relative"></div>
      </button>
    </div>
  );
};
