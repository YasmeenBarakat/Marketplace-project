import User from "./../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  const { username, password, email } = req.body;
  const hasedpassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, password: hasedpassword, email });
  try {
    await newUser.save();
    res.status(201).json({
      message: "user created successfully!",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};