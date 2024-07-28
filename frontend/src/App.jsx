import reactLogo from './assets/react.svg'

import {useEffect, useState} from 'react'
import { RouterProvider } from "react-router-dom";

import router from './routes/Router.jsx'

import DataContext from "./contexts/DataContext.jsx";


function App() {

    const [cities, setCities] = useState([]);
    const [places, setPlaces] = useState([]);
    const [travels, setTravels] = useState([]);

    useEffect(() => {
        const getCities = async () => {
            const res = await fetch('http://localhost:3000/cities',{
                method: 'GET'
            })

            const response = await res.json()
            if (response.success) {
                setCities(response.data)
            }
        }
        getCities()

        const getPlaces = async () => {
            const res = await fetch('http://localhost:3000/places',{
                method: 'GET'
            })

            const response = await res.json()
            if (response.success) {
                setPlaces(response.data)
            }
        }
        getPlaces()

        const getTravels = async () => {
            const res = await fetch('http://localhost:3000/travels', {
                method: 'GET'
            })

            const response = await res.json();
            if (response.success) {
                setTravels(response.data)
            }
        }
        getTravels()
    }, []);

    return (
        <>
            <DataContext.Provider value={{ cities, places, travels }}>
            <RouterProvider router={router} />
            </DataContext.Provider>
        </>
    )
}

export default App
