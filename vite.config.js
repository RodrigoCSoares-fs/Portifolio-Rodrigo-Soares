import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://rodrigocsoares-fs.github.io/Portifolio-Rodrigo-Soares/',
  root: './',
        build: {
            outDir: './docs'
        }
})
