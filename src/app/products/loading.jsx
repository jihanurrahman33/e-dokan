import React from "react";

const loading = () => {
  return (
    <div className="p-4 animate-pulse">
      {/* Page Title Skeleton */}
      <div className="h-8 w-64 bg-gray-300 rounded mb-8" />

      {/* Products Grid Skeleton */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="rounded-xl p-4 space-y-4 bg-base-100">
            {/* Image */}
            <div className="w-full h-48 bg-gray-300 rounded-lg" />

            {/* Title */}
            <div className="h-4 w-3/4 bg-gray-300 rounded" />

            {/* Price */}
            <div className="h-4 w-1/3 bg-gray-300 rounded" />

            {/* Rating */}
            <div className="h-3 w-1/2 bg-gray-300 rounded" />

            {/* Button */}
            <div className="h-10 w-full bg-gray-300 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default loading;
