import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: 'src/Modal.jsx',
      name: 'HRnetModal',
      fileName: 'index.js'
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        }
      }
    }
  }
})