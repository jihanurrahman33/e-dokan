import { getProductById } from "@/actions/server/products";
import AddToCart from "@/components/AddToCart/AddToCart";
import Image from "next/image";

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getProductById(id);
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="w-full bg-base-200 rounded-xl p-6 flex justify-center">
          <Image
            src={product.imgUrl}
            alt={product.name}
            width={420}
            height={420}
            className="rounded-lg object-contain"
            priority
          />
        </div>

        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-base-content">
            {product.name}
          </h1>

          <div className="flex items-center gap-2">
            <div className="rating rating-sm">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-orange-400"
                  checked={i < Math.round(product.rating)}
                  readOnly
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.rating})</span>
          </div>

          <p className="text-2xl font-semibold text-primary">
            ৳ {product.price}
          </p>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="flex gap-4 pt-4">
            <button className="btn btn-primary btn-lg flex-1">Buy Now</button>
            <AddToCart />
          </div>

          <div className="border-t pt-4 text-sm text-gray-500">
            <p>✔ Free delivery within 3–5 days</p>
            <p>✔ 7 days replacement warranty</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
