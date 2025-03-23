import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { REGISTER_VALIDATION_SCHEMA } from "../../../../utils/v1/validations/auth/register/index.js";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET;

export const registerMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access Denied" });
    console.log("token", token);
    const verified = jwt.verify(token, SECRET_KEY, {audience:"/api/v1/auth/register"});
    console.log("verified", verified);

    req.user = verified;
    await REGISTER_VALIDATION_SCHEMA.validate(req.body, { abortEarly: false });
    next(); // Proceed to the next middleware if validation passes
  } catch (error) {
    return res.status(400).json({
      message: `Invalid request ${error?.message ? `- ${error?.message}` : ""}`,
      errors: error.errors,
    });
  }
};
