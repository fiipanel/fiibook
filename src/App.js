import React from 'react';
import { BrowserRouter ,MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Sample1 from './Components/Sample1';
import Home from './Components/Home';
import Sample2 from './Components/Sample2';
import NotFound from './Components/pages/NotFound';
import Navbar from './layouts/Navbar';
import Contact from './Components/pages/Contact';
import About from './Components/pages/About';


export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sampleOne" element={<Sample1 />} />
                <Route path="/sampletwo" element={<Sample2 />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/about-us" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

