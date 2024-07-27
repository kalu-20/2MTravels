import {createBrowserRouter, Outlet} from "react-router-dom";
import {TravelProvider} from "../contexts/TravelContext.jsx";
import Layout from "./Layout.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Home from "../pages/Home.jsx";
import Profile from "../pages/Profile.jsx";
import Travels from "../pages/Travels.jsx";
import About from "../pages/About.jsx";
import Travel from "../pages/Travel.jsx";
import NotFound from "../pages/NotFound.jsx";
import MyTravels from "../pages/MyTravels.jsx";
import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from "../components/RegisterForm.jsx";


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/profile',
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                )
            },
            {
                path: '/my-travels',
                element: (
                    <ProtectedRoute>
                        <MyTravels />
                    </ProtectedRoute>
                )
            },
            {
                element: (
                    <TravelProvider>
                        <Outlet />
                    </TravelProvider>
                ),
                children: [
                    {
                        path: '/travels',
                        element: <Travels />
                    },
                    {
                        path: '/travels/:id',
                        element: <Travel />
                    },
                ]
            },
            {
                path: '/login',
                element: <LoginForm />
            },
            {
                path: '/sign-up',
                element: <RegisterForm />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])

export default router;