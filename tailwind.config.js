/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './content/**/*.{jsx,mdx}',
        './src/**/*.{js,jsx,mdx,css}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem'
            }
        },
        fontFamily: {
            'sans': ['"Source Sans 3"', 'sans-serif'],
            'mono': ['"Source Code Pro"', 'monospace'],
        },
        extend: {
            colors: {
                'ariom': "#f99d2a",
                'grey': '#333333',
            },
            fontSize: {
                'clamp-xl': 'clamp(1.5rem, 64vw, 80rem)',
            }
        },
    },
    plugins: [],
}