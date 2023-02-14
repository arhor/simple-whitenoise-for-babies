import { fileURLToPath, URL } from 'url';
import dns from 'dns';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('src', import.meta.url)),
        },
    },
});
