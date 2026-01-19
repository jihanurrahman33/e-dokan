"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "../Logo/Logo";
import { TiShoppingCart } from "react-icons/ti";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const NavBar = () => {
  const session = useSession();
  const pathname = usePathname();

  // Check cookie for auth only on client side
  const isLoggedIn =
    typeof document !== "undefined"
      ? document.cookie
          .split("; ")
          .find((row) => row.startsWith("auth="))
          ?.split("=")[1]
      : false;
  const sessionIsLoggedIn = session?.data?.user ? true : false;
  const handleLogout = async () => {
    // Clear the auth cookie
    document.cookie = "auth=; Max-Age=0; path=/";
    const rs = await signOut({ callbackUrl: "/", redirect: true });

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
        <Link href="/dashboard/profile">Profile</Link>
      </li>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>

      <li>
        <Link href="/add-product">Add Product</Link>
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
        {isLoggedIn || sessionIsLoggedIn ? (
          <div className="flex items-center gap-2">
            <Link href="/cart" className="text-2xl relative">
              <TiShoppingCart size={28} className="cursor-pointer" />
            </Link>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar rounded-full">
                <div className="w-10 rounded-full">
                  <Image
                    width={50}
                    height={50}
                    alt={session?.data?.user?.name.split(" ")[0]}
                    src={session?.data?.user?.image}
                  />
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
