"use client";

import useMedia from "use-media";
import { AdsModule } from "./ads-module";

export const TopAd = () => {
  return <AdsModule adSlot="5927163452" />;
};

export const TopAdLarge = () => {
  const isLarge = useMedia({ minWidth: "768px" });

  if (!isLarge) return;
  return <AdsModule adSlot="5927163452" />;
};

export const TopAdSmall = () => {
  const isSmall = useMedia({ maxWidth: "768px" });

  if (!isSmall) return;
  return <AdsModule adSlot="5927163452" />;
};

export const MiddleAd = () => {
  return <AdsModule adSlot="7023820376" />;
};

export const BottomMiddleAd = () => {
  return <AdsModule adSlot="5239933590" />;
};

export const BottomAd = () => {
  return <AdsModule adSlot="5735591762" />;
};
