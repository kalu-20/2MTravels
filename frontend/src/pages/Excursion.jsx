import {useContext, useEffect, useState} from "react";
import DataContext from "../contexts/DataContext.jsx";
import PlaceCard from "../components/PlaceCard.jsx";
import {Button, Toolbar} from "@mui/material";

const toolBarStyle = {
    backgroundColor: '#77b9f6',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row'
};

function Excursion () {
    const { places, cities } = useContext(DataContext);
    const [category, setCategory] = useState("Senderismo");

    return (
        <>
            <Toolbar sx={toolBarStyle}>
                <Button value="Senderimo" style={{color: '#060e35', textDecoration: 'none'}}
                        onClick={(e) => setCategory(e.target.value)}>
                    Senderismo
                </Button>
                <Button value="Cabalgata" style={{color: '#060e35', textDecoration: 'none'}}
                        onClick={(e) => setCategory(e.target.value)}>
                    Cabalgata
                </Button>
                <Button value="Trakking" style={{color: '#060e35', textDecoration: 'none'}}
                        onClick={(e) => setCategory(e.target.value)}>
                    Trakking
                </Button>
            </Toolbar>

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