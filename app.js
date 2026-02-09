
import express from "express";
import userRouter from "./routes/users.routes.js";
import postRouter from "./routes/post.routes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

app.use("/api/posts", postRouter);

app.use(express.json());

// BASE ROUTE
app.get("/", (req, res) => {
  res.send("User Management API is running");
});

// USER ROUTES
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

export default app;
