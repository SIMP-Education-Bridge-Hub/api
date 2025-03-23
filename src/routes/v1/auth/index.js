import express from "express";
import { register } from "../../../controllers/v1/auth/register/index.js";
import { login } from "../../../controllers/v1/auth/login/index.js";
import { loginMiddleware } from "../../../middleware/v1/auth/login/index.js";
import { registerMiddleware } from "../../../middleware/v1/auth/register/index.js";

const router = express.Router();

router.post("/register", registerMiddleware, register);
router.post("/login", loginMiddleware, login);

export default router;
