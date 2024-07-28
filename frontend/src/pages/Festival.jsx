import {useContext} from "react";
import DataContext from "../contexts/DataContext.jsx";
import PlaceCard from "../components/PlaceCard.jsx";

function Festival () {

    const { places, cities } = useContext(DataContext)

    return (
        <>
            <h2>Festivales y Fiestas</h2>
            <div className="festivals-container">
                {places
                    .filter(pl => pl.category === 'Festival' || pl.category === 'Fiesta')
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

export default Festival;