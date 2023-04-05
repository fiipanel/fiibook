import '../asset/css/flipbook.style.css';

import { Link } from 'react-router-dom';
import '../asset/css/style.css';
import thumb1 from '../asset/images/book2/thumb1.jpg';
import self_wood from '../asset/images/shelf_wood.png';
import shelf_glass from '../asset/images/shelf_glass.png';
import shelf_metal from '../asset/images/shelf_metal.png';
// import filePdf from '../sante.pdf';

import book2 from '../asset/images/book2/page5.jpg';

import $ from 'jquery';
import '../asset/flipBook';


function Sample2() {
    const open = () => {
        
        $(".book-1").flipBook({
            // pdfUrl: filePdf,
            pages: [
                { src: book2 , thumb: thumb1, title: "Cover" },
                // {src:"../asset/images/book2/page1.jpg", thumb:"../asset/images/book2/thumb1.jpg", title:"Cover"},
                // {src:"../asset/images/book2/page2.jpg", thumb:"../asset/images/book2/thumb2.jpg", title:"Page two"},
                // {src:"../asset/images/book2/page3.jpg", thumb:"../asset/images/book2/thumb3.jpg", title:"Page three"},
                // {src:"../asset/images/book2/page4.jpg", thumb:"../asset/images/book2/thumb4.jpg", title:""},
                // {src:"../asset/images/book2/page5.jpg", thumb:"../asset/images/book2/thumb5.jpg", title:"Page five"},
                // {src:"../asset/images/book2/page6.jpg", thumb:"../asset/images/book2/thumb6.jpg", title:"Page six"},
                // {src:"../asset/images/book2/page7.jpg", thumb:"../asset/images/book2/thumb7.jpg", title:"Page seven"},
                // {src:"../asset/images/book2/page8.jpg", thumb:"../asset/images/book2/thumb8.jpg", title:"Last"}
            ],
            // lightBox:true
        });
    }
    return (

        <div className="container mt-5">
            
            <div className="bookshelf mt-5">
                <div className="covers">
                    <div className="thumb book-1" onClick={() => open() }><img src={thumb1} alt="" /></div>
                    <div className="thumb book-2"><img src={thumb1} alt="" /></div>
                    <div className="thumb book-3"><img src={thumb1} alt="" /></div>
                    <div className="thumb book-4"><img src={thumb1} alt="" /></div>
                    <div className="thumb book-4"><img src={thumb1} alt="" /></div>
                </div>
                <img className="shelf-img" src={self_wood} alt="" />
            </div>

            <div className="bookshelf">
                <div className="covers">
                    <div className="thumb book-1"><img src={thumb1} alt="" /></div>
                    <div className="thumb book-2"><img src={thumb1} alt="" /></div>
                    <div className="thumb book-3"><img src={thumb1} alt="" /></div>
                </div>
                <img className="shelf-img" src={shelf_glass} alt='' />
            </div>

            <div className="bookshelf">
                <div className="covers">
                    <div className="thumb book-1"><img src={thumb1} alt="" /></div>
                    <div className="thumb book-2"><img src={thumb1} alt="" /></div>
                    <div className="thumb book-3"><img src={thumb1} alt="" /></div>
                    <div className="thumb book-4"><img src={thumb1} alt="" /></div>
                </div>
                <img className="shelf-img" src={shelf_metal} alt="" />
            </div>

           
        </div>
    );
}

export default Sample2;