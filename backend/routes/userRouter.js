const express = require('express');
const router = express.Router();

const {
    getUserController,
    registerUserController,
    loginUserController,
    editUserController,
    deleteUserController,
} = require('../controllers/userController');


router.post('/register', registerUserController);
router.post('/login', loginUserController);
router.put('/edit/:id', editUserController);
router.delete('/delete/:id', deleteUserController);
router.get('/:id', getUserController);


module.exports = router;
