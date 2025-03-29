import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import { roleCollection } from "../../../../utils/v1/api/resources/roles/index.js";

dotenv.config();
const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET;

// User Registration
export const readRole = async (req, res) => {
  // No need for body checks. Middleware handles it all
  try {
    const {} = req.body;

    const roles = await prisma.role.findMany({});

    res.status(200).json(roleCollection(roles));
  } catch (error) {
    console.log("Error", error);

    res.status(500).json({ message: "Error registering user", error });
  }
};
