/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{html,js,ts}'],
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

            keyframes: {
                menuCategoria: {
                    '0%': { transform: 'translateX(120%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                menuCategoriaClose: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(120%)' },
                },
            },
            animation: {
                menuCategoria: 'menuCategoria 0.5s linear forwards',
                menuCategoriaClose: 'menuCategoriaClose 0.5s linear forwards', // aqui o nome do keyframe estava errado
            },
        },
    },
    plugins: [],
};
