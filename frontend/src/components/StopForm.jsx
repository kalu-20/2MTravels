import {useContext, useState} from "react";
import {TravelContext} from "../contexts/TravelContext.jsx";
import {ProfileContext} from "../contexts/ProfileContext.jsx";

function StopForm ({ newStop, biggestOrder, stopData }) {
    const { travel } = useContext(TravelContext);
    const { state } = useContext(ProfileContext)

    let defaultType;
    if (newStop || stopData.placeId) {
        defaultType = 'place';
    }
    else {
        defaultType = 'city'
    }
    const [stopType, setStopType] = useState(defaultType);
    const [days, setDays] = useState(newStop ? 1 : stopData.days);
    const [locationId, setLocationId] = useState(newStop ? 0 : (stopData.placeId ?? stopData.cityId));

    const formHandler = async (e) => {
        e.preventDefault();

        try {
            const stopBody = {
                days,
                stopOrder: newStop ? biggestOrder + 1 : stopData.stopOrder,
                cityId: stopType === 'city' ? locationId : null,
                placeId: stopType === 'place' ? locationId : null,
                travelId: travel.travel_id,
            }

            const requestPath = newStop ? 'create' : `edit/${stopData.stopId}`;
            const requestMethod = newStop ? 'POST' : 'PUT';

            const res = await fetch(`http://localhost:3000/stops/${requestPath}`, {
                method: requestMethod,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${state.token}`,
                },
                body: JSON.stringify(stopBody)
            })
            const response = await res.json();

            if (response.success) {
                alert('Gestión de Parada exitosa.')
            }
            else {
                throw new Error(response.error)
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }

    return (
        <>
            <b>{newStop ? 'Crear' : 'Editar'} Parada</b>
            <form onSubmit={formHandler}>
                {newStop && (
                    <button onClick={(e) => {
                        e.preventDefault()
                        setStopType(stopType === 'place' ? 'city' : 'place')
                    }}>
                        {stopType === 'place' ? 'Tipo: Lugar (Recomendado)' : 'Tipo: Ciudad'}
                    </button>
                )}

                <label htmlFor="days-input">Dias de viaje</label>
                <input id="days-input" type="number" value={days} onChange={(e) => setDays(e.target.value)}/>

                <label htmlFor="location-input">{stopType === 'place' ? 'Lugar' : 'Ciudad'}</label>
                <input id="location-input" value={locationId} onChange={(e) => setLocationId(e.target.value)} />

                <button type="submit">Guardar</button>
            </form>
        </>
    )
}

export default StopForm;