import express from 'express';
const router = express.Router();
import { authUser, registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile } from '../controllers/userController.js';

// /api/users is already connect to the whole File, no need to add it to route. you only need to put whatever is after this
router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile)

export default router;

