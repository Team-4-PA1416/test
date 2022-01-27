import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from '../../css/NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
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
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
