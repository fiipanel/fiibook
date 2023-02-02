import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <div className="App">
            <header className="App-header">
                <Link to="/sampleOne" className="App-link">
                    <span>example 1</span>
                </Link>
                &nbsp;
                <Link to="/sampletwo" className="App-link">
                    <span>example 2</span>
                </Link>
            </header>
        </div>
    );
}