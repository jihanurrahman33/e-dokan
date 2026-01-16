import { getProducts } from "@/actions/server/products";
import ProductCard from "@/components/ProductCard/ProductCard";
import React from "react";

const Products = async () => {
  const products = await getProducts();
  return (
    <div>
      <h1 className="text-3xl font-bold">Products</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
