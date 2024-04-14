import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [react()],
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
