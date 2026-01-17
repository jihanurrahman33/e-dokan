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
      className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px]"
    >
      <SwiperSlide>
        <Image
          src="https://i.ibb.co.com/ksq2zgfs/1.avif"
          alt="Slide 1"
          fill
          sizes="(max-width: 640px) 100vw,
       (max-width: 1024px) 100vw,
       1500px"
          className="object-cover"
          priority
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src="https://i.ibb.co.com/7tfmWzvW/2.avif"
          alt="Slide 1"
          fill
          sizes="(max-width: 640px) 100vw,
       (max-width: 1024px) 100vw,
       1500px"
          className="object-cover"
          priority
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://i.ibb.co.com/Hf522Vst/3.avif"
          alt="Slide 1"
          fill
          sizes="(max-width: 640px) 100vw,
       (max-width: 1024px) 100vw,
       1500px"
          className="object-cover "
          priority
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://i.ibb.co.com/r2V2g10p/4.avif"
          alt="Slide 1"
          fill
          sizes="(max-width: 640px) 100vw,
       (max-width: 1024px) 100vw,
       1500px"
          className="object-cover "
          priority
        />
      </SwiperSlide>
    </Swiper>
  );
}
