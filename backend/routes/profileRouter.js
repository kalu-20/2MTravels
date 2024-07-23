const express = require('express');
const router = express.Router();

const {
    getProfileController,
    getProfileByUserController,
    createProfileController,
    editProfileController,
    deleteProfileController,
} = require('../controllers/profileController');

const verifyAdmin = require('../middlewares/authorizeMiddleware');


router.post('/create', createProfileController);
router.put('/edit/:id', editProfileController);
router.delete('/delete/:id', deleteProfileController);
router.get('/:id', verifyAdmin, getProfileController);
router.get('/', getProfileByUserController);


module.exports = router;
