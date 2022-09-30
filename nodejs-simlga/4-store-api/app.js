import * as dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express from "express";
const app = express();

import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import { connectDb } from "./db/connect.js";
import productRoutes from "./routes/products.js";

// Middlewares
app.use(express.json());

app.use(`/api/v1/products`, productRoutes);

// Products route

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
async function start() {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`port is listening at port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
