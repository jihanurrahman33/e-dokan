import AddProductForm from "@/components/AddProductForm/AddProductForm";
import React from "react";

const AddProduct = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full max-w-md mx-auto">
      <h1 className="text-3xl font-bold">Add Your Product</h1>
      <AddProductForm />
    </div>
  );
};

export default AddProduct;
