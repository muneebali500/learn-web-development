import * as dotenv from "dotenv";
dotenv.config();

// import { readFile } from "fs/promises";
// const jsonProducts = JSON.parse(
//   await readFile(new URL("./products.json", import.meta.url))
// );

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const jsonProducts = require("./products.json");

import Product from "./models/product.js";
import { connectDb } from "./db/connect.js";

async function start() {
  try {
    await connectDb(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log(`success`);
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

start();
