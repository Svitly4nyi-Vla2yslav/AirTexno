import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const vitePrerender = require('vite-plugin-prerender');

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    vitePrerender({
      staticDir: resolve(__dirname, 'dist'),
      routes: [
        '/',
        '/service',
        '/fridge',
        '/fridge/ge-monogram',
        '/fridge/kitchenaid',
        '/fridge/sub-zero',
        '/fridge/thermador',
        '/fridge/viking',
        '/dryer',
        '/dryer/lg',
        '/oven-repair',
        '/oven-repair/kitchenaid',
        '/oven-repair/thermador',
        '/oven-repair/viking',
        '/oven-repair/wolf',
        '/about',
        '/tips',
        '/contact',
      ],
    }),
  ],
  base: '/',
});
