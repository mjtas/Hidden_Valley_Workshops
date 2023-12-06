import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    // Access Netlify environment variables
    'import.meta.env.VITE_MAP': JSON.stringify(import.meta.env.VITE_MAP),
    // Add other environment variables as needed
  },
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      external: ['axios'],
    }
  }
})
