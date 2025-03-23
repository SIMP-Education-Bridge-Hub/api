import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();
const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET;

// User Registration
export const createRole = async (req, res) => {
  // No need for body checks. Middleware handles it all
  try {
    const { role, roles } = req.body;

    const isBulk = !role;

    let savedRoles = [];

    if (isBulk) {
      roles.forEach(async (item) => {
        const isRoleExists = await prisma.role.findFirst({
          where: {
            role: item,
          },
        });

        //If role exists skip create

        if (!isRoleExists) {
          const newRole = await prisma.role.create({
            data: {
              role: item,
            },
          });

          savedRoles.push(newRole);
          newRole = null;
        }
      });
    }

    res.status(200).json(savedRoles);
  } catch (error) {
    console.log("Error", error);

    res.status(500).json({ message: error?.message ?? error });
  }
};
