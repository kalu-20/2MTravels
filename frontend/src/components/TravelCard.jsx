import {useContext} from "react";
import {TravelContext} from "../contexts/TravelContext.jsx";
import {Link} from "react-router-dom";
import {CardContent, CardMedia, Grid, Link as StyleLink, Typography} from "@mui/material";

function TravelCard ({ travel, showPromo }) {

    const { setTravel } = useContext(TravelContext);

    return (
        <Grid item xs={12} sm={6} md={4}>
            <CardContent style={{backgroundColor: '#77b9f6', borderRadius: '10px'}}>
                <Typography gutterBottom variant="h5" component="h2" >
                    <StyleLink component={Link} color='#060e35' to={`/travels/${travel.travel_id}`}
                               onClick={() => setTravel(travel)}>
                        {travel.name}
                    </StyleLink>
                </Typography>
                <Typography>Precio: ${travel.cost}</Typography>
                {(showPromo && travel.promo_id) && (
                    <Typography variant="h6">
                        ¡Descuento del {travel.discount}%
                        desde el {travel.start_tm} hasta {travel.end_tm}!
                    </Typography>
                )}
                <Typography>Inicia {travel.start_dt}</Typography>
                <Typography>Termina {travel.end_dt}</Typography>
            </CardContent>
        </Grid>
    )
}

/*

<CardMedia
                component='img'
                image={prod.Image}
                alt={prod.Title + " Image"}
                sx={{align: 'bottom'}}
            />
<div className="travel-card" style={{border: "2px gray solid"}}>
            <p>
                Fecha inicio: {travel.start_dt}
            </p>
            <p>
                Fecha Fin: {travel.end_dt}
            </p>

        </div>
 */

export default TravelCard;