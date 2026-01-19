"use server";

import { ObjectId } from "mongodb";

const { dbConnect, collections } = require("@/lib/dbConnect");

export const getProducts = async (priceFilter, paginationPage) => {
  //price filters Under 50, 51-100, 101-200, Over 200
  let query = {};
  if (priceFilter) {
    if (priceFilter === "Under 50") {
      query.price = { $lt: 50 };
    } else if (priceFilter === "51-100") {
      query.price = { $gte: 51, $lte: 100 };
    } else if (priceFilter === "101-200") {
      query.price = { $gte: 101, $lte: 200 };
    } else if (priceFilter === "Over 200") {
      query.price = { $gt: 200 };
    }
  }
  // Get total count of products for pagination
  const totalCount = await (
    await dbConnect(collections.PRODUCTS)
  ).countDocuments(query);
  const totalPages = Math.ceil(totalCount / 12);

  // Fetch products from the database based on the constructed query
  const cursor = (await dbConnect(collections.PRODUCTS))
    .find(query)
    .skip((paginationPage - 1) * 12)
    .limit(12);

  const products = await cursor.toArray();

  return {
    products,
    totalPages,
  };
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
