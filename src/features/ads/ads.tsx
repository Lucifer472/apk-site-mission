"use client";

import useMedia from "use-media";
import { AdsModule } from "./ads-module";

export const TopAd = () => {
  return <AdsModule adSlot="6301725753" />;
};

export const TopAdLarge = () => {
  const isLarge = useMedia({ minWidth: "768px" });

  if (!isLarge) return;
  return <AdsModule adSlot="6301725753" />;
};

export const TopAdSmall = () => {
  const isSmall = useMedia({ maxWidth: "768px" });

  if (!isSmall) return;
  return <AdsModule adSlot="6301725753" />;
};

export const MiddleAd = () => {
  return <AdsModule adSlot="3379486197" />;
};

export const BottomMiddleAd = () => {
  return <AdsModule adSlot="8348741840" />;
};

export const BottomAd = () => {
  return <AdsModule adSlot="9093981333" />;
};
