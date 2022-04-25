const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    userNewFriend,
    userDeleteFriend
} = require('../../controllers/user-controller');
const { post } = require('../../models/Reaction');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/friends/:friendId')
    .post(userNewFriend)
    .delete(userDeleteFriend);

module.exports = router;