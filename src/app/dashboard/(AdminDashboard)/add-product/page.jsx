import AddProductForm from "@/components/AddProductForm/AddProductForm";

const AddProduct = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-neutral mb-4">
            Add New <span className="text-primary">Product</span>
          </h1>
          <p className="text-neutral/70 text-lg max-w-xl mx-auto">
            Fill in the details below to add a new product to your store
            inventory.
          </p>
        </div>

        {/* Form Component */}
        <AddProductForm />
      </div>
    </div>
  );
};

export default AddProduct;
