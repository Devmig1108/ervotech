import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'; 

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css', // Or your global CSS file path
                'resources/js/app.jsx',
            ],
            ssr: 'resources/js/ssr.jsx', // <-- ADD THIS LINE
            refresh: true,
        }),
        react(),
    ],
});