import express from "express";
import { registerUser, loginUser } from "../../../controllers/v1/auth/index.js";
import { loginMiddleware } from "../../../middleware/v1/auth/login/index.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginMiddleware, loginUser);

export default router;
