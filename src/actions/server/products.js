"use server";
const { dbConnect, collections } = require("@/lib/dbConnect");

export const getProducts = async () => {
  const products = await dbConnect(collections.PRODUCTS).find({}).toArray();
  return products;
};

export const addProduct = async (product) => {
  const result = (await dbConnect(collections.PRODUCTS)).insertOne(product);
  return result;
};
