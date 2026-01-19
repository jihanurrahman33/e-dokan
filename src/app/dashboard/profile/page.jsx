import { getServerSession } from "next-auth";
import Image from "next/image";

import React, { use } from "react";

const Profile = () => {
  const session = use(getServerSession());

  return (
    <div>
      {session ? (
        <div>
          <Image
            src={session.user.image}
            alt={session.user.name}
            width={100}
            height={100}
          />
          <h1>Welcome, {session.user.name}!</h1>
          <p>Email: {session.user.email}</p>
        </div>
      ) : (
        <h1>Please log in to view your profile.</h1>
      )}
    </div>
  );
};

export default Profile;
