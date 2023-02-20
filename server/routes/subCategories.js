import express from 'express';

import { getSubCategories, createSubCategories } from '../controllers/subCategories.js';

const router = express.Router();
// import auth from "../middleware/auth.js";

router.get('/', getSubCategories);
router.post('/',  createSubCategories);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);
// router.patch('/:id/likePost', auth, likePost);

export default router;