import Post from "../models/post.js";

export const createPostService = async (data) => {
  const post = await Post.create(data);
  return post;
};
