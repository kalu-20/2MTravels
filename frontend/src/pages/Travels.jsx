import {useState} from "react";

const defTravels = [
    {
        id: 1,
        name: "Viaje a Rosario de fin de año",
        startDate: "07/08/2024",
        endDate: "08/08/2024",
        cost: 1000.99,
    },
    {
        id: 2,
        name: "Viaje a Rosario de fin de año",
        startDate: "07/08/2024",
        endDate: "08/08/2024",
        cost: 1002.99,
    },
    {
        id: 3,
        name: "Viaje a Rosario de fin de año",
        startDate: "07/08/2024",
        endDate: "08/08/2024",
        cost: 1004.99,
    },
    {
        id: 4,
        name: "Viaje a Rosario de fin de año",
        startDate: "07/08/2024",
        endDate: "08/08/2024",
        cost: 1003.99,
    }
]

function Travels () {

    const [travels, setTravels] = useState(defTravels);

    return (
        <>
            <h2>Viaja por Argentina con <i>TravelsARG</i></h2>

            <h3>Viajes disponibles</h3>
            <div className="travels-container">
                {
                    travels.map(travel => {
                        return (
                            <div key={travel.id} className="travel-card" style={{border: "2px gray solid"}}>
                                <h4>
                                    <a href={`/travels/${travel.id}`}>{travel.name}</a>
                                </h4>
                                <p>
                                    Fecha inicio: {travel.startDate}
                                </p>
                                <p>
                                    Fecha Fin: {travel.endDate}
                                </p>
                                <b>
                                    Solo por ${travel.cost}
                                </b>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Travels;