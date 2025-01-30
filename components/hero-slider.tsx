"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { heroSliderList } from "@/lib/data";

export const HeroSlider = () => {
  return (
    <Swiper
      loop
      navigation
      autoplay={{ delay: 4000 }}
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true, dynamicBullets: true }}
      className="heroSlider"
    >
      {heroSliderList.map(({ id, title, image, subtitle }) => (
        <SwiperSlide key={id} className="py-12 lg:py-16">
          <div className="container mx-auto text-center lg:text-left">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              <div className="flex-1">
                <h1 className="mb-4 text-4xl lg:text-5xl xl:text-7xl leading-tight xl:leading-[98px] font-extrabold text-blue">
                  {title}
                </h1>
                <p className="mb-8 text-base lg:text-xl lg:leading-8 max-w-[540px] mx-auto xl:mx-0">
                  {subtitle}
                </p>
                <button type="button" className="mb-8 lg:mb-0 btn">
                  Записатися на прийом
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <Image
                  src={image}
                  alt={title}
                  className="h-96 w-auto lg:h-[500px]"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
