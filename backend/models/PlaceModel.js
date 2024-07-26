const { dbQuery } = require('../utils/dbConnection');


const getPlaces = async () => {

    const sqlQuery = `
	SELECT * FROM places;
    `;

    const places = await dbQuery(sqlQuery);
    return places[0];
}


module.exports = {
    getPlaces,
}
