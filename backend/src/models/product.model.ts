import { Schema } from "mongoose";

interface IProduct {
  name: string;
  description: string;
  price: number;
  size: string;
  images: [string];
  isNew: boolean;
  quantity: number;
  discount: number;
  category: Schema.Types.ObjectId;
}

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: "comment",
  },
  size: {
    type: String,
    enum: ["s", "m", "l", "xl"],
    default: "s",
  },
  images: {
    type: String,
    default: "s",
  },
});
