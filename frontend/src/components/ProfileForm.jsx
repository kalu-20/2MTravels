import {useContext, useState} from "react";
import {ProfileContext} from "../contexts/ProfileContext.jsx";

function ProfileForm () {

    const [name, setName] = useState("");
    const [dni, setDni] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    const { state, dispatch } = useContext(ProfileContext);

    const formHandler = async (e) => {
        e.preventDefault();

        const profileBody = {
            name,
            dni,
            phone,
            cityId: city,
            userId: state.profile.id,
        }

        try {
            const res = await fetch('http://localhost:3000/profiles/create', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${state.token}`,
                },
                body: JSON.stringify(profileBody)
            })
            const response = await res.json();

            if (response.success) {
                alert('Perfil creado correctamente.')

                dispatch({
                    type: 'PROFILE',
                    profile: {
                        profileId: response.data.insertId,
                        name,
                        dni,
                        phone,
                        cityId: Number(city),
                    }
                })
            }
            else {
                alert('Creación de perfil fallida.')
                throw new Error(response.error)
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }

    return (
        <>
            <h3>Crear Perfil</h3>
            <form onSubmit={formHandler}>
                <label htmlFor="name-input">Nombre</label>
                <input id="name-input" type="text" onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="dni-input">DNI</label>
                <input id="dni-input" type="text" onChange={(e) => setDni(e.target.value)}/>

                <label htmlFor="phone-input">Número Telefónico</label>
                <input id="phone-input" type="text" onChange={(e) => setPhone(e.target.value)}/>

                <label htmlFor="city-input">Ciudad</label>
                <input id="city-input" type="text" onChange={(e) => setCity(e.target.value)}/>

                <button type="submit">Crear</button>
            </form>
        </>
    )
}

export default ProfileForm;