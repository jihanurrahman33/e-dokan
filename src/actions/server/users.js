"use server";
import bcrypt from "bcrypt";

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
export async function registerUser(data) {
  const existing = await (
    await dbConnect(collections.USERS)
  ).findOne({
    email: data?.email,
  });
  if (existing) return { error: "User already exists" };

  const newUser = {
    name: data.name,
    email: data.email,
    password: await bcrypt.hash(data.password, 10), // hash in real apps
    role: "user",
    createdAt: new Date(),
  };

  const result = await (await dbConnect(collections.USERS)).insertOne(newUser);

  return result;
}
