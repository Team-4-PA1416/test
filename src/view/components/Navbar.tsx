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
                            <Button type="button"
                                variant="light" onClick={Styling.setSizeOne}>c</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button type="button"
                                variant="light" onClick={Styling.setSizeTwo}>C</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button type="button"
                                variant="light" onClick={Styling.setLight}>☀️</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button type="button"
                                variant="light" onClick={Styling.setGrey}>🌒</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button type="button"
                                variant="light" onClick={Styling.setBlack}>🌑</Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Navbarz;
