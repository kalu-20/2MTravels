const defTravel = {
    id: 4,
    name: "Viaje a Rosario de fin de año",
    startDate: "07/08/2024",
    endDate: "08/08/2024",
    cost: 1003.99,
}

const defCities = [
    {
        id: 4,
        name: "Santiago del estero",
        imgUrl: "google.com",
    }
]

const defPlaces = [
    {
        id: 31,
        name: "Comedor de Santiago del Estero",
        imgUrl: "http://google.com/imagen-de-santiago",
        address: "Calle siempre viva",
        cityId: 4,
    },
    {
        id: 32,
        name: "Montaña de Santiago del Estero",
        imgUrl: "http://google.com/imagen-de-santiago",
        address: "Calle siempre viva",
        cityId: 4,
    },
    {
        id: 33,
        name: "Balneario de Santiago del Estero",
        imgUrl: "http://google.com/imagen-de-santiago",
        address: "Calle siempre viva",
        cityId: 4,
    },
]

const defStops = [
    {
        id: 10,
        stopOrder: 1,
        days: 1,
        placeId: 31,
    },
    {
        id: 10,
        stopOrder: 2,
        days: 1,
        placeId: 32,
    },
    {
        id: 10,
        stopOrder: 3,
        days: 1,
        placeId: 33,
    },
]

const locations = defStops.map(stop => {
    const {
        id,
        name,
        imgUrl,
        address,
        cityId
    } = defPlaces.find(place => place.id === stop.placeId)

    return {
        stopId: stop.id,
        days: stop.days,
        stopOrder: stop.stopOrder,
        placeId: id,
        name,
        imgUrl,
        address,
        cityId,
    }
});

const defPromo =
{
    startTime: "02/10/2024",
    endTime: "03/10/2024",
    discount: 50.99,
}

function Travel () {

    return (
        <>
            <h2>{defTravel.name}</h2>
            <p>
                Inicia el {defTravel.startDate} - Termina el {defTravel.endDate}
            </p>

            <h3>Promoción</h3>
            <b>Descuento del {defPromo.discount}% !!!</b>
            <p>
                Aplica desde el {defPromo.startTime} hasta {defPromo.endTime}.
            </p>

            <h3>Paradas</h3>
            <div className="stops-container">
                { locations.map(loc => {
                    return (
                        <div className="stop-card">
                            <p style={{border: "2px gray solid"}}>
                                IMAGEN IMAGEN IMAGEN
                                <br/>
                                IMAGEN IMAGEN IMAGEN
                                {loc.imgUrl}
                            </p>

                            <h4>{loc.name}</h4>

                            <p>
                                Dias: {loc.days}
                            </p>

                            <p>
                                Ciudad: {defCities.find(city => city.id === loc.cityId).name}
                            </p>

                            <p>
                                Direccion: {loc.address}
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Travel;