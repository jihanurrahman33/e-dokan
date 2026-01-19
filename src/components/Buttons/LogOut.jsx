"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogOut = () => {
  const handleLogout = async () => {
    // Clear the auth cookie
    document.cookie = "auth=; Max-Age=0; path=/";
    const rs = await signOut({ callbackUrl: "/", redirect: true });

    // Redirect to home page
    window.location.href = "/";
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default LogOut;
