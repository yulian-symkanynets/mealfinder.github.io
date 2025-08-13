import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',     // 👈 project page base
  build: { outDir: 'docs' }           // 👈 easy GH Pages deploy
})