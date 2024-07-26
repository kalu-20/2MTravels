function LoginForm () {
    return (
        <>
            <form onSubmit={() => alert("bien hecho piter")}>
                <label htmlFor="login-input">Correo</label>
                <input id="login-input" type="text"/>

                <label htmlFor="passw-input">Contraseña</label>
                <input id="passw-input" type="text"/>

                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}

export default LoginForm;