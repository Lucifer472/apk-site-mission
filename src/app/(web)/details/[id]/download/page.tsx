import { redirect } from "next/navigation";

import { findApplicationById } from "@/data/application";

import { BreadCrumb } from "@/features/web/details/breadcrumb";
import { AppDownloadLabel } from "@/features/web/details/app-download-label";
import { AppScreenshots } from "@/features/web/details/app-screenshot";
import { RelatedApps } from "@/features/web/details/related-apps";
import { BottomAd, MiddleAd, TopAdLarge } from "@/features/ads/ads";
import { AppDetailsCard } from "@/features/web/details/app-details";
import { TopFreeApk } from "@/features/web/details/top-free-apk";
import { PageSidebar } from "@/features/web/page-sidebar";
import { ClickedApp } from "@/features/web/details/click-dowload";

const AppDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const data = await findApplicationById({ id });

  if (!data) redirect("/");

  return (
    <PageSidebar
      breadcrumb={
        <BreadCrumb category={data.category} id={data.id} name={data.name} />
      }
    >
      <>
        <AppDownloadLabel
          icon={data.icon}
          link={data.link}
          name={data.name}
          category={data.category}
          age={data.age}
          download={data.download}
          rating={data.rating}
          id={data.id}
        />
        <TopAdLarge />
        <AppScreenshots images={data.images} />
        <RelatedApps category={data.category} />
        <MiddleAd />
        <AppDetailsCard data={data} />
        <div className="w-full flex items-center justify-center">
          <ClickedApp id={data.id} link={data.link} target />
        </div>
        <BottomAd />
        <TopFreeApk />
      </>
    </PageSidebar>
  );
};

export default AppDetailsPage;
