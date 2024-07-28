import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import DataContext from "../contexts/DataContext.jsx";
import PlaceCard from "../components/PlaceCard.jsx";

function Hosting () {
    const { places, cities } = useContext(DataContext);
    const [category, setCategory] = useState("Hotel");

    return (
        <>
            <nav>
                <input type='button' value="Hotel" style={{margin: '20px'}}
                       onClick={(e) => setCategory(e.target.value)}/>
                <input type='button' value="Hostal" style={{margin: '20px'}}
                       onClick={(e) => setCategory(e.target.value)}/>
                <input type='button' value="Camping" style={{margin: '20px'}}
                       onClick={(e) => setCategory(e.target.value)}/>
            </nav>


            <h2>Hospedajes y Hoteles - {category}</h2>
            <div className="hosting-container">
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

export default Hosting;