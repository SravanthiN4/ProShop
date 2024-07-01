import express from 'express';
const router = express.Router();
import { authUser,
    registerUser,
    logOutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUsers,
    updateUser } from '../controllers/userController.js';

import {protect, admin} from '../middleware/authMiddleWare.js';

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout',logOutUser);
router.post('/auth',authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUsers).get(protect, admin, getUserById).put(protect, admin, updateUser)

export default router;