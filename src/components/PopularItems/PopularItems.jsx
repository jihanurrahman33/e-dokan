import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getPopularProducts } from "@/actions/server/products";

const PopularItems = async () => {
  const popularItems = await getPopularProducts();
  return (
    <div>
      <h2 className="text-3xl font-bold p-4">Popular Items</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {popularItems.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
