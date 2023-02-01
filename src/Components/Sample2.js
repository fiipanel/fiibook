// import '../style.css';
import '../assets/css/flipbook.style.css';
// import '../assets/js/jquery-1.8.3.min.js';

import '../assets/css/style.css';
import flipBook from  '../assets/js/flipbook.min.js'
import thumb1 from '../assets/images/book2/thumb1.jpg';
import self_wood from '../assets/images/shelf_wood.png';
import shelf_glass from '../assets/images/shelf_glass.png';
import shelf_metal from '../assets/images/shelf_metal.png';
// import filePdf from '../sante.pdf';
import { Link } from 'react-router-dom';


function Sample2() {
   
    console.log(flipBook);

    return (

        <div className="App">
                        
            <div className="bookshelf">
                <div className="covers">
                    <div className="thumb book-1"><img src={thumb1}   alt=""/></div>
                    <div className="thumb book-2"><img src={thumb1}  alt=""/></div>
                    <div className="thumb book-3"><img src={thumb1}  alt=""/></div>
                    <div className="thumb book-4"><img src={thumb1}  alt=""/></div>
                    <div className="thumb book-4"><img src={thumb1}  alt=""/></div>
                </div>
                <img className="shelf-img" src={self_wood}  alt=""/>
            </div>

            <div className="bookshelf">
                <div className="covers">
                    <div className="thumb book-1"><img src={thumb1}  alt=""/></div>
                    <div className="thumb book-2"><img src={thumb1}  alt=""/></div>
                    <div className="thumb book-3"><img src={thumb1}  alt=""/></div>
                </div>
                <img className="shelf-img" src={shelf_glass} alt=''/>
            </div>

            <div className="bookshelf">
                <div className="covers">
                    <div className="thumb book-1"><img src={thumb1}  alt=""/></div>
                    <div className="thumb book-2"><img src={thumb1}  alt=""/></div>
                    <div className="thumb book-3"><img src={thumb1}  alt=""/></div>
                    <div className="thumb book-4"><img src={thumb1}  alt=""/></div>
                </div>
                <img className="shelf-img" src={shelf_metal} alt=""/>
            </div>

            <Link to="/">
                <span>Home</span>
            </Link>
        </div>
    );
}

export default Sample2;
