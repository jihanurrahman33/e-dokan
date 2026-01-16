import React from "react";
import { FaPercentage, FaGift, FaTruck, FaClock, FaFire } from "react-icons/fa";

const Promo = () => {
  const promos = [
    {
      icon: FaPercentage,
      title: "50% Off",
      subtitle: "Weekend Special",
      description:
        "Get 50% off on all fresh vegetables and fruits this weekend only!",
      badge: "Limited Time",
      color: "primary",
      buttonText: "Shop Now",
    },
    {
      icon: FaGift,
      title: "Buy 2 Get 1 Free",
      subtitle: "Special Combo",
      description:
        "Buy two items and get one absolutely free on select organic products.",
      badge: "Best Deal",
      color: "secondary",
      buttonText: "Grab Offer",
    },
    {
      icon: FaTruck,
      title: "Free Delivery",
      subtitle: "No Extra Charges",
      description:
        "Enjoy free shipping on all orders above ৳500. No hidden costs!",
      badge: "Always",
      color: "accent",
      buttonText: "Order Now",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-base-200 via-base-100 to-base-200 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaFire className="w-4 h-4 text-accent" />
            <span className="text-neutral">Hot Deals</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral mb-4">
            Special <span className="text-primary">Promotions</span>
          </h2>
          <p className="text-neutral/70 text-lg max-w-2xl mx-auto">
            Don&apos;t miss out on our exclusive offers and amazing deals.
            Limited time only!
          </p>
        </div>

        {/* Promo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {promos.map((promo, index) => {
            const Icon = promo.icon;
            return (
              <div
                key={index}
                className="group card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300 overflow-hidden"
              >
                {/* Card Header with Icon */}
                <div
                  className={`relative bg-gradient-to-br from-${promo.color} to-${promo.color}-focus p-8`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`bg-base-100/20 backdrop-blur-sm p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-8 h-8 text-${promo.color}-content`} />
                    </div>
                    <div
                      className={`badge badge-sm bg-base-100/20 backdrop-blur-sm text-${promo.color}-content border-0 font-semibold px-3 py-3`}
                    >
                      {promo.badge}
                    </div>
                  </div>

                  <h3
                    className={`text-3xl font-black text-${promo.color}-content mb-1`}
                  >
                    {promo.title}
                  </h3>
                  <p
                    className={`text-${promo.color}-content/80 text-sm font-semibold`}
                  >
                    {promo.subtitle}
                  </p>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  <p className="text-neutral/70 leading-relaxed mb-4">
                    {promo.description}
                  </p>

                  {/* Countdown Timer (Optional) */}
                  {index === 0 && (
                    <div className="flex items-center gap-2 text-sm text-neutral/60 mb-4">
                      <FaClock className="w-4 h-4" />
                      <span>
                        Ends in:{" "}
                        <span className="font-bold text-primary">2 days</span>
                      </span>
                    </div>
                  )}

                  <div className="card-actions justify-end mt-auto">
                    <button
                      className={`btn btn-${promo.color} btn-block gap-2 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105`}
                    >
                      {promo.buttonText}
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-neutral/60 mb-4">
            Want to stay updated on our latest offers?
          </p>
          <button className="btn btn-outline btn-primary gap-2">
            Subscribe to Newsletter
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Promo;
