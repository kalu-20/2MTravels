function RegisterForm () {
    return (
        <>
            <form onSubmit={() => alert("bien hecho meri jein")}>

                <label htmlFor="name-input">Nombre</label>
                <input id="name-input" type="text"/>

                <label htmlFor="dni-input">DNI</label>
                <input id="dni-input" type="text"/>

                <label htmlFor="phone-input">Número Telefónico</label>
                <input id="phone-input" type="text"/>

                <label htmlFor="city-input">Ciudad</label>
                <input id="city-input" type="text"/>


                <label htmlFor="login-input">Correo</label>
                <input id="login-input" type="text"/>

                <label htmlFor="passw-input">Contraseña</label>
                <input id="passw-input" type="text"/>

                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}

export default RegisterForm;