import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { JWT_VALIDATION_SCHEMA } from "../../../utils/v1/validations/auth/jwt/index.js";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET;

export const jwtMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access Denied" });
    console.log("token", token);
    const verified = jwt.verify(token, SECRET_KEY, {
      audience: "/api/v1/jwt",
    });
    console.log("verified", verified);
    await JWT_VALIDATION_SCHEMA.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    return res.status(400).json({
      message: error?.message ?? error,
      errors: error.errors,
    });
  }
};
