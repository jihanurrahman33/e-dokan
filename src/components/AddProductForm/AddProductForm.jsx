"use client";
import { addProduct } from "@/actions/server/products";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {
  FaImage,
  FaDollarSign,
  FaFileAlt,
  FaTag,
  FaPlus,
  FaBoxes,
} from "react-icons/fa";

const AddProductForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const description = form.description.value;
    const price = parseFloat(form.price.value);
    const imageFile = form.imageFile.files[0];
    const stock = parseInt(form.stock.value, 10);
    const category = form.category.value;

    //get image url from imgbb
    let imageUrl = "";
    if (imageFile) {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", imageFile);
      const imgbbApiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

      try {
        const response = await fetch(
          `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
          {
            method: "POST",
            body: formData,
          },
        );
        const data = await response.json();
        if (data.success) {
          imageUrl = data.data.url;
        } else {
          toast.error("Image upload failed. Please try again.");
          setLoading(false);
          return;
        }
      } catch (error) {
        toast.error("Image upload failed. Please try again.");
        setLoading(false);
        return;
      }
    }

    const product = {
      name: productName,
      description,
      price,
      imageUrl: imageUrl,
      rating: 4.9,
      stock,
      category,
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
    } finally {
      setLoading(false);
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

          {/* Image File */}
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text font-semibold text-neutral flex items-center gap-2">
                <FaImage className="w-4 h-4 text-primary" />
                Product Image
              </span>
            </label>
            <input
              type="file"
              name="imageFile"
              className="file-input w-full mt-2"
              disabled={loading}
            />
          </div>
          {/* Categorie  */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-neutral flex items-center gap-2">
                <FaTag className="w-4 h-4 text-primary" />
                Category
              </span>
            </label>
            <select
              name="category"
              className="select select-bordered w-full focus:select-primary transition-all duration-300"
              required
            >
              <option value="" disabled selected>
                Select a category
              </option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home-appliances">Home Appliances</option>
              <option value="groceries">Groceries</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/* Stock */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-neutral flex items-center gap-2">
                <FaBoxes className="w-4 h-4 text-primary" />
                Stock-(Units Available)
              </span>
            </label>
            <div className="relative">
              <input
                type="number"
                name="stock"
                step="1"
                min="0"
                className="input input-bordered w-full pl-8 focus:input-primary transition-all duration-300"
                placeholder="0"
                required
              />
            </div>
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
