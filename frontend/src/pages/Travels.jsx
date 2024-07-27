import {useEffect, useState} from "react";
import TravelCard from "../components/TravelCard.jsx";

function Travels () {

    const [travels, setTravels] = useState([]);

    useEffect(() => {
        const getTravels = async () => {
            const res = await fetch('http://localhost:3000/travels', {
                method: 'GET'
            })

            const response = await res.json();
            if (response.success) {
                setTravels(response.data)
            }
        }

        getTravels()
    }, []);

    return (
        <>
            <h2>Viaja por Argentina con <i>TravelsARG</i></h2>

            <h3>Viajes disponibles</h3>
            <div className="travels-container">
                {
                    travels.map(travel => {
                        return (
                            <TravelCard key={travel.travel_id} travel={travel} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Travels;