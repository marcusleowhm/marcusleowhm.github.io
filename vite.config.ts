import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Mode, plugin } from "vite-plugin-markdown";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  plugins: [react(), plugin({ mode: [Mode.MARKDOWN]})],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        importers: []
      }
    }
  }
})
