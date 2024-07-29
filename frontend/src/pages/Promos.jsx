import {useContext} from "react";
import DataContext from "../contexts/DataContext.jsx";
import TravelCard from "../components/TravelCard.jsx";

function Promos () {

    const { travels } = useContext(DataContext)

    return (
        <>
            <h2>Promociones de Viajes y Circuitos</h2>
            <div className="promos-container">
                {travels
                    .filter(tr => tr.promo_id)
                    .map(travel => {
                        return (
                            <TravelCard key={travel.promo_id} travel={travel} showPromo={true} />
                        )
                    })}
            </div>
        </>
    )
}

export default Promos