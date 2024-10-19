import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    port: 9595
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
    }
  }
})