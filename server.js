const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
// const connectDB = require("./config/db");
const bodyParser = require("body-parser");
dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connect Successfully");
  } catch (error) {
    console.log("Database not Connected", error.message);
    process.exit(1);
  }
};
connectDb();
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/plans", require("./routes/planRoutes"));
app.use("/api/payments", require("./routes/paymentRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
