import React from 'react';
import {
    NavLink,
    NavMenu,
    NavBtn,
} from '../../css/NavbarElements.tsx';
import Button from 'react-bootstrap/button';
import Navbar from 'react-bootstrap/navbar';


const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
    setDark();
}


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
                                variant="light" onClick={setLight}>☀️</Button>
                            <Button type="button"
                                variant="light" onClick={setDark}>🌒</Button>
                        </NavBtn>
                    </NavMenu>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Navbarz;
