"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCards } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
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
    <section className="relative py-20 bg-gradient-to-br from-base-100 via-base-200 to-base-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-neutral px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaStar className="w-4 h-4 text-accent" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral mb-4">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-neutral/70 text-lg max-w-2xl mx-auto">
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
              bulletClass: "swiper-pagination-bullet !bg-primary",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-primary",
            }}
            loop
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="pb-16"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 h-full">
                  <div className="card-body">
                    {/* Quote Icon */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <FaQuoteLeft className="w-6 h-6 text-primary" />
                      </div>

                      {/* Star Rating */}
                      <div className="flex gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4 text-accent" />
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <p className="text-neutral/80 text-base leading-relaxed mb-6">
                      {item.message}
                    </p>

                    {/* Customer Info */}
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-base-300">
                      <div className="avatar">
                        <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <Image
                            height={56}
                            width={56}
                            src={item.image}
                            alt={item.name}
                            className="rounded-full"
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral text-lg">
                          {item.name}
                        </h4>
                        <p className="text-sm text-neutral/60">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-neutral/60">
            <FaStar className="w-5 h-5 text-accent" />
            <span className="font-semibold">
              4.9/5 average rating from 10,000+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
