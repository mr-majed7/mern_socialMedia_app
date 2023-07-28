import express from 'express';
import {
    getUser,
    getUserFriends,
    addRemoveFriends
} from '../controllers/users.js';
import {verify} from '../middleware/auth.js';

const router = express.Router();

//READ
router.get('/:id',verify,getUser);
router.get('/friends/:id',verify,getUserFriends);

//UPDATE
router.patch('/:id/:friendId',verify,addRemoveFriends);

export default router;