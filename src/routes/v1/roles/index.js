import express from "express";
import { createRole } from "../../../controllers/v1/roles/create/index.js";
import { readRole } from "../../../controllers/v1/roles/read/index.js";
import { rolesMiddleware } from "../../../middleware/v1/roles/index.js";

const router = express.Router();

router.post("/", rolesMiddleware, createRole);

router.get("/", rolesMiddleware, readRole);

export default router;
