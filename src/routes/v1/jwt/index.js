import express from "express";
import { generateJwt } from "../../../controllers/v1/jwt/index.js";
import { jwtMiddleware } from "../../../middleware/v1/jwt/index.js";

const router = express.Router();

router.post("/", jwtMiddleware, generateJwt);

export default router;
