import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>TravelsARG</h1>
            <navbar>
                <Link style={{margin: '20px'}} to="/">Home</Link>

                <a style={{margin: '20px'}} href="/profile">Perfil</a>
                <a style={{margin: '20px'}} href="/my-travels">Mis Viajes</a>
                {/* ESTA ES OPCIONAL, MOSTRAR PERFIL SI ESTA LOGEADO,
                SINO MOSTRAR LOGIN Y SIGN-UP */}
                <a style={{margin: '20px'}} href="/login">Ingresar</a>
                <a style={{margin: '20px'}} href="/sign-up">Registrarse</a>

                <a style={{margin: '20px'}} href="/travels">Viajes</a>
                <Link style={{margin: '20px'}} to="about">Quienes Somos</Link>
            </navbar>
        </header>
    );
}

export default Header;