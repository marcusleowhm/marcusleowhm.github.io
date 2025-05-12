import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Mode, plugin } from "vite-plugin-markdown";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@tests": path.resolve(__dirname, "./tests")
    }
  },
  plugins: [react(), plugin({ mode: [Mode.MARKDOWN]})],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.ts',
    css: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        importers: []
      }
    }
  }
} as UserConfig)
