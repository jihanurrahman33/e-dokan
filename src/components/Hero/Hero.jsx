import React from "react";

const Hero = () => {
  return (
    <section className="bg-secondary text-secondary-content">
      <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center gap-6">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl">
          Fresh & Organic Products <br className="hidden md:block" />
          Delivered to Your Door
        </h1>

        <p className="max-w-2xl text-base md:text-lg opacity-90">
          Get the best quality organic vegetables, fruits, and groceries at
          unbeatable prices. Shop from the comfort of your home and enjoy free
          delivery on orders above ৳500.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="btn btn-primary btn-lg">Shop Now</button>
          <button className="btn btn-outline btn-accent btn-lg">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
          <div className="card bg-primary text-primary-content shadow-md">
            <div className="card-body items-center text-center">
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="opacity-90">Products</p>
            </div>
          </div>

          <div className="card bg-primary text-primary-content shadow-md">
            <div className="card-body items-center text-center">
              <h3 className="text-3xl font-bold">1K+</h3>
              <p className="opacity-90">Happy Customers</p>
            </div>
          </div>

          <div className="card bg-primary text-primary-content shadow-md">
            <div className="card-body items-center text-center">
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="opacity-90">Fast Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
