import express from "express";
import cors from "cors";
import authRoutes from "../routes/v1/auth/index.js";
import userRoutes from "../routes/v1/user/index.js";
import jwtRoute from "../routes/v1/jwt/index.js";
import seedDatabaseRoute from "../routes/v1/seed-database/index.js";
import rolesRoutes from "../routes/v1/roles/index.js";

import { createUser } from "../database/faker/users/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/roles", rolesRoutes);

app.use("/api/v1/jwt", jwtRoute);
app.use("/api/v1/seed-database", seedDatabaseRoute);

app.get("/", (req, res) => {
  res.send("Welcome to SIMP restful API");
});
export default app;
