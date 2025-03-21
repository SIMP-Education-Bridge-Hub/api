import express from "express";

const router = express.Router();

router.get("/profile", (req, res) => {
  res.json({ message: "Welcome to your profile", userId: req.user.userId });
});

export default router;
