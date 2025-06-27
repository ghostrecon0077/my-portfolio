import { defineConfig } from 'vite'

export default defineConfig({
  base: '/my-portfolio-website/', // Replace with your GitHub repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})