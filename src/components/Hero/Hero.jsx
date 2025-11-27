import React from "react";

const Hero = () => {
  return (
    <div className="text-center">
      <h3 className="text-4xl">
        Fresh & Organic Products Delivered to Your Door
      </h3>
      <p>
        Get the best quality organic vegetables, fruits, and groceries at
        unbeatable prices. Shop from the comfort of your home and enjoy free
        delivery on orders above ৳500.
      </p>
      <div className="flex gap-2.5 items-center justify-center">
        <button className="btn">Shop Now</button>
        <button className="btn">Learn More</button>
      </div>
      <div className="flex gap-4 mt-4 items-center justify-center">
        <div>
          <h3>500+</h3>
          <p>products</p>
        </div>
        <div>
          <h3>500+</h3>
          <p>products</p>
        </div>
        <div>
          <h3>500+</h3>
          <p>products</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
