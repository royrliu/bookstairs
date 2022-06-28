import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// Translate relative path into absolute path.
const resolvePath = (path: string) => resolve(__dirname, path);

// The format for this config file can be learnt from https://vitejs.dev/config/.
export default defineConfig({
  // Expose the build configuration to vite, remember to set both envPrefix and envDir.
  envPrefix: 'BK_',
  envDir: resolvePath('env'),
  root: resolvePath('src'),
  publicDir: resolvePath('public'),
  build: {
    outDir: resolvePath('build'),
  },
  plugins: [react(), tsconfigPaths({ root: resolvePath('.') })],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
    },
  },
});
