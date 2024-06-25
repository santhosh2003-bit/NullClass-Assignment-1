const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connect Successfully");
  } catch (error) {
    console.log("Database not Connected", error);
    process.exit(1);
  }
};
module.exports = connectDb;
