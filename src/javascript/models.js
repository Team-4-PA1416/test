const storedTheme = localStorage.getItem("theme");
const storedSize = localStorage.getItem("size");
const prefersGrey =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: grey)").matches;

const prefersBlack =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: black)").matches;

const defaultGrey =
    storedTheme === "grey" || (storedTheme === null && prefersGrey);

const defaultBlack =
    storedTheme === "black" || (storedTheme === null && prefersBlack);

const defaultSizeTwo =
    storedSize === "two" || (storedSize === null);

const defaultSizeThree =
    storedSize === "three" || (storedSize === null);


const Styling = {
    setActive: function(value) {
        console.log(value);
    },
    setGrey: function() {
        localStorage.setItem("theme", "grey");
        document.documentElement.setAttribute("data-theme", "grey");
    },
    setBlack: function() {
        localStorage.setItem("theme", "black");
        document.documentElement.setAttribute("data-theme", "black");
    },
    setLight: function() {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    },
    setSizeOne: function() {
        localStorage.setItem("size", "one");
        document.documentElement.setAttribute("size-theme", "size-one");
    },
    setSizeTwo: function() {
        localStorage.setItem("size", "two");
        document.documentElement.setAttribute("size-theme", "size-two");
    },
    setSizeThree: function() {
        localStorage.setItem("size", "three");
        document.documentElement.setAttribute("size-theme", "size-three");
    },
    setDefault: function() {
        if (defaultSizeTwo) {
            Styling.setSizeTwo();
        }
        if (defaultSizeThree) {
            Styling.setSizeThree();
        }
        if (defaultBlack) {
            Styling.setBlack();
        }
        if (defaultGrey) {
            Styling.setGrey();
        }
    }
};

//  CODE FOR AUDIO-ONLY

//  CODE FOR KEYBOARD ACTIONS

//  CODE FOR CHARACTER KEY SHORTCUTS

//  CODE FOR PAGE TILTED (Titles that describe topic and purpose)

//  CODE FOR MOUSE POINTER SIZE ADJUSTER

//  CODE FOR WORD SUGGESTION??

//  CODE FOR READING LEVEL

//  CODE FOR FEEDBACK

//  CODE FOR LEAVING THE SITE THROUGH LINK

//  CODE FOR HOVER/FOCUS HELP INFORMATION

export default Styling;
