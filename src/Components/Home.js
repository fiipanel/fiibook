import { Link } from 'react-router-dom'
import user1 from "../img/user1.png";
import news1 from "../img/news1.jpg";
import news2 from "../img/news2.jpg";
import news3 from "../img/news3.jpg";
import background from "../img/background.png";


export default function Home() {

    return (
        <>
            <h1>Home Page !!!</h1>

            {/* <form className="searchcontrol">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button type="button" className="input-group-text close-search"><i className="material-icons">keyboard_backspace</i></button>
                    </div>
                    <input type="text" className="form-control border-0" placeholder="Search..." aria-label="Username" />
                </div>
            </form>
            <header className="row m-0 fixed-header no-shadow">
                <div className="left">
                    <a href="" className="menu-left"><i className="material-icons">menu</i></a>
                </div>
                <div className="col center  text-center">
                    <a href="" className="logo">Categories</a>
                </div>
                <div className="right">
                    <a href="" className="searchbtn"><i className="material-icons">search</i></a>
                    <a href="" className="menu-right"><i className="material-icons">person</i></a>
                </div>
            </header>
            <div className="page-content triangle-background">
                <div className="content-sticky-footer">
                    <div className="row m-0">
                        <div className="col-12 my-3">
                            <figure className="categories-banner">
                                <img src={news1} alt="" />
                                <figcaption>Music</figcaption>
                            </figure>
                        </div>
                    </div>
                    <h2 className="block-title color-dark">Result from Popular:</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <a href="#" className="media row">
                                <div className="h-100 position-relative col-4 pr-0">
                                    <button className="like-heart color-red m-0">
                                        <i className="icon material-icons">favorite_border</i>
                                    </button>
                                    <figure className="square-60h"><img src={news1} alt="" /></figure>
                                </div>
                                <div className="media-body col-8">
                                    <p className="text-truncate w-100">India - Ananya Singh , Chief Editor</p>
                                    <h5 className="text-truncate w-100">Best song and best templates ever wins the heart</h5>
                                    <p><span>28-12-2018</span></p>
                                </div>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#" className="media row">
                                <div className="h-100 position-relative col-4 pr-0">
                                    <button className="like-heart color-red m-0">
                                        <i className="icon material-icons">favorite</i>
                                    </button>
                                    <figure className="square-60h"><img src={news2} alt="" /></figure>
                                </div>
                                <div className="media-body col-8">
                                    <p className="text-truncate w-100">India - Ananya Singh , Chief Editor</p>
                                    <h5 className="text-truncate w-100">Best song and best templates ever wins the heart</h5>
                                    <p><span>28-12-2018</span></p>
                                </div>
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#" className="media row">
                                <div className="h-100 position-relative col-4 pr-0">
                                    <button className="like-heart color-red m-0">
                                        <i className="icon material-icons">favorite_border</i>
                                    </button>
                                    <figure className="square-60h"><img src={news3} alt="" /></figure>
                                </div>
                                <div className="media-body col-8">
                                    <p className="text-truncate w-100">India - Ananya Singh , Chief Editor</p>
                                    <h5 className="text-truncate w-100">Best song and best templates ever wins the heart</h5>
                                    <p><span>28-12-2018</span></p>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <h2 className="block-title color-dark">Results from Editor's Choice</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div className="media">
                                <div className="w-auto h-100 mr-3 position-relative">
                                    <button className="like-heart color-red m-0">
                                        <i className="icon material-icons">favorite_border</i>
                                    </button>
                                    <figure className="square-120x180"><img src={news1} alt="" /></figure>
                                </div>
                                <div className="media-body">
                                    <p>India - Ananya Singh , Chief Editor</p>
                                    <h5>Best song and best templates ever</h5>
                                    <p><span>28-12-2018</span></p>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media">
                                <div className="w-auto h-100 mr-3 position-relative">
                                    <button className="like-heart color-red m-0">
                                        <i className="icon material-icons">favorite</i>
                                    </button>
                                    <figure className="square-120x180"><img src={news2} alt="" /></figure>
                                </div>
                                <div className="media-body">
                                    <p>India - Ananya Singh , Chief Editor</p>
                                    <h5>Best song and best templates ever</h5>
                                    <p><span>28-12-2018</span></p>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="media">
                                <div className="w-auto h-100 mr-3 position-relative">
                                    <button className="like-heart color-red m-0">
                                        <i className="icon material-icons">favorite_border</i>
                                    </button>
                                    <figure className="square-120x180"><img src={news3} alt="" /></figure>
                                </div>
                                <div className="media-body">
                                    <p>India - Ananya Singh , Chief Editor</p>
                                    <h5>Best song and best templates ever</h5>
                                    <p><span>28-12-2018</span></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <br />
                </div>
                <div className="footer-wrapper">
                    <div className="footer">
                        <div className="row mx-0">
                            <div className="col">
                                MobileUX
                            </div>
                            <div className="col-7 text-right">
                                <a href="" className="social"><img src="img/facebook.png" alt="" /></a>
                                <a href="" className="social"><img src="img/googleplus.png" alt="" /></a>
                                <a href="" className="social"><img src="img/linkedin.png" alt="" /></a>
                                <a href="" className="social"><img src="img/twitter.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer dark">
                        <div className="row mx-0">
                            <div className="col  text-center">
                                Copyright @2018, Maxartkiller
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
        
        
    );
}