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



function Sample1() {

    const [files, setFiles] = useState([pdf3, pdf4, pdf3, pdf4, pdf3, pdf4, pdf3, pdf4, pdf3, pdf4, pdf3, pdf4, pdf3, pdf4, pdf3, pdf4, pdf3, pdf4]);

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
                                <div className="col-md-2 mx-3 my-1" key={index}>
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