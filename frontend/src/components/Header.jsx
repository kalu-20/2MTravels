import {Link} from "react-router-dom";
import {useContext} from "react";
import {ProfileContext} from "../contexts/ProfileContext.jsx";

function Header() {
    const { state, dispatch } = useContext(ProfileContext);

    return (
        <header>
            <h1>TravelsARG</h1>
            <nav>
                <Link style={{margin: '20px'}} to="/">Home</Link>

                <Link style={{margin: '20px'}} to="travels">Viajes</Link>
                <Link style={{margin: '20px'}} to="about">Quienes Somos</Link>

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