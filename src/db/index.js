import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(`MongoDB connected to database: ${connection.connection.name}`);
  } catch (error) {
    console.log("MONGO DB CONNECTION ERROR:", error);
    process.exit(1);
  }
};
export default connectDB;
