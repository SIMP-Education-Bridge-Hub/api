import express from "express";
import { createRole } from "../../../controllers/v1/roles/create/index.js";
import {
  readRoles,
  readRole,
} from "../../../controllers/v1/roles/read/index.js";
import {
  roleMiddleware,
  rolesMiddleware,
} from "../../../middleware/v1/roles/index.js";

const router = express.Router();

router.post("/", rolesMiddleware, createRole);

router.get("/", rolesMiddleware, readRoles);

router.get("/:id", rolesMiddleware, roleMiddleware, readRole);

export default router;
