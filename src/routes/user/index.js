import express from "express";
import { authMiddleware } from "../../middleware/auth/index.js";

const router = express.Router();

router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to your profile", userId: req.user.userId });
});

export default router;
