const myTravels = [
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
]

function MyTravels () {
    return (
        <>
            <h2>Mis Viajes</h2>

            <div className="my-travels-container">
                { myTravels.map(travel => {
                    return (
                        <div className="my-travel-card">
                            <h3>{travel.name}</h3>

                            <p>{travel.startDate} - {travel.endDate}</p>

                            <p>Precio: ${travel.cost}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default MyTravels;