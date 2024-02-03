import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import svgr from 'vite-plugin-svgr';

dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    svgr({ exportAsDefault: true }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ],
  },
  server: {
    port: 3033,
    host: true,
  },
  root: '.',
  define: {
    __API__: JSON.stringify(process.env.VITE_APP_API_URL ?? 'https://jsonplaceholder.typicode.com'),
  },
});
