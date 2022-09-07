import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post(`/signup`, async (req, res) => {
  const { email, password } = req.body;

  const user = new User({ email, password });
  await user.save();
  res.status(201).json({ success: true, user });
});

export default router;
