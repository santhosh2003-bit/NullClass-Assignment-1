const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const UserExists = await User.findOne({ email });
    if (UserExists) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    const user = await User.create({ username, email, password });
    const token = jwt.sign({ id: user.id }, "thskjasjjadsjass", {
      expiresIn: "30days",
    });
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const match = bcrypt.compare(user.password, password);
    if (user && match) {
      const token = jwt.sign({ id: user.id }, "thskjasjjadsjass", {
        expiresIn: "30days",
      });
      res.json({ token, user });
    } else {
      return res.status(401).json({ message: "Invalid Email or Password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
module.exports = { register, loginUser };
