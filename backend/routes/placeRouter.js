const express = require('express');
const router = express.Router();

const { getPlacesController } = require('../controllers/placeController');


router.get('/', getPlacesController);


module.exports = router;
