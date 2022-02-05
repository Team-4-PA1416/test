import React from 'react';
import {
    NavLink,
    NavMenu,
    NavBtn,
} from '../../css/NavbarElements.tsx';
import Button from 'react-bootstrap/button';
import Navbar from 'react-bootstrap/navbar';
import Styling from '../../javascript/models.js';

const Navbarz = () => {
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark" expand="lg" id="navBar">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavMenu>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                        <NavLink to='/about'>
                            About
                        </NavLink>
                        <NavLink to='/contact'>
                            Contact
                        </NavLink>
                        <NavBtn className="pull-right">
                            <Button type="button"
                                variant="light" onClick={Styling.setSizeOne}>c</Button>
                            <Button type="button"
                                variant="light" onClick={Styling.setSizeTwo}>C</Button>
                            <Button type="button"
                                variant="light" onClick={Styling.setLight}>☀️</Button>
                            <Button type="button"
                                variant="light" onClick={Styling.setDark}>🌒</Button>
                        </NavBtn>
                    </NavMenu>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Navbarz;
