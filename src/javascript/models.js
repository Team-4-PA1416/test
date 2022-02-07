const storedTheme = localStorage.getItem("theme");
const storedSize = localStorage.getItem("size");
const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

const defaultSize =
    storedSize === "two" || (storedSize === null);


const Styling = {
    setDark: function() {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
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
    setDefault: function() {
        if (defaultSize) {
            Styling.setSizeTwo();
        }
        if (defaultDark) {
            Styling.setDark();
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
