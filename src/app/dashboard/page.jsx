import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/dist/server/api-utils";
import React from "react";
import AdminHome from "./(AdminDashboard)/AdminHome/AdminHome";
import UserHome from "./(UserDashboard)/UserHome/UserHome";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return <UserHome />;
  } else if (session.user.role === "admin") {
    return <AdminHome />;
  }

  return redirect("/");
};

export default Dashboard;
