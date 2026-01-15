import React from "react";
import { FaStar } from "react-icons/fa6";

const ProductCard = () => {
  return (
    <div className="card bg-base-100 w-70">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-start text-left">
        <h2 className="card-title">Modern Sneaker</h2>
        <p className="text-lg">৳ 680</p>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <FaStar key={index} className="text-yellow-400 " />
          ))}
        </div>

        <div className="card-actions">
          <button className="btn btn-outline">Add to Cart</button>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
