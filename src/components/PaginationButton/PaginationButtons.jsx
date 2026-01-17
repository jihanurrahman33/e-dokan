"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const PaginationButtons = ({ totalPages }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const initialPage = Number(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  const handleBtnClick = (pageNumber) => {
    setCurrentPage(pageNumber);

    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="mt-4 flex justify-center space-x-2 ">
      {[...Array(totalPages)].map((_, index) => (
        <button
          onClick={() => handleBtnClick(index + 1)}
          key={index}
          className={`px-3 py-1 rounded ${currentPage === index + 1 ? "bg-primary text-white" : "bg-secondary text-white"}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default PaginationButtons;
