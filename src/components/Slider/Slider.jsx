"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop
      className="w-full h-[400px]"
    >
      <SwiperSlide>
        <Image
          src="/1.jpg"
          alt="Slide 1"
          fill
          className="object-cover"
          priority
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src="/1.jpg"
          alt="Slide 1"
          fill
          className="object-cover"
          priority
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src="/1.jpg"
          alt="Slide 1"
          fill
          className="object-cover"
          priority
        />
      </SwiperSlide>
    </Swiper>
  );
}
