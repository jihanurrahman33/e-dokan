"use client";
import React from "react";
import PriceFilter from "../PriceFilter/PriceFilter";
import { useRouter } from "next/navigation";

const Filters = () => {
  const router = useRouter();
  const searchParams = new URLSearchParams();

  const onPriceSelect = (priceRange) => {
    const params = new URLSearchParams(searchParams);
    params.set("price", priceRange);
    router.push(`/products?${params.toString()}`);
  };
  return (
    <div className=" flex-1/5 max-w-sm h-screen rounded-sm overflow-y-auto shadow-sm sm:hidden md:block mt-6">
      <h2 className="text-2xl font-bold p-2">Filter Products</h2>

      {/* <hr className="mb-4" />
      <div className="p-2">
        <h3 className="text-xl font-semibold mb-2">Category</h3>
        <ul className="">
          <li>Electronics</li>
          <li>Clothing</li>
          <li>Books</li>
          <li>Home & Kitchen</li>
          <li>Sports & Outdoors</li>
        </ul>
      </div>
      <hr className="my-4" /> */}
      <div className="p-2">
        <h3 className="text-xl font-semibold mb-2">Price Range</h3>
        <PriceFilter onPriceSelect={onPriceSelect} />
      </div>
      {/* <hr className="my-4" />
      <div className="p-2 mb-6">
        <h3 className="text-xl font-semibold mb-2">Brand</h3>
        <ul className="">
          <li>Brand A</li>
          <li>Brand B</li>
          <li>Brand C</li>
          <li>Brand D</li>
          <li>Brand E</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Filters;
