import {useContext, useState} from "react";
import {ProfileContext, ProfileProvider} from "../contexts/ProfileContext.jsx";
import DataContext from "../contexts/DataContext.jsx";
import ProfileForm from "../components/ProfileForm.jsx";
import {useNavigate} from "react-router-dom";
import RegisterForm from "../components/RegisterForm.jsx";

function Profile () {
    const [profileFormOpen, setProfileFormOpen] = useState(false);
    const [userFormOpen, setUserFormOpen] = useState(false)
    const { state } = useContext(ProfileContext);
    const { cities } = useContext(DataContext)

    const navigate = useNavigate();

    const deleteHandler = async (e) => {
        e.preventDefault();

        if (!confirm('¿Desea borrar la cuenta? Es una accion irreversible.')) {
            return;
        }

        try {
            const res = await fetch(`http://localhost:3000/users/delete/${state.profile.id}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${1}`,
                },
                body: JSON.stringify({
                    profileId: state.profile.profileId
                })
            })
            const response = await res.json();

            if (response.success) {
                alert('Cuenta borrada exitosamente.')
                navigate('/sign-up')
            }
            else {
                throw new Error(response.error)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

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

                    <button onClick={() => {
                        setProfileFormOpen(!profileFormOpen)
                    }}>Editar Perfil
                    </button>
                    {profileFormOpen ? (
                        <ProfileForm newProfile={false}/>
                    ) : (
                        ''
                    )}
                </>
            ) : (
                <>
                    <button onClick={() => {
                        setProfileFormOpen(!profileFormOpen)
                    }}>Crear Perfil
                    </button>
                    {profileFormOpen ? (
                        <ProfileForm newProfile={true}/>
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
            <button onClick={() => setUserFormOpen(!userFormOpen)}>Editar Cuenta</button>
            {userFormOpen ? (
                <RegisterForm editingUser={true}/>
            ) : ('')}

            <button onClick={deleteHandler}>Borrar Usuario</button>
        </>
    )
}

export default Profile;