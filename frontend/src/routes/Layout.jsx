import {Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { ProfileProvider } from "../contexts/ProfileContext.jsx";

function Layout() {

    return (
        <ProfileProvider>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </ProfileProvider>
    );
}

export default Layout;