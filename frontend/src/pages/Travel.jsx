import StopCard from "../components/StopCard.jsx";
import {useContext, useEffect, useState} from "react";
import DataContext from "../contexts/DataContext.jsx";
import {TravelContext} from "../contexts/TravelContext.jsx";

function Travel () {
    const [stops, setStops] = useState([]);

    const { cities, places } = useContext(DataContext);
    const { travel } = useContext(TravelContext);

    useEffect(() => {
        const getStops = async () => {
            const res = await fetch('http://localhost:3000/stops', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    travelId: travel.travel_id,
                })
            })

            const response = await res.json();
            if (response.success) {
                setStops(response.data)
            }
        }

        getStops()
    }, []);

    const stopInfos = stops.map(stop => {

        let stopLocation;
        if (stop.cities_id) {
            stopLocation = cities.find(city => city.id === stop.cities_id)
        }
        else if (stop.places_id) {
            stopLocation = places.find(place => place.id === stop.places_id)
        }

        return {
            stopId: stop.id,
            days: stop.days,
            stopOrder: stop.stopOrder,
            placeId: stopLocation?.id,
            name: stopLocation?.name,
            imgUrl: stopLocation?.img_url,
            address: stopLocation?.address,
            cityId: stopLocation?.cities_id,
        }
    });

    return (
        <>
            <h2>{travel.name}</h2>
            <p>
                Inicia el {travel.start_dt} - Termina el {travel.end_dt}
            </p>

            {travel.promo_id && (
                <div className="promo-container">
                    <h3>Promoción</h3>
                    <b>Descuento del {travel.discount}% !!!</b>
                    <p>
                        Aplica desde el {travel.start_tm} hasta {travel.end_tm}.
                    </p>
                </div>
            )}

            <h3>Paradas</h3>
            <div className="stops-container">
                {stopInfos.map(stop => {
                    const cityName = cities.length ? cities.find(city => city.id === stop.cityId)?.name : ''
                    return (
                        <StopCard key={stop.stopId} stopData={stop} cityName={cityName} />
                    );
                })}
            </div>
        </>
    )
}

export default Travel;