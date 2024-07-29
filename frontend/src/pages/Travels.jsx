import {useContext, useState} from "react";
import TravelCard from "../components/TravelCard.jsx";
import DataContext from "../contexts/DataContext.jsx";
import TravelForm from "../components/TravelForm.jsx";
import {ProfileContext} from "../contexts/ProfileContext.jsx";
import {Container, Grid} from "@mui/material";

function Travels () {
    const { state } = useContext(ProfileContext)
    const { travels } = useContext(DataContext);
    const [travelFormOpen, setTravelFormOpen] = useState(false);

    return (
        <Container width="md" maxWidth="lg">
            <h2>Viaja por Argentina con <i>TravelsARG</i></h2>

            <h3>Viajes disponibles</h3>

            {(state.isAuthenticated && state.profile.role === 'admin') ? (
                <button onClick={() => setTravelFormOpen(!travelFormOpen)}>Crear Nuevo Viaje</button>
            ) : ''}
            {travelFormOpen ? (
                <TravelForm newTravel={true}/>
            ) : ('')}

            <Grid container spacing={4}>
                {travels.map(travel => {
                    return (
                        <TravelCard key={travel.travel_id} travel={travel} showPromo={false}/>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Travels;