import StopCard from "../components/StopCard.jsx";
import {useContext, useEffect, useState} from "react";
import DataContext from "../contexts/DataContext.jsx";
import {TravelContext} from "../contexts/TravelContext.jsx";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import TravelForm from "../components/TravelForm.jsx";
import {ProfileContext} from "../contexts/ProfileContext.jsx";
import PromoForm from "../components/PromoForm.jsx";

function Travel () {
    const navigate = useNavigate();

    const [stops, setStops] = useState([]);
    const [travelFormOpen, setTravelFormOpen] = useState(false);
    const [promoFormOpen, setPromoFormOpen] = useState(false);
    const [stopFormOpen, setStopFormOpen] = useState(false);

    const { cities, places} = useContext(DataContext);
    const { travel } = useContext(TravelContext);
    const { state } = useContext(ProfileContext)

    if (!travel.travel_id) {
        return <Navigate to="/travels" />
    }

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
    }, [travel]);

    const deleteTravelHandler = async (e) => {
        e.preventDefault();

        if (!confirm('¿Deseas borrar este viaje?')) {
            return;
        }

        try {
            const res = await fetch(`http://localhost:3000/travels/delete/${travel.travel_id}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${state.token}`,
                },
            })
            const response = await res.json();

            if (response.success) {
                alert('Viaje borrado correctamente.')
                navigate('/')
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }

    const deletePromoHandler = async (e) => {
        e.preventDefault();

        if (!confirm('¿Deseas borrar la promoción de este viaje?')) {
            return;
        }

        try {
            const res = await fetch(`http://localhost:3000/promos/delete/${travel.promo_id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${state.token}`,
                }
            })
            const response = await res.json();

            if (response.success) {
                alert('Promoción borrada exitosamente.')
            }
        }
        catch (err) {
            console.log(err.message)
        }
    }

    const stopInfos = stops.map(stop => {
        let stopLocation;
        if (stop.cities_id) {
            stopLocation = cities.find(city => city.id === stop.cities_id)
            return {
                stopId: stop.id,
                days: stop.days,
                stopOrder: stop.stopOrder,
                cityId: stopLocation.id,
                name: stopLocation.name,
                imgUrl: stopLocation.img_url,
            }
        }
        else if (stop.places_id) {
            stopLocation = places.find(place => place.id === stop.places_id)
            return {
                stopId: stop.id,
                days: stop.days,
                stopOrder: stop.stopOrder,
                placeId: stopLocation.id,
                name: stopLocation.name,
                imgUrl: stopLocation.img_url,
                address: stopLocation.address,
                cityId: stopLocation.cities_id,
                category: stopLocation.category,
            }
        }
    });

    return (
        <>
            <h2>{travel.name}</h2>
            <p>
                Inicia el {travel.start_dt} / Termina el {travel.end_dt}
            </p>
            {(state.isAuthenticated && state.profile.role === 'admin') && (
                <>
                    <button onClick={() => setTravelFormOpen(!travelFormOpen)}>Editar Viaje</button>
                    <button onClick={deleteTravelHandler}>Borrar Viaje</button>
                </>
            )}
            {stopFormOpen && (
                <TravelForm newTravel={false} />
            )}

            {travel.promo_id ? (
                <div className="promo-container">
                    <h3>Promoción</h3>
                    <b>Descuento del {travel.discount}% !!!</b>
                    <p>
                        Aplica desde el {travel.start_tm} hasta {travel.end_tm}.
                    </p>
                    {(state.isAuthenticated && state.profile.role === 'admin') && (
                        <>
                            <button onClick={() => setPromoFormOpen(!promoFormOpen)}>Editar Promoción</button>
                            <button onClick={deletePromoHandler}>Borrar Promoción</button>
                        </>
                    )}
                    {promoFormOpen && (
                        <PromoForm newPromo={false} />
                    )}
                </div>
            ) : (
                (state.isAuthenticated && state.profile.role === 'admin') && (<>
                    <button onClick={() => setPromoFormOpen(!promoFormOpen)}>Crear Promoción</button>
                    {promoFormOpen && (
                        <PromoForm newPromo={true}/>
                    )}
                </>)
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