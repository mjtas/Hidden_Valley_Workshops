import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv';

//Load environment variables from .env file
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
    // overwrite default .html entry
    input: './src/main.js',
    },
  }
})
