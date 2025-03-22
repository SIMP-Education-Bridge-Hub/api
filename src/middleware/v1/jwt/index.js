import dotenv from "dotenv";
import { JWT_VALIDATION_SCHEMA } from "../../../utils/v1/validations/auth/jwt/index.js";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET;

export const jwtMiddleware = async (req, res, next) => {
  try {
    await JWT_VALIDATION_SCHEMA.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Validation Error",
      errors: error.errors,
    });
  }
};
