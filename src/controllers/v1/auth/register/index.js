import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET;

// User Registration
export const register = async (req, res) => {
  try {
    const { name, surname, email, password, phone } = req.body;

    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser)
      return res.status(409).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    // const user = await prisma.user.create({
    //   data: {
    //     name,
    //     surname,
    //     email,
    //     password: hashedPassword,
    //     phone: "0794194768",
    //     type: {
    //       connect: { userTypeId: "0627fd10-09ed-4cf6-948f-336b1da7d54d" },
    //     },
    //   },
    // });

    res.status(201).json({ message: "User registered successfully", hashedPassword });
  } catch (error) {
    console.log("Error", error);

    res.status(500).json({ message: "Error registering user", error });
  }
};
