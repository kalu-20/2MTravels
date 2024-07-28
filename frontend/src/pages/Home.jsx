import {Link} from "react-router-dom";

function Home () {
    return (
        <>
            <nav>
                <Link style={{margin: '20px'}} to="travels">Viajes y Circuitos</Link>
                <Link style={{margin: '20px'}} to="festivals">Fiestas y Festivales</Link>
                <Link style={{margin: '20px'}} to="museums">Museos y Artesanías</Link>
                <Link style={{margin: '20px'}} to="foods">Comedores</Link>
            </nav>

            <h2>¡Con <i>Las 2M Travel</i> podrás vivir grandes experiencias!</h2>
            <p style={{border: "2px gray solid"}}>
                IMAGEN IMAGEN IMAGEN
            </p>

            <h2>Quienes Somos</h2>
            <p>
                Con nuestra trayectoria, te ayudamos a armar tu viaje y cuidar cada detalle para que tu única
                preocupación sea sacar fotos para registrar cada momento de tu experiencia.
            </p>
            <p>
                Ven a disfrutar de tus vacaciones, del resto nos ocupamos nosotros.
            </p>

            <h2>Nuestros Transportes</h2>
            <p style={{border: "2px gray solid"}}>
                imagen de 4x4 y un bus argentino ejej
            </p>
            <p>
                Poseemos minibuses y camionetas 4x4.
            </p>
        </>
    )
}

export default Home;