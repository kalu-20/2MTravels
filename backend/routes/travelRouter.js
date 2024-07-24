const express = require('express');
const router = express.Router();

const {
    getTravelController,
    getAllTravelsController,
    getTravelsByPassengerController,
    createTravelController,
    editTravelController,
    deleteTravelController,
} = require('../controllers/travelController');

const verifyAdmin = require('../middlewares/authorizeMiddleware');


router.get('/:id', getTravelController);
router.get('/', getAllTravelsController);
router.post('/create', verifyAdmin, createTravelController);
router.post('/passenger', getTravelsByPassengerController);
router.put('/edit/:id', verifyAdmin, editTravelController);
router.delete('/delete/:id', verifyAdmin, deleteTravelController);


module.exports = router;
