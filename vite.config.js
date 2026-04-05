import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change 'marvin-portfolio' to your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/',  // matches GitHub repo name
})
