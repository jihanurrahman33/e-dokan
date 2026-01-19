import Logo from "@/components/Logo/Logo";
import { getServerSession } from "next-auth";
import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { authOptions } from "@/lib/authOptions";
import { BiSolidLogOutCircle } from "react-icons/bi";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { IoIosListBox } from "react-icons/io";
import LogOut from "@/components/Buttons/LogOut";

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  const userRole = session?.user?.role || "user";
  const userName = session?.user?.name || "User";
  const userEmail = session?.user?.email || "";

  return (
    <div className="min-h-screen bg-base-200">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Professional Navbar */}
          <nav className="sticky top-0 z-10 bg-primary shadow-sm">
            <div className="flex items-center justify-between px-4 py-3 lg:px-6">
              <div className="flex items-center gap-4">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="open sidebar"
                  className="btn btn-ghost btn-sm lg:hidden text-primary-content hover:bg-primary-focus"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
                <div className="lg:hidden">
                  <Logo />
                </div>
              </div>

              {/* User info in navbar */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-semibold text-primary-content">
                    {userName}
                  </p>
                  <p className="text-xs text-primary-content opacity-80">
                    {userEmail}
                  </p>
                </div>
                <div className="avatar placeholder">
                  <div className="bg-accent text-neutral rounded-full w-10 h-10 flex items-center justify-center">
                    <span className="text-sm font-semibold">
                      {userName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Page content */}
          <main className="flex-1 p-4 lg:p-8">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
        </div>

        {/* Professional Sidebar */}
        <div className="drawer-side z-20">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <aside className="flex min-h-full w-64 flex-col bg-base-100 border-r border-base-300 shadow-xl">
            {/* Logo section */}
            <div className="p-6 border-b border-base-300 bg-primary">
              <Logo />
              {userRole === "admin" && (
                <div className="mt-3 px-3 py-1.5 bg-accent/20 border border-accent rounded-lg">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                    Admin Dashboard
                  </p>
                </div>
              )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="space-y-1">
                {/* Main Section */}
                <div className="mb-6">
                  <p className="px-3 mb-2 text-xs font-semibold text-neutral opacity-60 uppercase tracking-wider">
                    Main
                  </p>
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral hover:bg-secondary hover:text-secondary-content transition-all duration-200 group"
                  >
                    <GoHomeFill className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="font-medium">Home</span>
                  </Link>
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral hover:bg-secondary hover:text-secondary-content transition-all duration-200 group"
                  >
                    <CgProfile className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="font-medium">Account Info</span>
                  </Link>
                </div>

                {/* Admin Section */}
                {userRole === "admin" && (
                  <div className="mb-6">
                    <p className="px-3 mb-2 text-xs font-semibold text-neutral opacity-60 uppercase tracking-wider">
                      Admin Tools
                    </p>
                    <Link
                      href="/dashboard/add-product"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral hover:bg-secondary hover:text-secondary-content transition-all duration-200 group"
                    >
                      <IoIosAddCircleOutline className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span className="font-medium">Add Product</span>
                    </Link>
                    <Link
                      href="/dashboard/manage-users"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral hover:bg-secondary hover:text-secondary-content transition-all duration-200 group"
                    >
                      <IoIosPeople className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span className="font-medium">Manage Users</span>
                    </Link>
                    <Link
                      href="/dashboard/manage-orders"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral hover:bg-secondary hover:text-secondary-content transition-all duration-200 group"
                    >
                      <IoIosListBox className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span className="font-medium">Manage Orders</span>
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            {/* Logout section */}
            <div className="p-4 border-t border-base-300">
              <div className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-neutral hover:bg-error hover:text-white transition-all duration-200 group">
                <BiSolidLogOutCircle className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                <LogOut />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
