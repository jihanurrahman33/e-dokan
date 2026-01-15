import Link from "next/link";
import React from "react";
import { BiSolidErrorAlt } from "react-icons/bi";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white min-h-screen text-center">
      <BiSolidErrorAlt size={100} className="mb-8 text-primary" />

      <h2 className="text-6xl  font-bold text-primary">OOPS!</h2>
      <p className="text-4xl text-primary mt-2 font-bold">404-Not Found</p>
      <p className="mt-4 text-primary">
        the page you are looking for does not exist.
      </p>
      <Link className="btn btn-primary mt-4" href="/">
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
