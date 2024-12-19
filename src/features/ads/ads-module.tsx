"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { PUB_ID } from "@/config";

export const AdsModule = ({ adSlot }: { adSlot: string }) => {
  const pathname = usePathname();

  useEffect(() => {
    const intervalId = setInterval(() => {
      try {
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
          clearInterval(intervalId);
        }
      } catch (err) {
        console.error("Error pushing ads: ", err);
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [pathname]);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "281px",
        height: "auto !important",
        margin: "20px 0",
      }}
    >
      <p style={{ margin: "0px 6px", textAlign: "center", fontSize: "14px" }}>
        ADVERTISEMENT
      </p>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
        }}
        data-ad-client={PUB_ID}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};
