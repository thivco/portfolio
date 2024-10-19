// import { defineConfig } from 'vitest/config'

// export default defineConfig({
//     test: {
//         alias: {
//             '@/': new URL('./src/', import.meta.url).pathname
//         },
//         include: ['**/*.test.ts', "**/*.spec.ts"]
//     },
// })
import { defineConfig } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  test: {
    environment:"happy-dom",
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    include: ['**/*.test.ts', '**/*.spec.ts']
  },
  plugins:[vue()]
});
