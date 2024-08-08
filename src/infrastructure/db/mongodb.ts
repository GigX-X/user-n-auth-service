import mongoose from "mongoose";
// import { config } from "dotenv";

// config();
// console.log(process.env.MONGODB_URI);

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("connected to MongoDB");
  } catch (error) {
    console.error(`Error connecting to usersDB: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
