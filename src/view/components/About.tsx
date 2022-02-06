import React from 'react';
import { DivHolder } from '../../css/NavbarElements.tsx';

const About = () => {
    return (
        <DivHolder>
            <h1>About page.</h1>
            <h2>Lorem Ipsum.</h2>
            <h3>
                "Neque porro quisquam est qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit..."
            </h3>
            <h4>
                "There is no one who loves pain itself,
                 who seeks after it and wants to have it, simply because it is pain..."
            </h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis dui eros, pharetra sed justo sit amet, dignissim varius justo.
                Proin vestibulum nulla vitae nisl rhoncus posuere.
                In id metus a est facilisis varius. Mauris ac mi sed felis
                elementum tempus eget nec ante. Nam malesuada pulvinar lacus
                quis tincidunt. Integer vestibulum blandit tortor eget hendrerit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque est lacus, mattis vel tincidunt finibus,
                tempus eu magna.
            </p>
        </DivHolder>
    );
};

export default About;
