import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

let _now = new Date();
let _date = `${_now.getFullYear()}${_now.getMonth() + 1}${_now.getDate()}`;
let _time = `${_now.getHours().toString().padStart(2, '0')}${_now.getMinutes().toString().padStart(2, '0')}${_now.getSeconds().toString().padStart(2, '0')}`;

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  define: {
    '__APP_VERSION__': JSON.stringify(`v${process.env.npm_package_version}-${_date}-${_time}`),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/assets'),
    },
  },
  plugins: [react()],
})
