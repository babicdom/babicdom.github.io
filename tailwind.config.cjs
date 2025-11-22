module.exports = {
content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'
    ],
        theme: {
        extend: {
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-gentle': 'bounce 1s ease-in-out 2',
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
            }
        }
    },
    plugins: []
};