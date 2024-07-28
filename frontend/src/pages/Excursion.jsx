import {useContext, useEffect, useState} from "react";
import DataContext from "../contexts/DataContext.jsx";
import PlaceCard from "../components/PlaceCard.jsx";

function Excursion () {
    const { places, cities } = useContext(DataContext);
    const [category, setCategory] = useState("Senderismo");

    return (
        <>
            <nav>
                <input type='button' value="Senderismo" style={{margin: '20px'}}
                       onClick={(e) => setCategory(e.target.value)}/>
                <input type='button' value="Cabalgata" style={{margin: '20px'}}
                       onClick={(e) => setCategory(e.target.value)}/>
                <input type='button' value="Trakking" style={{margin: '20px'}}
                       onClick={(e) => setCategory(e.target.value)}/>
            </nav>

            <h2>Excursiones Particulares - {category}</h2>
            <div className="excursion-container">
                {places
                    .filter(pl => pl.category === category)
                    .map(place => {
                        const cityName = cities.find(city => city.id === place.cities_id).name
                        return (
                            <PlaceCard key={place.id} place={place} cityName={cityName} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Excursion;