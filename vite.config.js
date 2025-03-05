import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
         
        `,
      },
    },
  },
  server: {
    port: 8080,
    open: true,
    cors: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // @ 指向 src 目录
    },
  },
  base: "./", //设置项目的根目录
  build: {
    outDir: "docs", // 打包文件的输出目录
  },
});
