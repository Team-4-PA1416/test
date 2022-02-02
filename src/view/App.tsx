import React from 'react';
import '../css/App.css';
import "../css/index.scss";
import Navbar from './components/Navbar.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
