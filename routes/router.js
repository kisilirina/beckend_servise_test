import Router from 'express'
import {
  createNewPost,
  getOnePost,
  getAllPosts,
  updatePost,
  deletePost,
} from '../controllers/controller.js'

const router = new Router();

router.route('/')
  .get(getAllPosts)
  .post(createNewPost)
  .put(updatePost);

router.route('/:id')
  .get(getOnePost)
  .delete(deletePost);

export default router;