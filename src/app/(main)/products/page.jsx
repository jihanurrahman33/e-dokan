import { getProducts } from "@/actions/server/products";
import Filters from "@/components/Filters/Filters";
import PaginationButtons from "@/components/PaginationButton/PaginationButtons";
import PriceFilter from "@/components/PriceFilter/PriceFilter";
import ProductCard from "@/components/ProductCard/ProductCard";
import React from "react";

const Products = async ({ searchParams }) => {
  const params = await searchParams;
  const priceFilter = params?.price || null;
  const paginationPage = parseInt(params?.page) || 1;

  const { products, totalPages } = await getProducts(
    priceFilter,
    paginationPage,
  );

  return (
    <div className="flex p-4">
      <div className="hidden lg:block">
        <Filters />
      </div>
      <div className="flex-4/5 p-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          All Products: {products.length}
        </h1>
        <div className=" grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        {/* pagination  */}
        {totalPages > 1 && <PaginationButtons totalPages={totalPages} />}
      </div>
    </div>
  );
};

export default Products;
