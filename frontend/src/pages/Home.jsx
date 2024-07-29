import {Link} from "react-router-dom";
import {Toolbar, Link as StyleLink, MenuItem} from "@mui/material";

const toolBarStyle = {
    backgroundColor: '#77b9f6',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row'
};

function Home () {
    return (
        <>
            <Toolbar sx={toolBarStyle}>
                <MenuItem sx={{py: '6px', px: '12px'}}>
                    <Link style={{color: '#060e35', textDecoration: 'none'}} to="travels">Viajes y Circuitos</Link>
                </MenuItem>
                <MenuItem sx={{py: '6px', px: '12px'}}>
                    <Link style={{color: '#060e35', textDecoration: 'none'}} to="festivals">Fiestas y Festivales</Link>
                </MenuItem>
                <MenuItem sx={{py: '6px', px: '12px'}}>
                    <Link style={{color: '#060e35', textDecoration: 'none'}} to="museums">Museos y Artesanías</Link>
                </MenuItem>
                <MenuItem sx={{py: '6px', px: '12px'}}>
                    <Link style={{color: '#060e35', textDecoration: 'none'}} to="foods">Comedores</Link>
                </MenuItem>
            </Toolbar>

            <h2>¡Con <i>Las 2M Travel</i> podrás vivir grandes experiencias!</h2>
            <img src="../../src/assets/banner_argentina.jpg" alt="Bus de viaje"/>

            <h2>Quienes Somos</h2>
            <p>
                Con nuestra trayectoria, te ayudamos a armar tu viaje y cuidar cada detalle para que tu única
                preocupación sea sacar fotos para registrar cada momento de tu experiencia.
            </p>
            <p>
                Ven a disfrutar de tus vacaciones, del resto nos ocupamos nosotros.
            </p>

            <h2>Nuestros Transportes</h2>
            <img src="../../src/assets/bus_grande.jpg" alt="Bus de viaje"/>
            <img src="../../src/assets/auto_4x4.jpg" alt="Automovil 4 por 4"/>
            <p>
                Poseemos minibuses y camionetas 4x4.
            </p>
        </>
    )
}

export default Home;