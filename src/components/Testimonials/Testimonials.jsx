"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Customer",
      image: "https://i.pravatar.cc/150?img=3",
      message:
        "The quality of organic produce is outstanding! Fresh vegetables delivered right to my doorstep. I've been ordering for 6 months now and couldn't be happier.",
      rating: 5,
    },
    {
      name: "John Doe",
      role: "Food Enthusiast",
      image: "https://i.pravatar.cc/150?img=5",
      message:
        "Excellent quality and fast delivery. The fruits are always fresh and the customer service is top-notch. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      role: "Health Conscious Mom",
      image: "https://i.pravatar.cc/150?img=8",
      message:
        "Amazing customer service and premium quality products! My family loves the organic groceries. Worth every penny!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Chef",
      image: "https://i.pravatar.cc/150?img=12",
      message:
        "As a professional chef, I demand the best ingredients. This service delivers restaurant-quality produce consistently.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-base-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-neutral px-3 py-1.5 rounded-full text-sm font-semibold mb-3">
            <FaStar className="w-3.5 h-3.5 text-accent" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral mb-3">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-neutral/70 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied
            customers have to say about their experience.
          </p>
        </div>

        {/* Testimonials Swiper */}
        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-primary/30",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-primary",
            }}
            loop
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-base-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-base-300/50 h-full">
                  {/* Quote Icon and Rating */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-primary/10 p-2.5 rounded-lg">
                      <FaQuoteLeft className="w-5 h-5 text-primary" />
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-accent" />
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <p className="text-neutral/80 text-sm md:text-base leading-relaxed mb-5">
                    {item.message}
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-base-300/50">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                        <Image
                          height={48}
                          width={48}
                          src={item.image}
                          alt={item.name}
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral">
                        {item.name}
                      </h4>
                      <p className="text-sm text-neutral/60">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-neutral/70">
            <FaStar className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">
              4.9/5 average rating from 10,000+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
