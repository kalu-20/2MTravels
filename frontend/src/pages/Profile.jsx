function Profile () {
    return (
        <>
            <h2>Perfil</h2>

            <h3>Nombre</h3>
            <p>
                John Doe
            </p>

            <b>DNI</b>
            <p>545454545</p>

            <b>Número Telefónico</b>
            <p>545454545</p>

            <b>Ciudad de residencia</b>
            <p>Santiago del Estero</p>

            <input type="button" value="Editar"/>

            <br/>

            <h2>Usuario</h2>

            <h3>Correo</h3>
            <p>john.doe@correo.argentino</p>

            <b>Rol</b>
            <p>Administrador</p>
                {/* ESTE DEBE SER OPCIONAL SOLO SI ES ADMIN MOSTRARLO */}

            <input type="button" value="Borrar Usuario" style={{border: "2px red solid"}}/>
        </>
        // ESTE DEBE SER OPCIONAL SOLO SI TIENE EL PERFIL CREADO MOSTRARLO,
        // SINO MOSTRAR LA OPCION DE CREAR EL PERFIL
    )
}

export default Profile;