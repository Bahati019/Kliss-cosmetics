/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    DEFAULT: '#D4AF37',
                    light: '#F4C430',
                    dark: '#AA8C2C',
                },
                black: {
                    DEFAULT: '#0A0A0A',
                    lighter: '#1A1A1A', // charcoal
                },
                white: '#F9F9F9',
                gray: '#B0B0B0',
            },
            fontFamily: {
                heading: ['"Playfair Display"', 'serif'],
                body: ['"Lato"', 'sans-serif'],
            },
            animation: {
                'fade-up': 'fadeUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
