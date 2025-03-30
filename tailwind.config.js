/** @type {import('tailwindcss').Config} */
export default {
    content: ['./dist/*.html', './src/**/*.{js,css}/css'],
    theme: {
        extend: {
            backgroundColor: {
                blueBelt: '#005CFF',
                buttonBack: '#005CFF',
            },

            colors: {
                colorMain: '#000',
                colorPromo: '#005CFF',
                bannerColor: '#005CFF',
                borderColor: '#DDDDDD',
            },
        },
    },
    plugins: [],
};
