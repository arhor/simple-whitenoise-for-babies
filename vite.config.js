import { fileURLToPath, URL } from 'url';
import dns from 'dns';

import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

dns.setDefaultResultOrder('verbatim');

const basePath = '/simple-whitenoise-for-babies';

export default defineConfig({
    base: `${basePath}/`,
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
                name: 'Simple white noise for babies',
                short_name: 'Simple white noise',
                description: 'Simple white noise player helping babies to sleep',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'android-chrome-192x192.png',
                        type: 'image/png',
                        sizes: '192x192',
                    },
                    {
                        src: 'android-chrome-512x512.png',
                        type: 'image/png',
                        sizes: '512x512',
                    },
                    {
                        src: 'android-chrome-512x512.png',
                        type: 'image/png',
                        sizes: '512x512',
                        purpose: 'any',
                    },
                    {
                        src: 'android-chrome-512x512.png',
                        type: 'image/png',
                        sizes: '512x512',
                        purpose: 'maskable',
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '~': fileURLToPath(new URL('src', import.meta.url)),
        },
    },
    define: {
        'import.meta.env.ROUTER_BASE_PATH': JSON.stringify(basePath),
    },
});
