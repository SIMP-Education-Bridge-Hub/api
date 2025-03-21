import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { LOGIN_VALIDATION_SCHEMA } from "../../../../utils/v1/validations/auth/login/index.js";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET;

export const loginMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access Denied" });
    console.log("token", token);
    const verified = jwt.verify(token, SECRET_KEY, {audience:"/api/v1/auth/login"});
    console.log("verified", verified);

    req.user = verified;
    await LOGIN_VALIDATION_SCHEMA.validate(req.body, { abortEarly: false });
    next(); // Proceed to the next middleware if validation passes
  } catch (error) {
    return res.status(400).json({
      message: `Invalid request ${error?.message ? `- ${error?.message}` : ""}`,
      errors: error.errors,
    });
  }
};
