import { BottomMiddleAd } from "../ads/ads";

import { TopDownloadApps } from "./details/top-download-app";

export const PageSidebar = ({
  children,
  breadcrumb,
}: {
  children: React.ReactNode;
  breadcrumb?: React.ReactNode;
}) => {
  return (
    <div className="w-full px-2 md:px-4 lg:px-0 py-4 lg:py-6 space-y-2 md:space-y-4 lg:space-y-6">
      {breadcrumb && breadcrumb}
      <div className="flex flex-col xl:grid xl:grid-cols-3 gap-4 w-full">
        <div className="col-span-2">{children}</div>
        <div className="col-span-1 space-y-4 hidden lg:block">
          <div className="p-2 bg-white rounded-md">
            <BottomMiddleAd />
          </div>
          <TopDownloadApps />
        </div>
      </div>
    </div>
  );
};
