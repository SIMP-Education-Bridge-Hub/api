import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { CREATE_ROLE_VALIDATION_SCHEMA } from "../../../utils/v1/validations/auth/role/index.js";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET;

export const rolesMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access Denied" });
    console.log("token", token);
    const verified = jwt.verify(token, SECRET_KEY, {
      audience: "/api/v1/roles",
    });
    console.log("verified", verified);

    console.log("Method", req.method);

    if (req.method === "POST") {
      await CREATE_ROLE_VALIDATION_SCHEMA.validate(req.body, {
        abortEarly: false,
      });
    }

    next();
  } catch (error) {
    return res.status(400).json({
      message: error?.message ?? error,
      errors: error.errors,
    });
  }
};
