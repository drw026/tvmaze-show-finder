import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  server: {
    port: 5174,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src") // map '@' to './src'
    },
  },
  test: {
    global: true,
    environment: 'happy-dom',
  }
})
