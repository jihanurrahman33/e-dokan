"use client";
import { addProduct } from "@/actions/server/products";
import React from "react";
import { toast } from "react-toastify";
const AddProductForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const description = form.description.value;
    const price = parseFloat(form.price.value);
    const imageUrl = form.imageUrl.value;
    const product = {
      name: productName,
      description,
      price,
      imageUrl,
      rating: 4.9,
      stock: 100,
      createdAt: new Date(),
    };
    try {
      const response = await addProduct(product);
      console.log("Add product response:", response);
      if (response.acknowledged) {
        toast("Product added successfully!", { type: "success" });
        form.reset();
        router.push("/products");
      } else {
        toast("Failed to add product. Please try again.", { type: "error" });
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mt-4">
      {" "}
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        {" "}
        <div className="card-body">
          {" "}
          <fieldset className="fieldset">
            {" "}
            <label className="label">Product Name</label>{" "}
            <input
              type="text"
              name="productName"
              className="input"
              placeholder="Product Name"
            />{" "}
            <label className="label">Description</label>{" "}
            <textarea
              name="description"
              className="textarea"
              placeholder="Product Description"
            ></textarea>{" "}
            <label className="label">Price</label>{" "}
            <input
              type="number"
              name="price"
              className="input"
              placeholder="Product Price"
            />{" "}
            <label className="label">Image URL</label>{" "}
            <input
              type="text"
              name="imageUrl"
              className="input"
              placeholder="Image URL"
            />{" "}
            <button type="submit" className="btn btn-primary mt-4">
              {" "}
              Add Product{" "}
            </button>{" "}
          </fieldset>{" "}
        </div>{" "}
      </div>{" "}
    </form>
  );
};
export default AddProductForm;
