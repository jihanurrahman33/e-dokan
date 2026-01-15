import React from "react";

const Promo = () => {
  // return <div>Promo Section Here....</div>;
  return (
    <div className="bg-base-200 py-10 mt-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Special Promo</h2>
        <p className="text-gray-600">
          Don{"'"}t miss out on our exclusive offers!
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="card w-80 bg-primary text-primary-content">
          <div className="card-body">
            <h3 className="card-title">50% Off</h3>
            <p>Get 50% off on all electronics this weekend only!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-secondary text-secondary-content">
          <div className="card-body">
            <h3 className="card-title">Buy 1 Get 1 Free</h3>
            <p>Buy one get one free on select fashion items.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-accent text-accent-content">
          <div className="card-body">
            <h3 className="card-title">Free Shipping</h3>
            <p>Enjoy free shipping on orders over $100.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
