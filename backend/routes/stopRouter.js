const express = require('express');
const router = express.Router();

const {
    getStopsByTravelController,
    createStopController,
    editStopController,
    deleteStopController,
    deleteStopsByTravelController,
} = require('../controllers/stopController');

const verifyAdmin = require('../middlewares/authorizeMiddleware');


router.get('/', getStopsByTravelController);
router.post('/create', verifyAdmin, createStopController);
router.put('/edit/:id', verifyAdmin, editStopController);
router.delete('/delete/:id', verifyAdmin, deleteStopController);
router.delete('/delete', verifyAdmin, deleteStopsByTravelController);


module.exports = router;
