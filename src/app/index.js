import express from "express";
import cors from "cors";
import authRoutes from "../routes/v1/auth/index.js";
import userRoutes from "../routes/v1/user/index.js";
import jwtRoute from "../routes/v1/jwt/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

app.use("/api/v1/jwt", jwtRoute);

app.get("/", (req, res) => {
  // res.send("Welcome to the REST API");
  res.send("Welcome to SIMP restful API");
});

export default app;
