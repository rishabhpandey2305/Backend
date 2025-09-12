import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

const port = process.env.PORT || 2000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is started at port: ${port}`);
    });
  } catch (error) {
    console.error("MongoDB failed to connect!", error);
    process.exit(1);
  }
};

startServer();
