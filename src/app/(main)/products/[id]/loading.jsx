import React from "react";

const loading = () => {
  return (
    <section className="container mx-auto px-4 py-10 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image Skeleton */}
        <div className="w-full bg-base-200 rounded-xl p-6 flex justify-center">
          <div className="w-[420px] h-[420px] bg-gray-300 rounded-lg" />
        </div>

        {/* Info Skeleton */}
        <div className="space-y-5">
          {/* Title */}
          <div className="h-8 w-3/4 bg-gray-300 rounded" />

          {/* Rating */}
          <div className="flex gap-2">
            <div className="h-4 w-24 bg-gray-300 rounded" />
            <div className="h-4 w-10 bg-gray-300 rounded" />
          </div>

          {/* Price */}
          <div className="h-6 w-32 bg-gray-300 rounded" />

          {/* Description */}
          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-300 rounded" />
            <div className="h-4 w-5/6 bg-gray-300 rounded" />
            <div className="h-4 w-4/6 bg-gray-300 rounded" />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <div className="h-12 flex-1 bg-gray-300 rounded-lg" />
            <div className="h-12 flex-1 bg-gray-300 rounded-lg" />
          </div>

          {/* Extra Info */}
          <div className="space-y-2 pt-4">
            <div className="h-4 w-48 bg-gray-300 rounded" />
            <div className="h-4 w-56 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default loading;
