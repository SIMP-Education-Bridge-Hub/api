import express from "express";
import { rolesMiddleware } from "../../../middleware/v1/roles/index.js";

const router = express.Router();

router.post("/", rolesMiddleware, (req, res) => {
  res.status(201).json("Seed?");
});

export default router;
