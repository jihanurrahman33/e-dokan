"use client";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const AddToCart = () => {
  const router = useRouter();
  const isLoggedIn = useSession().data?.user ? true : false;
  const handleAddToCart = () => {
    //first check if user is logged in

    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
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
