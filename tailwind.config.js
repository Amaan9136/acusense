const config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,css}',"./node_modules/flowbite/**/*.js"],
    corePlugins: {
        preflight: false
    },
    important: '#__next',
    plugins: [require('tailwindcss-logical'), require('./src/@core/tailwind/plugin'), require('flowbite/plugin')],
    theme: {
        extend: {}
    }
};
export default config;
