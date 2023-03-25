import React from 'react';
import { BrowserRouter, MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import './index.css';
import Sample1 from './Components/Sample1';
import Home from './Components/Home';
import Sample2 from './Components/Sample2';
import NotFound from './Components/pages/NotFound';
import Navbar from './layouts/Navbar';
import Contact from './Components/pages/Contact';
import About from './Components/pages/About';
import Sample3 from './Components/Sample3';

// import { AuthContextProvider } from './context/AuthContext';
import SignIn from './auth/SignIn';
import Welcome from './Components/Welcome';
import Footer from './layouts/Footer';


export default function App() {

    return (

        <>
            {/* <div className="loader justify-content-center ">
                <div className="maxui-roller align-self-center"><div /><div /><div /><div /><div /><div /><div /><div /></div>
            </div> */}
            {/* <div className="wrapper" > */}
            {/* <Sidebar /> */}

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Welcome />} />
                    <Route path="/sampleOne" element={<Sample1 />} />
                    <Route path="/sampletwo" element={<Sample2 />} />
                    <Route path="/sample3" element={<Sample3 />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                {/* <Footer /> */}

            </BrowserRouter>
            {/* </div>  */}

        </>
    );
}

