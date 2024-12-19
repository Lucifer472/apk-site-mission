import Script from "next/script";

import { WebFooter } from "@/features/web/web-footer";
import { WebNavbar } from "@/features/web/web-navbar";
import { WebSidebar } from "@/features/web/web-sidebar";

import { GlobalLayoutType } from "@/types";
import { PUB_ID } from "@/config";

export const revalidate = 0;

const WebLayout = ({ children }: GlobalLayoutType) => {
  return (
    <main className="w-full min-h-screen bg-neutral-100">
      <Script
        strategy="afterInteractive"
        async
        crossOrigin="anonymous"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUB_ID}`}
      />
      <WebNavbar />
      <WebSidebar />
      <div className="max-w-screen-xl mx-auto">{children}</div>
      <WebFooter />
    </main>
  );
};

export default WebLayout;
