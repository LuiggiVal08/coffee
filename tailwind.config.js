import flowbite from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */

export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
    theme: {
        extend: {
            colors: {
                primary: '#392b1b',
                secondary: '#774e33',
                tertiary: '#9e724e',
                quaternary: '#d1c5b8',
                quinary: '#e1e7dd',
                success: '#28a745',
                info: '#17a2b8',
                warning: '#ffc107',
                danger: '#dc3545',
                light: '#f8f9fa',
                dark: '#343a40',
                white: '#fff',
            },
            fontFamily: {
                sans: ['Quicksand', 'sans-serif'],
            },
        },
    },
    plugins: [flowbite.plugin()],
};
