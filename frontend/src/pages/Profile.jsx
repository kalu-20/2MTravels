import {useContext, useState} from "react";
import {ProfileContext, ProfileProvider} from "../contexts/ProfileContext.jsx";
import DataContext from "../contexts/DataContext.jsx";
import ProfileForm from "../components/ProfileForm.jsx";

function Profile () {
    const [formOpen, setFormOpen] = useState(false);
    const { state } = useContext(ProfileContext);
    const { cities } = useContext(DataContext)

    return (
        <>
            {state.profile.name ? (
                <>
                    <h2>Perfil</h2>

                    <h3>Nombre</h3>
                    <p>
                        {state.profile.name}
                    </p>

                    <b>DNI</b>
                    <p>{state.profile.dni}</p>

                    <b>Número Telefónico</b>
                    <p>{state.profile.phone}</p>

                    <b>Ciudad de residencia</b>
                    <p>{cities.find(city => city.id === state.profile.cityId)?.name || ''}</p>

                    <input type="button" value="Editar"/>

                    <br/>
                </>
            ) : (
                <>
                    <button onClick={() => {setFormOpen(!formOpen)}}>Crear Perfil</button>
                    {formOpen ? (
                        <ProfileForm />
                    ) : (
                        ''
                    )}
                </>
            )}

            <h2>Usuario</h2>

            <h3>Correo</h3>
            <p>{state.profile.email}</p>

            {(state.profile.role === 'admin') ? (
                <>
                    <b>Rol</b>
                    <p>Administrador</p>
                </>
            ) : ''}

            <button style={{border: "2px red solid"}} onClick={() => alert("borrado user")}>
                Borrar Usuario
            </button>
        </>
    )
}

export default Profile;