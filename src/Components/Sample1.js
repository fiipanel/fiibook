
import React from "react";
import { Link } from 'react-router-dom';
import '../style.css';
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import filePdf from '../sante.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Page = React.forwardRef(({ pageNumber }, ref) => {
    return (
        <div ref={ref}>
            <ReactPdfPage pageNumber={pageNumber} width={300} />
        </div>
    );
});

const PageCover = React.forwardRef((props, ref) => {
    return (
        <div className="page page-cover" ref={ref} data-density="hard" style={{ width: '300px' }}>
            <div className="page-content">
                <h2>{props.children}</h2>
            </div>
        </div>
    );
});

function Sample1() {
    const [page, setPage] = React.useState(0)
    let flipBook = React.useRef();
    console.log(flipBook)

    const nextButtonClick = () => {
        flipBook.pageFlip().flipNext()
    }
    const prevButtonClick = () => {
        flipBook.pageFlip().flipPrev()
    };

    return (
        <div className="App">
            <Link to="/">
                <span>Home</span>
            </Link>

            <Document file={filePdf}>
                <HTMLFlipBook
                    width={300}
                    height={424}
                    size="stretch"
                    minWidth={300}
                    maxWidth={300}
                    minHeight={424}
                    maxHeight={424}
                    maxShadowOpacity={0.7}
                    showCover={true}
                    mobileScrollSupport={true}
                    className="demo-book"
                    onFlip={setPage}
                    ref={(el) => (flipBook = el)}
                >
                    <PageCover>BOOK TITLE</PageCover>
                    <Page pageNumber={1} />
                    <Page pageNumber={2} />
                    <Page pageNumber={3} />
                    <Page pageNumber={4} />
                    <Page pageNumber={5} />
                    <Page pageNumber={6} />
                    <Page pageNumber={7} />
                    <Page pageNumber={8} />
                    <Page pageNumber={9} />
                    <Page pageNumber={10} />
                    <Page pageNumber={11} />
                    <Page pageNumber={12} />
                    <Page pageNumber={13} />
                    <Page pageNumber={14} />
                    <PageCover>THE END</PageCover>
                </HTMLFlipBook>
                <div className="container" style={{ marginTop: '15px' }}>
                    <div>
                        <button type="button" onClick={prevButtonClick}>
                            Previous page
                        </button>
                        [<span>{page.data}</span> of
                        <span>{page.data}</span>]
                        <button type="button" onClick={nextButtonClick}>
                            Next page
                        </button>
                    </div>
                </div>
            </Document>

        </div>
    );
}

export default Sample1;