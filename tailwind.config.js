module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "transparent": "transparent",
                "current": "currentColor",
                "black": "#232222",
                "white": "#ffffff",
                "blue": "#006bca",
                "dark-raspberry": "#d70040",
                "pink-raspberry": "#ffdfe3",
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
