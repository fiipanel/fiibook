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

import { Button, 
    useDisclosure, 
    Modal, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, ModalBody,
    ModalFooter,
    SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter,
    Container, Box
} from "@chakra-ui/react";

import MyDocument from "./MyDocument";
// import DemoBook from "./DemoBook";

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
//         <div className="page page-cover" ref={ref} data-density="hard" style={{ width: '300px' }}>
//             <div className="page-content">
//                 <h2>{props.children}</h2>
//             </div>
//         </div>
//     );
// });

function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident dolorum tenetur nulla iusto minima velit eum recusandae tempore nostrum sunt officia, necessitatibus dolorem veritatis culpa? Doloremque, animi. Dolores, cum laudantium.
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
const MyModal = ({ showModal, children, hideModal }) => {
    return (
        showModal && (
            <div className='modalBackground' onClick={hideModal}>
                <div className="modalContainer">
                    {children}
                </div>
            </div>
        )
    )
}


// pdf3, pdf4, filePdf

function Sample1() {

    const [files, setFiles] = useState([pdf1, pdf4, filePdf]);
    // const [page, setPage] = React.useState(0)
    // let flipBook = React.useRef();

    // const nextButtonClick = () => {
    //     flipBook.pageFlip().flipNext()
    // }
    // const prevButtonClick = () => {
    //     flipBook.pageFlip().flipPrev()
    // };
    // useEffect(() => {

    // }, [file])
    // console.log(files);


    return (
        <div className="container mt-5 pt-5">
           
            {/* <Link to="/">
                <h4>Home</h4>
            </Link> */}

            {/* <BasicUsage />  */}
            {/* <Container maxW='md' bg='blue.600' color='white'>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <Card>
                        <CardHeader>
                            <Heading size='md'> Customer dashboard</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>View here</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Heading size='md'> Customer dashboard</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>View here</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Heading size='md'> Customer dashboard</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>View here</Button>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </Container> */}

            {/* <Document file={filePdf}>
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
                <div className="container" style={{ margin: '20px' }}>
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
            </Document> */}

            {/* <div className="row">
                {
                    files.map((file, index) => (
                    // <div className="col-md-4">
                        <MyDocument
                            // filePdf={filePdf} 
                            filePdf={file}
                            key={index}
                        />
                    </div>
                    )
                }

            </div> */}

                <section className="text-center mt-4">
                    <h4 className="mb-5 my-4    "><strong>Les livres </strong></h4>
                    <div className="row">
                    {/* <SimpleGrid columns={2} spacingX='40px' spacingY='20px'> */}
                    {
                        files.map((file, index ) => {
                            return (
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <MyDocument
                                        filePdf={file}
                                        key={index}
                                    />
                                </div>
                            )
                        })
                    }
                    </div>
                {/* </SimpleGrid> */}
                </section>
            
            
            {/* <DemoBook filePdf={filePdf} /> */}
           
        </div>
    );
}

export default Sample1;