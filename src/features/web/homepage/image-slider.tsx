"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const ImageSliderData = [
  {
    id: "com.christmas.photo.editor",
    label: "Christmas Photo Editor",
    src: "/slide-1",
  },
  {
    id: "io.faceapp",
    label: "FaceApp: Perfect Face Editor",
    src: "/slide-2",
  },
  {
    id: "Life Palmistry",
    label: "Life Palmistry",
    src: "/slide-3",
  },
  {
    id: "com.vicman.toonmeapp",
    label: "ToonMe photo cartoon maker",
    src: "/slide-4",
  },
];

export const ImageSlider = () => {
  useEffect(() => {
    const isFullScreen = window.innerWidth > 1024;

    const initializeSwiper = () => {
      new Swiper(".swiper", {
        modules: [Navigation],
        slidesPerView: isFullScreen ? 2 : 1,
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
    <div className="swiper">
      <div className="swiper-wrapper">
        {ImageSliderData.map((i) => (
          <div className="swiper-slide" key={i.id}>
            <Link
              href={"/details/" + i.id}
              className="block relative w-auto min-h-[230px] sm:min-h-[300px] md:min-h-[350px] h-auto rounded-md"
            >
              <Image
                src={i.src + ".png"}
                alt="temp"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
              <div className="absolute bottom-0 left-0 h-[55px] sm:h-[60px] md:h-[90px] w-full bg-gradient-to-t from-black to-transparent rounded-b-xl">
                <p className="text-white text-xs sm:text-sm md:text-base text-left px-2 sm:px-4 mt-[15px] sm:mt-[30px] md:mt-[40px]">
                  {i.label}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};
