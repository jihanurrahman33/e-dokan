import { getNewArrivals } from "@/actions/server/products";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const NewArrivals = async () => {
  const newArrivals = await getNewArrivals();
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8 uppercase tracking-widest text-primary mt-4">
        New Arrivals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {newArrivals.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
