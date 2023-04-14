/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            colors: {
                primary: "#7695EC",
            },
            backgroundColor: {
                opacy: "rgba(119, 119, 119, 0.8)",
            },
        },
    },
    plugins: [],
};
