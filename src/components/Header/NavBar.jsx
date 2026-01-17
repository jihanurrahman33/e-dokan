"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "../Logo/Logo";

const NavBar = () => {
  const pathname = usePathname();

  // Check cookie for auth only on client side
  const isLoggedIn =
    typeof document !== "undefined"
      ? document.cookie
          .split("; ")
          .find((row) => row.startsWith("auth="))
          ?.split("=")[1]
      : false;

  const handleLogout = () => {
    // Clear the auth cookie
    document.cookie = "auth=; Max-Age=0; path=/";
    // Redirect to home page
    window.location.href = "/";
  };

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

      {isLoggedIn && (
        <li>
          <Link href="/add-product" className={navLinkClass("/add-product")}>
            Add Product
          </Link>
        </li>
      )}

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
  const avatarLinks = (
    <>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li>
        <a>Settings</a>
      </li>
      <li>
        <button onClick={handleLogout} className="text-error">
          Logout
        </button>
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

        <Logo />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">{links}</ul>
      </div>

      <div className="navbar-end">
        {isLoggedIn ? (
          <div className="flex gap-2">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar rounded-full">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu text-black dropdown-content mt-3 z-[1] w-52 p-2 shadow bg-base-200 rounded-box"
              >
                {avatarLinks}
              </ul>
            </div>
          </div>
        ) : (
          <>
            <Link href="/login" className="btn btn-secondary btn-sm">
              Sign In
            </Link>
            <Link
              href="/register"
              className="btn btn-secondary btn-sm mr-2 ml-2"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
