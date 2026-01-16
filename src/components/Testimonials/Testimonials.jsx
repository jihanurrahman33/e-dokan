"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://i.pravatar.cc/150?img=3",
      message:
        "This product has completely transformed how I manage my daily tasks!",
    },
    {
      name: "John Doe",
      image: "https://i.pravatar.cc/150?img=5",
      message: "Excellent quality and fast delivery. Highly recommended!",
    },
    {
      name: "Emma Wilson",
      image: "https://i.pravatar.cc/150?img=8",
      message: "Amazing customer service and premium quality products!",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Customers Say
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        spaceBetween={30}
        className="pb-12"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-base-100 shadow-lg rounded-xl p-8 text-center max-w-2xl mx-auto">
              <Image
                height={50}
                width={50}
                src={item.image}
                alt={item.name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <p className="text-gray-600 italic mb-4">“{item.message}”</p>
              <h4 className="font-semibold text-lg">{item.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
