const { dbQuery } = require('../utils/dbConnection');


const getAllPromos = async () => {

    const sqlQuery = `
	SELECT * 
	FROM promos;
    `;

    const promos = await dbQuery(sqlQuery);
    return promos[0];
}

const getPromo = async (req) => {

    const id = req.body.promoId;

    const sqlQuery = `
	SELECT * 
	FROM promos 
	WHERE id=${id};
    `;

    const promo = await dbQuery(sqlQuery);
    return promo[0];
}

const createPromo = async (req) => {

    const sqlQuery = `
	INSERT INTO promos(
	    start_time,
	    end_time,
	    discount,
	    travels_id
	) VALUES(
	    '${req.body.startTime}',
	    '${req.body.endTime}',
	    ${req.body.discount},
	    ${req.body.travelId}
	);
    `;
    
    const result = await dbQuery(sqlQuery);
    return result[0];
}

const editPromo = async (req) => {

    const id = req.body.promoId;

    const sqlQuery = `
	UPDATE promos 
	SET
	    start_time='${req.body.startTime}',
	    end_time='${req.body.endTime}',
	    discount=${req.body.discount},
	WHERE id=${id};
    `;
    
    const result = await dbQuery(sqlQuery);
    return result[0];
}

const deletePromo = async (req) => {

    const id = req.body.promoId;

    const sqlQuery = `
	DELETE 
	FROM promos 
	WHERE id=${id};
    `;

    const result = await dbQuery(sqlQuery);
    return result[0];
}

const deletePromosByTravel = async (req) => {

    const travelId = req.body.travelId;

    const sqlQuery = `
	DELETE 
	FROM promos 
	WHERE travels_id=${travelId};
    `;

    const result = await dbQuery(sqlQuery);
    return result[0];
}


module.exports = {
    getAllPromos,
    getPromo,
    createPromo,
    editPromo,
    deletePromo,
    deletePromosByTravel,
}
