import React, {useState} from 'react';
import HTMLFlipBook from "react-pageflip";
import { Link } from 'react-router-dom';

import { Button,
    useDisclosure,
    Modal, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, ModalBody,
    ModalFooter,
    SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter,
    Container,
} from "@chakra-ui/react";

import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";

const Page = React.forwardRef(({ pageNumber }, ref) => {
   
    return (
        <div ref={ref}>
            <ReactPdfPage pageNumber={pageNumber} width={300} />
        </div>
    );
});

const PageCover = React.forwardRef((props, ref) => {
    return (
        <div className="page page-covre img-fluid" ref={ref} 
            data-density="hard" style={{ width: '100px' }} >
            <div className="page-content img-fluid">
                <h2>{props.children}</h2>
            </div>
        </div>
    );
});

function BasicUsage({ file, onDocumentLoadSuccess, numPages, onPageChange, prevButtonClick, 
    nextButtonClick, flipBook, setPage, page, size }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    // const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

    return (
        <>
            <Button onClick={onOpen}>Ouvrir</Button>

            <Modal isOpen={isOpen} onClose={onClose} size={size}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Document file={file}
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <HTMLFlipBook
                                width={400}
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
                                ref={(el) => (flipBook.current = el)}
                            >
                            {
                                Array.from(
                                    new Array(numPages),
                                    (el, index) => (
                                        <Page
                                            key={`page_${index + 1}`}
                                            pageNumber={index + 1}
                                            onPageChange={onPageChange}
                                        />
                                    ),
                                )
                            }
                        
                            <PageCover>THE END</PageCover>

                            </HTMLFlipBook>
                            <div className="container mt-5">
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
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={5} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
const MyDocument = ({ filePdf, }) => {
    const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);
    const [page, setPage] = React.useState(0)
    const [size, setSize] = React.useState('lg')

    let flipBook = React.useRef();
    
    const nextButtonClick = () => {
        flipBook.current.pageFlip().flipNext();
    }
    const prevButtonClick = () => {
        flipBook.current.pageFlip().flipPrev();
    };
    
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    
    function onPageChange({ page }) {
        setPage(page);
    }

    return (
        <>
            <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    {/* <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" className="img-fluid" /> */}
                    {/* <PageCover>
                        <Page pageNumber={1} />
                    </PageCover> */}
                    <a href="#!">
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
                    </a>
                </div>
                <div className="card-body ">
                    {/* <h5 className="card-title">Post title</h5> */}
                    <Document file={filePdf}
                    >
                        <HTMLFlipBook
                            width={400}
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
                        >
                        <PageCover>
                            <Page pageNumber={1} />
                        </PageCover>

                        </HTMLFlipBook>
                        
                    </Document> 
                   
                    <BasicUsage 
                        size={size}
                        file={filePdf}
                        onDocumentLoadSuccess={onDocumentLoadSuccess}
                        numPages={numPages}
                        onPageChange={onPageChange}
                        prevButtonClick={prevButtonClick}
                        nextButtonClick={nextButtonClick}
                        flipBook={flipBook}
                        setPage={setPage}
                        page={page}
                    /> 

                </div>
            </div>

           

        </>
    )
}

export default MyDocument;
