const express = require("express");
const router = express.Router();
const auth = require("../../middlewere/authMiddlewere");
const User = require("../../models/User");
const Post = require("../../models/Posts");
const Profile = require("../../models/Profile");
const { check, validationResult } = require("express-validator");
const Posts = require("../../models/Posts");

//route POST api/posts
//create new post
//access private
router.post(
  "/",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });
      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Server Error");
    }
  }
);

//GET get all posts
//private
router.get("/", auth, async (req, res) => {
  try {
    const posts = await Posts.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

//GET get single post
//private
router.get("/:postID", auth, async (req, res) => {
  try {
    const post = await Posts.findById(req.params.postID);
    if (!post) {
      return res.status(404).json({ msg: "post not found" });
    }
    res.json(post);
  } catch (err) {
    console.error(err);
    if (err.kind === "ObjectID") {
      return res.status(404).json({ msg: "post not found" });
    }
    return res.status(500).send("Server Error");
  }
});

//DELETE delete single post
//private

router.delete("/:postID", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postID);
    if (!post) {
      return res.status(404).json({ msg: "post not found" });
    }
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "user not authorized" });
    }
    await post.remove();
    res.json({ msg: "post deleted" });
  } catch (err) {
    console.error(err);
    if (err.kind === "ObjectID") {
      return res.status(404).json({ msg: "post not found" });
    }
    res.status(500).send("Server Error");
  }
});

//PUT like a post
//private
router.put("/like/:ID", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.ID);
    const userLiked = post.likes.filter(
      (like) => like.user.toString() === req.user.id
    );
    if (userLiked.length > 0) {
      return res.status(400).json({ msg: "you already liked this post" });
    }
    post.likes.unshift({ user: req.user.id });
    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

//PUT unlike a post
//private
router.put("/unlike/:ID", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.ID);
    const userLiked = post.likes.filter(
      (like) => like.user.toString() === req.user.id
    );
    if (userLiked.length === 0) {
      return res.status(400).json({ msg: "you need to like it first" });
    }
    let filterLike = post.likes.filter(
      (like) => like.user.toString() !== req.user.id
    );
    console.log(filterLike);
    post.likes = filterLike;
    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

//route POST api/comments/:postID
//add comment to a post
//access private
router.post(
  "/comments/:postID",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const post = await Post.findById(req.params.postID);
      const newComment = {
        user: req.user.id,
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
      };
      post.comments.unshift(newComment);
      await post.save();
      res.json(post.comments);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Server Error");
    }
  }
);

//route DELETE api/comments/:postID/:commentID
//add comment to a post
//access private

router.delete("/comments/:postID/:commentID", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postID);
    const comment = post.comments.find(
      (comment) => comment.id === req.params.commentID
    );
    if (!comment) {
      return res.status(404).json({ msg: "comment not found" });
    }
    //check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "user not authorized" });
    }
    let filterComments = post.comments.filter(
      (comment) => comment.id.toString() !== req.params.commentID
    );
    post.comments = filterComments;
    await post.save();
    res.json(post.comments);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
