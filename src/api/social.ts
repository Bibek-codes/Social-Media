import express from "express";
import PostService from "../services/post";
import UserService from "../services/user";
import CommentService from "../services/comment";
import LikeService from "../services/like";
export const socialRouter = express.Router();

socialRouter.get("/GetAllPostsOfSingleUser/:id", async (req, res) => {
  const ide = parseInt(req.params.id);
  const result = await PostService.getAllPostsOfSingleUser(ide);
  res.json({
    status: result,
  });
});

socialRouter.get("/GetPostOfUser", async (req, res) => {
  const result = await PostService.getPostOfUser();
  res.json({
    status: result,
  });
});

socialRouter.get("/GetPostOfSingleUser/:id", async (req, res) => {
  const ide = parseInt(req.params.id);
  const rezult = await PostService.getPostOfSingleUser(ide);
  res.json({
    status: rezult,
  });
});

socialRouter.get(
  "/GetSinglePostOfSingleUser/:uid/post/:pid",
  async (req, res) => {
    const a = parseInt(req.params.uid);
    const b = parseInt(req.params.pid);
    const result = await PostService.getSinglePostOfSingleUser(a, b);
    res.json({
      status: result,
    });
  },
);

socialRouter.post("/CreateUser", async (req, res) => {
  const data = req.body;
  const result = await UserService.createUser(data);
  res.json({
    status: result,
  });
});

socialRouter.put("/UpdateUser/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const datum = req.body;
  const result = await UserService.upadateUser(datum, id);
  res.json({
    status: result,
  });
});

socialRouter.put("/DeleteUser/:id", async (req, res) => {
  const ide = parseInt(req.params.id);
  const result = await UserService.deleteUSer(ide);
  res.json({
    status: result,
  });
});

socialRouter.post("/CreateComment/:uid/post/:pid", async (req, res) => {
  const { text } = req.body;
  const userId = parseInt(req.params.uid);
  const postId = parseInt(req.params.pid);
  const result = await CommentService.createComment(userId, postId, text);
  res.json({
    status: result,
  });
});

socialRouter.put("/UpdateComment/:id", async (req, res) => {
  const ide = parseInt(req.params.id);
  const data = req.body.text;
  const result = await CommentService.updateComment(data, ide);
  res.json({
    status: result,
  });
});

socialRouter.put("/DeleteComment/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await CommentService.deleteComment(id);
  res.json({
    status: result,
  });
});

socialRouter.post("/CreateLike/:uid/post/:pid", async (req, res) => {
  const userid = parseInt(req.params.uid);
  const postid = parseInt(req.params.pid);
  const result = await LikeService.createLike(userid, postid);
  res.json({
    status: result,
  });
});

socialRouter.put("/DeleteLike/:pid", async (req, res) => {
  const postid = parseInt(req.params.pid);
  const result = await LikeService.deleteLike(postid);
  res.json({
    status: result,
  });
});

socialRouter.post("/CreatePost/:uid", async (req, res) => {
  const userid = parseInt(req.params.uid);
  const data = req.body.text;
  const result = await PostService.createPost(userid, data);
  res.json({
    status: result,
  });
});

socialRouter.get("/GetAllPostsLikesAndComments/:pid", async (req, res) => {
  const postid = parseInt(req.params.pid);
  const result = await PostService.getAllPostsLikesAndComments(postid);
  res.json({
    status: result,
  });
});

socialRouter.get("/GetCountOfPostIdLikesAndComments", async (req, res) => {
  const result = await PostService.getPostsLikesAndComments();
  res.json({
    status: result,
  });
});

socialRouter.get("/GetAllUsers", async (req, res) => {
  const result = await UserService.getAllUsers();
  res.json({
    status: result,
  });
});
