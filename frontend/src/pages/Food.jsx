import PlaceCard from "../components/PlaceCard.jsx";
import {useContext} from "react";
import DataContext from "../contexts/DataContext.jsx";

function Food () {

    const { places, cities } = useContext(DataContext)

    return (
        <>
            <h2>Comedores y Comidas Regionales</h2>
            <div className="festivals-container">
                {places
                    .filter(pl => pl.category === 'Comedor' || pl.category === 'Regional')
                    .map(place => {
                        const cityName = cities.find(city => city.id === place.cities_id).name
                        return (
                            <PlaceCard key={place.id} place={place} cityName={cityName} />
                        )
                    })}
            </div>
        </>
    )
}

export default Food;