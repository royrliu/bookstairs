import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

// The format for this config file can be learnt from https://vitejs.dev/config/.
export default defineConfig({
  // Expose the build configuration to vite, remember to set both envPrefix and envDir.
  envPrefix: 'BK_',
  envDir: resolve(__dirname, 'env'),
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  plugins: [react()],
});
