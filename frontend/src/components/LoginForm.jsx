import {useContext, useState} from "react";
import { ProfileContext } from "../contexts/ProfileContext.jsx";
import {Avatar, Box, Button, Container, CssBaseline, TextField} from "@mui/material";

function LoginForm () {

    const [email, setEmail] = useState("");
    const [passw, setPassw] = useState("");

    const { dispatch } = useContext(ProfileContext);

    const formHandler = async (e) => {
        e.preventDefault();

        try {

            const userRes = await fetch('http://localhost:3000/users/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password: passw
                })
            })
            const userResponse = await userRes.json();
            if (!userResponse.success) {
                throw new Error(userResponse.error);
            }

            const token = userResponse.accessToken;

            const profile = {
                id: userResponse.data.id,
                email: userResponse.data.email,
                role: userResponse.data.type,
            }

            dispatch({ type: 'LOGIN', token });
            dispatch({ type: 'PROFILE', profile });

            const profileRes = await fetch('http://localhost:3000/profiles', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    email,
                })
            })
            const profileResponse = await profileRes.json();
            if (!profileResponse.success) {
                throw new Error(profileResponse.error);
            }
            if (profileResponse.data.length) {
                const { id, name, dni, phone, cities_id } = profileResponse.data[0];

                dispatch({
                    type: 'PROFILE',
                    profile: {
                        profileId: id,
                        name,
                        dni,
                        phone,
                        cityId: cities_id,
                    },
                })
            }

            alert('Inicio de Sesión exitoso.')
        }
        catch (err) {
            console.log(err.message)
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <form onSubmit={formHandler}>
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <h3>Iniciar Sesión</h3>
                    <Avatar sx={{ m: 1, bgcolor: "primary.main" }}></Avatar>

                    <TextField
                        margin="normal"
                        required
                        id="email-input"
                        fullWidth
                        label="Correo Electrónico"
                        autoFocus
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />

                    <TextField
                        margin="normal"
                        required
                        id="passw-input"
                        fullWidth
                        label="Contraseña"
                        autoFocus
                        type="password"
                        onChange={(e) => {
                            setPassw(e.target.value);
                        }}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Iniciar Sesión
                    </Button>
                </Box>
            </form>
        </Container>
    )
}

export default LoginForm;