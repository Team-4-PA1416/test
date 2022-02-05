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

const setSizeOne = () => {
    localStorage.setItem("size", "one");
    document.documentElement.setAttribute("size-theme", "size-one");
};

const setSizeTwo = () => {
    localStorage.setItem("size", "two");
    document.documentElement.setAttribute("size-theme", "size-two");
};

const storedTheme = localStorage.getItem("theme");
const storedSize = localStorage.getItem("size");

const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

const defaultSize =
    storedSize === "one" || (storedSize === null);

if (defaultSize) {
    setSizeOne();
}

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
                                variant="light" onClick={setSizeOne}>c</Button>
                            <Button type="button"
                                variant="light" onClick={setSizeTwo}>C</Button>
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
