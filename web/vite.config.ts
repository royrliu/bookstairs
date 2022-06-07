import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

const sourceRoot: string = resolve(__dirname, 'src');

// The format for this config file can be learnt from https://vitejs.dev/config/.
export default defineConfig({
  // Expose the build configuration to vite, remember to set both envPrefix and envDir.
  envPrefix: 'BK_',
  envDir: resolve(__dirname, 'env'),
  root: sourceRoot,
  resolve: {
    alias: {
      '@': sourceRoot,
    },
  },
  publicDir: resolve(__dirname, 'public'),
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: true,
      },
    },
  },
});
