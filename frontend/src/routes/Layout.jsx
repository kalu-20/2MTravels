import {Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Layout() {
    return (
        <>{/* aqui va el ProfileContext */}
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;