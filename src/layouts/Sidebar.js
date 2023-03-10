import user1 from "../img/user1.png";


const Sidebar = () => {
    return (
        <>
            { /* sidebar left start */}
            <div className="sidebar sidebar-left">
                <div className="profile-link">
                    <a  className="media">
                        <div className="w-auto h-100">
                            <figure className="avatar avatar-40"><img src={user1} alt="" /> </figure>
                        </div>
                        <div className="media-body">
                            <h5>John Doe <span className="status-online bg-success" /></h5>
                            <p>India</p>
                        </div>
                    </a>
                </div>
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a href="" className="item-link item-content dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="item-title">
                                    <i className="material-icons">menu</i> Menu
                                </div>
                            </a>
                            <div className="dropdown-menu">
                                <a href="" className="sidebar-close  dropdown-item">
                                    Menu Overlay (This)
                                </a>
                                <a href="#" className="sidebar-close dropdown-item menu-right">
                                    Push Content
                                </a>
                                <a href="" className="sidebar-close dropdown-item popup-open" data-toggle="modal" data-target="#fullscreenmenu">
                                    Full Screen
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="index.html" className="sidebar-close">
                                <div className="item-title">
                                    <i className="material-icons">home</i> Home
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="result.html" className="sidebar-close">
                                <div className="item-title">
                                    <i className="material-icons">search</i> Result
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="news.html" className="sidebar-close">
                                <div className="item-title">
                                    <i className="material-icons">filter_none</i> News
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="user-profile.html" className="sidebar-close">
                                <div className="item-title">
                                    <i className="material-icons">person</i> User Profile
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="aboutus.html" className="sidebar-close">
                                <div className="item-title">
                                    <i className="material-icons">domain</i> About
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="colorscheme.html" className="sidebar-close">
                                <div className="item-title">
                                    <i className="material-icons">format_color_fill</i> Color Scheme
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="404.html" className="sidebar-close">
                                <div className="item-title">
                                    <i className="material-icons">warning</i> Default Route (404)
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="profile-link text-center">
                    <a href="login.html" className="btn btn-outline-white btn-block px-3">Logout</a>
                </div>
            </div>
            { /* sidebar left ends */}

            { /* sidebar right start */}
            <div className="sidebar sidebar-right">
                <header className="row m-0 fixed-header no-shadow">
                    <div className="left">
                        <a href="" className="menu-left-close"><i className="material-icons">keyboard_backspace</i></a>
                    </div>
                    <div className="col center">
                        <a href="" className="logo">Best Rated</a>
                    </div>
                </header>
                <div className="page-content text-white ">
                    <div className="row mx-0 mt-3">
                        <div className="col">
                            <div className="card bg-none border-0 shadow-none">
                                <div className="card-body userlist_large">
                                    <div className="media">
                                        <figure className="avatar avatar-120 rounded-circle my-2">
                                            <img src={user1} alt="user image" />
                                        </figure>
                                        <div className="media-body">
                                            <h4 className="mt-0 text-white">Max Johnsons</h4>
                                            <p className="text-white">VP, Maxartkiller Co. Ltd., India</p>
                                            <h5 className="text-warning my-2">
                                                <i className="material-icons">star</i>
                                                <i className="material-icons">star</i>
                                                <i className="material-icons">star</i>
                                                <i className="material-icons">star</i>

                                            </h5>
                                            <div className="mb-0">MobileUX is HTML template based on Bootstrap 4.1 framework. This html template can be used in various business domains like Manufacturing, inventory, IT, administration etc.</div>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { /* sidebar right ends */}
        </>
    );
}

export default Sidebar;
