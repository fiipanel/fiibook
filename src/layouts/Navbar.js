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
                        <Link to="/sample3">Exemple 3</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link to="/signin">SignIn</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />

            {/* <><form className="searchcontrol">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button type="button" className="input-group-text close-search"><i className="material-icons">keyboard_backspace</i></button>
                    </div>
                    <input type="email" className="form-control border-0" placeholder="Search..." aria-label="Username" />
                </div>
            </form>
                <header className="row m-0 fixed-header no-shadow">
                    <div className="left">
                        <a href="javascript:void(0)" className="menu-left"><i className="material-icons">menu</i></a>
                    </div>
                    <div className="col center">
                        <a href="" className="logo">
                            <figure><img src="img/logo.png" alt="" /></figure> MobileUX</a>
                    </div>
                    <div className="right">
                        <a href="javascript:void(0)" className="searchbtn"><i className="material-icons">search</i></a>
                        <a href="javascript:void(0)" className="menu-right"><i className="material-icons">person</i></a>
                    </div>
                </header></> */}
        </>
    )
};

export default Navbar;