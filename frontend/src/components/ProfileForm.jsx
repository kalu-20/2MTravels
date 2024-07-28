import {useContext, useState} from "react";
import {ProfileContext} from "../contexts/ProfileContext.jsx";

function ProfileForm ({ newProfile }) {

    const { state, dispatch } = useContext(ProfileContext);

    const [name, setName] = useState(newProfile ? "" : state.profile.name);
    const [dni, setDni] = useState(newProfile ? "" : state.profile.dni);
    const [phone, setPhone] = useState(newProfile ? "" : state.profile.phone);
    const [city, setCity] = useState(newProfile ? "" : state.profile.cityId);

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
            const requestPath = newProfile ? 'create' : `edit/${state.profile.profileId}`;
            const requestMethod = newProfile ? 'POST' : 'PUT';

            const res = await fetch(`http://localhost:3000/profiles/${requestPath}`, {
                method: requestMethod,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${state.token}`,
                },
                body: JSON.stringify(profileBody)
            })
            const response = await res.json();

            if (response.success) {
                alert('Perfil guardado correctamente.')

                dispatch({
                    type: 'PROFILE',
                    profile: {
                        profileId: newProfile ? response.data.insertId : state.profile.profileId,
                        name,
                        dni,
                        phone,
                        cityId: Number(city),
                    }
                })
            }
            else {
                alert('Gestión de perfil fallida.')
                throw new Error(response.error)
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }

    return (
        <>
            <h3>{newProfile ? 'Crear' : 'Editar'} Perfil</h3>
            <form onSubmit={formHandler}>
                <label htmlFor="name-input">Nombre</label>
                <input id="name-input" type="text" value={name} onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="dni-input">DNI</label>
                <input id="dni-input" type="text" value={dni} onChange={(e) => setDni(e.target.value)}/>

                <label htmlFor="phone-input">Número Telefónico</label>
                <input id="phone-input" type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>

                <label htmlFor="city-input">Ciudad</label>
                <input id="city-input" type="text" value={city} onChange={(e) => setCity(e.target.value)}/>

                <button type="submit">{newProfile ? 'Crear' : 'Editar'}</button>
            </form>
        </>
    )
}

export default ProfileForm;