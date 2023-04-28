import React, { useState, useEffect } from 'react';
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";

import {
    Button,
    useDisclosure,
    Modal, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, ModalBody,
    ModalFooter,
    SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter,
    Container,
} from "@chakra-ui/react";



function BasicUsage({ file, onDocumentLoadSuccess, numPages, onPageChange, prevButtonClick,
    nextButtonClick, flipBook, setPage, page, size, open, handleClose }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

    return (
        <div className='justify-content-center text-center '>
            <Modal isOpen={open}
                onClose={handleClose}
                size={size}>
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
                        <Button colorScheme='blue' mr={5} onClick={handleClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

const Page = React.forwardRef(({ pageNumber, height, width = 150 }, ref) => {
    return (
        <div ref={ref}
        >
            <ReactPdfPage pageNumber={pageNumber} 
                width={width}
                height={height}
            />
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

const MyDocument = ({ filePdf, }) => {
    const [numPages, setNumPages] = useState(null);
    const [page, setPage] = React.useState(0);
    const [size, setSize] = React.useState('full');
    const [openModal, setOpenModal] = useState(false);
    let flipBook = React.useRef();

    const handleClose = () => {
        setOpenModal(false)
    }

    const handleOpen = () => {
        setOpenModal(true)
    }

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
            <button onClick={handleOpen}>
                <Document file={filePdf}
                >
                    <HTMLFlipBook
                        width={150}
                        height={550}
                        size="stretch"
                        minWidth={150}
                        maxWidth={150}
                        minHeight={150}
                        maxHeight={150}
                        maxShadowOpacity={0.7}
                        showCover={true}
                        mobileScrollSupport={true}
                        className="demo-book"
                    >
                        {/* <PageCover> */}
                        <Page pageNumber={1} width={150} height={250} />
                        {/* </PageCover> */}

                    </HTMLFlipBook>

                </Document>
            </button>

            {
                openModal && 
                    <BasicUsage
                        open={true}
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
                        handleClose={handleClose}
                    />
            }
        </>
    )
}

export default MyDocument;
