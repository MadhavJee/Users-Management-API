import { z } from "zod";

export const createPostSchema = z.object({
  title: z.string().min(3, "Title is too short"),
  content: z.string().min(10, "Content is too short"),
  authorId: z.string().min(5, "Invalid author id"),
  isPublished: z.boolean().optional()
});
