import Logo from "@/components/Logo/Logo";
import { getServerSession } from "next-auth";
import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { authOptions } from "@/lib/authOptions";
import { BiSolidLogOutCircle } from "react-icons/bi";
import Link from "next/link";

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  const userRole = session?.user?.role || "user";
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4">
              <Logo />
            </div>
          </nav>
          {/* Page content here */}
          <div className="p-4">{children}</div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <ul className="menu w-full grow flex justify-between p-4 text-base-content">
              <div>
                {" "}
                {/* List item */}
                <li>
                  <Link
                    href="/dashboard"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Homepage"
                  >
                    {/* Home icon */}
                    <GoHomeFill />
                    <span className="is-drawer-close:hidden">Homepage</span>
                  </Link>
                </li>
                {userRole === "admin" && (
                  <>
                    <li>
                      <Link
                        href="/dashboard/add-product"
                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                        data-tip="Add Product"
                      >
                        {/* Add Product icon */}
                        <IoIosAddCircleOutline className="my-1.5 inline-block size-4" />
                        <span className="is-drawer-close:hidden">
                          Add Product
                        </span>
                      </Link>
                    </li>
                  </>
                )}
              </div>
              <div>
                <li>
                  <button
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Logout"
                  >
                    <BiSolidLogOutCircle />
                    <span className="is-drawer-close:hidden">Logout</span>
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
