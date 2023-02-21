import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sampleOne">Exemple 1</Link>
                    </li>
                    <li>
                        <Link to="/sampleTwo">Exemple 2</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Navbar;