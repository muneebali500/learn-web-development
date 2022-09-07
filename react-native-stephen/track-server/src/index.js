import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());

app.use(authRoutes);

const mongoUri = `mongodb+srv://muneeb:track-server@cluster0.obvf1lf.mongodb.net/trackdb?retryWrites=true&w=majority`;

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log(`connected to mongo instance`);
  })
  .catch((err) => console.log(`mongo not connected: ${err}`));

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
