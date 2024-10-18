import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import {resolve} from 'path'
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 9595
  },
  plugins: [vue()],
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, "src"),
  //   }
  // }
})