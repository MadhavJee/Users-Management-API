import express from "express";
import { createPost } from "../controllers/post.controller.js";
import { validateZod } from "../middlewares/auth.js";
import { createPostSchema } from "../dtos/post.zod.js";

const router = express.Router();

router.post(
  "/",
  validateZod(createPostSchema),
  createPost
);

export default router;
