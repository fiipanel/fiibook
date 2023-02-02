import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Sample1 from './Components/Sample1';
import Home from './Components/Home';
import Sample2 from './Components/Sample2';


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sampleOne" element={<Sample1 />} />
                <Route path="/sampletwo" element={<Sample2 />} />
                <Route path="/*" element={<p>not found</p>} />
            </Routes>
        </Router>
    );
}

