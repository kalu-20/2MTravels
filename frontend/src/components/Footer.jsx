import {Link} from "react-router-dom";

function Footer() {
    return (
        <header>
            <navbar>
                <a href="#">Home</a>
                <a href="#">About</a>
                <Link to="about">Terms</Link>
            </navbar>
        </header>
    );
}

export default Footer;