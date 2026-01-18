"use server";

import { collections, dbConnect } from "@/lib/dbConnect";

export async function addUserToDB(user) {
  //check if user already exists
  const existingUser = await (
    await dbConnect(collections.USERS)
  ).findOne({
    email: user.email,
  });
  if (existingUser) {
    return existingUser; // Return existing user if found
  }
  // If user does not exist, insert new user
  const result = await (await dbConnect(collections.USERS)).insertOne(user);
  return result;
}
