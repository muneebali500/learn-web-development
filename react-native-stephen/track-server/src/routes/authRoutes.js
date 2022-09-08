import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post(`/signup`, async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");

    res.status(201).send(token);
  } catch (err) {
    return res.status(422).json({ success: "fail", msg: err.message });
  }
});

router.get(`/signup`, async (req, res) => {
  const users = await User.find();
  res.status(200).json({ success: true, users });
});

export default router;
