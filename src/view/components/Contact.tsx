import React from 'react';
import { DivHolder } from '../../css/NavbarElements.tsx';
import Image from 'react-bootstrap/Image';

const Contact = () => {
    return (
        <DivHolder>
            <h1>Contact page.</h1>
            <Image src={require('../../images/tennis1.jpg')}
                alt="Swinging of tennis racket." fluid />
        </DivHolder>
    );
};

export default Contact;
