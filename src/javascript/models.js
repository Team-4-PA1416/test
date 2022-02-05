const storedTheme = localStorage.getItem("theme");
const storedSize = localStorage.getItem("size");
const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

const defaultSize =
    storedSize === "one" || (storedSize === null);


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
            Styling.setSizeOne();
        }
        if (defaultDark) {
            Styling.setDark();
        }
    }
};

export default Styling;
