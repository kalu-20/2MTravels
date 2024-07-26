import { useState } from 'react'
import { RouterProvider } from "react-router-dom";

import router from './routes/Router.jsx'

import reactLogo from './assets/react.svg'

/*
+ endpoints para ciudades y lugares (CREARLES CONTEXTO)
- crear los contextos
- trabajar en los llamados de la api
- fetchQuery
- estilos
 */

function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
