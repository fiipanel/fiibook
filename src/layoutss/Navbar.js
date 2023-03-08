import { Outlet, Link } from "react-router-dom";

const  Navbar = () => {
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

            {/* <Outlet /> */}
           
            {/* <div className="modal fade popup-fullmenu" id="fullscreenmenu" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content fullscreen-menu">
                        <div className="modal-header">
                            <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <a href="/profile/" className="block user-fullmenu popup-close">
                                <figure>
                                    <img src="img/user1.png" alt="" />
                                </figure>
                                <div className="media-content">
                                    <h6>John Doe<br /><small>India</small></h6>
                                </div>
                            </a>
                            <br />
                            <div className="row mx-0">
                                <div className="col">
                                    <div className="menulist">
                                        <ul>
                                            <li>
                                                <a href="index.html" className="popup-close">
                                                    <div className="item-title">
                                                        <i className="icon material-icons">home</i> Home
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="projects.html" className="popup-close">
                                                    <div className="item-title">
                                                        <i className="icon material-icons">search</i> Result
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="news.html" className="popup-close">
                                                    <div className="item-title">
                                                        <i className="icon material-icons md-only">filter_none</i> Details
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="user-profile.html" className="popup-close">
                                                    <div className="item-title">
                                                        <i className="icon material-icons md-only">person</i> Profile
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="aboutus.html" className="popup-close">
                                                    <div className="item-title">
                                                        <i className="icon material-icons md-only">domain</i> About
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row mx-0">
                                <div className="col">
                                    <a href="login.html" className="rounded btn btn-outline-white text-white popup-close">Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            { /* fullscreen menu ends */}
        </>
    )
};

export default Navbar;