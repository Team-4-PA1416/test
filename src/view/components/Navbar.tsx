import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/button';
import Navbar from 'react-bootstrap/navbar';
import Nav from 'react-bootstrap/nav';
import Styling from '../../javascript/models.js';

const Navbarz = () => {
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" expand="lg" id="navBar">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id="link-bar">
                        <Nav.Item>
                            <NavLink to='/' aria-label="Home link">
                            Home
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to='/about' aria-label="About link">
                            About
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to='/contact' aria-label="Contact link">
                            Contact
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                    <Nav id="button-bar">
                        <Nav.Item>
                            <Button type="button" className="buttonFont1"
                                variant="light" onClick={Styling.setSizeOne}>
                                A</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button type="button" className="buttonFont2"
                                variant="light" onClick={Styling.setSizeThree}>A</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button type="button" className="buttonFont3"
                                variant="light" onClick={Styling.setSizeTwo}>A</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button type="button" id="button1" value="white/black color scheme"
                                variant="light" onClick={Styling.setLight}>
                                <div className="dot">C</div>
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button type="button" id="button2" value="greyscale color scheme"
                                variant="light" onClick={Styling.setGrey}>
                                <div className="dot">C</div>
                            </Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button type="button" id="button3" value="black/yellow color scheme"
                                variant="light" onClick={Styling.setBlack}>
                                <div className="dot">C</div>
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Navbarz;
