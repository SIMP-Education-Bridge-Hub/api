import express from "express";
import cors from "cors";
import authRoutes from "../routes/auth/index.js";
import userRoutes from "../routes/user/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the REST API");
});

export default app;
