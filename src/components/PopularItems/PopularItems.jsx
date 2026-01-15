import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const PopularItems = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold p-4">Popular Items</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <ProductCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
