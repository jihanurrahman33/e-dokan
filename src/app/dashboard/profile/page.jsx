import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

import React, { use } from "react";

const Profile = async () => {
  const session = await getServerSession(authOptions);
  const userRole = session?.user?.role || "user";

  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold text-primary">
          Account Information
        </h2>
        <p className="text-lg font-medium text-primary mb-2">
          Manage your personal details and contact information
        </p>
      </div>
      <section className="w-3/5">
        <div className="card p-4 shadow-sm mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-bold">Personal Details</h2>
              <p className="text-sm text-gray-600">
                Your basic account information
              </p>
            </div>
            <div>
              <button className="btn btn-primary text-primary-content">
                Edit
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              defaultValue={session?.user?.name}
              disabled
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              defaultValue={session?.user?.email}
              disabled
              className="input bg-gray-50 w-full"
            />
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              defaultValue={userRole}
              className="input input-bordered w-full"
              disabled
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
