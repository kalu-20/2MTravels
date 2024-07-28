import PlaceCard from "../components/PlaceCard.jsx";
import {useContext} from "react";
import DataContext from "../contexts/DataContext.jsx";

function Museum () {

    const { cities, places } = useContext(DataContext);

    return (
        <>
            <h2>Museos y Artesanías</h2>
            <div className="festivals-container">
                {places
                    .filter(pl => pl.category === 'Museo' || pl.category === 'Artesania')
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

export default Museum;