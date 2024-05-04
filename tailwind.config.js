/** @type {import('tailwindcss').Config} */
export default {
    content: ['./*.hbs', './**/*.hbs'],
    theme: {
        extend: {
            fontFamily: {
                bodyFont: ['"Galano Grotesque"', 'sans-serif'],
                headingFont: ['"Quincy CF"', 'sans-serif'],
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

