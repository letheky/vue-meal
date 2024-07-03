import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-meal/',
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
})
