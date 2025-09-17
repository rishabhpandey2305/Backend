import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log(`MongoDB connected to database: ${connection.connection.name}`);
  } catch (error) {
    console.log("MONGO DB CONNECTION ERROR:", error);
    process.exit(1);
  }
};
export default connectDB;
