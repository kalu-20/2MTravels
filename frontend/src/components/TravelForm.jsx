import {useContext, useState} from "react";
import {TravelContext} from "../contexts/TravelContext.jsx";
import {ProfileContext} from "../contexts/ProfileContext.jsx";
import {useNavigate} from "react-router-dom";

function TravelForm ({ newTravel }) {
    const navigate = useNavigate();

    const { state } = useContext(ProfileContext)
    const { travel } = useContext(TravelContext);

    const [name, setName] = useState(newTravel ? "" : travel.name)
    const [startDate, setStartDate] = useState(
        newTravel ? "2024-08-01" : travel.start_dt.split('-').reverse().join('-'))
    const [endDate, setEndDate] = useState(
        newTravel ? "2024-08-01" : travel.end_dt.split('-').reverse().join('-'))
    const [cost, setCost] = useState(newTravel ? 0.0 : travel.cost)

    const newTravelHandler = async (e) => {
        e.preventDefault();

        const travelBody = {
            name,
            startDate: startDate.split('-').reverse().join('-'),
            endDate: endDate.split('-').reverse().join('-'),
            cost,
        }

        try {
            const requestPath = newTravel ? 'create' : `edit/${travel.travel_id}`;
            const requestMethod = newTravel ? 'POST' : 'PUT';

            const res = await fetch(`http://localhost:3000/travels/${requestPath}`, {
                method: requestMethod,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${state.token}`
                },
                body: JSON.stringify(travelBody),
            });
            const response = await res.json();

            if (response.success) {
                alert('Gestion de viaje exitosa.')
                navigate('/');
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
            <form onSubmit={newTravelHandler}>
                <label htmlFor="travel-name-input">Nombre</label>
                <input id="travel-name-input" type="text" value={name} onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="start-trav-input">Fecha Inicio del Viaje</label>
                <input id="start-trav-input" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>

                <label htmlFor="end-trav-input">Fecha Fin del Viaje</label>
                <input id="end-trav-input" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>

                <label htmlFor="cost-input">Precio</label>
                <input id="cost-input" type="text" value={cost} onChange={(e) => setCost(e.target.value)}/>

                <button type="submit">{newTravel ? "Crear" : "Editar"} Viaje</button>
            </form>
        </>
    )
}

export default TravelForm;