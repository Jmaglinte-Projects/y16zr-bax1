
import express from 'express';

import { getParts, importParts } from '../controllers/parts.js';

const router = express.Router();
// import auth from "../middleware/auth.js";

router.get('/', getParts);
router.post('/import',  importParts);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);
// router.patch('/:id/likePost', auth, likePost);

export default router;