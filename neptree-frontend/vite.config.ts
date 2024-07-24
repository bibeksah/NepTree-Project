import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { swcReactRefresh } from 'vite-plugin-swc-react-refresh';

export default defineConfig({
  plugins: [
    react(),
    swcReactRefresh()
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
