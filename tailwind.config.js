module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                smh: { raw: "(min-height: 700px)" },
                pointer: { raw: "(hover: hover)" },
            },
            colors: {
                "transparent": "transparent",
                "current": "currentColor",
                "black": "#232222",
                "light-gray": "#424040",
                "white": "#ffffff",
                "blue": "#006bca",
                "dark-raspberry": "#d70040",
                "pink-raspberry": "#ffdfe3",
                "javascript-yellow": "#f7df1e",
                "css-blue": "#264de4",
                "html-red": "#e44d26",
                "stencil-white": "#ffffff",
                "react-cyan": "#61dafb",
            },
            fontFamily: {
                sans: ["Roboto"],
            },
            letterSpacing: {
                tight: "0.02em",
                normal: "0.035em",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
