import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, `Please provide the product name`],
    },
    price: {
      type: Number,
      required: [true, `Please provide the product price`],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
    },
    company: {
      type: String,
      enum: {
        values: [`ikea`, `liddy`, `caressa`, `marcos`],
        message: `{VALUE} is not supported`,
      },
      //   enum: [`ikea`, `libby`, `caressa`, `marcos`],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model(`Product`, productSchema);
export default Product;
