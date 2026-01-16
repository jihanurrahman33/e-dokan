"use server";

import { ObjectId } from "mongodb";

const { dbConnect, collections } = require("@/lib/dbConnect");

export const getProducts = async () => {
  const products = (await dbConnect(collections.PRODUCTS)).find().toArray();
  return products;
};

export const addProduct = async (product) => {
  const result = (await dbConnect(collections.PRODUCTS)).insertOne(product);
  return result;
};

export const getProductById = async (id) => {
  const product = (await dbConnect(collections.PRODUCTS)).findOne({
    _id: new ObjectId(id),
  });
  return product;
};

export const getPopularProducts = async () => {
  const products = (await dbConnect(collections.PRODUCTS))
    .find()
    .sort({ rating: -1 })
    .limit(8)
    .toArray();
  return products;
};

//get new arrival products based on createdAt field
export const getNewArrivals = async () => {
  const products = (await dbConnect(collections.PRODUCTS))
    .find()
    .sort({ createdAt: -1 })
    .limit(8)
    .toArray();
  return products;
};
