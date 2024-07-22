const { dbQuery } = require('../utils/dbConnection');


const deletePassengersByProfile = async (req) => {

    const profileId = req.body.profileId;

    const sqlQuery = `
	DELETE FROM travel_passenger 
	WHERE profiles_id=${profileId};
    `;

    const result = await dbQuery(sqlQuery);
    return result[0];
}

const deletePassengersByTravel = async (req) => {

    const travelId = req.body.travelId;

    const sqlQuery = `
	DELETE FROM travel_passenger 
	WHERE travels_id=${travelId};
    `;

    const result = await dbQuery(sqlQuery);
    return result[0];
}


module.exports = {
    deletePassengersByProfile,
    deletePassengersByTravel,
}
