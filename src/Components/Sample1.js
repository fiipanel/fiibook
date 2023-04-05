import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../style.css';
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import filePdf from '../pdf/sante.pdf';
import pdf1 from '../pdf/pdf1.pdf';
import pdf2 from '../pdf/pdf2.pdf';
import pdf3 from '../pdf/pdf3.pdf';
import pdf4 from '../pdf/pdf4.pdf';


import MyDocument from "./MyDocument";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const Page = React.forwardRef(({ pageNumber }, ref) => {

//     return (
//         <div ref={ref}>
//             <ReactPdfPage pageNumber={pageNumber} width={300} />
//         </div>
//     );
// });

// const PageCover = React.forwardRef((props, ref) => {
//     return (
//         <div className="page page-covre img-fluid" ref={ref}
//             data-density="hard" style={{ width: '100px' }} >
//             <div className="page-content img-fluid">
//                 <h2>{props.children}</h2>
//             </div>
//         </div>
//     );
// });



// pdf3, pdf4, filePdf

function Sample1() {

    const [files, setFiles] = useState([pdf3, pdf4,]);

    // const [page, setPage] = React.useState(0)
    // let flipBook = React.useRef();

    // const nextButtonClick = () => {
    //     flipBook.pageFlip().flipNext()
    // }
    // const prevButtonClick = () => {
    //     flipBook.pageFlip().flipPrev()
    // };


    return (
        <div className="container mt-5">

            <section className="text-center mt-4">
                <h4 className="mb-5 my-4 "><strong>Les livres </strong></h4>
                <div className="row">
                    {
                        files.map((file, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                        <MyDocument
                                            filePdf={file}
                                        />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    );
}

export default Sample1;