import express from "express";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import schema from "./schema/schema.js";

import cors from "cors";

const app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://muneeb:test123@cluster0.wl3mb.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.once(`open`, () => {
  console.log(`connected to database`);
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const port = 4000;
app.listen(port, () => {
  console.log(`app is listening at port ${port}`);
});

// notes:
// 1- graphql:- this is the main package which is the javascript implementation of graphql
// 2- express-graphql:- this is for express to interact and understand graphql
