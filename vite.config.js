import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const relativePath = fileURLToPath(new URL('./', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': `${relativePath}src`,
      '@assets':`${relativePath}src/assets`,
      '@scss':`${relativePath}src/assets/scss`,
      '@components':`${relativePath}src/components`,
    }
  }
})
