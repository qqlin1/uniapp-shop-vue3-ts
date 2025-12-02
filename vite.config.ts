import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 开发阶段启用源码映射：https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#需主动开启-sourcemap
    sourcemap: process.env.NODE_ENV === 'development',
  },
  plugins: [uni()],
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern', // 使用 Sass 现代 API，避免 legacy-js-api 警告
      },
      scss: {
        api: 'modern', // 同时配置 scss
      },
    },
  },
})
