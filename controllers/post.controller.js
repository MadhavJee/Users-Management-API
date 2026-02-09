import { createPostService } from "../services/post.service.js";

export const createPost = async (req, res) => {
  const post = await createPostService(req.body);

  res.status(201).json({
    success: true,
    data: post
  });
};
