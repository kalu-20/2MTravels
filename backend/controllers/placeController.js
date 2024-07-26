const { getPlaces } = require('../models/PlaceModel');

const { publicResourceHandler } = require('./requestHandler');


const getPlacesController = (req, res) => {

    publicResourceHandler(res, getPlaces);
}


module.exports = {
    getPlacesController,
}
