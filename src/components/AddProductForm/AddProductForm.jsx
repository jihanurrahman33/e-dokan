import React from "react";

const AddProductForm = () => {
  return (
    <form className="w-full max-w-md mt-4">
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Product Name</label>
            <input
              type="text"
              name="productName"
              className="input"
              placeholder="Product Name"
            />
            <label className="label">Description</label>
            <textarea
              name="description"
              className="textarea"
              placeholder="Product Description"
            ></textarea>
            <label className="label">Price</label>
            <input
              type="number"
              name="price"
              className="input"
              placeholder="Product Price"
            />
            <label className="label">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              className="input"
              placeholder="Image URL"
            />
            <button className="btn btn-primary mt-4">Add Product</button>
          </fieldset>
        </div>
      </div>
    </form>
  );
};

export default AddProductForm;
