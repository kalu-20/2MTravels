import {useContext} from "react";
import {TravelContext} from "../contexts/TravelContext.jsx";
import {Link} from "react-router-dom";

function TravelCard ({ travel }) {

    const { setTravel } = useContext(TravelContext);

    return (
        <div className="travel-card" style={{border: "2px gray solid"}}>
            <h4>
                <Link to={`/travels/${travel.travel_id}`} onClick={() => setTravel(travel)}>
                    {travel.name}
                </Link>
            </h4>
            <p>
                Fecha inicio: {travel.start_dt}
            </p>
            <p>
                Fecha Fin: {travel.end_dt}
            </p>
            <b>
                Solo por ${travel.cost}
            </b>
        </div>
    )
}

export default TravelCard;