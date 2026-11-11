import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        flyer: resolve(root, 'flyers/index.html'),
      },
    },
  },
})
