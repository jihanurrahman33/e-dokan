"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();

  const navLinkClass = (href) =>
    `
    font-medium transition
    hover:text-accent
    ${pathname === href ? "text-accent" : ""}
    `;

  const links = (
    <>
      <li>
        <Link href="/" className={navLinkClass("/")}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/products" className={navLinkClass("/products")}>
          Products
        </Link>
      </li>
      <li>
        <Link href="/about" className={navLinkClass("/about")}>
          About
        </Link>
      </li>
      <li>
        <Link href="/contact" className={navLinkClass("/contact")}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-primary text-primary-content sticky top-0 z-10 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link href="/" className="flex items-center select-none">
          <span className="bg-secondary text-secondary-content text-2xl font-extrabold px-3 py-2 rounded-l-2xl">
            E
          </span>
          <span className="bg-primary text-primary-content text-2xl font-extrabold px-3 py-2 rounded-r-2xl">
            Dokan
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">{links}</ul>
      </div>

      <div className="navbar-end">
        <Link href="/login" className="btn btn-secondary btn-sm">
          Sign In
        </Link>
        <Link href="/register" className="btn btn-secondary btn-sm mr-2 ml-2">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
