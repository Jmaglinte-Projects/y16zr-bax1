import express from 'express';

import { getSubCategories, createSubCategories, updateSubCategory } from '../controllers/subCategories.js';

const router = express.Router();
// import auth from "../middleware/auth.js";

router.get('/', getSubCategories);
router.post('/',  createSubCategories);
router.patch('/:id', updateSubCategory);
// router.delete('/:id', auth, deletePost);
// router.patch('/:id/likePost', auth, likePost);

export default router;