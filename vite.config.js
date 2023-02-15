import { fileURLToPath, URL } from 'url';
import dns from 'dns';

import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
    base: '/simple-whitenoise-for-babies/',
    plugins: [
        react(),
        splitVendorChunkPlugin(),
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: [
                    '**/*',
                ],
            },
            includeAssets: [
                '**/*',
            ],
            manifest: {
                theme_color: '#ffffff',
                description: 'Simple white noise player helping babies to sleep',            
                icons: [
                    {
                        src: '/android-chrome-192x192.png',
                        type: 'image/png',
                        sizes: '192x192',
                    },
                    {
                        src: '/android-chrome-512x512.png',
                        type: 'image/png',
                        sizes: '512x512',
                    }
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '~': fileURLToPath(new URL('src', import.meta.url)),
        },
    },
});
