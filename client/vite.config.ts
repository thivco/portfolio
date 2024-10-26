import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    watch:{usePolling:true},
    host: "0.0.0.0",
    port: 9595,
    strictPort:true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
    }
  }
})