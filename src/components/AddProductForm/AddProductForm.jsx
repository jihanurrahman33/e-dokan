"use client";
import { addProduct } from "@/actions/server/products";
import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {
  FaImage,
  FaDollarSign,
  FaFileAlt,
  FaTag,
  FaPlus,
} from "react-icons/fa";

const AddProductForm = () => {
  const router = useRouter();

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

      if (response.acknowledged) {
        toast.success("Product added successfully!");
        form.reset();
        router.push("/products");
      } else {
        toast.error("Failed to add product. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred while adding the product.");
    }
  };

  return (
    <div className="card bg-base-100 shadow-2xl border border-base-300 overflow-hidden">
      <div className="card-body p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-neutral flex items-center gap-2">
                <FaTag className="w-4 h-4 text-primary" />
                Product Name
              </span>
            </label>
            <input
              type="text"
              name="productName"
              className="input input-bordered w-full focus:input-primary transition-all duration-300"
              placeholder="Enter product name"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control flex flex-col">
            <label className="label mb-2">
              <span className="label-text font-semibold text-neutral flex items-center gap-2">
                <FaFileAlt className="w-4 h-4 text-primary" />
                Description
              </span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered h-24 focus:textarea-primary transition-all w-full duration-300 resize-none"
              placeholder="Enter product description"
              required
            ></textarea>
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-neutral flex items-center gap-2">
                <FaDollarSign className="w-4 h-4 text-primary" />
                Price
              </span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral/60 font-semibold">
                ৳
              </span>
              <input
                type="number"
                name="price"
                step="0.01"
                min="0"
                className="input input-bordered w-full pl-8 focus:input-primary transition-all duration-300"
                placeholder="0.00"
                required
              />
            </div>
          </div>

          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-neutral flex items-center gap-2">
                <FaImage className="w-4 h-4 text-primary" />
                Image URL
              </span>
            </label>
            <input
              type="url"
              name="imageUrl"
              className="input input-bordered w-full focus:input-primary transition-all duration-300"
              placeholder="https://example.com/image.jpg"
              required
            />
            <label className="label">
              <span className="label-text-alt text-neutral/60">
                Enter a valid image URL for your product
              </span>
            </label>
          </div>

          {/* Divider */}
          <div className="divider"></div>

          {/* Additional Info */}
          <div className="bg-base-200 rounded-lg p-4">
            <h3 className="font-semibold text-neutral mb-2">
              Default Settings
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-neutral/60">Rating:</span>
                <span className="ml-2 font-semibold text-accent">4.9 ⭐</span>
              </div>
              <div>
                <span className="text-neutral/60">Stock:</span>
                <span className="ml-2 font-semibold text-secondary">
                  100 units
                </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full btn-lg gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <FaPlus className="w-5 h-5" />
            Add Product
          </button>

          {/* Cancel Button */}
          <button
            type="button"
            onClick={() => router.push("/products")}
            className="btn btn-outline btn-secondary w-full"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
