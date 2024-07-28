import StopForm from "./StopForm.jsx";
import {useContext, useState} from "react";
import {ProfileContext} from "../contexts/ProfileContext.jsx";

function StopCard ({ stopData, cityName, biggestOrder }) {

    const { state } = useContext(ProfileContext)
    const [formOpen, setFormOpen] = useState(false)

    const deleteHandler = async (e) => {
        e.preventDefault();

        if (!confirm(`¿Deseas borrar la parada en ${stopData.name}?`)) {
            return;
        }

        try {
            const res = await fetch(`http://localhost:3000/stops/delete/${stopData.stopId}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${state.token}`,
                }
            })
            const response = await res.json();

            if (response.success) {
                alert('Parada borrada correctamente.')
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
        <div className="stop-card">
            <p style={{border: "2px gray solid"}}>
                IMAGEN IMAGEN IMAGEN
                <br/>
                IMAGEN IMAGEN IMAGEN
                {stopData.imgUrl}
            </p>

            <h4>{stopData.name}</h4>

            <p>
                Dias: {stopData.days}
            </p>

            <p>
                Ciudad: {cityName}
            </p>

            {stopData.address && (
                <>
                    <p>
                        Direccion: {stopData.address}
                    </p>

                    <p>
                        Categoría: {stopData.category}
                    </p>
                </>
            )}

            {(state.isAuthenticated && state.profile.role === 'admin') && (
                <>
                    <button onClick={() => setFormOpen(!formOpen)}>Editar</button>
                    <button onClick={deleteHandler}>Borrar</button>
                    {formOpen && (
                        <StopForm newStop={false} biggestOrder={biggestOrder} stopData={stopData}/>
                    )}
                </>
            )}
        </div>
    )
}

export default StopCard