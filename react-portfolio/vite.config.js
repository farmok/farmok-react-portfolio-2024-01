import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sdk from 'vite-plugin-sdk';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sdk()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
