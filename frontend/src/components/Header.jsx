import {Link} from "react-router-dom";
import {useContext} from "react";
import {ProfileContext} from "../contexts/ProfileContext.jsx";
import {AppBar, CssBaseline, GlobalStyles, Toolbar, Typography, Link as StyleLink} from "@mui/material";

import '../App.css'

const toolBarStyle = {
    backgroundColor: '#0e87ff',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
};

const buttonStyle = {
    my: 1,
    mx: 1.5,
};

function Header() {
    const { state, dispatch } = useContext(ProfileContext);

    return (
        <header>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar sx={toolBarStyle}>
                    <StyleLink sx={{ textDecoration: 'none', alignContent: 'center', display: 'flex' }} component={Link} to='/' variant="button">
                        <Typography variant="h6" color='white' fontSize={25} sx={{
                            ml: 2,
                            display: 'flex',
                            alignItems: 'center',
                            textTransform: 'none'
                        }} ><i>Las 2M Travel</i></Typography>
                    </StyleLink>
                    <nav>
                        <StyleLink component={Link} to="/" variant="button" color='secondary' sx={buttonStyle}>Home</StyleLink>
                        <StyleLink component={Link} to="/hostings" variant="button" color='secondary' sx={buttonStyle}>Hospedaje</StyleLink>
                        <StyleLink component={Link} to="/excursions" variant="button" color='secondary' sx={buttonStyle}>Excursiones</StyleLink>
                        <StyleLink component={Link} to="/promos" variant="button" color='secondary' sx={buttonStyle}>Promociones</StyleLink>
                        {state.isAuthenticated ? (
                            <>
                                <StyleLink component={Link} to="my-travels" variant="button" color='secondary' sx={buttonStyle}>Mis Viajes</StyleLink>
                                <StyleLink component={Link} to="profile" variant="button" color='primary' sx={buttonStyle}>Perfil</StyleLink>
                            </>
                        ) : (
                            <>
                                <StyleLink id='login-link' component={Link} to="/login" variant="button" sx={{
                                    ...buttonStyle,
                                    p: '8px',
                                    border: '2px solid black',
                                    borderRadius: '8px',
                                    color: 'black',
                                    textDecoration: 'none'
                                }}>
                                    Ingresar
                                </StyleLink>
                                <StyleLink component={Link} to="/sign-up" variant="button" color='secondary' sx={buttonStyle}>
                                    Registrarse
                                </StyleLink>
                            </>
                        )}
                    </nav>
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default Header;

/*
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
 */