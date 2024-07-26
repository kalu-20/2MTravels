import {useState} from "react";

function StopForm () {
    const [stopType, setStopType] = useState("place");

    const stopTypeHandler = () => {
        if (stopType === "place") {
            setStopType("city");
        }
        else {
            setStopType("place");
        }
    }

    return (
        <>
            <form>
                <label htmlFor="days-input">Dias de viaje</label>
                <input id="days-input" type="number" />

                <label htmlFor="location-input">Ciudad/Lugar</label>
                <input id="location-input" />
            </form>
        </>
    )
}

export default StopForm;