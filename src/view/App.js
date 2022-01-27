import React from 'react';
import '../css/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


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
