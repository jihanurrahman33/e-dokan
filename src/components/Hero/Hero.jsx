import Link from "next/link";
import React from "react";
import {
  FaShoppingBag,
  FaTruck,
  FaShieldAlt,
  FaStar,
  FaLeaf,
  FaBox,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute -bottom-32 left-1/2 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6 animate-fade-in-down">
            <div className="badge badge-lg bg-gradient-to-r from-secondary to-primary text-secondary-content border-0 px-6 py-4 gap-2 shadow-lg">
              <FaLeaf className="w-4 h-4" />
              <span className="font-semibold">100% Organic & Fresh</span>
            </div>
          </div>

          {/* Main heading */}
          <div
            className="text-center mb-8 animate-fade-in-down"
            style={{ animationDelay: "0.1s" }}
          >
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Fresh & Organic
              </span>
              <br />
              <span className="text-neutral">Delivered Daily</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral/70 max-w-3xl mx-auto leading-relaxed">
              Experience farm-fresh organic vegetables, fruits, and groceries at
              your doorstep. Premium quality, unbeatable prices, and{" "}
              <span className="font-semibold text-secondary">
                free delivery
              </span>{" "}
              on orders above ৳500.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-down"
            style={{ animationDelay: "0.2s" }}
          >
            <button className="btn btn-primary btn-lg gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <FaShoppingBag className="w-5 h-5" />
              Start Shopping
            </button>
            <Link
              href="/products"
              className="btn btn-outline btn-secondary btn-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Products
            </Link>
          </div>

          {/* Feature cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Card 1 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300">
              <div className="card-body items-center text-center">
                <div className="bg-gradient-to-br from-primary to-secondary w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaBox className="w-8 h-8 text-primary-content" />
                </div>
                <h3 className="text-4xl font-black text-neutral mb-2">500+</h3>
                <p className="text-neutral/80 font-semibold text-lg">
                  Premium Products
                </p>
                <p className="text-sm text-neutral/60 mt-1">
                  Curated organic selection
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300">
              <div className="card-body items-center text-center">
                <div className="bg-gradient-to-br from-secondary to-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaStar className="w-8 h-8 text-secondary-content" />
                </div>
                <h3 className="text-4xl font-black text-neutral mb-2">10K+</h3>
                <p className="text-neutral/80 font-semibold text-lg">
                  Happy Customers
                </p>
                <p className="text-sm text-neutral/60 mt-1">
                  Trusted by families
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300">
              <div className="card-body items-center text-center">
                <div className="bg-gradient-to-br from-primary to-secondary w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaTruck className="w-8 h-8 text-primary-content" />
                </div>
                <h3 className="text-4xl font-black text-neutral mb-2">24/7</h3>
                <p className="text-neutral/80 font-semibold text-lg">
                  Express Delivery
                </p>
                <p className="text-sm text-neutral/60 mt-1">
                  Same-day available
                </p>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div
            className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-2">
              <FaShieldAlt className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-neutral/70">
                Secure Payment
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaTruck className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-neutral/70">
                Free Shipping
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaLeaf className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-neutral/70">
                100% Organic
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
