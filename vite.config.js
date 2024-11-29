import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          $primary-color: #ff0000;  // 直接定义变量
          @import "@/styles/variables.scss";  // 或者引入文件
        `
      }
    }
  }
})
