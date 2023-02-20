import express from 'express';

import { getCategories, createCategory
	// getPost, createPost, updatePost, likePost, deletePost
 } from '../controllers/categories.js';

const router = express.Router();
// import auth from "../middleware/auth.js";

router.get('/', getCategories);
router.post('/',  createCategory);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);
// router.patch('/:id/likePost', auth, likePost);

export default router;