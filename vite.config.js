/* vite.config.js: Vite 설정 파일 - React와 Tailwind CSS 플러그인을 켬 */

import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
