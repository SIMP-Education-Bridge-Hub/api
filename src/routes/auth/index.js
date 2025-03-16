import express from "express";
import { registerUser, loginUser } from "../../controllers/v1/auth/index.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/login", loginUser);

export default router;
