"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import {
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaMicrosoft,
} from "react-icons/fa";
import { 
  SiNike, 
  SiAdidas, 
  SiPuma, 
  SiApple, 
  SiGoogle, 
  SiAmazon, 
  SiSamsung, 
  SiSony, 
  SiTesla, 
  SiSpacex, 
  SiCocacola, 
  SiZara 
} from "react-icons/si";

// Array of brand objects
const brands = [
  { id: 1, icon: <SiNike />, name: "Nike" },
  { id: 2, icon: <SiAdidas />, name: "Adidas" },
  { id: 3, icon: <SiPuma />, name: "Puma" },
  { id: 4, icon: <SiApple />, name: "Apple" },
  { id: 5, icon: <SiGoogle />, name: "Google" },
  { id: 6, icon: <SiAmazon />, name: "Amazon" },
  { id: 7, icon: <FaMicrosoft />, name: "Microsoft" },
  { id: 8, icon: <SiSamsung />, name: "Samsung" },
  { id: 9, icon: <SiSony />, name: "Sony" },
  { id: 10, icon: <SiTesla />, name: "Tesla" },
  { id: 11, icon: <SiSpacex />, name: "SpaceX" },
  { id: 12, icon: <SiCocacola />, name: "CocaCola" },
  { id: 14, icon: <SiZara />, name: "Zara" },
  { id: 15, icon: <FaCcVisa />, name: "Visa" },
  { id: 16, icon: <FaCcMastercard />, name: "Mastercard" },
  { id: 17, icon: <FaPaypal />, name: "Paypal" },
];

const Brands = () => {
  return (
    <div className="py-12 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 uppercase tracking-widest text-primary">
          Our Trusted Partners
        </h2>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 60,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 70,
            },
          }}
          className="brands-swiper flex items-center"
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id} className="!flex justify-center items-center py-4">
              <div 
                className="text-4xl text-neutral-content/50 hover:text-primary transition-all duration-300 transform hover:scale-110 cursor-pointer tooltip"
                data-tip={brand.name}
              >
                {brand.icon}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
