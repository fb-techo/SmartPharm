import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages, use the repository name as base path
// If your repo is at github.com/username/SmartPharm, the base should be '/SmartPharm/'
// For custom domain or root deployment, change to '/'
export default defineConfig({
  plugins: [react()],
  base: '/SmartPharm/',
  server: {
    port: 3000,
    open: true
  }
})

