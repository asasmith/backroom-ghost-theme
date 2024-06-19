/** @type {import('tailwindcss').Config} */
export default {
    content: ['./*.hbs', './**/*.hbs'],
    theme: {
        extend: {
            fontFamily: {
                bodyFont: ['"Galano Grotesque"', 'sans-serif'],
                headingFont: ['"Quincy CF"', 'sans-serif'],
            },
            colors: {
                black: '#1d1d1d',
                white: '#FAF8F6',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

