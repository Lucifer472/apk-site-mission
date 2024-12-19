"use client";
import { useEffect } from "react";
import Image from "next/image";

import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { ApkCard } from "../homepage/apk-card";

export const AppScreenshots = ({
  images,
}: {
  images: { id: number; url: string; applicationId: string }[];
}) => {
  useEffect(() => {
    const width = window.innerWidth < 768;

    const initializeSwiper = () => {
      new Swiper(".swiper", {
        modules: [Navigation],
        slidesPerView: width ? 1 : 3,
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    };
    initializeSwiper();
  }, []);
  return (
    <ApkCard title="Screenshots">
      <div className="swiper">
        <div className="swiper-wrapper">
          {images.map((i) => (
            <div className="swiper-slide" key={i.id}>
              <div className="block relative h-[250px] rounded-md">
                <Image
                  src={i.url}
                  alt={i.applicationId}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </ApkCard>
  );
};
