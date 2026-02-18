/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    900: '#0B1120', // Deepest background
                    800: '#151e32',
                    700: '#1e293b',
                },
                cyan: {
                    400: '#22d3ee', // Electric Cyan
                    500: '#06b6d4',
                    glow: '#00D4FF',
                },
                orange: {
                    500: '#f97316', // Energetic Orange
                    brand: '#FF8C00',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'], // Requires google font import
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                'pulse-glow': 'pulse-glow 3s infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 10px #00D4FF' },
                    '50%': { boxShadow: '0 0 25px #00D4FF' },
                }
            }
        },
    },
    plugins: [],
}
