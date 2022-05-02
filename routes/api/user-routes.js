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

// 6266bbe96ed439a8063466d6 - Dillon
// 6266bc4e6ed439a8063466d9 - Jeff