import mongoose from "mongoose";
const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("Already connected to MongoDB");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};
export default connectDB;
