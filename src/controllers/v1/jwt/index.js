import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { getSigningOptions } from "../../../utils/v1/api/jwt/index.js";

dotenv.config();
const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET;

// User Registration
export const generateJwt = async (req, res) => {
  // No need for body checks. Middleware handles it all
  try {
    const { dataToEncrypt, encryption } = req.body;
    const signingOptions = getSigningOptions(encryption, dataToEncrypt.route);
    const token = jwt.sign(dataToEncrypt, SECRET_KEY, signingOptions);
    res.status(201).json({ dataToEncrypt, encryption, signingOptions, token });
  } catch (error) {
    console.log("Error", error);

    res.status(500).json({ message: "Error registering user", error });
  }
};
