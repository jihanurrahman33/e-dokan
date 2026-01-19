"use client";
import React from "react";
import { toast } from "react-toastify";

const AddToCart = () => {
  const handleAddToCart = () => {
    // Implement add to cart functionality here
    toast.success("Product added to cart!");
  };
  return (
    <button onClick={handleAddToCart} className="btn btn-outline w-full">
      Add to Cart
    </button>
  );
};

export default AddToCart;
