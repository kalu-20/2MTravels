import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import DataContext from "../contexts/DataContext.jsx";
import PlaceCard from "../components/PlaceCard.jsx";
import {Button, Input, MenuItem, Toolbar} from "@mui/material";

const toolBarStyle = {
    backgroundColor: '#77b9f6',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row'
};

function Hosting () {
    const { places, cities } = useContext(DataContext);
    const [category, setCategory] = useState("Hotel");

    return (
        <>
            <Toolbar sx={toolBarStyle}>
                <Button value="Hotel" style={{color: '#060e35', textDecoration: 'none'}}
                        onClick={(e) => setCategory(e.target.value)}>Hoteles</Button>
                <Button value="Hostel" style={{color: '#060e35', textDecoration: 'none'}}
                        onClick={(e) => setCategory(e.target.value)}>Hostales</Button>
                <Button value="Camping" style={{color: '#060e35', textDecoration: 'none'}}
                        onClick={(e) => setCategory(e.target.value)}>De Camping</Button>
            </Toolbar>

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