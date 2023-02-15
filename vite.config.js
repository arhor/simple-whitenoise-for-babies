import { fileURLToPath, URL } from 'url';
import dns from 'dns';

import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
    plugins: [
        react(),
        splitVendorChunkPlugin(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('src', import.meta.url)),
        },
    },
});
