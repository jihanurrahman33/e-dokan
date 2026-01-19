import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

import React, { use } from "react";

const Profile = async () => {
  const session = await getServerSession(authOptions);
  const userRole = session?.user?.role || "user";

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
      {session ? (
        <div className="flex items-center space-x-4">
          <Image
            src={session.user.image || "/default-profile.png"}
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">{session.user.name}</h2>
            <p className="text-gray-600">{session.user.email}</p>
            <p className="text-gray-600">Role: {userRole}</p>
          </div>
        </div>
      ) : (
        <p>No user session found.</p>
      )}
    </div>
  );
};

export default Profile;
