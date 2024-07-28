import {useContext, useEffect, useState} from "react";
import {ProfileContext} from "../contexts/ProfileContext.jsx";

function MyTravels () {

    const [myTravels, setMyTravels] = useState([]);

    const { state } = useContext(ProfileContext);

    useEffect(() => {
        const getMyTravels = async () => {
            const res = await fetch('http://localhost:3000/travels/passenger', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${state.token}`,
                },
                body: JSON.stringify({
                    profileId: state.profile.profileId,
                })
            })
            const response = await res.json();

            if (response.success) {
                setMyTravels(response.data)
            }
        }

        getMyTravels();
    }, []);
    return (
        <>
            <h2>Mis Viajes</h2>

            <div className="my-travels-container">
                { myTravels.map(travel => {
                    return (
                        <div key={travel.travel_id} className="my-travel-card">
                            <h3>{travel.name}</h3>

                            <p>Fechas: {travel.start_dt} / {travel.end_dt}</p>

                            <p>Precio: ${travel.cost}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default MyTravels;