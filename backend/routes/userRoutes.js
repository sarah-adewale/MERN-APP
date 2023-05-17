import express from 'express';

const router = express.Router();
import { authUser } from '../controllers/userController.js';

// /api/users is already connect to the whole File, no need to add it to route. you only need to put whatever is after this
router.post('/auth', authUser)

export default router;