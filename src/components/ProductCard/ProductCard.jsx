import toast from "daisyui/components/toast";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";
import AddToCart from "../AddToCart/AddToCart";

const ProductCard = ({ product }) => {
  const { name, price, rating, imgUrl } = product;
  const generateStars = (rating) => {
    const maxStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = maxStars - fullStars - halfStar;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 " />);
    }
    if (halfStar === 1) {
      stars.push(<FaStar key="half" className="text-yellow-400 " />);
    }
    for (let j = 0; j < emptyStars; j++) {
      stars.push(<FaStar key={`empty-${j}`} className="text-gray-300 " />);
    }
    return stars;
  };

  return (
    <div className="card bg-base-100 w-60 shadow-sm">
      <figure>
        <Image
          src={imgUrl}
          width={150}
          height={150}
          alt={name}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-start text-left">
        <h2 className="card-title">
          {name.length > 20 ? name.slice(0, 20) + "..." : name}
        </h2>
        <p className="text-lg">৳ {price}</p>
        <div className="flex">
          {generateStars(rating).map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </div>
        <div className="card-actions ">
          <AddToCart />
          <Link href={`/products/${product._id}`} className="btn btn-primary ">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
