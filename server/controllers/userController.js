const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await userModel.findOne({ email });

  if (user)
    return res.status(400).json("User with the given email already exist...");

  if (!name || !email || !password)
    return res.status(400).json("All fields are required...");

  if (!validator.isEmail(email))
    return res.status(400).json("Email must be a valid email...");

  if (!validator.isStrongPassword(password))
    return res.status(400).json("Password must be a strong password...");
};

module.exports = { registerUser };
