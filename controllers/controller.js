import Post from '../db/post.js'

import {
  create,
  getAll,
  getOne,
  update,
  del,
} from '../service/postService.js'

const createNewPost = async (req, res) => {
  try {
    const post = await create(req.body, req.files.picture);
    res.json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await getAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

const getOnePost = async (req, res) => {
  try {
    const post = await getOne(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

const updatePost = async (req, res) => {
  try {
    const updatedPost = await update(req.body);
    return res.json(updatedPost);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

const deletePost = async (req, res) => {
  try {
    await del(req.params.id);
    return res.sendStatus(200);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export {
  createNewPost,
  getOnePost,
  getAllPosts,
  updatePost,
  deletePost,
}