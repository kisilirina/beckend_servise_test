import Post from '../db/post.js'
import { saveFile } from './fileService.js'

const create = async (post, picture) => {
  const fileName = saveFile(picture);
  const createdPost = await Post.create({...post, picture: fileName});
  return createdPost;
};

const getAll = async () => {
  const posts = await Post.find();
  return posts;
}

const getOne = async (id) => {
  // if (!id) {
  //   throw new Error('id не указан');
  // }
  const post = await Post.findById(id);
  return post;
}

const update = async (post) => {
  if (!post._id) {
    throw new Error('id не указан');
  }
  const updatedPost = await Post.findByIdAndUpdate(post._id, post, { new: true });
  return updatedPost;
}

const del = async (id) => {
  if (!id) {
    throw new Error('id не указан');
  }
  await Post.findByIdAndDelete(id);
}

export {
  create,
  getOne,
  getAll,
  update,
  del,
}