import Link from "next/link";
import React from "react";
import { LuShoppingBag } from "react-icons/lu";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center select-none justify-center p-2">
      <LuShoppingBag size={40} className="text-white" />
      <p className="sm:text-lg lg:text-2xl font-bold">E-DOKAN</p>
    </Link>
  );
};

export default Logo;
