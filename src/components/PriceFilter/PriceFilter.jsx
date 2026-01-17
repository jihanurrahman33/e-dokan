"use client";
import { useState } from "react";

export default function PriceFilter({ onPriceSelect }) {
  const [selectedPrice, setSelectedPrice] = useState("");
  const handleChange = (e) => {
    setSelectedPrice(e.target.value);
    onPriceSelect(e.target.value);
  };

  return (
    <ul className="space-y-2">
      {["Under 50", "51-100", "101-200", "Over 200"].map((price, i) => (
        <label key={i} className="flex gap-2 items-center cursor-pointer">
          <input
            type="radio"
            name="price"
            value={price}
            className="radio radio-xs"
            onChange={handleChange}
          />
          <li>৳ {price}</li>
        </label>
      ))}

      <p className="mt-4 text-sm">Selected: {selectedPrice}</p>
    </ul>
  );
}
