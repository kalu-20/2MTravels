const { dbQuery } = require('../utils/dbConnection');


const testDBCityData = async () => {

    const query = "SELECT * FROM cities;";

    const result = await dbQuery(query);
    console.log(result);
}


const getTravels = async (req) => {
    // to do
    const sqlQuery = 'SELECT * FROM travels;';
    const travels = await dbQuery(sqlQuery);

    return travels.rows;
}

const getTravel = async (req) => {
    // to do
}

const createTravel = async (req) => {
    // to do
}

const editTravel = async (req) => {
    // to do
}

const deleteTravel = async (req) => {
    // to do
}


//testDBCityData();

module.exports = {
    getTravels,
    getTravel,
    createPool,
    editTravel,
    deleteTravel,
}
