import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sampleOne">Exemple 1</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/signin">SignIn</Link>
                    </li>
                   
                </ul>
            </nav> */}
            {/* <Outlet /> */}
            {/* <header className="header" id="header">
                <nav className="nav container ">
                    <Link to="/" className="nav__logo">Fiibook</Link>

                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to='/dashboard' className="">
                                    Welcome 
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to='/sampleOne' className="">
                                    Exemple 1
                                </Link>
                            </li>

                            <li className="nav__item">
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </li>

                            
                        </ul>

                    </div>

                </nav>
            </header> <br /><br /> <br/> */}
            <>{ /* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div className="container-fluid">
                        { /* Navbar brand */}
                        <a className="navbar-brand" target="_blank" href="https://mdbootstrap.com/docs/standard/">
                            <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="16" alt="" loading="lazy" style={{ marginTop: "-3px" }} />
                        </a>
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarExample01">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sampleOne" rel="nofollow">Exemple 1</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about" rel="nofollow">About </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact" rel="nofollow">Contact</Link>
                                </li>
                               
                            </ul>

                            <ul className="navbar-nav d-flex flex-row">
                                { /* Icons */}
                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow" target="_blank">
                                        <i className="fab fa-youtube" />
                                    </a>
                                </li>
                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="https://www.facebook.com/mdbootstrap" rel="nofollow" target="_blank">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="https://twitter.com/MDBootstrap" rel="nofollow" target="_blank">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li className="nav-item me-3 me-lg-0">
                                    <a className="nav-link" href="https://github.com/mdbootstrap/mdb-ui-kit" rel="nofollow" target="_blank">
                                        <i className="fab fa-github" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                { /* Navbar */}</>  

        </>
    )
};

export default Navbar;