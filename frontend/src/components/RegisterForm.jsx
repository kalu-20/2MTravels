import {useState} from "react";
import {useNavigate} from "react-router-dom";

function RegisterForm () {

    const [email, setEmail] = useState("");
    const [passw, setPassw] = useState("");
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    const formHandler = async (e) => {
        e.preventDefault();

        const userBody = {
            email,
            password: passw,
            type: role,
        }

        try {
            const res = await fetch('http://localhost:3000/users/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userBody)
            })
            const response = await res.json();

            if (response.success) {
                alert('Creación de usuario exitosa, inicie sesión.')

                navigate('/login');
            }
            else {
                alert('Creación de usuario fallida.')
                throw new Error(response.error)
            }
        }
        catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
            <form onSubmit={formHandler}>
                <label htmlFor="login-input">Correo</label>
                <input id="login-input" type="text" onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="passw-input">Contraseña</label>
                <input id="passw-input" type="password" onChange={(e) => setPassw(e.target.value)}/>

                <label htmlFor="role-input">Tipo de Usuario</label>
                <input id="role-input" type="text" onChange={(e) => setRole(e.target.value)}/>

                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}

export default RegisterForm;