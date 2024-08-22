/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: `#4275F4`,
                secondary: `#A2AFC0`,
                // States Colors
                info: '#2F80ED',
                success: '#27AE60',
                warning: '#E2B93B',
                error: '#EB5757',
                // Black Colors
                black: {
                    1: '#000000',
                    2: '#141417',
                    3: '#1E2023',
                },
                // White
                white: '#FFFFFF',
                // Gray Colors
                gray: {
                    1: '#333333',
                    2: '#4F4F4F',
                    3: '#828282',
                    4: '#BDBDBD',
                    5: '#F4F7F8',
                },
            },
            fontFamily: {
                sans: ['Kanit', 'ui-sans-serif', 'system-ui'],
            },
            spacing: {
                '-1/2': '-50%',
            },
        },
    },
    plugins: [],
}