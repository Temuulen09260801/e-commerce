import mongoose from "mongoose";
export const connectDB = async (url: string) => {
  try {
    const con = await mongoose.connect(url);
    console.log("database connected", con.connection.host);
  } catch (error) {
    console.log("database connot connected");
  }
};
