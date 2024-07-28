import {Link} from "react-router-dom";
import {useContext} from "react";
import {ProfileContext} from "../contexts/ProfileContext.jsx";

function Header() {
    const { state, dispatch } = useContext(ProfileContext);

    return (
        <header>
            <h1>Las 2M Travel</h1>
            <nav>
                <Link style={{margin: '20px'}} to="/">Home</Link>
                <Link style={{margin: '20px'}} to="/hostings">Hospedaje</Link>
                <Link style={{margin: '20px'}} to="/excursions">Excursiones</Link>
                <Link style={{margin: '20px'}} to="/promos">Promociones</Link>

                {state.isAuthenticated ? (
                    <>
                        <Link style={{margin: '20px'}} to="my-travels">Mis Viajes</Link>
                        <Link style={{margin: '20px'}} to="profile">Perfil</Link>
                        <button style={{margin: '20px'}} onClick={() => dispatch({ type: 'LOGOUT' })}>
                            Cerrar Sesión
                        </button>
                    </>
                ) : (
                    <>
                        <Link style={{margin: '20px'}} to="login">Ingresar</Link>
                        <Link style={{margin: '20px'}} to="sign-up">Registrarse</Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;