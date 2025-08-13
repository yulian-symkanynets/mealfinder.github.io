import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mealfinder.github.io/',     // 👈 project page base
  build: { outDir: 'docs' }           // 👈 easy GH Pages deploy
})